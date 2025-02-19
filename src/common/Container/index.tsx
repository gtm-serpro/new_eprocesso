import classNames from "classnames";
import { getMargin, getPadding } from "@/helpers/styles";

import { AlignItems, JustifyContent, Spacing } from "@/types/layout";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fluid?: boolean | "sm" | "md" | "lg" | "xl";
  flex?: boolean;
  grow?: boolean;
  column?: boolean;
  fullHeight?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  margin?: Spacing;
  padding?: Spacing;
};

const Container = (props: ContainerProps) => {
  const {
    className,
    style,
    children,
    fluid,
    flex,
    grow,
    column,
    fullHeight,
    justifyContent,
    alignItems,
    margin,
    padding,
  } = props;

  const suffix = typeof fluid === "string" ? fluid : "fluid";
  const containerProp = fluid ? `container-${suffix}` : "container";

  const classes = classNames(
    className,
    containerProp,
    justifyContent && `justify-content-${justifyContent}`,
    alignItems && `align-items-${alignItems}`,
    flex && "d-flex",
    column && "flex-column",
    grow && "flex-grow-1",
    fullHeight && "min-vh-100",
    getMargin(margin),
    getPadding(padding)
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Container;
