import { render, screen } from "@testing-library/react";

import BrMenu from ".";

describe("<BrMenu />", () => {
  it("deveria renderizar com a classe br-menu", () => {
    const { container } = render(
      <BrMenu systemName="Título" data={[{ label: "Item 1" }, { label: "Item 2" }]} />
    );

    expect(container.firstChild).toHaveClass("br-menu");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar o texto do nome do sistema.", () => {
    const { container } = render(
      <BrMenu systemName="Título" data={[{ label: "Item 1" }, { label: "Item 2" }]} />
    );

    expect(screen.getByText(/Título/i)).toBeInTheDocument();
  });

  it("deveria renderizar com a classe contextual", () => {
    const { container } = render(
      <BrMenu
        type="contextual"
        systemName="Título"
        data={[{ label: "Item 1" }, { label: "Item 2" }]}
      />
    );

    expect(container.lastChild).toHaveClass("contextual");
  });

  it("deveria renderizar com a classe push", () => {
    const { container } = render(
      <BrMenu type="push" systemName="Título" data={[{ label: "Item 1" }, { label: "Item 2" }]} />
    );

    expect(container.firstChild).toHaveClass("push");
  });
});
