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

    // Check if button is visible
    await expect(button).toBeInTheDocument();

    // Check button text
    await expect(button).toHaveTextContent("Click me");

    // Simulate click
    await userEvent.click(button);

    // You can add more assertions after click if needed
    console.log("Primary button clicked!");
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

    // Check if button is visible
    await expect(button).toBeInTheDocument();

    // Check button text
    await expect(button).toHaveTextContent("Click me");

    // Check if variant class is applied (adjust based on your Button implementation)
    await expect(button).toHaveClass(/red/); // or whatever class your red variant adds

    // Simulate hover
    await userEvent.hover(button);

    // Simulate click
    await userEvent.click(button);

    console.log("Secondary button clicked!");
  },
};

// Example of more complex interactions
export const InteractiveTest: Story = {
  args: {
    text: "Interactive Test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button") as HTMLButtonElement;

    // Test initial state
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();

    // Test hover state
    await userEvent.hover(button);

    // Test click
    await userEvent.click(button);

    // Test double click
    await userEvent.dblClick(button);

    // Test keyboard interaction
    button.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard(" "); // Space key

    console.log("All interactions completed!");
  },
};
