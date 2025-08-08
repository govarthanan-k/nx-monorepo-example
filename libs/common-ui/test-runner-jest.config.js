const { getJestConfig } = require("@storybook/test-runner");

module.exports = getJestConfig({
  // Add any Jest configuration overrides here
  testTimeout: 15000,
});
