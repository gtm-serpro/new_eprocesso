import classNames from "classnames";
import uniqueId from "lodash/uniqueId";

import { SpacingSize } from "@/types/layout";

type BrRadio = {
  id?: string;
  label?: string;
  value?: string | number;
  disabled?: boolean;
};

export type BrRadioGroupProps = {
  className?: string;
  name: string;
  options: BrRadio[];
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  title?: string;
  info?: string;
  disabled?: boolean;
  inline?: boolean;
  inlineMargin?: SpacingSize;
};

const BrRadioGroup = (props: BrRadioGroupProps) => {
  const { name, title, info, disabled, inline, inlineMargin = 3, options, value, onChange } = props;

  const classes = classNames(
    "br-radio",
    disabled && "disabled",
    inline && `d-inline-block mr-${inlineMargin}`
  );

  return (
    <>
      {title && <p className={`label mb-${info ? 1 : 3}`}>{title}</p>}
      {info && <p className="help-text">{info}</p>}
      {options.map((option) => {
        const id = `${name}-${option.id ? option.id : uniqueId("name-")}`;
        return (
          <div className={classes} key={id}>
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={onChange}
              disabled={option.disabled}
            />
            {option.label && <label htmlFor={id}>{option.label}</label>}
          </div>
        );
      })}
    </>
  );
};

export default BrRadioGroup;
