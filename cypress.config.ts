import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://api.realworld.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
