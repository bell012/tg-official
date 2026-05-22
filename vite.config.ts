import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                convertColors: { currentColor: true },
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    open: true,
    cors: true,
  },
});
