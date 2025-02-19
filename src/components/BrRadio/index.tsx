import classNames from "classnames";
import React from "react";
import CustomTag from "../../common/CustomTag";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
  /** Label do radio. */
  label?: React.ReactNode;
  /** Valor do radio. */
  value?: string;
  /**
   * Grupo do radio.
   */
  name: string;
  /**
   * Se está checado ou não. Obs.: para valor inicial, usar defaultChecked.
   */
  checked?: boolean;
  /** Estado.
   *
   * - invalid: fica vermelho.
   * - valid: fica verde.
   */
  state?: "invalid" | "valid";
  /** Se está desabilitado. */
  disabled?: boolean;
  /** Se for inline, para fazer listagem horizontal. */
  inline?: boolean;
}

const BrRadio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      children,
      id,
      label,
      name,
      value,
      checked,
      state,
      disabled = false,
      inline = false,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "radio_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <CustomTag
        {...(inline && { tagName: "div" })}
        className={classNames(inline && "d-inline-block", inline && "mr-5")}
      >
        <div
          className={classNames(
            "br-radio",
            disabled && "disabled",
            state === "invalid" && "invalid",
            state === "valid" && "valid",
            className,
            ...mtProps
          )}
        >
          <input ref={ref} id={fid} type="radio" name={name} value={value} {...spreadProps} />
          {label && <label htmlFor={fid}>{label}</label>}
          {children}
        </div>
      </CustomTag>
    );
  }
);

export default BrRadio;
