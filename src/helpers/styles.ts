import { Breakpoints, Offsets, Spacing } from "@/types/layout";
import kebabCase from "lodash/kebabCase";

type ClassNames = { [key: string]: boolean };

export const getBreakpoints = ({ sm, md, lg, xl }: Breakpoints) => {
  const classes: ClassNames = {};
  const prefix = "col";

  for (const [k, v] of Object.entries({ sm, md, lg, xl })) {
    if (!v) {
      continue;
    }

    if (typeof v === "boolean") {
      classes[`${prefix}-${k}`] = true;
    } else {
      classes[`${prefix}-${k}-${v}`] = true;
    }
  }

  if (!Object.keys(classes).length) {
    classes["col"] = true;
  }

  return classes;
};

export const getOffsets = (offsets: Offsets): ClassNames => {
  const classes: ClassNames = {};

  for (const [k, v] of Object.entries(offsets)) {
    classes[`${kebabCase(k)}-${v}`] = true;
  }

  return classes;
};

export const getMargin = (value?: Spacing): ClassNames => {
  return value ? getSpacing("m", value) : {};
};

export const getPadding = (value?: Spacing): ClassNames => {
  return getSpacing("p", value);
};

const getSpacing = (prefix: "m" | "p", value?: Spacing): ClassNames => {
  const classes: ClassNames = {};

  if (Number.isInteger(value)) {
    classes[`${prefix}-${getValue(value as number)}`] = true;
  } else {
    for (const [k, v] of Object.entries(value || {})) {
      classes[`${prefix}${k}-${getValue(v)}`] = true;
    }
  }

  return classes;
};

const getValue = (value: number): string => (value < 0 ? `n${Math.abs(value)}` : `${value}`);

export const getStyle = (prefix: string, value?: number | string): string => {
  return value ? `${prefix}-${value}` : "";
};
