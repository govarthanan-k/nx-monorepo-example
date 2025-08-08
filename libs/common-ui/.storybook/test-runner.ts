import { TestRunnerConfig } from "@storybook/test-runner";

const { getStoryContext } = require("@storybook/test-runner");

const config: TestRunnerConfig = {
  // Simplified setup
  setup() {
    console.log("Starting Storybook test runner...");
  },

  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);

    // Check if snapshot testing is enabled
    if (storyContext.parameters?.snapshot?.enabled !== false) {
      // Take DOM snapshot
      const elementHandler = await page.$("#storybook-root");
      const innerHTML = await elementHandler?.innerHTML();
      expect(innerHTML).toMatchSnapshot(
        `${context.title}-${context.name}.html`
      );

      // Optionally take visual snapshot
      if (storyContext.parameters?.snapshot?.visual) {
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot({
          customSnapshotIdentifier: `${context.title}-${context.name}`,
        });
      }
    }
  },

  // Tags to include/exclude stories
  tags: {
    exclude: ["broken"],
    skip: ["skip-test"],
  },
};

export default config;
