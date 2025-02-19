import classNames from "classnames";
import React from "react";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import IMtProps from "../../types/IMtProps";

export interface BaseProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {}

const Base = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...props }, ref) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <div ref={ref} className={classNames("base", className, ...mtProps)} {...spreadProps}>
        {children}
      </div>
    );
  }
);

export default Base;
