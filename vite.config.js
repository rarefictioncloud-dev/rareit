import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const isGitHub = mode === "github";

  return {
    base: isGitHub ? "/rareit/" : "/",

    plugins: [
      react(),
      tailwindcss(),
    ],

    build: {
      outDir: "dist",
      assetsDir: "assets",
      emptyOutDir: true,
      sourcemap: false,
    },

    server: {
      port: 5173,
      strictPort: true,
    },
  };
});