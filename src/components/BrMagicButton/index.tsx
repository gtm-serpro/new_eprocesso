import classNames from "classnames";
import React, { useRef } from "react";
import useCommonProperties from "../../hooks/useCommonProperties";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import BrButton from "../BrButton";

export interface BrMagicButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
  /** Densidade do magic button.
   *
   * - large: alta
   * - medium: média
   * - small: pequena
   */
  density?: "large" | "small" | "medium";
  /** Se o botão é circular. */
  circle?: boolean;
  /** Classe de ícone FontAwesome para o botão. */
  icon?: string;
}

export interface MagicButtonRef extends HTMLButtonElement {
  element: HTMLButtonElement;
}

const BrMagicButton = React.forwardRef<MagicButtonRef, BrMagicButtonProps>(
  ({ className, id, children, density = "medium", ...props }, ref) => {
    const fid = useUniqueId(id, "magicbutton_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const refWrapper = useRef(null);
    const refButton = useRef<HTMLButtonElement>(null);

    useCommonProperties<MagicButtonRef>(ref, refButton, {
      get element() {
        return refButton.current;
      },
    });

    return (
      <div
        ref={refWrapper}
        className={classNames("br-magic-button", density, className, ...mtProps)}
      >
        <BrButton id={fid} ref={refButton} {...spreadProps}>
          {children}
        </BrButton>
      </div>
    );
  }
);

export default BrMagicButton;
