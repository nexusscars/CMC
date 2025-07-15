<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CMC/', // 
  plugins: [react()],
});
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/CMC/", //  
  plugins: [react()],
});

>>>>>>> 5bdd322 (Remove hardcoded script path from index.html)
