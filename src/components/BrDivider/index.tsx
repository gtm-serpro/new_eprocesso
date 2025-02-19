import classNames from "classnames";
import React from "react";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import IMtProps from "../../types/IMtProps";

export interface BrDividerProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
  /** Se o divider será vertical ou não. */
  vertical?: boolean;
  /** Se é tracejado ou não. */
  dashed?: boolean;
  /** Tamanho.
   *
   * - sm: 2x o tamanho original
   * - md: 3x o tamanho original
   * - lg: 4x o tamanho original
   */
  size?: string;
}

const BrDivider = React.forwardRef<HTMLDivElement, BrDividerProps>(
  ({ className, children, vertical = false, dashed = false, size, ...props }, ref) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <div
        ref={ref}
        className={classNames(
          "br-divider",
          vertical && "vertical",
          dashed && "dashed",
          size === "sm" && "sm",
          size === "md" && "md",
          size === "lg" && "lg",
          ...mtProps,
          className
        )}
        {...spreadProps}
      >
        {children}
      </div>
    );
  }
);

export default BrDivider;
