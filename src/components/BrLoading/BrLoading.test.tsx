import { render, screen } from "@testing-library/react";

import BrLoading from ".";

describe("<BrLoading />", () => {
  it("deveria renderizar o loading simples", () => {
    const { container } = render(<BrLoading />);
    expect(container.getElementsByClassName("loading")).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o loading grande se prop informada", () => {
    const { container } = render(<BrLoading large />);
    const element = container.getElementsByClassName("loading");
    expect(element[0]).toHaveClass("medium");
  });

  it("nao deveria renderizar rótulo se nao informado", () => {
    render(<BrLoading />);
    const element = screen.queryByText(/rótulo carregando.../i);
    expect(element).toBeNull();
  });

  it("deveria renderizar rótulo se informado", () => {
    render(<BrLoading label="Rótulo Carregando..." />);
    const element = screen.getByText(/rótulo carregando.../i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("rotulo");
  });
});
