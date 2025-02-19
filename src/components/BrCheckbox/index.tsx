import classNames from "classnames";
import uniqueId from "lodash/uniqueId";
import { forwardRef } from "react";

export interface BrCheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

const BrCheckbox = forwardRef<HTMLInputElement, BrCheckboxProps>((props, ref) => {
  const { id = uniqueId("checkbox-"), label, className, ...otherProps } = props;
  const classes = classNames("br-checkbox", !label && "hidden-label", className);

  return (
    <div className={classes}>
      <input id={id} ref={ref} type="checkbox" aria-label={label} {...otherProps} />
      <label htmlFor={id}>{label || id}</label>
    </div>
  );
});

export default BrCheckbox;
