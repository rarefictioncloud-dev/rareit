import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  // "/" for rareit.in (Hostinger), "/rareit/" for GitHub Pages
  base: mode === "github" ? "/rareit/" : "/",
  plugins: [react(), tailwindcss()],
}));