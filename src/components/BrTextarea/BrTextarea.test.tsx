import { render, screen } from "@testing-library/react";

import BrTextarea from ".";

describe("<BrTextarea />", () => {
  it("deveria renderizar o TextArea", () => {
    const { container } = render(<BrTextarea />);
    expect(container.firstChild).toHaveClass("br-textarea");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o Label informado", () => {
    render(<BrTextarea label="label da textarea" />);
    screen.getByText("label da textarea");
  });

  it("deveria renderizar o placeholder informado", () => {
    render(<BrTextarea placeholder="placeholder da textarea" />);
    screen.getByPlaceholderText("placeholder da textarea");
  });
});
