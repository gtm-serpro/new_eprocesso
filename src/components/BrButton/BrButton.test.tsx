import { render, screen } from "@testing-library/react";

import BrButton from ".";

describe("<BrButton />", () => {
  it("deveria renderizar o button", () => {
    const { container } = render(<BrButton>BrButton</BrButton>);

    expect(screen.getByRole("button", { name: /BrButton/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
