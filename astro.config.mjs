import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    vue(),
    tailwind(),
  ],
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: true
  }
});
