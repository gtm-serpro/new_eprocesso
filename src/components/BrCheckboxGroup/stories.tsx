import { Meta, Story } from "@storybook/react";
import BrCheckboxGroup, { BrCheckboxGroupProps } from ".";
import BrCheckbox from "../BrCheckbox";

const options = [
  { id: "1", label: "opção x" },
  { id: "2", label: "opção y" },
  { id: "3", label: "opção w" },
  { id: "4", label: "opção k" },
];

export default {
  title: "Formulários/CheckboxGroup",
  component: BrCheckboxGroup,
  args: { options },
} as Meta;

const Template: Story<BrCheckboxGroupProps> = (args) => (
  <BrCheckboxGroup {...args}>
    {options.map((o) => (
      <BrCheckbox key={o.id} label={o.label} />
    ))}
  </BrCheckboxGroup>
);

export const Default = Template.bind({});

export const Inline = Template.bind({});
Inline.args = { inline: true };

export const Completo = Template.bind({});
Completo.args = {
  title: "Título",
  info: "Informações Adicionais",
  feedback: { status: "success", message: "Selecione mais de uma opção" },
};
