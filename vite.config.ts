import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/OnService-V2/",
  server: {
    host: "192.168.100.5",
  },
});
