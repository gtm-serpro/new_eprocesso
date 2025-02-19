import { render, screen } from "@testing-library/react";

import BrDateTimePicker from ".";

describe("<BrDatePicker />", () => {
  it("deveria renderizar o date picker", () => {
    const { container } = render(<BrDateTimePicker onChange={() => ""} />);
    expect(container.firstChild).toHaveClass("br-datetimepicker");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("deveria adicionar label informado", () => {
    const { container } = render(<BrDateTimePicker label="Meu BrDatePicker" onChange={() => ""} />);
    screen.getByRole("textbox", { name: "Meu BrDatePicker" });
    expect(container.firstChild).toMatchSnapshot();
  });
});
