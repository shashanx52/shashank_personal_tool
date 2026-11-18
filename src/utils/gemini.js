const { GoogleGenAI, Modality } = require('@google/genai');
const { BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const { saveDebugAudio } = require('../audioUtils');
const {
    getSystemPrompt,
    isReasoningProfile,
    getKnowledgeForQuestion,
    looksLikeReasoningQuestion,
    DETAILED_REASONING_OVERRIDE,
} = require('./prompts');

// A question needs the careful path (Pro model + library + full working) when the profile is the
// case profile, or when the question itself reads like a guesstimate / case / puzzle / quant problem.
function needsReasoning(question) {
    return isReasoningProfile(currentProfile) || looksLikeReasoningQuestion(question);
}

// System prompt for one answer request: the profile prompt, plus (for non-case profiles) the
// conditional detailed-format override on EVERY request so the model itself switches to full working
// whenever the question is a guesstimate/case/puzzle however it is phrased, plus the reference-library
// sections when the question is detected as a reasoning question.
function buildRequestSystemPrompt(question) {
    const base = currentSystemPrompt || 'You are a helpful assistant.';
    const override = isReasoningProfile(currentProfile) ? '' : DETAILED_REASONING_OVERRIDE;
    const library = needsReasoning(question) ? getKnowledgeForQuestion(question) : '';
    return base + override + library;
}
const { getAvailableModel, getScreenModel, incrementLimitCount, getApiKey, getConfig, getPreferences } = require('../storage');
const { connectCloud, sendCloudAudio, sendCloudText, sendCloudImage, closeCloud, isCloudActive, setOnTurnComplete } = require('./cloud');
const { startTransportLog, logTransportEvent, closeTransportLog } = require('./transportLogger');

// Lazy-loaded to avoid circular dependency (localai.js imports from gemini.js)
let _localai = null;
function getLocalAi() {
    if (!_localai) _localai = require('./localai');
    return _localai;
}

// Provider mode: 'byok', 'cloud', or 'local'
let currentProviderMode = 'byok';

// Conversation history (user question / model answer pairs) sent to the Gemini answer model for context
let answerConversationHistory = [];

// Conversation tracking variables
let currentSessionId = null;
let currentTranscription = '';
let conversationHistory = [];
let screenAnalysisHistory = [];
let currentProfile = null;
let currentCustomPrompt = null;
let isInitializingSession = false;
let currentSystemPrompt = null;

function formatSpeakerResults(results) {
    let text = '';
    for (const result of results) {
        if (result.transcript && result.speakerId) {
            const speakerLabel = result.speakerId === 1 ? 'Interviewer' : 'Candidate';
            text += `[${speakerLabel}]: ${result.transcript}\n`;
        }
    }
    return text;
}

module.exports.formatSpeakerResults = formatSpeakerResults;

// Audio capture variables
let systemAudioProc = null;
let messageBuffer = '';

// Reconnection variables
let isUserClosing = false;
let sessionParams = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 3;
const RECONNECT_DELAY = 2000;

function sendToRenderer(channel, data) {
    const windows = BrowserWindow.getAllWindows();
    if (windows.length > 0) {
        windows[0].webContents.send(channel, data);
    }
}

// Build context message for session restoration
function buildContextMessage() {
    const lastTurns = conversationHistory.slice(-20);
    const validTurns = lastTurns.filter(turn => turn.transcription?.trim() && turn.ai_response?.trim());

    if (validTurns.length === 0) return null;

    const contextLines = validTurns.map(turn => `[Interviewer]: ${turn.transcription.trim()}\n[Your answer]: ${turn.ai_response.trim()}`);

    return `Session reconnected. Here's the conversation so far:\n\n${contextLines.join('\n\n')}\n\nContinue from here.`;
}

// Conversation management functions
function initializeNewSession(profile = null, customPrompt = null) {
    currentSessionId = Date.now().toString();
    startTransportLog(currentSessionId);
    currentTranscription = '';
    conversationHistory = [];
    screenAnalysisHistory = [];
    answerConversationHistory = [];
    currentProfile = profile;
    currentCustomPrompt = customPrompt;
    console.log('New conversation session started:', currentSessionId, 'profile:', profile);

    // Save initial session with profile context
    if (profile) {
        sendToRenderer('save-session-context', {
            sessionId: currentSessionId,
            profile: profile,
            customPrompt: customPrompt || '',
        });
    }
}

function saveConversationTurn(transcription, aiResponse) {
    if (!currentSessionId) {
        initializeNewSession();
    }

    const conversationTurn = {
        timestamp: Date.now(),
        transcription: transcription.trim(),
        ai_response: aiResponse.trim(),
    };

    conversationHistory.push(conversationTurn);
    console.log('Saved conversation turn:', conversationTurn);

    // Send to renderer to save in IndexedDB
    sendToRenderer('save-conversation-turn', {
        sessionId: currentSessionId,
        turn: conversationTurn,
        fullHistory: conversationHistory,
    });
}

function saveScreenAnalysis(prompt, response, model) {
    if (!currentSessionId) {
        initializeNewSession();
    }

    const analysisEntry = {
        timestamp: Date.now(),
        prompt: prompt,
        response: response.trim(),
        model: model,
    };

    screenAnalysisHistory.push(analysisEntry);
    console.log('Saved screen analysis:', analysisEntry);

    // Send to renderer to save
    sendToRenderer('save-screen-analysis', {
        sessionId: currentSessionId,
        analysis: analysisEntry,
        fullHistory: screenAnalysisHistory,
        profile: currentProfile,
        customPrompt: currentCustomPrompt,
    });
}

function getCurrentSessionData() {
    return {
        sessionId: currentSessionId,
        history: conversationHistory,
    };
}

// Google Search grounding. Read from the same preferences file the Settings UI writes to
// (the old code read renderer localStorage, which the UI never wrote, so the saved "off"
// setting was ignored). Default is OFF: the free tier rejects the googleSearch tool on Live
// sessions and surfaces it as a misleading "quota exceeded" close reason.
function isGoogleSearchEnabled() {
    try {
        return getPreferences().googleSearchEnabled === true;
    } catch (error) {
        console.error('Error reading googleSearchEnabled preference:', error.message);
        return false;
    }
}

async function getEnabledTools() {
    const tools = [];
    if (isGoogleSearchEnabled()) {
        tools.push({ googleSearch: {} });
        console.log('Google Search tool enabled');
    } else {
        console.log('Google Search tool disabled');
    }
    return tools;
}

// Which backend produces the answers shown to the user.
//   'gemini' - Gemini text model (config.geminiModel) answers directly; Live only listens
//   'live'   - the Live model's own spoken answer is shown (config.geminiModel === 'live')
function getAnswerMode() {
    const model = (getConfig().geminiModel || '').trim();
    if (!model || model === 'live') return 'live';
    return 'gemini';
}

// Minimal instruction for the Live session when it is only used as a listener. Keeping its
// reply to a single token means almost no output tokens are spent on the Live model.
const LISTENER_SYSTEM_PROMPT =
    'You are a silent transcription relay. Never answer questions. Whenever you must reply, reply with exactly the single word: ok';

function isModelUnavailableError(error) {
    const message = error?.message || String(error);
    return /429|RESOURCE_EXHAUSTED|quota|404|not found|no longer available|not supported|PERMISSION_DENIED/i.test(message);
}

// Try the requested model; if this key cannot use it (quota 0 on the free tier, retired ID),
// fall back once to a cheaper model so the user still gets an answer.
async function generateStreamWithFallback(ai, primaryModel, fallbackModel, buildRequest) {
    try {
        const response = await ai.models.generateContentStream(buildRequest(primaryModel));
        return { response, model: primaryModel, fellBack: false };
    } catch (error) {
        if (!fallbackModel || fallbackModel === primaryModel || !isModelUnavailableError(error)) {
            throw error;
        }
        const reason = String(error.message || error).split('\n')[0];
        console.warn(`Model ${primaryModel} unavailable (${reason}); falling back to ${fallbackModel}`);
        logTransportEvent('gemini.model.fallback', { from: primaryModel, to: fallbackModel, error: reason });
        sendToRenderer('update-status', `${primaryModel} unavailable, using ${fallbackModel}`);
        const response = await ai.models.generateContentStream(buildRequest(fallbackModel));
        return { response, model: fallbackModel, fellBack: true };
    }
}

const CHEAPEST_TEXT_MODEL = 'gemini-3.5-flash-lite';

function buildAnswerModelErrorMessage(model, error) {
    const message = error?.message || String(error);
    if (/not found|404|no longer available|not supported/i.test(message)) {
        return `**Model error:** \`${model}\` was rejected by the Gemini API. Pick a different answer model on the Home screen.\n\n${message}`;
    }
    if (/429|quota|RESOURCE_EXHAUSTED/i.test(message)) {
        return `**Quota exceeded** for \`${model}\`. Wait a minute or switch to a cheaper model (e.g. gemini-3.5-flash-lite).\n\n${message}`;
    }
    if (/API key|401|403|PERMISSION_DENIED/i.test(message)) {
        return `**API key problem.** Check the Gemini API key on the Home screen.\n\n${message}`;
    }
    return `**Gemini error:** ${message}`;
}

function trimConversationHistory(history, maxChars = 42000) {
    if (!history || history.length === 0) return [];
    let totalChars = 0;
    const trimmed = [];

    for (let i = history.length - 1; i >= 0; i--) {
        const turn = history[i];
        const turnChars = (turn.content || '').length;

        if (totalChars + turnChars > maxChars) break;
        totalChars += turnChars;
        trimmed.unshift(turn);
    }
    return trimmed;
}

// Answer a transcribed question (or typed message) with the configured Gemini text model.
// This is the direct path: no spoken Live answer, just one streaming generateContent call.
async function sendToGeminiText(transcription) {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.log('No Gemini API key configured');
        sendToRenderer('update-status', 'No Gemini API key');
        return { success: false, error: 'No API key configured' };
    }

    if (!transcription || transcription.trim() === '') {
        return { success: false, error: 'Empty transcription' };
    }

    // Case / guesstimate / puzzle questions need careful reasoning: route them to the Pro (screen) model.
    const reasoning = needsReasoning(transcription);
    let model = reasoning ? getScreenModel() : getAvailableModel();
    console.log(`Sending to Gemini (${model}${reasoning ? ', reasoning path' : ''}):`, transcription.substring(0, 100) + '...');
    logTransportEvent('gemini.text.request', { model, transcription });
    sendToRenderer('update-status', 'Generating response...');

    answerConversationHistory.push({
        role: 'user',
        content: transcription.trim(),
    });

    const trimmedHistory = trimConversationHistory(answerConversationHistory, 42000);

    try {
        const ai = new GoogleGenAI({ apiKey: apiKey });

        const contents = trimmedHistory.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));

        const fallbackModel = model.includes('lite') ? null : CHEAPEST_TEXT_MODEL;
        const result = await generateStreamWithFallback(ai, model, fallbackModel, useModel => ({
            model: useModel,
            contents,
            config: {
                systemInstruction: buildRequestSystemPrompt(transcription),
                tools: isGoogleSearchEnabled() ? [{ googleSearch: {} }] : undefined,
            },
        }));
        model = result.model;
        const response = result.response;

        let fullText = '';
        let isFirst = true;

        for await (const chunk of response) {
            const chunkText = chunk.text;
            if (chunkText) {
                fullText += chunkText;
                sendToRenderer(isFirst ? 'new-response' : 'update-response', fullText);
                isFirst = false;
            }
        }

        if (fullText.trim()) {
            answerConversationHistory.push({
                role: 'assistant',
                content: fullText.trim(),
            });

            if (answerConversationHistory.length > 40) {
                answerConversationHistory = answerConversationHistory.slice(-40);
            }

            saveConversationTurn(transcription, fullText);
        } else {
            // Drop the unanswered user turn so it does not poison the next request
            answerConversationHistory.pop();
            sendToRenderer('new-response', `**Empty response** from \`${model}\`. Try again or pick another answer model.`);
        }

        logTransportEvent('gemini.text.completed', { model, response: fullText });
        console.log(`Gemini response completed (${model})`);
        sendToRenderer('update-status', 'Listening...');
        return { success: true, text: fullText, model };
    } catch (error) {
        console.error('Error calling Gemini text API:', error);
        answerConversationHistory.pop();
        logTransportEvent('gemini.text.error', { model, error: error.message });
        sendToRenderer('new-response', buildAnswerModelErrorMessage(model, error));
        sendToRenderer('update-status', 'Gemini error');
        return { success: false, error: error.message };
    }
}

