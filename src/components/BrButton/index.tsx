import Icon from "@/common/Icon";
import { ClearBlock } from "@/types/layout";
import classNames from "classnames";
import React, { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import CustomTag from "../../common/CustomTag";
import { useMtProps } from "../../hooks/useMtProps";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import BrList, { ListRef } from "../BrList";
import "@/styles/BrButton.css"

export interface BrButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  circle?: boolean;
  close?: boolean;
  inverted?: boolean;
  block?: boolean;
  clearBlock?: ClearBlock;
  size?: "small" | "large";
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  type?: "button" | "submit" | "reset";
  signIn?: boolean;
  isItem?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  dropdownItems?: React.ReactNode;
  /**
   * Base color for the button. For example, passing "green" will result in:
   * - Icon color: var(--green-50)
   * - Hover bg: var(--green-10)
   * - Active bg: var(--green-30)
   */
  color?: string;
}

const BrButton = React.forwardRef<HTMLButtonElement, BrButtonProps>(
  (
    {
      children,
      className,
      id,
      type = "button",
      primary,
      secondary,
      circle,
      close = false,
      inverted,
      block,
      clearBlock,
      size,
      loading,
      disabled,
      icon,
      color,
      signIn = false,
      isItem = false,
      onClick,
      dropdownItems,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "button_____");

    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const [expanded, setExpanded] = useState<boolean>(false);

    const refButton = ref ?? useRef<HTMLButtonElement>(null);
    const refList = useRef<ListRef>(null);

    const handleOnClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(event);
        setExpanded(!expanded);
      },
      [onClick, expanded]
    );

    useOutsideClick([refButton, refList], () => {
      setTimeout(() => setExpanded(false), 100);
    });

    // Update: build CSS variable references using var()
    const colorStyles = color
      ? {
        "--btn-icon-color": `var(--${color}-50)`,
        "--btn-hover-bg": `var(--${color}-10)`,
        "--btn-active-bg": `var(--${color}-20)`,
      }
      : {};

    // Merge any existing styles from spreadProps with our dynamic colorStyles
    const buttonStyle = { ...spreadProps.style, ...colorStyles };

    return (
      <CustomTag tagName={dropdownItems ? "div" : undefined} className={expanded ? "dropdown" : undefined}>
        <button
          type={type}
          id={fid}
          style={buttonStyle}
          className={classNames(
            !signIn && !isItem && "br-button",
            isItem && "br-item",
            signIn && "br-sign-in",
            {
              primary,
              secondary,
              circle,
              close,
              inverted,
              block,
              loading,
              [`auto-${clearBlock}`]: !!clearBlock,
              large: size === "large",
              small: size === "small",
            },
            ...mtProps,
            className
          )}
          disabled={disabled}
          ref={refButton}
          onClick={handleOnClick}
          {...(dropdownItems && { "aria-expanded": expanded })}
          {...(dropdownItems && { "data-visible": expanded })}
          {...(dropdownItems && { "data-toggle": "dropdown" })}
          {...spreadProps}
        >
          {icon && (
            <Icon
              icon={icon}
              color={color ? `var(--${color}-50)` : undefined}
              {...(!!children && { mr: 1 })}
            />
          )}
          {children}
        </button>
        {dropdownItems && (
          <BrList
            ref={refList}
            className="target"
            hidden={!expanded}
            aria-hidden={!expanded}
            role=""
            style={useMemo(() => ({ zIndex: 9999 }), [])}
          >
            {dropdownItems}
          </BrList>
        )}
      </CustomTag>
    );
  }
);

export default BrButton;
