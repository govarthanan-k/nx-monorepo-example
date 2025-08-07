import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { text: "Click me" },
};

export const Secondary: Story = {
  args: { text: "Click me", variant: "red" },
};
