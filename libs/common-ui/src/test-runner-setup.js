// Global setup for test runner
import "jest-playwright-preset";

// Extend Jest matchers
expect.extend({
  toBeStorybook(received) {
    const pass = received && typeof received === "object";
    return {
      pass,
      message: () => `Expected ${received} to be a Storybook context`,
    };
  },
});

// Global test configuration
jest.setTimeout(30000);

// Setup before all tests
beforeAll(async () => {
  console.log("🚀 Starting Storybook test runner");
});

// Cleanup after all tests
afterAll(async () => {
  console.log("✅ Storybook test runner completed");
});

// Setup before each test
beforeEach(async () => {
  // Add any global setup needed before each story test
});

// Global error handling
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
