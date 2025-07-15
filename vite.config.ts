import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cmc/', // 👈 Required for GitHub Pages
  plugins: [react()],
});
