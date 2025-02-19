import { Meta, Story } from "@storybook/react";

import BrInput, { BrInputProps } from ".";

import { Col, Row } from "@/common/Grid";

export default {
  title: "Formulários/Input",
  component: BrInput,
  // argTypes: {
  //   numericProps: {
  //     control: "object",
  //   },
  //   status: {
  //     control: "radio",
  //     options: {
  //       default: "",
  //       success: "success",
  //       danger: "danger",
  //       info: "info",
  //       warning: "warning",
  //     },
  //   },
  // },
} as Meta;

const Template: Story<BrInputProps> = (args) => (
  <Row>
    <Col sm={3}>
      <BrInput {...args} />
    </Col>
  </Row>
);

export const Simples = Template.bind({});
Simples.args = {
  label: "Label",
  placeholder: "Placeholder customizado",
};

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  label: "Input desabilitado",
  placeholder: "Placeholder customizado",
  disabled: true,
};

export const Numerico = Template.bind({});
Numerico.storyName = "Numérico";
Numerico.args = {
  placeholder: "Digite apenas os números do seu RG",
  label: "RG",
  numeric: true,
  maxLength: 20,
};

export const Formatado = Template.bind({});
Formatado.storyName = "Numérico formatado";
Formatado.args = {
  label: "Input de número",
  placeholder: "Digite um valor em reais",
  feedbackText:
    "É preciso digitar a vírgula ou mover o cursor para após a vírgula para separar os centavos.",
  maxLength: 20,
  numeric: {
    decimalScale: 2,
    prefix: "R$ ",
  },
};

export const Mask = Template.bind({});
Mask.storyName = "Com máscara";
Mask.args = {
  label: "Digite o seu CPF",
  mask: "###.###.###-##",
};

export const ComFeedback = Template.bind({});
ComFeedback.args = {
  label: "Label Customizado",
  placeholder: "Placeholder customizado",
  status: "danger",
  feedbackText: "Campo obrigatório",
};
