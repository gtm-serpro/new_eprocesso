import { render } from "@testing-library/react";

import BrDivider from ".";

describe("<BrDivider />", () => {
  it("deveria renderizar o divider simples", () => {
    const { container } = render(<BrDivider />);
    expect(container.firstChild).toHaveClass("br-divider");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o divider vertical se prop informada", () => {
    const { container } = render(<BrDivider vertical />);
    expect(container.firstChild).toHaveClass("vertical");
  });

  it("deveria renderizar o divider simples com margin se prop informada", () => {
    const { container } = render(<BrDivider m={3} />);
    expect(container.firstChild).toHaveClass("m-3");
  });
});
