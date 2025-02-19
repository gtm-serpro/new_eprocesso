import { BRList } from "@govbr-ds/core";
import classNames from "classnames";
import React, { memo, useEffect, useRef } from "react";
import useCommonProperties from "../../hooks/useCommonProperties";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import BrDivider from "../BrDivider";

export interface ListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "expanded">,
    IMtProps {
  /** Título da lista, opcional. */
  title?: string;
  /** Se a lista é horizontal. */
  horizontal?: boolean;
  /** Se a lista está escondida inicialmente. */
  hidden?: boolean;
  /** Expandida ou não */
  expanded?: boolean;
}

export interface ListRef extends HTMLDivElement {
  element: HTMLDivElement;
}

const BrList = React.forwardRef<ListRef, ListProps>(
  (
    {
      className,
      id,
      children,
      role = "list",
      title,
      horizontal = false,
      hidden = false,
      expanded,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "list_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const refObject = useRef(null);
    const refDiv = useRef<HTMLDivElement>(null);

    useCommonProperties<ListRef>(ref, refDiv, {
      get element() {
        return refDiv.current;
      },
    });

    useEffect(() => {
      if (refDiv.current && !refObject.current) {
        refObject.current = new BRList("br-list", refDiv.current);
      }
    }, []);

    return (
      <div
        ref={refDiv}
        id={fid}
        className={classNames(
          "br-list",
          horizontal && "horizontal",
          className,

          ...mtProps
        )}
        {...(role && { role: role })}
        {...(hidden && { hidden: "hidden" })}
        {...(expanded && { expanded: "expanded" })}
        {...spreadProps}
      >
        {title && (
          <>
            <div className="header">
              <div className="title">{title}</div>
            </div>
            <BrDivider />
          </>
        )}
        {children}
      </div>
    );
  }
);

export default memo(BrList);
