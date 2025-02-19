export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColValue = boolean | "auto" | ColSize;

export type ClearBlock = "sm" | "md" | "lg" | "xl";

export type JustifyContent = "start" | "center" | "end" | "around" | "between";
export type AlignSelf = "start" | "end" | "center" | "baseline" | "stretch";
export type AlignItems = "start" | "center" | "end";

export type SpacingSize = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Spacings = { t?: SpacingSize; b?: SpacingSize; l?: SpacingSize; r?: SpacingSize };
export type Spacing = SpacingSize | Spacings;

export interface Offsets {
  offsetSm?: 0 | ColSize;
  offsetMd?: 0 | ColSize;
  offsetLg?: 0 | ColSize;
  offsetXl?: 0 | ColSize;
}

export interface Breakpoints {
  xs?: ColValue;
  sm?: ColValue;
  md?: ColValue;
  lg?: ColValue;
  xl?: ColValue;
}
