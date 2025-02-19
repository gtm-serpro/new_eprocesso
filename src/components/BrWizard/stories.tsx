import { Meta, Story } from "@storybook/react";

import BrWizard, { BrWizardProps } from ".";
import BrWizardPanel from "./WizardPanel/WizardPanel";

export default {
  title: "Navegação/Wizard",
  component: BrWizard,
} as Meta;

export const Simples: Story<BrWizardProps> = (args) => (
  <BrWizard {...args} onConclude={(event) => alert("Cliquei em Concluir")}>
    <BrWizardPanel title="Dados Pessoais">
      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </BrWizardPanel>
    <BrWizardPanel title="Validar Dados">
      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </BrWizardPanel>
    <BrWizardPanel title="Habilitar Cadastro">
      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </BrWizardPanel>
    <BrWizardPanel title="Cadastrar Senha">
      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </BrWizardPanel>
    <BrWizardPanel title="Finalizar">
      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged.
    </BrWizardPanel>
  </BrWizard>
);
Simples.args = {
  height: "400px",
};
