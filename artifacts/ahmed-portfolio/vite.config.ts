import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
const isReplit = Boolean(process.env.REPL_ID);

// PORT is required by Replit workflows; on CI/Vercel/Netlify we default to 5173
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

// BASE_PATH is injected by Replit; default to "/" everywhere else
const basePath = process.env.BASE_PATH ?? "/";

const plugins = [react(), tailwindcss()];

// Replit-specific dev plugins — only load in Replit dev mode
if (!isProduction && isReplit) {
  const runtimeErrorOverlay = await import(
    "@replit/vite-plugin-runtime-error-modal"
  );
  plugins.push(runtimeErrorOverlay.default());

  const cartographer = await import("@replit/vite-plugin-cartographer");
  plugins.push(
    cartographer.cartographer({
      root: path.resolve(import.meta.dirname, ".."),
    }),
  );

  const devBanner = await import("@replit/vite-plugin-dev-banner");
  plugins.push(devBanner.devBanner());
}

export default defineConfig({
  base: basePath,
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets",
      ),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: Boolean(rawPort),
    host: "0.0.0.0",
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
