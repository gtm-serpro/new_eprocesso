import { Meta, Story } from "@storybook/react";

import BrSelect, { BrSelectProps } from "@/components/BrSelect";

export default {
  title: "Formulários/Select",
  component: BrSelect,
  args: {
    label: "",
    placeholder: "Selecione uma opção",
    options: [
      { label: "Opção 1", value: 1 },
      { label: "Opção 2", value: 2 },
      { label: "Opção 3", value: 3 },
    ],
  },
} as Meta;

const Template: Story<BrSelectProps> = (args) => <BrSelect {...args} />;

export const Simples = Template.bind({});

export const ComRotulo = Template.bind({});
ComRotulo.args = { ...ComRotulo.args, label: "Rótulo do Select" };