async function initializeGeminiSession(apiKey, customPrompt = '', profile = 'interview', language = 'en-US', isReconnect = false) {
    if (isInitializingSession) {
        console.log('Session initialization already in progress');
        return false;
    }

    isInitializingSession = true;
    if (!isReconnect) {
        sendToRenderer('session-initializing', true);
    }

    // Store params for reconnection
    if (!isReconnect) {
        sessionParams = { apiKey, customPrompt, profile, language };
        reconnectAttempts = 0;
    }

    const client = new GoogleGenAI({
        vertexai: false,
        apiKey: apiKey,
        httpOptions: { apiVersion: 'v1alpha' },
    });

    // Get enabled tools first to determine Google Search status
    const enabledTools = await getEnabledTools();
    const googleSearchEnabled = enabledTools.some(tool => tool.googleSearch);

    const systemPrompt = getSystemPrompt(profile, customPrompt, googleSearchEnabled);
    currentSystemPrompt = systemPrompt; // Used by the Gemini text and screen-analysis paths

    // Initialize new conversation session only on first connect
    if (!isReconnect) {
        initializeNewSession(profile, customPrompt);
    }

    // When a separate answer model is used, the Live session is only a listener:
    // a one-word reply (its audio is never played) and no search tool.
    const answerMode = getAnswerMode();
    const liveAnswers = answerMode === 'live';
    const liveModel = getConfig().geminiLiveModel;
    console.log(`Live model: ${liveModel}, answer mode: ${answerMode}, answer model: ${liveAnswers ? liveModel : getAvailableModel()}`);

    const liveConfig = {
        // Native-audio Live models only accept AUDIO output ("TEXT is not supported by the model").
        responseModalities: [Modality.AUDIO],
        // End the interviewer's turn quickly: high end-of-speech sensitivity and a short silence window,
        // so the transcript reaches the answer model about a second after they stop talking.
        realtimeInputConfig: {
            automaticActivityDetection: {
                endOfSpeechSensitivity: 'END_SENSITIVITY_HIGH',
                silenceDurationMs: 800,
            },
        },
        // Speaker diarization: 1 = interviewer, 2 = candidate
        inputAudioTranscription: {
            enableSpeakerDiarization: true,
            minSpeakerCount: 2,
            maxSpeakerCount: 2,
        },
        contextWindowCompression: { slidingWindow: {} },
        speechConfig: { languageCode: language },
        systemInstruction: {
            parts: [{ text: liveAnswers ? systemPrompt : LISTENER_SYSTEM_PROMPT }],
        },
    };
    if (liveAnswers) {
        liveConfig.outputAudioTranscription = {};
        if (enabledTools.length > 0) {
            liveConfig.tools = enabledTools;
        }
    }
    // NOTE: `proactivity: { proactiveAudio: true }` was removed on purpose. The Live API now
    // rejects the field ("Unknown name 'proactivity' at 'setup'") and closes the session.

    try {
        const session = await client.live.connect({
            model: liveModel,
            callbacks: {
                onopen: function () {
                    logTransportEvent('gemini.live.opened', {});
                    sendToRenderer('update-status', 'Live session connected');
                },
                onmessage: function (message) {
                    logTransportEvent('gemini.live.message', message);

                    // Handle input transcription (what was spoken)
                    if (message.serverContent?.inputTranscription?.results) {
                        currentTranscription += formatSpeakerResults(message.serverContent.inputTranscription.results);
                    } else if (message.serverContent?.inputTranscription?.text) {
                        const text = message.serverContent.inputTranscription.text;
                        if (text.trim() !== '') {
                            currentTranscription += text;
                        }
                    }

                    if (liveAnswers && message.serverContent?.outputTranscription?.text) {
                        const isFirstChunk = messageBuffer === '';
                        messageBuffer += message.serverContent.outputTranscription.text;
                        sendToRenderer(isFirstChunk ? 'new-response' : 'update-response', messageBuffer);
                    }

                    if (message.serverContent?.generationComplete && liveAnswers) {
                        if (currentTranscription.trim() !== '' && messageBuffer.trim() !== '') {
                            saveConversationTurn(currentTranscription, messageBuffer);
                        }
                        currentTranscription = '';
                        messageBuffer = '';
                    }

                    if (message.serverContent?.turnComplete) {
                        // The interviewer's turn is over: hand the full transcript to the answer model.
                        if (answerMode === 'gemini' && currentTranscription.trim() !== '') {
                            const transcription = currentTranscription;
                            currentTranscription = '';
                            sendToGeminiText(transcription);
                        }
                        currentTranscription = '';
                        messageBuffer = '';
                        if (answerMode !== 'gemini') {
                            sendToRenderer('update-status', 'Listening...');
                        }
                    }
                },
                onerror: function (e) {
                    console.log('Session error:', e.message);
                    logTransportEvent('gemini.live.error', {
                        error: e.message,
                    });
                    sendToRenderer('update-status', 'Error: ' + e.message);
                },
                onclose: function (e) {
                    console.log('Session closed:', e.reason);
                    logTransportEvent('gemini.live.closed', {
                        reason: e.reason,
                    });

                    // Don't reconnect if user intentionally closed
                    if (isUserClosing) {
                        isUserClosing = false;
                        closeTransportLog();
                        sendToRenderer('update-status', 'Session closed');
                        return;
                    }

                    // Attempt reconnection
                    if (sessionParams && reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
                        attemptReconnect();
                    } else {
                        closeTransportLog();
                        sendToRenderer('update-status', 'Session closed');
                    }
                },
            },
            config: liveConfig,
        });

        isInitializingSession = false;
        if (!isReconnect) {
            sendToRenderer('session-initializing', false);
        }
        return session;
    } catch (error) {
        console.error('Failed to initialize Gemini session:', error);
        isInitializingSession = false;
        if (!isReconnect) {
            sendToRenderer('session-initializing', false);
        }
        return null;
    }
}

