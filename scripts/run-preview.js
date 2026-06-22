import { spawn } from 'child_process';

let haveFetch = typeof globalThis.fetch === 'function';
if (!haveFetch) {
  try {
    const { fetch, Headers, Request, Response } = await import('undici');
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
    console.log('Polyfilled global.fetch with undici');
  } catch (err) {
    console.warn('Failed to polyfill fetch:', err);
  }
}

const cp = spawn('node -r ./scripts/polyfill.cjs node_modules/vite/bin/vite.js preview', { stdio: 'inherit', shell: true });
cp.on('exit', (code) => process.exit(code));
