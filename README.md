<img width="1299" height="424" alt="cd (1)" src="https://github.com/user-attachments/assets/b25fff4d-043d-4f38-9985-f832ae0d0f6e" />

## Recall.ai - API for desktop recording

If you’re looking for a hosted desktop recording API, consider checking out [Recall.ai](https://www.recall.ai/product/desktop-recording-sdk/?utm_source=github&utm_medium=sponsorship&utm_campaign=sohzm-cheating-daddy), an API that records Zoom, Google Meet, Microsoft Teams, in-person meetings, and more.

This project is sponsored by Recall.ai.

---

> [!NOTE]  
> Use latest MacOS and Windows version, older versions have limited support

> [!NOTE]  
> During testing it wont answer if you ask something, you need to simulate interviewer asking question, which it will answer

A real-time AI assistant that provides contextual help during video calls, interviews, presentations, and meetings using screen capture and audio analysis.

## Features

- **Live AI Assistance**: Gemini Live (`gemini-3.8-live`) listens to the call; a mid-tier Gemini model (`gemini-3.8-flash`) writes the answers to spoken and typed questions, and a Pro model (`gemini-3.1-pro-preview`) handles Analyze Screen. Both are selectable on the Home screen. Everything runs on one Gemini API key.
- **Key from a file**: put `GEMINI_API_KEY=...` in `geminikey.env` in the project root and the app imports it automatically (the file is git-ignored). Run `npm run check` to verify the key and models without starting the app.
- **Case, Guesstimate & Puzzle profile**: a consulting-prep profile backed by a reference library in `src/knowledge/` (case frameworks and worked cases, guesstimate method with India/US base numbers and the 180DC SRCC guesstimate book, and the GeeksforGeeks top interview puzzles with verified answers). Questions in this profile go to the Pro model with an accuracy protocol (solve, verify by a second route, state assumptions), and only the library entries relevant to the question are attached. Run `npm run accuracy` to grade the setup on a bank of puzzles, guesstimates and case maths.
- **Screen & Audio Capture**: Analyzes what you see and hear for contextual responses; choose which monitor to capture in Settings → Screen Capture
- **Multiple Profiles**: Interview, Sales Call, Business Meeting, Presentation, Negotiation
- **Transparent Overlay**: Always-on-top window that can be positioned anywhere
- **Click-through Mode**: Make window transparent to clicks when needed
- **Cross-platform**: Works on macOS, Windows, and Linux (kinda, dont use, just for testing rn)

## Setup

1. **Get a Gemini API Key**: Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. **Install Dependencies**: `npm install`
3. **Run the App**: `npm start`, or double-click the **ET_ClientDashboard** shortcut on the desktop (one click, no terminal; a second click brings the running app back instead of opening another copy)

The desktop shortcut points at `node_modules/electron/dist/ET_ClientDashboard.exe`, a renamed copy of the Electron runtime that `npm run launcher` (also run automatically after `npm install`) keeps in place. To recreate the shortcut on another PC: target that exe with argument `.`, "Start in" set to the project folder, icon `src/assets/ET_ClientDashboard.ico`.

Screen sharing: the window is created with content protection on, so Windows excludes it from screen capture (Zoom, Teams, Meet, OBS show nothing where it is). It is also hidden from the taskbar. It is still visible to your own eyes, to a phone camera pointed at the screen, and to a capture card or a second-PC capture.

## Usage

1. Enter your Gemini API key in the main window, or put it in `geminikey.env`
2. Choose your profile and language in settings, and the monitor to capture under Settings → Screen Capture
3. Click "Start Session" to begin
4. Position the window using keyboard shortcuts
5. The AI will provide real-time assistance based on your screen and what interview asks

## Keyboard Shortcuts

- **Window Movement**: `Ctrl/Cmd + Arrow Keys` - Move window
- **Click-through**: `Ctrl/Cmd + M` - Toggle mouse events
- **Close/Back**: `Ctrl/Cmd + \` - Close window or go back
- **Send Message**: `Enter` - Send text to AI

## Audio Capture

- **macOS**: [SystemAudioDump](https://github.com/Mohammed-Yasin-Mulla/Sound) for system audio
- **Windows**: Loopback audio capture
- **Linux**: Microphone input

## Requirements

- Electron-compatible OS (macOS, Windows, Linux)
- Gemini API key
- Screen recording permissions
- Microphone/audio permissions
