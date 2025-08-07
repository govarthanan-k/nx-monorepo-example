import type { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { text, variant = "blue" } = props;

  return <button style={{ background: variant }}>{text}</button>;
};
