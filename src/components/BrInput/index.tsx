import Icon from "@/common/Icon";
import classNames from "classnames";
import React from "react";
import { NumericFormat, PatternFormat } from "react-number-format";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import Message from "../BrMessage";

export interface BrInputProps extends React.InputHTMLAttributes<HTMLInputElement>, IMtProps {
  /**
   * Label do input.
   */
  label?: React.ReactNode;
  /**
   * Tamanho do input.
   * - small: pequeno
   * - medium: médio (padrão)
   * - large: grande
   */
  density?: "small" | "medium" | "large";
  /**
   * Nome do ícone Font Awesome do input.
   */
  icon?: string;
  /**
   * Botão no canto direito do input.
   */
  button?: React.ReactNode;
  /**
   * Se é do tipo "highlight".
   */
  highlight?: boolean;
  /**
   * Se a label fica na lateral.
   */
  inline?: boolean;
  /**
   * Input útil para valores numéricos formatados (ex: moeda), bem como
   * para valores sem formatação específica, mas que só aceitam números (ex: números
   * de documentos que não possuem uma formatação definida).
   *
   * O valor da prop `numeric` pode ser um objeto ou um boolean. Quando é um objeto,
   * aplica propriedades específicas para formatação de valores numéricos. Quando é
   * boolean `true` ou um objeto vazio `{}`, aplica as propriedades padrão (ver
   * referência abaixo).
   *
   * Propriedades do objeto `numeric`:
   * <https://s-yadav.github.io/react-number-format/docs/numeric_format/>
   *
   * Alguns valores padrão foram modificados para atender a uma maior quantidade de
   * casos de uso da realidade brasileira:
   *
   * - `allowNegative`: `false`
   * - `allowLeadingZeros`: `true`
   * - `decimalScale`: `0`
   * - `fixedDecimalScale`: `true`
   * - `decimalSeparator`: `,`
   */
  numeric?:
    | boolean
    | {
        thousandSeparator?: boolean | string;
        decimalSeparator?: string;
        allowedDecimalSeparators?: Array<string>;
        thousandsGroupStyle?: "thousand" | "lakh" | "wan" | "none";
        decimalScale?: number;
        allowNegative?: boolean;
        allowLeadingZeros?: boolean;
        fixedDecimalScale?: boolean;
        suffix?: string;
        prefix?: string;
      };
  /**
   * Status do input muda a sua cor.
   * - success: verde
   * - danger: vermelho
   * - info: azul
   * - warning: amarelo
   */
  status?: "success" | "danger" | "info" | "warning";
  /**
   * Texto de feedback que aparece embaixo do item, com a cor de fundo de acordo com o status escolhido.
   */
  feedbackText?: string;
  /**
   * Máscara para o input.
   */
  mask?: string;
  /**
   * Placeholder para a máscara. Padrão: "_"
   */
  maskPlaceholder?: string;
  /**
   * Se deve mostrar o placeholder da máscara. Padrão: true
   */
  showMaskPlaceholder?: boolean;
}

const BrInput = React.forwardRef<HTMLInputElement, BrInputProps>(
  (
    {
      className,
      id,
      children,
      numeric,
      label,
      density = "medium",
      icon,
      button,
      highlight = false,
      inline = false,
      status,
      feedbackText,
      mask,
      maskPlaceholder = "_",
      showMaskPlaceholder = true,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "input_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    const commonInputProps = {
      id: fid,
      className: classNames(icon && "has-icon"),
      ...spreadProps,
    };

    return (
      <div
        className={classNames(
          "br-input",
          density === "small" && "small",
          density === "large" && "large",
          highlight && "input-highlight",
          inline && "input-inline",
          status,
          className,
          ...mtProps
        )}
      >
        {label && (
          <div className="input-label">
            <label htmlFor={fid}>{label}</label>
          </div>
        )}
        <div className="input-content">
          <div className="input-group">
            {icon && (
              <div className="input-icon">
                <Icon icon={icon} />
              </div>
            )}
            {!!numeric ? (
              <NumericFormat
                getInputRef={ref}
                {...commonInputProps}
                allowNegative={false}
                allowLeadingZeros
                decimalScale={0}
                fixedDecimalScale
                decimalSeparator=","
                {...(typeof numeric === "object" && numeric)}
              />
            ) : !!mask ? (
              <PatternFormat
                getInputRef={ref}
                format={mask}
                {...(showMaskPlaceholder && { mask: maskPlaceholder })}
                {...commonInputProps}
                onChange={() => null}
                onValueChange={({ formattedValue }, { event }) => {
                  commonInputProps.onChange?.({
                    ...event,
                    target: {
                      ...event?.target,
                      value: formattedValue.replaceAll(maskPlaceholder, ""),
                    },
                  });
                }}
              />
            ) : (
              <input ref={ref} {...commonInputProps} />
            )}
            {button}
            {feedbackText &&
              (status ? (
                <Message
                  category="feedback"
                  status={status ? status : "success"}
                  message={feedbackText}
                />
              ) : (
                <p className="text-down-01">{feedbackText}</p>
              ))}
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default BrInput;
