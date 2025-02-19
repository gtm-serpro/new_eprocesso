import { render } from "@testing-library/react";

import BrTag from ".";

describe("<BrTag />", () => {
  it("deveria renderizar props tag default (tipo texto e cor primária)", () => {
    const { container, getByText } = render(<BrTag value="Label" />);

    expect(container.firstChild).toHaveClass("br-tag text primary-default");
    expect(getByText("Label")).toBeInTheDocument();
  });

  it("deveria renderizar tag small", () => {
    const { container } = render(<BrTag value="Label" size="small" />);
    expect(container.firstChild).toHaveClass("br-tag small");
  });

  it("deveria renderizar tag medium", () => {
    const { container } = render(<BrTag value="Label" size="medium" />);
    expect(container.firstChild).toHaveClass("br-tag medium");
  });

  it("deveria renderizar tag large", () => {
    const { container } = render(<BrTag value="Label" size="large" />);
    expect(container.firstChild).toHaveClass("br-tag large");
  });

  it("deveria renderizar tag com ícone", () => {
    const { container } = render(<BrTag value="Label" icon="checked" />);

    expect(container.firstChild).toHaveClass("br-tag text primary-default");
    expect(container.firstChild?.firstChild).toHaveClass("fas fa-checked");
  });

  it("não deveria renderizar tag count com ícone", () => {
    const { container } = render(<BrTag value="12" type="count" icon="checked" />);

    expect(container.firstChild).toHaveClass("br-tag count primary-default");
    expect(container.firstChild?.firstChild).not.toHaveClass("fas fa-checked");
  });
});

describe("<BrTag type='text' />", () => {
  it("deveria renderizar props tag texto com cor informada", () => {
    const { container, getByText } = render(
      <BrTag value="Label Text" type="text" color="highlight" />
    );

    expect(container.firstChild).toHaveClass("br-tag text highlight");
    expect(getByText("Label Text")).toBeInTheDocument();
  });
});

describe("<BrTag type='interaction' />", () => {
  it("deveria renderizar interaction", () => {
    const { container, getByText } = render(<BrTag value="Toggle Text" type="interaction" />);
    expect(container.firstChild).toHaveClass("br-tag interaction");
    expect(getByText("Toggle Text")).toBeInTheDocument();
  });
});

describe("<BrTag type='status' />", () => {
  it("deveria renderizar props tag status", () => {
    const { container } = render(<BrTag type="status" color="warning" />);
    expect(container.firstChild?.firstChild).toHaveClass("br-tag status warning");
  });

  it("deveria renderizar props tag status com cor informada e texto", () => {
    const { container, getByText } = render(
      <BrTag value="Status Text" type="status" color="success" />
    );

    expect(container.firstChild?.firstChild).toHaveClass("br-tag status success");
    expect(getByText("Status Text")).toBeInTheDocument();
  });
});

describe("<BrTag type='count'/>", () => {
  it("deveria renderizar tag contagem de um dígito", () => {
    const { container, getByText } = render(<BrTag value="5" type="count" color="danger" />);

    expect(container.firstChild).toHaveClass("br-tag count danger");
    expect(getByText("5")).toBeInTheDocument();
  });

  it("deveria renderizar tag contagem de até 3 dígitos", () => {
    const { container, getByText } = render(<BrTag value="159" type="count" color="danger" />);

    expect(container.firstChild).toHaveClass("br-tag count danger");
    expect(getByText("159")).toBeInTheDocument();
  });

  it("deveria adaptar tag contagem > 3 dígitos (integer)", () => {
    const { container, getByText } = render(<BrTag value="3847" type="count" color="danger" />);

    expect(container.firstChild).toHaveClass("br-tag count danger");
    expect(getByText("999+")).toBeInTheDocument();
  });

  it("deveria adaptar tag contagem > 3 dígitos (float)", () => {
    const { container, getByText } = render(<BrTag value="1.23" type="count" color="danger" />);

    expect(container.firstChild).toHaveClass("br-tag count danger");
    expect(getByText("1,2 ...")).toBeInTheDocument();
  });
});
