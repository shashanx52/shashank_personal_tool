#!/usr/bin/env node
// Keeps the desktop launcher working: the shortcut points at node_modules/electron/dist/ET_ClientDashboard.exe,
// a renamed copy of electron.exe (so Task Manager shows the app's own name). npm install replaces the
// electron folder, so this runs on postinstall and recreates the copy when it is missing or stale.
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'node_modules', 'electron', 'dist');
const source = path.join(distDir, process.platform === 'win32' ? 'electron.exe' : 'electron');
const target = path.join(distDir, process.platform === 'win32' ? 'ET_ClientDashboard.exe' : 'ET_ClientDashboard');

if (!fs.existsSync(source)) {
    console.log('setup-launcher: electron runtime not found yet, skipping');
    process.exit(0);
}

const sourceStat = fs.statSync(source);
const targetStat = fs.existsSync(target) ? fs.statSync(target) : null;
if (targetStat && targetStat.size === sourceStat.size && targetStat.mtimeMs >= sourceStat.mtimeMs) {
    console.log('setup-launcher: ET_ClientDashboard runtime is up to date');
    process.exit(0);
}

fs.copyFileSync(source, target);
if (process.platform !== 'win32') fs.chmodSync(target, 0o755);
console.log('setup-launcher: created ' + target);
