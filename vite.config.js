import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jodo-app/", 
  plugins: [react()],
  server:{
    port:'3000'
  },
  build: {
    rollupOptions: {
      external: ["bootstrap/dist/css/bootstrap.min.css"],
    },
  },
});
