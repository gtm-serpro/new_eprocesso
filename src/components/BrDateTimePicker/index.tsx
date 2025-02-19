import { useSpreadProps } from "@/hooks/useSpreadProps";
import { BRDateTimePicker } from "@govbr-ds/core";
import classNames from "classnames";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import "flatpickr/dist/plugins/monthSelect/style.css";
import React, { useEffect, useRef } from "react";
import { useMtProps } from "../../hooks/useMtProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";

export interface BrDateTimePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">,
    IMtProps {
  /**
   * Tipo do DateTimePicker:
   * - date: seleciona data (padrão).
   * - time: seleciona apenas hora.
   * - date-time: seleciona data e hora.
   * - month: seleciona mês e ano.
   */
  dataType?: "date" | "time" | "date-time" | "month";
  /**
   * Modo do Datetime.
   * - single: um valor apenas a escolher (padrão).
   * - range: um intervalo de valores a escolher.
   */
  dataMode?: "single" | "range";
  /**
   * Label do DatetimePicker.
   */
  label?: React.ReactNode;
  /**
   * Data mínima selecionável.
   */
  minDate?: string | Date;
  /**
   * Data máxima selecionável.
   */
  maxDate?: string | Date;
  /**
   * Incremento dos minutos.
   */
  minuteIncrement?: number;
  /**
   * Hora padrão no DateTimePicker.
   */
  defaultHour?: number;
  /**
   * Minuto padrão no DateTimePicker.
   */
  defaultMinute?: number;
  /**
   * Evento que emite o valor selecionado no DateTimePicker no tipo string.
   *
   * @param selectedDate - valor selecionado no DateTimePicker.
   */
  onChange?: (selectedDate: string) => void;
  /**
   * Evento que emite o valor selecionado no DateTimePicker no tipo Date.
   *
   * @param selectedDate - valor selecionado no DateTimePicker.
   */
  onDateChange?: (selectedDate: Date) => void;
  /**
   * Evento que emite o(s) valor(es) selecionado(s) no DateTimePicker no tipo Array de Date.
   * Útil quando o `dataMode` for "range".
   *
   * @param selectedDates - valores selecionados no DateTimePicker.
   */
  onRangeChange?: (selectedDates: Array<Date>) => void;
}

const dataTypeConverter = (dataType: BrDateTimePickerProps["dataType"]) => {
  switch (dataType) {
    case "time":
      return "time";
    case "date-time":
      return "datetime-local";
    default:
      return "text";
  }
};

export interface DateTimePickerRef extends HTMLInputElement {
  element: HTMLInputElement;
  wrapper: HTMLElement;
  inputWrapper: HTMLElement;
  label: HTMLElement;
  button: HTMLButtonElement;
}

const BrDateTimePicker = React.forwardRef<DateTimePickerRef, BrDateTimePickerProps>(
  (
    {
      className,
      id,
      children,
      dataMode = "single",
      dataType = "date",
      label,
      minDate,
      maxDate,
      minuteIncrement,
      defaultHour,
      defaultMinute,
      onChange,
      onDateChange,
      onRangeChange,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "datetimepicker_____");
    const refWrapper = useRef(null);
    const refObject = useRef<any>(null);

    const buttonIcon = dataType === "time" ? "clock" : "calendar-alt";

    if (dataType === "time" && dataMode === "range") {
      console.warn('O BrDateTimePicker com dataType="time" não suporta o dataMode="range".');
    }

    let placeholder = "";

    switch (dataType) {
      case "date":
        placeholder = dataMode === "range" ? "DD/MM/AAAA até DD/MM/AAAA" : "DD/MM/AAAA";
        break;
      case "time":
        placeholder = "HH:MM";
        break;
      case "date-time":
        placeholder =
          dataMode === "range" ? "DD/MM/AAAA HH:mm até DD/MM/AAAA HH:mm" : "DD/MM/AAAA HH:mm";
        break;
      case "month":
        placeholder = dataMode === "range" ? "Mês/Ano até Mês/Ano" : "Mês/Ano";
        break;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const length = e.target.value.length;

      if (length === 0 || length === e.target.maxLength) {
        onChange?.(e.target.value);
        onDateChange?.(new Date(e.target.value));
        onRangeChange?.([new Date(e.target.value)]);
      }
    };

    // Inicializando o datetimepicker
    useEffect(() => {
      refObject.current = new BRDateTimePicker("br-datetimepicker", refWrapper.current, {
        ...(minDate && { minDate }),
        ...(maxDate && { maxDate }),
        ...(minuteIncrement && { minuteIncrement }),
        ...(defaultHour && { defaultHour }),
        ...(defaultMinute && { defaultMinute }),
        ...(dataType === "month" && { plugins: [monthSelectPlugin({ dateFormat: "F/Y" })] }),
        onChange: (dates: Date[], dateString: string) => {
          onRangeChange?.(dates);
          onDateChange?.(dates[0]);
          onChange?.(dateString);
        },
      });

      return () => refObject.current?.calendar?.destroy();
    }, [minDate, maxDate, minuteIncrement, defaultHour, defaultMinute, dataType, dataMode]);

    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <div
        className={classNames("br-datetimepicker", ...mtProps, className)}
        ref={refWrapper}
        data-mode={dataMode}
        data-type={dataTypeConverter(dataType)}
      >
        <div className="br-input has-icon">
          {label && <label htmlFor={fid}>{label}</label>}
          <input
            autoComplete="off"
            id={fid}
            type={dataTypeConverter(dataType)}
            placeholder={placeholder}
            data-input="data-input"
            data-toggle="data-toggle"
            {...spreadProps}
            onChange={handleInputChange}
          />
          <button
            className="br-button circle small"
            type="button"
            aria-label="Abrir Calendário"
            data-toggle="data-toggle"
            id="timepicker-input-btn"
          >
            <i className={`fas fa-${buttonIcon}`} aria-hidden="true"></i>
          </button>
          {children}
        </div>
      </div>
    );
  }
);

export default BrDateTimePicker;
