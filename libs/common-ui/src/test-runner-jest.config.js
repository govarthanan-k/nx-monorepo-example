const { getJestConfig } = require("@storybook/test-runner");

module.exports = getJestConfig({
  // Basic Jest configuration
  testTimeout: 15000,

  // Reduce complexity - remove custom setup for now
  // setupFilesAfterEnv: ['<rootDir>/test-runner-setup.js'],

  // Simple reporters
  reporters: ["default"],

  // Basic transform
  transform: {
    "^.+\\.(js|jsx|ts|tsx)": "babel-jest",
  },
});
