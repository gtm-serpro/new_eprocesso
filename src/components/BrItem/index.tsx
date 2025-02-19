import { BRItem } from "@govbr-ds/core";
import classNames from "classnames";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import CustomTag from "../../common/CustomTag";
import useCommonProperties from "../../hooks/useCommonProperties";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import type IMtProps from "../../types/IMtProps";
import BrDivider from "../BrDivider";
import BrList from "../BrList";

export interface BrItemProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
  /** Se o item tem um highlight ao passar o mouse em cima. */
  highlighted?: boolean;
  /** Se o item tem um divider */
  divider?: boolean;
  /** Se o item está desabilitado. */
  disabled?: boolean;
  /** Target do item, referenciando o ID de uma lista, caso este item sirva para abrir/fechar a lista. */
  target?: string;
  /** Se abre/fecha. */
  collapsable?: boolean;
  /** Link do item */
  link?: string;

  /** Sub-lista de itens associados a este item. */
  subItems?: React.ReactNode;

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Se é inicialmente expandido. */
  initiallyExpanded?: boolean;
}

export interface ItemRef extends HTMLDivElement {
  element: HTMLElement;
}

const BrItem = React.forwardRef<ItemRef, BrItemProps>(
  (
    {
      className,
      children,
      highlighted,
      divider = false,
      role = "listItem",
      disabled = false,
      target,
      collapsable = false,
      initiallyExpanded = false,
      link,
      subItems,
      onClick,
      ...props
    },
    ref
  ) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const refDiv = useRef<HTMLDivElement>(null);
    const refElemento = useRef(null);

    const [expanded, setExpanded] = useState<boolean>(initiallyExpanded);

    useCommonProperties<ItemRef>(ref, refDiv, {
      get element() {
        return refDiv.current;
      },
    });

    useEffect(() => {
      if (refDiv.current && !refElemento.current) {
        refElemento.current = new BRItem("br-item", refDiv.current);
      }
    }, []);

    const handleOnClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(event);
        setExpanded((oldExpanded) => !oldExpanded);
      },
      [onClick]
    );

    return (
      <>
        <CustomTag
          ref={refDiv}
          tagName={link ? "a" : "div"}
          onClick={handleOnClick}
          className={classNames("br-item", highlighted && "highlighted", className, ...mtProps)}
          {...(role && { role: role })}
          {...(disabled && { disabled: true })}
          {...(target && { "data-target": target })}
          {...(collapsable && { "data-toggle": "collapse" })}
          {...(collapsable && subItems && { "data-visible": expanded })}
          {...(collapsable && subItems && { "aria-expanded": expanded })}
          {...spreadProps}
          {...(link && { href: link })}
        >
          <div className="content">
            <div className="flex-fill">{children}</div>
            {collapsable && (
              <i
                className={classNames("fas", expanded ? "fa-chevron-up" : "fa-chevron-down")}
                aria-hidden="true"
              ></i>
            )}
          </div>
        </CustomTag>
        {divider && <BrDivider />}
        {subItems && (
          <BrList hidden={!expanded && collapsable} aria-hidden={!expanded && collapsable}>
            {subItems}
          </BrList>
        )}
      </>
    );
  }
);

export default memo(BrItem);
