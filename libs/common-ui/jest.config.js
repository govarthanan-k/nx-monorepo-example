module.exports = {
  preset: "jest-playwright-preset",
  testRunner: "@storybook/test-runner",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