async function attemptReconnect() {
    reconnectAttempts++;
    console.log(`Reconnection attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}`);

    // Clear stale buffers
    messageBuffer = '';
    currentTranscription = '';
    // Don't reset answerConversationHistory to preserve context across reconnects

    sendToRenderer('update-status', `Reconnecting... (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`);

    // Wait before attempting
    await new Promise(resolve => setTimeout(resolve, RECONNECT_DELAY));

    try {
        const session = await initializeGeminiSession(
            sessionParams.apiKey,
            sessionParams.customPrompt,
            sessionParams.profile,
            sessionParams.language,
            true // isReconnect
        );

        if (session && global.geminiSessionRef) {
            global.geminiSessionRef.current = session;

            // Restore context from conversation history via text message
            const contextMessage = buildContextMessage();
            if (contextMessage) {
                try {
                    console.log('Restoring conversation context...');
                    await session.sendRealtimeInput({ text: contextMessage });
                } catch (contextError) {
                    console.error('Failed to restore context:', contextError);
                    // Continue without context - better than failing
                }
            }

            // Don't reset reconnectAttempts here - let it reset on next fresh session
            sendToRenderer('update-status', 'Reconnected! Listening...');
            console.log('Session reconnected successfully');
            return true;
        }
    } catch (error) {
        console.error(`Reconnection attempt ${reconnectAttempts} failed:`, error);
    }

    // If we still have attempts left, try again
    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        return attemptReconnect();
    }

    // Max attempts reached - notify frontend
    console.log('Max reconnection attempts reached');
    sendToRenderer('reconnect-failed', {
        message: 'Tried 3 times to reconnect. Must be upstream/network issues. Try restarting or download updated app from site.',
    });
    sessionParams = null;
    return false;
}

