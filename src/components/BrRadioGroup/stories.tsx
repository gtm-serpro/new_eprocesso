import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import BrRadioGroup, { BrRadioGroupProps } from ".";

const options = [
  { id: "1", label: "opção x", value: "opt-x" },
  { id: "2", label: "opção y", value: "opt-y" },
  { id: "3", label: "opção z", value: "opt-z", disabled: true },
];

export default {
  title: "Formulários/RadioGroup",
  component: BrRadioGroup,
  args: {
    title: "",
    info: "",
    disabled: false,
    inline: false,
    name: "radiogroup",
    options,
  },
} as Meta;

const Template: Story<BrRadioGroupProps> = (args) => {
  const [value, setValue] = useState("opt-x");

  return <BrRadioGroup {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

Template.args = { ...Template.args, disabled: false };

export const Simples = Template.bind({});

export const Completo = Template.bind({});
Completo.args = {
  ...Completo.args,
  title: "Rótulo do Grupo",
  info: "Informações Adicionais",
};
