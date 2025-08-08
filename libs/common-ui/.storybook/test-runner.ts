import { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  // Simplified setup
  setup() {
    console.log("Starting Storybook test runner...");
  },

  // After each story test with minimal logic
  async postVisit(page, context) {
    const { id, title, name } = context;
    console.log(`✅ Completed: ${title} - ${name}`);
  },

  // Tags to include/exclude stories
  tags: {
    exclude: ["broken"],
    skip: ["skip-test"],
  },
};

export default config;
