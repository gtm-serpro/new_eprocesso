import { render } from "@testing-library/react";
import Typography from ".";

describe("<Typography/>", () => {
  it("deveria renderizar e conferir snapshot", () => {
    const { container } = render(
      <Typography weight="bold" size="up-03" color="primary-default" onClick={() => ""}>
        Texto
      </Typography>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar com o tamanho informado", () => {
    const { getByText } = render(<Typography size="up-03">Texto</Typography>);
    expect(getByText("Texto")).toHaveClass("text-up-03");
  });

  it("deveria renderizar com o weight informado", () => {
    const { getByText } = render(<Typography weight="extra-bold">Texto</Typography>);
    expect(getByText("Texto")).toHaveClass("text-extra-bold");
  });

  it("deveria renderizar com a color informada", () => {
    const { getByText } = render(<Typography color="secondary-01">Texto</Typography>);
    expect(getByText("Texto")).toHaveClass("text-secondary-01");
  });

  it("deveria adicionar hover se clickable", () => {
    const { getByText } = render(<Typography onClick={() => ""}>Texto</Typography>);
    expect(getByText("Texto")).toHaveClass("ebr-clickable-text");
  });
});
