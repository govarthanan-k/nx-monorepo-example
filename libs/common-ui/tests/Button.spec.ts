import { test, expect } from "@playwright/test";

test.describe("Button component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/components-button--primary");

    await page.waitForSelector("#storybook-preview-iframe", { timeout: 10000 });

    const frame = await page.frameLocator("#storybook-preview-iframe");

    await frame
      .getByRole("button", { name: "Click me" })
      .waitFor({ timeout: 5000 });
  });

  test("renders primary button with correct text", async ({ page }) => {
    const frame = page.frameLocator("#storybook-preview-iframe");
    const button = frame.getByRole("button", { name: "Click me" });

    await expect(button).toBeVisible();
  });

  test("fires click event", async ({ page }) => {
    const frame = page.frameLocator("#storybook-preview-iframe");
    const button = frame.getByRole("button", { name: "Click me" });

    await button.click();
  });
});
