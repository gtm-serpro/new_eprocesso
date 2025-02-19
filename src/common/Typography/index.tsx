import classNames from "classnames";
import { MouseEventHandler } from "react";

import { getMargin } from "@/helpers/styles";
import { BrColor } from "@/types/colors";
import { Spacing } from "@/types/layout";
import { FontSize, FontWeight, TextAlign } from "@/types/text";

type ElementType = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: FontSize;
  align?: TextAlign;
  weight?: FontWeight;
  color?: BrColor;
  margin?: Spacing;
  htmlElement?: ElementType;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

const Typography = (props: TypographyProps) => {
  const { size, align, weight, color, className, children, margin, htmlElement, ...rest } = props;

  const bgHighlight = color || "default";

  const classes = classNames(className, getMargin(margin), {
    [`text-${size}`]: !!size,
    [`text-${weight}`]: !!weight,
    [`text-${color}`]: !!color,
    [`text-${align}`]: !!align,
    [`ebr-clickable-${bgHighlight}`]: !!rest.onClick,
    "ebr-clickable-text": !!rest.onClick,
  });

  const Wrapper = htmlElement || "div";

  return (
    <Wrapper className={classes} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
