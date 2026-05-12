import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isNetlify = process.env.NETLIFY === "true";
const isProduction = process.env.NODE_ENV === "production";

// In Replit dev/workflow, PORT and BASE_PATH are required.
// On Netlify (or any plain npm build), we use safe defaults.
const rawPort = process.env.PORT;
const basePath = process.env.BASE_PATH ?? "/";

let port = 5173;
if (!isNetlify && rawPort) {
  const parsed = Number(rawPort);
  if (!Number.isNaN(parsed) && parsed > 0) port = parsed;
} else if (!isNetlify && !rawPort && !isProduction) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const plugins = [react(), tailwindcss()];

if (!isProduction && !isNetlify) {
  const runtimeErrorOverlay = await import(
    "@replit/vite-plugin-runtime-error-modal"
  );
  plugins.push(runtimeErrorOverlay.default());

  if (process.env.REPL_ID !== undefined) {
    const cartographer = await import("@replit/vite-plugin-cartographer");
    plugins.push(
      cartographer.cartographer({
        root: path.resolve(import.meta.dirname, ".."),
      }),
    );
    const devBanner = await import("@replit/vite-plugin-dev-banner");
    plugins.push(devBanner.devBanner());
  }
}

export default defineConfig({
  base: basePath,
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
