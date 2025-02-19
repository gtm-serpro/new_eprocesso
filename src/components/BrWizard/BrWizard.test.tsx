import { render, screen } from "@testing-library/react";

import BrWizard from ".";
import BrWizardPanel from "./WizardPanel/WizardPanel";

describe("<BrWizard />", () => {
  it("deveria renderizar o wizard", () => {
    const { container } = render(
      <BrWizard height="400px" onConclude={(event) => alert("Cliquei em Concluir")}>
        <BrWizardPanel title="Dados Pessoais">
          Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </BrWizardPanel>
        <BrWizardPanel title="Validar Dados">
          Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </BrWizardPanel>
        <BrWizardPanel title="Habilitar Cadastro">
          Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </BrWizardPanel>
        <BrWizardPanel title="Cadastrar Senha">
          Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </BrWizardPanel>
        <BrWizardPanel title="Finalizar">
          Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </BrWizardPanel>
      </BrWizard>
    );

    expect(container.firstChild?.firstChild).toHaveClass("br-wizard");
    expect(container.firstChild).toMatchSnapshot();
  });
});
