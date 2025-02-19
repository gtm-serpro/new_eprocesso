import { render } from "@testing-library/react";

import BrMagicButton from ".";

describe("<BrMagicButton />", () => {
  it("deveria renderizar o Magic Button", () => {
    const { container } = render(<BrMagicButton>Conteúdo</BrMagicButton>);

    expect(container.firstChild).toHaveClass("br-magic-button");
    expect(container.firstChild).toMatchSnapshot();
  });
});
