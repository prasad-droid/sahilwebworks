/** Runs the inquiry API and Vite dev server together without extra dependencies. */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const children = [];

function start(label, command, args, extraEnv = {}) {
  const child = spawn(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...extraEnv },
  });
  child.on('exit', (code) => {
    if (code && code !== 0) {
      children.forEach((c) => c.kill());
      process.exit(code);
    }
  });
  children.push(child);
}

start('api', process.execPath, ['server.js'], { PORT: '3001' });
start('vite', process.execPath, ['node_modules/vite/bin/vite.js'], {});

function shutdown() {
  children.forEach((child) => child.kill());
  process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
