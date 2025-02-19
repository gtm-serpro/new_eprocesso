import { render, screen } from "@testing-library/react";

import BrSkipLink from ".";

describe("<BrSkipLink />", () => {
  it("deveria renderizar o skip link", () => {
    const { container } = render(<BrSkipLink
      data={[
        {
        label: "Ir para o conteúdo (1/4)",
        link: "#main-component"
        },
        {
        label: "Ir para o conteúdo (2/4)",
        link: "#main-component"
        },
        {
        label: "Ir para o conteúdo (3/4)",
        link: "#main-component"
        },
        {
        label: "Ir para o conteúdo (4/4)",
        link: "#main-component"
        }
      ]}
    >Conteúdo</BrSkipLink>);

    expect(container.firstChild).toHaveClass("br-skiplink");
    expect(container.firstChild).toMatchSnapshot();
  });
});
