import { Meta, Story } from "@storybook/react";

import BrTextarea, { BrTextareaProps } from ".";

export default {
  title: "Formulários/Textarea",
  component: BrTextarea,
} as Meta;

export const Simples: Story<BrTextareaProps> = (args) => (
  <BrTextarea {...args}>Conteúdo</BrTextarea>
);
