import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./test-results",
  use: {
    baseURL: "http://localhost:6006",
    screenshot: "on",
    video: "off",
    trace: "on",
    headless: true,
  },

  // Optional: Start web server before tests
  webServer: {
    command: "nx storybook common-ui --port=6006",
    port: 6006,
    reuseExistingServer: !process.env.CI,
  },
});
