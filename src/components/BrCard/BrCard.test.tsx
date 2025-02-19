import { render, screen } from "@testing-library/react";
import BrCard from ".";

describe("BrCard", () => {
  it("deveria renderizar conteúdo do BrCard", () => {
    const { container } = render(<BrCard>Conteúdo</BrCard>);

    expect(screen.getByText("Conteúdo")).toHaveClass("card-content");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar título do BrCard", () => {
    render(<BrCard title="Título">Conteúdo</BrCard>);
    expect(screen.getByText("Título")).toHaveClass("text-weight-semi-bold text-up-02");
  });

  it("deveria renderizar root do BrCard", () => {
    const { container } = render(<BrCard>Conteúdo</BrCard>);
    expect(container.firstChild).toHaveClass("br-card");
  });

  it("deveria renderizar desabilitado", () => {
    const { container } = render(<BrCard disabled>Conteúdo</BrCard>);
    expect(container.firstChild).toHaveClass("br-card");
    expect(container.firstChild).toHaveClass("disabled");
  });

  it("deveria renderizar o footer", () => {
    render(<BrCard footer={<div className="test-footer">Footer</div>}>Conteúdo</BrCard>);
    const footer = screen.getByText("Footer");
    expect(footer).toHaveClass("test-footer");
    expect(footer.parentElement).toHaveClass("card-footer");
  });
});
