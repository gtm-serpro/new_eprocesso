import { render, screen } from "@testing-library/react";

import BrItem from "@/components/BrItem";

import BrList from ".";

describe("<BrList />", () => {
  it("deveria renderizar com a classe br-list", () => {
    const { container } = render(<BrList>Conteúdo</BrList>);

    expect(container.firstChild).toHaveClass("br-list");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar com os itens especificados", () => {
    render(
      <BrList>
        <BrItem>Item 1</BrItem>
        <BrItem>Item 2</BrItem>
      </BrList>
    );

    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/item 2/i)).toBeInTheDocument();
  });

  it("deveria renderizar com a classe horizontal", () => {
    const { container } = render(<BrList horizontal>Conteúdo</BrList>);

    expect(container.firstChild).toHaveClass("horizontal");

    expect(container.firstChild).toMatchSnapshot();
  });
});
