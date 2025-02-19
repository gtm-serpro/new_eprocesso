import classNames from "classnames";
import React from "react";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import IMtProps from "../../types/IMtProps";
import ISkipLink from "./ISkipLink";

export interface BrSkipLinkProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
  /** Lista de elementos do skiplink. */
  data: ISkipLink[];
  /** Se é do tipo composto. */
  full?: boolean;
}

const BrSkipLink = React.forwardRef<HTMLElement, BrSkipLinkProps>(
  ({ className, children, data, full = false, ...props }, ref) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <nav
        ref={ref}
        className={classNames("br-skiplink", full && "full", className, ...mtProps)}
        {...spreadProps}
      >
        {data.map((link, index) => (
          <a key={index} className="br-item" href={link.link} accessKey={String(index)}>
            {link.label}
            <span className="br-tag text ml-1">{index}</span>
          </a>
        ))}
        {children}
      </nav>
    );
  }
);

export default BrSkipLink;
