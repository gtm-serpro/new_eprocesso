import classNames from "classnames";

import { getBreakpoints, getMargin, getOffsets, getPadding } from "@/helpers/styles";

import { AlignSelf, Breakpoints, Offsets, Spacing } from "@/types/layout";

export type ColProps = {
  children?: React.ReactNode;
  className?: string;
  alignSelf?: AlignSelf;
  margin?: Spacing;
  padding?: Spacing;
};

type Props = ColProps & Breakpoints & Offsets;

const Col = (props: Props) => {
  const { children, className, margin, padding, alignSelf, sm, md, lg, xl, ...offsets } = props;

  const classes = classNames(
    className,
    alignSelf && `align-self-${alignSelf}`,
    getBreakpoints({ sm, md, lg, xl }),
    getOffsets(offsets),
    getMargin(margin),
    getPadding(padding)
  );

  return <div className={classes}>{children}</div>;
};

export default Col;
