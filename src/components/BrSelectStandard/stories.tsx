import { Meta, Story } from "@storybook/react";

import BrSelectStandard, { BrSelectStandardProps } from "@/components/BrSelectStandard";

export default {
  title: "Formulários/SelectStandard",
  component: BrSelectStandard,
  args: {
    label: "",
    placeholder: "Selecione",
    options: ["opção 1", "opção 2", "opção 3"],
  },
} as Meta;

const Template: Story<BrSelectStandardProps> = (args) => <BrSelectStandard {...args} />;

export const Simples = Template.bind({});

export const ComRotulo = Template.bind({});
ComRotulo.args = { ...ComRotulo.args, label: "Rótulo do Select Standard" };
