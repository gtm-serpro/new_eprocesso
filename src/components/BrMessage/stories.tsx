import { Meta, Story } from "@storybook/react";

import BrMessage, { BrMessageProps } from ".";

export default {
  title: "Feedback/Message",
  component: BrMessage,
} as Meta;

const Template: Story<BrMessageProps> = (args) => <BrMessage {...args} />;

export const Padrao = Template.bind({});
Padrao.storyName = "Padrão (info)";
Padrao.args = {
  message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, a!",
};

export const Info = Template.bind({});
Info.args = {
  ...Padrao.args,
  status: "info",
};

export const Success = Template.bind({});
Success.args = {
  ...Padrao.args,
  status: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Padrao.args,
  status: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Padrao.args,
  status: "danger",
};

export const ComTitulo = Template.bind({});
ComTitulo.storyName = "Com título";
ComTitulo.args = {
  ...Padrao.args,
  title: "Título",
};

export const ComTituloInline = Template.bind({});
ComTituloInline.storyName = "Com título (inline)";
ComTituloInline.args = {
  ...ComTitulo.args,
  inlineTitle: true,
};

export const Closable = Template.bind({});
Closable.args = {
  ...Padrao.args,
  closable: true,
};
