#!/usr/bin/env node
// Accuracy test for the "Case, Guesstimate & Puzzle" profile.
//   npm run accuracy                                   -> configured screen (Pro) model, as the app uses for this profile
//   ACCURACY_MODEL=gemini-3.8-flash npm run accuracy  -> a different model
//   ACCURACY_ONLY=puzzle npm run accuracy              -> puzzle | guesstimate | quant
// Sends each question in scripts/accuracy-questions.js through the exact system prompt the app uses and grades the answer.

const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const storage = require('../src/storage');
const { getSystemPrompt, getKnowledgeForQuestion, getKnowledgeLibrary } = require('../src/utils/prompts');
const QUESTIONS = require('./accuracy-questions');

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
            if (key.length >= 20) return key;
        }
    }
    return storage.getApiKey() || process.env.GEMINI_API_KEY || '';
}

const UNIT_MULTIPLIERS = {
    k: 1000,
    thousand: 1000,
    lakh: 100000,
    lakhs: 100000,
    lac: 100000,
    lacs: 100000,
    m: 1000000,
    mn: 1000000,
    million: 1000000,
    millions: 1000000,
    crore: 10000000,
    crores: 10000000,
    cr: 10000000,
    b: 1000000000,
    bn: 1000000000,
    billion: 1000000000,
    billions: 1000000000,
};

// Parse quantities like "3 million", "3.4 mn", "90,000", "1.7 bn", "2 crore", "30 lakh" from text.
function extractQuantities(text) {
    const values = [];
    const quantityPattern =
        /(\d{1,3}(?:,\d{2,3})+|\d+(?:\.\d+)?)\s*(k|thousand|lakhs?|lacs?|mn|million|millions|m|crores?|cr|bn|billion|billions|b)?\b/gi;
    let match = quantityPattern.exec(text);
    while (match !== null) {
        const number = parseFloat(match[1].split(',').join(''));
        const unit = (match[2] || '').toLowerCase();
        if (!Number.isNaN(number)) {
            values.push(unit ? number * (UNIT_MULTIPLIERS[unit] || 1) : number);
        }
        match = quantityPattern.exec(text);
    }
    return values;
}

// First few non-empty lines of an answer (where the profile puts the final answer).
function headline(text, count) {
    const lines = text
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);
    return lines.slice(0, count).join(' ');
}

function withoutBold(text) {
    return text.split('**').join('');
}

function passes(grade, answer) {
    const head = headline(answer, 4);
    if (grade.range) {
        return extractQuantities(head).some(value => value >= grade.range[0] && value <= grade.range[1]);
    }
    if (grade.all) {
        return grade.all.every(part => new RegExp(part.pattern, part.flags || '').test(head));
    }
    return new RegExp(grade.pattern, grade.flags || '').test(head);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const apiKey = readKey();
    if (!apiKey) {
        console.error('No Gemini API key found. Put GEMINI_API_KEY=... in geminikey.env (project root).');
        process.exitCode = 1;
        return;
    }
    const config = storage.getConfig();
    const model = process.env.ACCURACY_MODEL || config.geminiScreenModel;
    const only = process.env.ACCURACY_ONLY || '';
    const basePrompt = getSystemPrompt('casestudy', '', false);
    const questions = only ? QUESTIONS.filter(item => item.type === only) : QUESTIONS;
    // ACCURACY_FULL_LIBRARY=1 sends the whole library with every question (slower); default mirrors the app:
    // base prompt + the library entries retrieved for that question.
    const fullLibrary = process.env.ACCURACY_FULL_LIBRARY === '1';
    const promptFor = question => basePrompt + (fullLibrary ? getKnowledgeLibrary() : getKnowledgeForQuestion(question));

    const sample = promptFor(questions[0] ? questions[0].q : '');
    console.log(
        `Model: ${model}   Prompt mode: ${fullLibrary ? 'full library' : 'retrieval'}   Example prompt: ${sample.length} chars (~${Math.round(sample.length / 4)} tokens)   Questions: ${questions.length}\n`
    );

    const ai = new GoogleGenAI({ apiKey });
    const report = await runQuestions(ai, model, promptFor, questions);
    printReport(report, questions);
}

async function ask(ai, model, systemPrompt, question) {
    const response = await ai.models.generateContent({
        model,
        contents: question,
        config: { systemInstruction: systemPrompt, temperature: 0.2 },
    });
    return (response.text || '').trim();
}

// Rate limits (429) and overloads (503) are retried with a growing pause; other errors are reported.
async function askWithRetry(ai, model, systemPrompt, question) {
    let lastError = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            return await ask(ai, model, systemPrompt, question);
        } catch (error) {
            lastError = error;
            const message = String(error.message || error);
            const retryable = /429|RESOURCE_EXHAUSTED|503|UNAVAILABLE|overloaded|timed out|fetch failed/i.test(message);
            if (!retryable) throw error;
            const waitSeconds = 20 * attempt;
            console.log(`     (retry ${attempt} after ${waitSeconds}s: ${message.split('\n')[0]})`);
            await sleep(waitSeconds * 1000);
        }
    }
    throw lastError;
}

async function runQuestions(ai, model, promptFor, questions) {
    const failures = [];
    let passed = 0;
    const started = Date.now();

    for (let i = 0; i < questions.length; i++) {
        const item = questions[i];
        const label = `${String(i + 1).padStart(2)}/${questions.length} [${item.type}]`;
        try {
            const t0 = Date.now();
            const answer = await askWithRetry(ai, model, promptFor(item.q), item.q);
            const ok = passes(item.grade, answer);
            const seconds = ((Date.now() - t0) / 1000).toFixed(1);
            console.log(`${ok ? 'PASS' : 'FAIL'} ${label} (${seconds}s) ${item.q.slice(0, 60)}...`);
            console.log(`     -> ${withoutBold(headline(answer, 2)).slice(0, 110)}`);
            if (ok) passed++;
            else failures.push({ item, answer });
        } catch (error) {
            console.log(`ERR  ${label} ${item.q.slice(0, 60)}...`);
            console.log(`     -> ${String(error.message).split('\n')[0]}`);
            failures.push({ item, answer: `ERROR: ${error.message}` });
        }
        await sleep(1500);
    }

    return { passed, failures, seconds: Math.round((Date.now() - started) / 1000) };
}

function printReport(report, questions) {
    const byType = {};
    for (const item of questions) {
        if (!byType[item.type]) byType[item.type] = { total: 0, failed: 0 };
        byType[item.type].total++;
    }
    for (const failure of report.failures) byType[failure.item.type].failed++;

    const percent = Math.round((100 * report.passed) / questions.length);
    console.log(`\n=== RESULT: ${report.passed}/${questions.length} correct (${percent}%) in ${report.seconds}s ===`);
    for (const type of Object.keys(byType)) {
        console.log(`  ${type.padEnd(12)} ${byType[type].total - byType[type].failed}/${byType[type].total}`);
    }
    if (report.failures.length) {
        console.log('\nFailures (expected -> got):');
        for (const failure of report.failures) {
            console.log(`- ${failure.item.q.slice(0, 70)}...`);
            console.log(`    expected: ${failure.item.expect}`);
            console.log(`    got:      ${withoutBold(headline(failure.answer, 3)).slice(0, 200)}`);
        }
    }
    process.exitCode = report.failures.length ? 2 : 0;
}

main();