function killExistingSystemAudioDump() {
    return new Promise(resolve => {
        console.log('Checking for existing SystemAudioDump processes...');

        // Kill any existing SystemAudioDump processes
        const killProc = spawn('pkill', ['-f', 'SystemAudioDump'], {
            stdio: 'ignore',
        });

        killProc.on('close', code => {
            if (code === 0) {
                console.log('Killed existing SystemAudioDump processes');
            } else {
                console.log('No existing SystemAudioDump processes found');
            }
            resolve();
        });

        killProc.on('error', err => {
            console.log('Error checking for existing processes (this is normal):', err.message);
            resolve();
        });

        // Timeout after 2 seconds
        setTimeout(() => {
            killProc.kill();
            resolve();
        }, 2000);
    });
}

async function startMacOSAudioCapture(geminiSessionRef) {
    if (process.platform !== 'darwin') return false;

    // Kill any existing SystemAudioDump processes first
    await killExistingSystemAudioDump();

    console.log('Starting macOS audio capture with SystemAudioDump...');

    const { app } = require('electron');
    const path = require('path');

    let systemAudioPath;
    if (app.isPackaged) {
        systemAudioPath = path.join(process.resourcesPath, 'SystemAudioDump');
    } else {
        systemAudioPath = path.join(__dirname, '../assets', 'SystemAudioDump');
    }

    console.log('SystemAudioDump path:', systemAudioPath);

    const spawnOptions = {
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
            ...process.env,
        },
    };

    systemAudioProc = spawn(systemAudioPath, [], spawnOptions);

    if (!systemAudioProc.pid) {
        console.error('Failed to start SystemAudioDump');
        return false;
    }

    console.log('SystemAudioDump started with PID:', systemAudioProc.pid);

    const CHUNK_DURATION = 0.1;
    const SAMPLE_RATE = 24000;
    const BYTES_PER_SAMPLE = 2;
    const CHANNELS = 2;
    const CHUNK_SIZE = SAMPLE_RATE * BYTES_PER_SAMPLE * CHANNELS * CHUNK_DURATION;

    let audioBuffer = Buffer.alloc(0);

    systemAudioProc.stdout.on('data', data => {
        audioBuffer = Buffer.concat([audioBuffer, data]);

        while (audioBuffer.length >= CHUNK_SIZE) {
            const chunk = audioBuffer.slice(0, CHUNK_SIZE);
            audioBuffer = audioBuffer.slice(CHUNK_SIZE);

            const monoChunk = CHANNELS === 2 ? convertStereoToMono(chunk) : chunk;

            if (currentProviderMode === 'cloud') {
                sendCloudAudio(monoChunk);
            } else if (currentProviderMode === 'local') {
                getLocalAi().processLocalAudio(monoChunk);
            } else {
                const base64Data = monoChunk.toString('base64');
                sendAudioToGemini(base64Data, geminiSessionRef);
            }

            if (process.env.DEBUG_AUDIO) {
                console.log(`Processed audio chunk: ${chunk.length} bytes`);
                saveDebugAudio(monoChunk, 'system_audio');
            }
        }

        const maxBufferSize = SAMPLE_RATE * BYTES_PER_SAMPLE * 1;
        if (audioBuffer.length > maxBufferSize) {
            audioBuffer = audioBuffer.slice(-maxBufferSize);
        }
    });

    systemAudioProc.stderr.on('data', data => {
        console.error('SystemAudioDump stderr:', data.toString());
    });

    systemAudioProc.on('close', code => {
        console.log('SystemAudioDump process closed with code:', code);
        systemAudioProc = null;
    });

    systemAudioProc.on('error', err => {
        console.error('SystemAudioDump process error:', err);
        systemAudioProc = null;
    });

    return true;
}

