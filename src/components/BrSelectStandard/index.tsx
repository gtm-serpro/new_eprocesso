import uniqueId from "lodash/uniqueId";
import { ChangeEvent, SelectHTMLAttributes, useCallback, useMemo, useState } from "react";

export interface BrSelectStandardProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  name?: string;
  options: string[];
  value: string;
}

const BrSelectStandard = ({
  label,
  placeholder,
  name,
  options,
  value,
  onChange,
  ...rest
}: BrSelectStandardProps) => {
  const selectId = uniqueId("select-");

  const [selectValue, setSelectValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value;
    setSelectValue(newValue);
    onChange && onChange(event);
  };

  const defaultStyle: React.CSSProperties = {
    backgroundColor: "var(--background-light)",
    borderColor: "var(--border-color-alternative)",
    borderRadius: "var(--surface-rounder-sm)",
    borderStyle: "var(--border-style)",
    borderWidth: "var(--border-width)",
    color: "var(--color-light)",
    fontSize: "var(--font-size-scale-up-01)",
    height: "var(--input-size)",
    marginTop: "var(--spacing-scale-half)",
    paddingBottom: 0,
    paddingLeft: "var(--spacing-scale-2x)",
    paddingRight: "var(--spacing-scale-2x)",
    paddingTop: 0,
    width: "100%",
    fontStyle: selectValue ? "normal" : "italic",
    fontWeight: selectValue ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
    outline: "none",
  };

  const [style, setStyle] = useState<React.CSSProperties>(defaultStyle);

  const handleMouseOut = useCallback(
    () =>
      setStyle({
        ...defaultStyle,
        backgroundImage:
          "linear-gradient(rgba(var(--color-rgb), var(--hover)),rgba(var(--color-rgb), var(--hover)))",
      }),
    [defaultStyle]
  );

  const handleFocus = useCallback(
    () =>
      setStyle({
        ...defaultStyle,
        borderColor: "var(--focus) !important",
        boxShadow: "0 0 0 var(--surface-width-md) var(--focus)",
        outline: "none",
      }),
    [defaultStyle]
  );

  const resetStyle = useCallback(() => setStyle({ ...defaultStyle }), [defaultStyle]);

  const optionElements = useMemo(
    () =>
      options.map((opt) => (
        <option
          style={{ fontStyle: "normal" }}
          className="text-weight-semi-bold"
          key={opt}
          value={opt}
        >
          {opt}
        </option>
      )),
    [options]
  );

  return (
    <div className="br-input">
      {label && <label htmlFor={selectId}>{label}</label>}

      <select
        style={style}
        onChange={handleChange}
        id={selectId}
        value={selectValue}
        onMouseOver={handleMouseOut}
        onMouseOut={resetStyle}
        onFocus={handleFocus}
        onBlur={resetStyle}
        {...rest}
      >
        {placeholder &&
          <option style={{ fontStyle: "italic" }} value="">
            {placeholder}
          </option>
        }
        {optionElements}
      </select>
    </div>
  );
};

export default BrSelectStandard;
