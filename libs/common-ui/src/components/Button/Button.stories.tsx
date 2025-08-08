import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Click me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /click me/i });

    // Simple assertions
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Click me");

    // Simple interaction
    await userEvent.click(button);

    console.log("✅ Primary button test passed");
  },
};

export const Secondary: Story = {
  args: {
    text: "Click me",
    variant: "red",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /click me/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Click me");
    await userEvent.click(button);

    console.log("✅ Secondary button test passed");
  },
};

// Simple story without complex interactions
export const InteractiveTest: Story = {
  args: {
    text: "Interactive Test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Basic tests only
    await expect(button).toBeVisible();
    await userEvent.click(button);

    console.log("✅ Interactive test passed");
  },
};