function convertStereoToMono(stereoBuffer) {
    const samples = stereoBuffer.length / 4;
    const monoBuffer = Buffer.alloc(samples * 2);

    for (let i = 0; i < samples; i++) {
        const leftSample = stereoBuffer.readInt16LE(i * 4);
        monoBuffer.writeInt16LE(leftSample, i * 2);
    }

    return monoBuffer;
}

function stopMacOSAudioCapture() {
    if (systemAudioProc) {
        console.log('Stopping SystemAudioDump...');
        systemAudioProc.kill('SIGTERM');
        systemAudioProc = null;
    }
}

async function sendAudioToGemini(base64Data, geminiSessionRef) {
    if (!geminiSessionRef.current) return;

    try {
        process.stdout.write('.');
        await geminiSessionRef.current.sendRealtimeInput({
            audio: {
                data: base64Data,
                mimeType: 'audio/pcm;rate=24000',
            },
        });
    } catch (error) {
        console.error('Error sending audio to Gemini:', error);
    }
}

async function sendImageToGeminiHttp(base64Data, prompt) {
    // Screen analysis uses its own (Pro) model; spoken/typed answers use the cheaper answer model.
    let model = getScreenModel();
    const requestedModel = model;

    const apiKey = getApiKey();
    if (!apiKey) {
        return { success: false, error: 'No API key configured' };
    }

    logTransportEvent('gemini.image.request', { model, prompt, imageBytes: Buffer.byteLength(base64Data, 'base64') });
    sendToRenderer('update-status', 'Analyzing screen...');

    try {
        const ai = new GoogleGenAI({ apiKey: apiKey });

        const contents = [
            {
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: base64Data,
                },
            },
            { text: prompt },
        ];

        console.log(`Sending image to ${model} (streaming)...`);
        // If the Pro model is refused (free-tier keys have no Pro quota), fall back to the answer model.
        const answerModel = getAvailableModel();
        const fallbackModel = answerModel !== model ? answerModel : CHEAPEST_TEXT_MODEL;
        const result = await generateStreamWithFallback(ai, model, fallbackModel, useModel => ({
            model: useModel,
            contents: contents,
            config: {
                // Same profile / user context as spoken questions; for the reasoning profile this adds
                // the methods and cheat sheets (no question text is available to pick specific entries).
                systemInstruction: currentSystemPrompt ? buildRequestSystemPrompt('') : undefined,
            },
        }));
        model = result.model;
        const response = result.response;

        // Increment count after successful call
        incrementLimitCount(model);

        // Stream the response
        let fullText = result.fellBack ? `_(${requestedModel} is not available on this API key, answered with ${model})_\n\n` : '';
        let isFirst = true;
        for await (const chunk of response) {
            const chunkText = chunk.text;
            if (chunkText) {
                fullText += chunkText;
                // Send to renderer - new response for first chunk, update for subsequent
                sendToRenderer(isFirst ? 'new-response' : 'update-response', fullText);
                isFirst = false;
            }
        }

        console.log(`Image response completed from ${model}`);
        logTransportEvent('gemini.image.completed', { model, response: fullText });

        if (!fullText.trim()) {
            return { success: false, error: `Empty response from ${model}` };
        }

        // Save screen analysis to history
        saveScreenAnalysis(prompt, fullText, model);
        sendToRenderer('update-status', 'Listening...');

        return { success: true, text: fullText, model: model };
    } catch (error) {
        console.error('Error sending image to Gemini HTTP:', error);
        logTransportEvent('gemini.image.error', { model, error: error.message });
        sendToRenderer('update-status', 'Gemini error');
        return { success: false, error: buildAnswerModelErrorMessage(model, error) };
    }
}

