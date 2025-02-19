import { Meta, Story } from "@storybook/react";

import BrCheckbox, { BrCheckboxProps } from ".";

export default {
  title: "Formulários/Checkbox",
  component: BrCheckbox,
} as Meta;

export const SemRotulo: Story<BrCheckboxProps> = (args) => <BrCheckbox {...args} />;

export const ComRotulo: Story<BrCheckboxProps> = (args) => <BrCheckbox {...args} />;
ComRotulo.args = { label: "meu check" };
