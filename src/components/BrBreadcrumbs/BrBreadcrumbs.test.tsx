import { fireEvent, render, screen } from "@testing-library/react";
import BrBreadcrumbs, { Breadcrumb } from ".";

describe("<BrBreadcrumbs/>", () => {
  it("deveria renderizar lista vazia de crumbs se nada for informado", () => {
    const { container } = render(<BrBreadcrumbs />);
    expect(container.firstChild).toHaveClass("br-breadcrumb");
    expect(screen.getByRole("list")).toHaveClass("crumb-list");
    expect(screen.queryByRole("listitem")).toBeNull();
  });

  it("deveria renderizar lista de crumbs informadas", () => {
    const crumbs = [
      { label: "crumb-1", onClick: () => true },
      { label: "crumb-2", onClick: () => true },
      { label: "crumb-3", onClick: () => true },
    ];

    const { container } = render(<BrBreadcrumbs crumbs={crumbs} />);

    expect(container.firstChild).toHaveClass("br-breadcrumb");
    expect(screen.getByRole("list")).toHaveClass("crumb-list");

    screen.getAllByRole("listitem").forEach((item) => {
      expect(item).toHaveClass("crumb");
      expect(item.firstChild).toHaveClass("text-center icon fas fa-chevron-right");
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar lista de crumbs com 1 home", () => {
    const crumbs: Breadcrumb[] = [
      { label: "home", onClick: () => true, isHome: true },
      { label: "crumb-2", onClick: () => true },
      { label: "crumb-3", onClick: () => true },
    ];
    render(<BrBreadcrumbs crumbs={crumbs} />);

    expect(screen.getAllByRole("listitem")[0]).toHaveClass("crumb home");
  });

  it("deveria responder ao clique nas crumbs", () => {
    const handleClick = jest.fn();

    const crumbs = [
      { label: "crumb-1", onClick: handleClick },
      { label: "crumb-2", onClick: handleClick },
      { label: "crumb-3", onClick: handleClick },
    ];

    render(<BrBreadcrumbs crumbs={crumbs} />);

    fireEvent.click(screen.getByText("crumb-1"));
    fireEvent.click(screen.getByText("crumb-2"));
    fireEvent.click(screen.getByText("crumb-3"));

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
