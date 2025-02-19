import { Meta, Story } from "@storybook/react";

import BrMagicButton, { BrMagicButtonProps } from ".";

export default {
  title: "Formulários/MagicButton",
  component: BrMagicButton,
} as Meta;

export const Simples: Story<BrMagicButtonProps> = (args) => (
  <BrMagicButton {...args}>Conteúdo</BrMagicButton>
);
