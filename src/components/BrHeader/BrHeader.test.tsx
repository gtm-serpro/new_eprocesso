import { render, screen } from "@testing-library/react";

import BrHeader from ".";

describe("<BrHeader />", () => {
  it("deveria renderizar com a classe br-header", () => {
    const { container } = render(<BrHeader title="Título" subTitle="Subtítulo" />);

    expect(container.firstChild).toHaveClass("br-header");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o texto do subtítulo.", () => {
    const { container } = render(<BrHeader title="Título" subTitle="Subtítulo" />);

    expect(screen.getByText(/Subtítulo/i)).toBeInTheDocument();
  });
});
