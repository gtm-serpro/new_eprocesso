import { render, screen } from "@testing-library/react";

import BrAvatar from ".";

describe("<BrAvatar />", () => {
  it("deveria renderizar o avatar simples e com ícone", () => {
    const { container, getByTitle } = render(<BrAvatar title="alt do avatar" />);
    getByTitle("alt do avatar");
    expect(container.firstChild).toHaveClass("br-avatar");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o avatar simples e com imagem", () => {
    const { container, getByTitle } = render(<BrAvatar src="imagem" title="alt do avatar" />);
    getByTitle("alt do avatar");
    expect(container.firstChild).toHaveClass("br-avatar");
  });

  it("deveria renderizar o avatar large se prop informada", () => {
    const { container } = render(<BrAvatar size="large" />);
    expect(container.firstChild).toHaveClass("large");
  });

  it("deveria renderizar o avatar medium se prop informada", () => {
    const { container } = render(<BrAvatar size="medium" />);
    expect(container.firstChild).toHaveClass("medium");
  });

  it("deveria renderizar o título se informado", () => {
    render(<BrAvatar title="Fulana de Tal" />);
    screen.getByTitle("Fulana de Tal");
  });
});
