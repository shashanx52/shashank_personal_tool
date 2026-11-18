#!/usr/bin/env node
// Diagnostic: verifies the Gemini API key and the three configured models without starting the app.
//   npm run check
// Reads the key from geminikey.env / .env (GEMINI_API_KEY=...) or the GEMINI_API_KEY environment variable.

const fs = require('fs');
const path = require('path');
const { GoogleGenAI, Modality } = require('@google/genai');
const storage = require('../src/storage');

const ROOT = path.join(__dirname, '..');

// Same precedence as the app: the env file wins, then the key saved in the app, then the shell variable.
function readKey() {
    for (const name of ['geminikey.env', '.env']) {
        const filePath = path.join(ROOT, name);
        if (!fs.existsSync(filePath)) continue;
        for (const rawLine of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
            const line = rawLine.trim();
            if (!line || line.startsWith('#')) continue;
            const match = line.match(/^(?:export\s+)?(GEMINI_API_KEY|GOOGLE_API_KEY|API_KEY)\s*=\s*(.+)$/i);
            const key = (match ? match[2] : line.includes('=') ? '' : line).replace(/^["']|["']$/g, '').trim();
            if (key.length >= 20) return { key, source: name };
        }
    }
    const saved = storage.getApiKey();
    if (saved) return { key: saved, source: 'app credentials' };
    if (process.env.GEMINI_API_KEY) return { key: process.env.GEMINI_API_KEY.trim(), source: 'GEMINI_API_KEY environment variable' };
    return { key: '', source: '' };
}

function readConfiguredModels() {
    // storage.getConfig() also upgrades retired model IDs exactly like the app does
    const config = storage.getConfig();
    return { geminiLiveModel: config.geminiLiveModel, geminiModel: config.geminiModel, geminiScreenModel: config.geminiScreenModel };
}

function mask(key) {
    return key.length > 8 ? `${key.slice(0, 4)}…${key.slice(-4)}` : '****';
}

async function withTimeout(promise, ms, label) {
    let timer;
    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms / 1000}s`)), ms);
    });
    try {
        return await Promise.race([promise, timeout]);
    } finally {
        clearTimeout(timer);
    }
}

async function testTextModel(ai, model, label) {
    const started = Date.now();
    try {
        const response = await withTimeout(
            ai.models.generateContent({ model, contents: 'Reply with the single word: ready' }),
            30000,
            `${label} generateContent`
        );
        const text = (response.text || '').trim().slice(0, 40);
        console.log(`  OK   ${label.padEnd(13)} ${model}  (${Date.now() - started} ms)  -> "${text}"`);
        return true;
    } catch (error) {
        console.log(`  FAIL ${label.padEnd(13)} ${model}\n       ${String(error.message).split('\n')[0]}`);
        return false;
    }
}

async function testLiveModel(apiKey, model) {
    const started = Date.now();
    const client = new GoogleGenAI({ vertexai: false, apiKey, httpOptions: { apiVersion: 'v1alpha' } });
    let session = null;
    try {
        await withTimeout(
            new Promise((resolve, reject) => {
                client.live
                    .connect({
                        model,
                        config: {
                            // Live native-audio models only accept AUDIO output; the app discards it.
                            responseModalities: [Modality.AUDIO],
                            inputAudioTranscription: {},
                            contextWindowCompression: { slidingWindow: {} },
                            systemInstruction: { parts: [{ text: 'Reply with the single word: ok' }] },
                        },
                        callbacks: {
                            onopen: () => {},
                            onmessage: message => {
                                if (message.setupComplete) resolve('setupComplete');
                            },
                            onerror: error => reject(new Error(error.message || 'live error')),
                            onclose: event => reject(new Error(`closed: ${event.reason || event.code || 'unknown reason'}`)),
                        },
                    })
                    .then(s => {
                        session = s;
                    })
                    .catch(reject);
            }),
            20000,
            'Live connect'
        );
        console.log(`  OK   ${'Live model'.padEnd(13)} ${model}  (${Date.now() - started} ms)  -> setupComplete`);
        return true;
    } catch (error) {
        console.log(`  FAIL ${'Live model'.padEnd(13)} ${model}\n       ${String(error.message).split('\n')[0]}`);
        return false;
    } finally {
        try {
            session?.close();
        } catch {}
    }
}

async function listModels(ai) {
    const names = [];
    try {
        const pager = await ai.models.list({ config: { pageSize: 200 } });
        for await (const model of pager) {
            const name = (model.name || '').replace(/^models\//, '');
            const actions = model.supportedActions || [];
            if (name.startsWith('gemini')) names.push({ name, actions });
        }
    } catch (error) {
        console.log(`  (could not list models: ${String(error.message).split('\n')[0]})`);
        return;
    }
    const text = names.filter(m => m.actions.length === 0 || m.actions.includes('generateContent')).map(m => m.name);
    const live = names.filter(m => m.actions.includes('bidiGenerateContent')).map(m => m.name);
    console.log(`\nModels this key can use (${names.length} gemini models listed):`);
    console.log(`  generateContent: ${text.join(', ') || '(none reported)'}`);
    console.log(`  live (bidi):     ${live.join(', ') || '(not reported by the list endpoint)'}`);
}

(async () => {
    const { key: apiKey, source } = readKey();
    if (!apiKey) {
        console.error('No Gemini API key found. Put GEMINI_API_KEY=... in geminikey.env (project root).');
        process.exit(1);
    }
    const models = readConfiguredModels();
    console.log(`Gemini key: ${mask(apiKey)}  (from ${source})`);
    console.log(`Configured: live=${models.geminiLiveModel}  answer=${models.geminiModel}  screen=${models.geminiScreenModel}\n`);

    const ai = new GoogleGenAI({ apiKey });
    const results = [];
    results.push(await testTextModel(ai, models.geminiModel, 'Answer model'));
    results.push(await testTextModel(ai, models.geminiScreenModel, 'Screen model'));
    results.push(await testLiveModel(apiKey, models.geminiLiveModel));
    await listModels(ai);

    const failed = results.filter(ok => !ok).length;
    console.log(failed ? `\n${failed} check(s) failed. Pick a different model on the Home screen for the failing role.` : '\nAll checks passed.');
    process.exit(failed ? 2 : 0);
})();
