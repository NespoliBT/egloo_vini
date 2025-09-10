import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import alias from "@rollup/plugin-alias";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    alias({
      entries: [
        { find: "$lib", replacement: path.resolve(__dirname, "src/lib") },
        { find: "$assets", replacement: path.resolve(__dirname, "src/assets") },
      ],
    }),
  ],

  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "src/lib"),
      $assets: path.resolve(__dirname, "src/assets"),
    },
  },
});
