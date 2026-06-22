// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Ensure `fetch` exists in Node for preview/build plugins that expect it.
try {
  if (typeof globalThis.fetch !== "function") {
    const undici = await import("undici");
    globalThis.fetch = undici.fetch;
    globalThis.Headers = undici.Headers;
    globalThis.Request = undici.Request;
    globalThis.Response = undici.Response;
  }
} catch (e) {
  // ignore - undici may not be installed in some environments
}

export default defineConfig({
  nitro: { preset: "netlify" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