function setupGeminiIpcHandlers(geminiSessionRef) {
    // Store the geminiSessionRef globally for reconnection access
    global.geminiSessionRef = geminiSessionRef;

    ipcMain.handle('initialize-cloud', async (event, token, profile, userContext) => {
        try {
            currentProviderMode = 'cloud';
            initializeNewSession(profile);
            setOnTurnComplete((transcription, response) => {
                saveConversationTurn(transcription, response);
            });
            sendToRenderer('session-initializing', true);
            await connectCloud(token, profile, userContext);
            sendToRenderer('session-initializing', false);
            return true;
        } catch (err) {
            console.error('[Cloud] Init error:', err);
            currentProviderMode = 'byok';
            sendToRenderer('session-initializing', false);
            return false;
        }
    });

    ipcMain.handle('initialize-gemini', async (event, apiKey, customPrompt, profile = 'interview', language = 'en-US') => {
        currentProviderMode = 'byok';
        const session = await initializeGeminiSession(apiKey, customPrompt, profile, language);
        if (session) {
            geminiSessionRef.current = session;
            return true;
        }
        return false;
    });

    ipcMain.handle('initialize-local', async (event, localLlmModel, whisperModel, profile, customPrompt) => {
        currentProviderMode = 'local';
        const success = await getLocalAi().initializeLocalSession(localLlmModel, whisperModel, profile, customPrompt);
        if (!success) {
            currentProviderMode = 'byok';
        }
        return success;
    });

    ipcMain.handle('cancel-local-initialization', async () => {
        const cancelled = await getLocalAi().cancelLocalInitialization();
        if (cancelled) {
            currentProviderMode = 'byok';
        }
        return cancelled;
    });

    ipcMain.handle('send-audio-content', async (event, { data, mimeType }) => {
        if (currentProviderMode === 'cloud') {
            try {
                const pcmBuffer = Buffer.from(data, 'base64');
                sendCloudAudio(pcmBuffer);
                return { success: true };
            } catch (error) {
                console.error('Error sending cloud audio:', error);
                return { success: false, error: error.message };
            }
        }
        if (currentProviderMode === 'local') {
            try {
                const pcmBuffer = Buffer.from(data, 'base64');
                getLocalAi().processLocalAudio(pcmBuffer);
                return { success: true };
            } catch (error) {
                console.error('Error sending local audio:', error);
                return { success: false, error: error.message };
            }
        }
        if (!geminiSessionRef.current) return { success: false, error: 'No active Gemini session' };
        try {
            process.stdout.write('.');
            await geminiSessionRef.current.sendRealtimeInput({
                audio: { data: data, mimeType: mimeType },
            });
            return { success: true };
        } catch (error) {
            console.error('Error sending system audio:', error);
            return { success: false, error: error.message };
        }
    });

    // Handle microphone audio on a separate channel
    ipcMain.handle('send-mic-audio-content', async (event, { data, mimeType }) => {
        if (currentProviderMode === 'cloud') {
            try {
                const pcmBuffer = Buffer.from(data, 'base64');
                sendCloudAudio(pcmBuffer);
                return { success: true };
            } catch (error) {
                console.error('Error sending cloud mic audio:', error);
                return { success: false, error: error.message };
            }
        }
        if (currentProviderMode === 'local') {
            try {
                const pcmBuffer = Buffer.from(data, 'base64');
                getLocalAi().processLocalAudio(pcmBuffer);
                return { success: true };
            } catch (error) {
                console.error('Error sending local mic audio:', error);
                return { success: false, error: error.message };
            }
        }
        if (!geminiSessionRef.current) return { success: false, error: 'No active Gemini session' };
        try {
            process.stdout.write(',');
            await geminiSessionRef.current.sendRealtimeInput({
                audio: { data: data, mimeType: mimeType },
            });
            return { success: true };
        } catch (error) {
            console.error('Error sending mic audio:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('send-image-content', async (event, { data, prompt }) => {
        try {
            if (!data || typeof data !== 'string') {
                console.error('Invalid image data received');
                return { success: false, error: 'Invalid image data' };
            }

            const buffer = Buffer.from(data, 'base64');

            if (buffer.length < 1000) {
                console.error(`Image buffer too small: ${buffer.length} bytes`);
                return { success: false, error: 'Image buffer too small' };
            }

            process.stdout.write('!');

            if (currentProviderMode === 'cloud') {
                const sent = sendCloudImage(data);
                if (!sent) {
                    return { success: false, error: 'Cloud connection not active' };
                }
                return { success: true, model: 'cloud' };
            }

            if (currentProviderMode === 'local') {
                const result = await getLocalAi().sendLocalImage(data, prompt);
                return result;
            }

            return await sendImageToGeminiHttp(data, prompt);
        } catch (error) {
            console.error('Error sending image:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('send-text-message', async (event, text) => {
        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            return { success: false, error: 'Invalid text message' };
        }

        if (currentProviderMode === 'cloud') {
            try {
                console.log('Sending text to cloud:', text);
                sendCloudText(text.trim());
                return { success: true };
            } catch (error) {
                console.error('Error sending cloud text:', error);
                return { success: false, error: error.message };
            }
        }

        if (currentProviderMode === 'local') {
            try {
                console.log('Sending text to local Llama:', text);
                return await getLocalAi().sendLocalText(text.trim());
            } catch (error) {
                console.error('Error sending local text:', error);
                return { success: false, error: error.message };
            }
        }

        // Direct Gemini answers: typed messages go straight to the answer model,
        // the Live session does not need to see them.
        if (getAnswerMode() === 'gemini') {
            console.log('Sending text message to Gemini answer model:', text);
            sendToGeminiText(text.trim());
            return { success: true };
        }

        if (!geminiSessionRef.current) return { success: false, error: 'No active Gemini session' };

        try {
            console.log('Sending text message to Live session:', text);
            await geminiSessionRef.current.sendRealtimeInput({ text: text.trim() });
            return { success: true };
        } catch (error) {
            console.error('Error sending text:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('start-macos-audio', async event => {
        if (process.platform !== 'darwin') {
            return {
                success: false,
                error: 'macOS audio capture only available on macOS',
            };
        }

        try {
            const success = await startMacOSAudioCapture(geminiSessionRef);
            return { success };
        } catch (error) {
            console.error('Error starting macOS audio capture:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('stop-macos-audio', async event => {
        try {
            stopMacOSAudioCapture();
            return { success: true };
        } catch (error) {
            console.error('Error stopping macOS audio capture:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('close-session', async event => {
        try {
            stopMacOSAudioCapture();

            if (currentProviderMode === 'cloud') {
                closeCloud();
                currentProviderMode = 'byok';
                closeTransportLog();
                return { success: true };
            }

            if (currentProviderMode === 'local') {
                getLocalAi().closeLocalSession();
                currentProviderMode = 'byok';
                closeTransportLog();
                return { success: true };
            }

            // Set flag to prevent reconnection attempts
            isUserClosing = true;
            sessionParams = null;

            // Cleanup session
            if (geminiSessionRef.current) {
                await geminiSessionRef.current.close();
                geminiSessionRef.current = null;
            } else {
                closeTransportLog();
            }

            return { success: true };
        } catch (error) {
            console.error('Error closing session:', error);
            return { success: false, error: error.message };
        }
    });

    // Conversation history IPC handlers
    ipcMain.handle('get-current-session', async event => {
        try {
            return { success: true, data: getCurrentSessionData() };
        } catch (error) {
            console.error('Error getting current session:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('start-new-session', async event => {
        try {
            initializeNewSession();
            return { success: true, sessionId: currentSessionId };
        } catch (error) {
            console.error('Error starting new session:', error);
            return { success: false, error: error.message };
        }
    });

    ipcMain.handle('update-google-search-setting', async (event, enabled) => {
        try {
            console.log('Google Search setting updated to:', enabled);
            // The setting is already saved in localStorage by the renderer
            // This is just for logging/confirmation
            return { success: true };
        } catch (error) {
            console.error('Error updating Google Search setting:', error);
            return { success: false, error: error.message };
        }
    });
}

module.exports = {
    initializeGeminiSession,
    getEnabledTools,
    getAnswerMode,
    sendToGeminiText,
    sendToRenderer,
    initializeNewSession,
    saveConversationTurn,
    getCurrentSessionData,
    killExistingSystemAudioDump,
    startMacOSAudioCapture,
    convertStereoToMono,
    stopMacOSAudioCapture,
    sendAudioToGemini,
    sendImageToGeminiHttp,
    setupGeminiIpcHandlers,
    formatSpeakerResults,
};
