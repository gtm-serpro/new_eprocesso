import { render, screen } from "@testing-library/react";

import Base from ".";

describe("<Base />", () => {
  it("deveria renderizar o base", () => {
    const { container } = render(<Base>Conteúdo</Base>);
    expect(container.firstChild).toHaveClass("base");
  });
});
