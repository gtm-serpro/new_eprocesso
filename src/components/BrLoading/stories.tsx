import { Meta, Story } from "@storybook/react";

import BrLoading, { BrLoadingProps } from ".";

export default {
  title: "Feedback/Loading",
  component: BrLoading,
} as Meta;

const Template: Story<BrLoadingProps> = (args) => <BrLoading {...args} />;

export const Padrao = Template.bind({});
Padrao.storyName = "Padrão";

export const Large = Template.bind({});
Large.args = { large: true };

export const ComRotulo = Template.bind({});
ComRotulo.storyName = "Com Rótulo";
ComRotulo.args = { label: "Carregando..." };
