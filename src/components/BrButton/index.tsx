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

export interface BrButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
  /**
   * Conteúdo do botão (texto, imagem, etc).
   */
  children?: ReactNode;
  /**
   * Se o botão é do tipo "Primário".
   */
  primary?: boolean;
  /**
   * Se o botão é do tipo "Secundário".
   */
  secondary?: boolean;
  /**
   * Se o botão é circular.
   */
  circle?: boolean;
  /**
   *  Se o botão é do tipo "Fechar".
   */
  close?: boolean;
  /**
   *  Se o botão tem cor invertida.
   */
  inverted?: boolean;
  /**
   *  Se o botão ocupa uma linha inteira.
   */
  block?: boolean;
  /**
   *  Definição responsiva se o botão ocupa uma linha inteira.
   */
  clearBlock?: ClearBlock;
  /**
   *  Tamanho do botão.
   */
  size?: "small" | "large";
  /**
   *  Se o botão tem a propriedade "loading".
   */
  loading?: boolean;
  /**
   *  Se o botão está desabilitado.
   */
  disabled?: boolean;
  /**
   *  Classe de ícone FontAwesome para o botão.
   */
  icon?: string;
  /**
   *  Tipo do botão.
   */
  type?: "button" | "submit" | "reset";
  /**
   *  Se o botão é do tipo Sign-In, especificamente para o botão de logar
   */
  signIn?: boolean;
  /**
   *  Se é um botão do tipo "br-item"
   */
  isItem?: boolean;
  /**
   *  Função disparada ao clicar no botão.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   *  Itens de dropdown, caso seja um botão com dropdown
   */
  dropdownItems?: React.ReactNode;
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
      [onClick]
    );

    useOutsideClick([refButton, refList], () => {
      setTimeout(() => setExpanded(false), 100);
    });

    return (
      <CustomTag tagName={dropdownItems && "div"} className={expanded && "dropdown"}>
        <button
          type={type}
          id={fid}
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
          {icon && <Icon icon={icon} {...(!!children && { mr: 1 })} />}
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
