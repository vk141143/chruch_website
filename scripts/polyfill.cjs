try {
  const { fetch, Headers, Request, Response } = require('undici');
  if (typeof globalThis.fetch !== 'function') {
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
    console.log('Polyfilled global.fetch via polyfill.cjs');
  }
} catch (e) {
  console.warn('undici not available for polyfill:', e.message);
}
