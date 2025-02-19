import classNames from "classnames";
import uniqueId from "lodash/uniqueId";
import { ChangeEventHandler } from "react";

export type BrTextareaProps = {
  className?: string;
  id?: string;
  label?: string;
  info?: string;
  density?: "small" | "large";
  placeholder?: string;
  value?: string | number | ReadonlyArray<string> | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  readOnly?: boolean;
};

const BrTextarea = (props: BrTextareaProps) => {
  const { className, id, label, info, density, ...rest } = props;

  const textId = id || uniqueId("textarea-");

  const classes = classNames("br-textarea", density, className);

  return (
    <div className={classes}>
      {label && <label htmlFor={textId}>{label}</label>}
      <textarea id={textId} {...rest}></textarea>
      {info && <p className="text-base mt-1">{info}</p>}
    </div>
  );
};

export default BrTextarea;
