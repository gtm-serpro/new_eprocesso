import { render, screen } from "@testing-library/react";

import BrItem from ".";

describe("<BrItem />", () => {
  it("deveria renderizar com a classe br-item", () => {
    const { container } = render(<BrItem>Conteúdo</BrItem>);

    expect(container.firstChild).toHaveClass("br-item");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar com um divisor e o filho especificado.", () => {
    const { container } = render(<BrItem divider>filho</BrItem>);

    expect(screen.getByText(/filho/i)).toBeInTheDocument();

    expect(container.lastChild).toHaveClass("br-divider");
  });
});
