import { fireEvent, render, screen } from "@testing-library/react";

import BrTab from ".";
import BrTabPanel from "./TabPanel";

describe("<BrTab />", () => {
  const items = ["Panel 1", "Panel 2", "Panel 3"];
  const activeIndex = 0;

  it("deveria renderizar um component Tab com três abas com a primeira habilitada", () => {
    const { container } = render(
      <BrTab items={items} activeIndex={activeIndex} onChange={() => ""}>
        <BrTabPanel activeIndex={activeIndex} index={0}>
          Detalhe Painel 1
        </BrTabPanel>
        <BrTabPanel activeIndex={activeIndex} index={1}>
          Detalhe Painel 2
        </BrTabPanel>
        <BrTabPanel activeIndex={activeIndex} index={2}>
          Detalhe Painel 3
        </BrTabPanel>
      </BrTab>
    );

    expect(screen.getByText(/Painel 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Painel 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Painel 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Detalhe Painel 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Detalhe Painel 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Detalhe Painel 3/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("br-tab");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria renderizar aba como botões e mudar index quando clicar", () => {
    const handleChange = jest.fn();

    render(
      <BrTab items={items} activeIndex={0} onChange={handleChange}>
        <BrTabPanel activeIndex={activeIndex} index={0}>
          Painel 1
        </BrTabPanel>
        <BrTabPanel activeIndex={activeIndex} index={1}>
          Painel 2
        </BrTabPanel>
        <BrTabPanel activeIndex={activeIndex} index={2}>
          Painel 3
        </BrTabPanel>
      </BrTab>
    );

    fireEvent.click(screen.getByRole("button", { name: "Panel 1" }));
    expect(handleChange).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByRole("button", { name: "Panel 2" }));
    expect(handleChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByRole("button", { name: "Panel 3" }));
    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
