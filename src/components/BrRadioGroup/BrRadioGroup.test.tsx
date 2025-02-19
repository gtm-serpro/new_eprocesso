import { render, screen } from "@testing-library/react";

import BrRadioGroup from ".";

describe("<BrRadio />", () => {
  it("deveria renderizar as opcoes x, y e z", () => {
    const options = [
      { id: "1", label: "opção x", value: "opt-x" },
      { id: "2", label: "opção y", value: "opt-y" },
      { id: "3", label: "opção z", value: "opt-z" },
    ];

    render(<BrRadioGroup name="grupo" options={options} value={"opt-x"} onChange={() => ""} />);

    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByText(/opção x/i)).toBeInTheDocument();
    expect(screen.getByText(/opção y/i)).toBeInTheDocument();
    expect(screen.getByText(/opção z/i)).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria conter atributo id com prefixo grupo", () => {
    const options = [
      { id: "1", label: "opção x", value: "opt-x" },
      { id: "2", label: "opção y", value: "opt-y" },
      { id: "3", label: "opção z", value: "opt-z" },
    ];

    render(<BrRadioGroup name="grupo" options={options} value={"opt-x"} onChange={() => ""} />);

    expect(screen.getByText(/opção x/i)).toHaveAttribute("for", "grupo-1");
    expect(screen.getByText(/opção y/i)).toHaveAttribute("for", "grupo-2");
    expect(screen.getByText(/opção z/i)).toHaveAttribute("for", "grupo-3");
  });

  it("deveria conter atributo id com prefixo grupo", () => {
    const options = [
      { id: "1", label: "opção x", value: "opt-x" },
      { id: "2", label: "opção y", value: "opt-y" },
      { id: "3", label: "opção z", value: "opt-z" },
    ];

    render(
      <BrRadioGroup
        name="grupo"
        title="Meu Rótulo Customizado"
        info="Minhas Informações Adicionais Customizadas"
        options={options}
        value={"opt-x"}
        onChange={() => ""}
      />
    );

    expect(screen.getByText(/meu rótulo customizado/i)).toBeInTheDocument();
    expect(screen.getByText(/minhas informações adicionais customizadas/i)).toBeInTheDocument();
  });
});
