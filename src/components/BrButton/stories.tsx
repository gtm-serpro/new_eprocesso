import { Meta, Story } from "@storybook/react";
import BrButton, { BrButtonProps } from ".";

export default {
  title: "Formulários/Button",
  component: BrButton,
} as Meta;

const Template: Story<BrButtonProps> = (args) => <BrButton {...args} />;

export const Padrao = Template.bind({});
Padrao.storyName = "Padrão";
Padrao.args = {
  children: "Rótulo",
};

export const Primary = Template.bind({});
Primary.args = { ...Padrao.args, primary: true };

export const Secondary = Template.bind({});
Secondary.args = { ...Padrao.args, secondary: true };

export const Circle = Template.bind({});
Circle.args = { children: "R", circle: true, primary: true };

export const ComIcone = Template.bind({});
ComIcone.args = { children: "Cancelar", icon: "times", primary: true };
