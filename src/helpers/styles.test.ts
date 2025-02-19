import { getBreakpoints, getMargin, getOffsets, getPadding, getStyle } from "./styles";

describe("Testes de margens", () => {
  it("deveria aplicar 5 a todas as margens", () => {
    const classes = getMargin(5);
    expect(classes).toEqual({ "m-5": true });
  });

  it("deveria aplicar t-1", () => {
    const classes = getMargin({ t: 1 });
    expect(classes).toEqual({ "mt-1": true });
  });

  it("deveria aplicar t-5, r-4, b-3, l-2", () => {
    const classes = getMargin({ t: 5, r: 4, b: 3, l: 2 });
    expect(classes).toEqual({ "mt-5": true, "mr-4": true, "mb-3": true, "ml-2": true });
  });

  it("deveria aplicar margem negativa (n)", () => {
    const classes = getMargin(-5);
    expect(classes).toEqual({ "m-n5": true });
  });

  it("deveria aplicar todas as margens negativas (n)", () => {
    const classes = getMargin({ t: -5, r: -4, b: -3, l: -2 });
    expect(classes).toEqual({ "mt-n5": true, "mr-n4": true, "mb-n3": true, "ml-n2": true });
  });
});

describe("Testes de padding", () => {
  it("deveria aplicar 5 a todos os paddings", () => {
    const classes = getPadding(5);
    expect(classes).toEqual({ "p-5": true });
  });

  it("deveria aplicar t-1", () => {
    const classes = getPadding({ t: 1 });
    expect(classes).toEqual({ "pt-1": true });
  });

  it("deveria aplicar t-5, r-4, b-3, l-2", () => {
    const classes = getPadding({ t: 5, r: 4, b: 3, l: 2 });
    expect(classes).toEqual({ "pt-5": true, "pr-4": true, "pb-3": true, "pl-2": true });
  });

  it("deveria aplicar paddings negativo (n)", () => {
    const classes = getPadding(-5);
    expect(classes).toEqual({ "p-n5": true });
  });

  it("deveria aplicar todas os paddings negativ0s (n)", () => {
    const classes = getPadding({ t: -5, r: -4, b: -3, l: -2 });
    expect(classes).toEqual({ "pt-n5": true, "pr-n4": true, "pb-n3": true, "pl-n2": true });
  });
});

describe("Testes de breakpoints", () => {
  it("deveria aplicar col-breakpoint", () => {
    const classes = getBreakpoints({ md: true, xl: true });
    expect(classes).toEqual({ "col-md": true, "col-xl": true });
  });

  it("deveria aplicar auto", () => {
    const classes = getBreakpoints({ md: "auto" });
    expect(classes).toEqual({ "col-md-auto": true });
  });

  it("deveria aplicar 2 colunas sm", () => {
    const classes = getBreakpoints({ sm: 2 });
    expect(classes).toEqual({ "col-sm-2": true });
  });

  it("deveria aplicar 1 sm e 2 xl", () => {
    const classes = getBreakpoints({ sm: 1, xl: 2 });
    expect(classes).toEqual({ "col-sm-1": true, "col-xl-2": true });
  });

  it("deveria aplicar col se nada informado", () => {
    const classes = getBreakpoints({});
    expect(classes).toEqual({ col: true });
  });
});

describe("Testes de offsets", () => {
  it("deveria aplicar offset sm 2", () => {
    const classes = getOffsets({ offsetSm: 2 });
    expect(classes).toEqual({ "offset-sm-2": true });
  });

  it("deveria aplicar offset sm 1 e xl 3", () => {
    const classes = getOffsets({ offsetSm: 1, offsetXl: 3 });
    expect(classes).toEqual({ "offset-sm-1": true, "offset-xl-3": true });
  });
});

describe("Testes gerador estilos", () => {
  it("deveria concatenar prefixo e valor", () => {
    expect(getStyle("estilo", 5)).toBe("estilo-5");
  });

  it("não deveria retornar estilo com valor vazio", () => {
    expect(getStyle("estilo")).toBe("");
  });
});
