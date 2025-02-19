import classNames from "classnames";

import { getMargin, getPadding } from "@/helpers/styles";

import { AlignItems, ColSize, JustifyContent, Spacing } from "@/types/layout";

export type RowProps = {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  column?: boolean;
  rowCols?: ColSize;
  noGutters?: boolean;
  margin?: Spacing;
  padding?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

const Row = (props: RowProps) => {
  const {
    className,
    children,
    column,
    margin,
    padding,
    noGutters,
    rowCols,
    justifyContent,
    alignItems,
  } = props;

  const classes = classNames(
    "row",
    className,
    justifyContent && `justify-content-${justifyContent}`,
    alignItems && `align-items-${alignItems}`,
    rowCols && `row-cols-${rowCols}`,
    noGutters && "no-gutters",
    column && "flex-column",
    getMargin(margin),
    getPadding(padding)
  );

  return <div className={classes}>{children}</div>;
};

export default Row;
