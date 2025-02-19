import { SpacingSize } from "@/types/layout";
import classNames from "classnames";
import uniqueId from "lodash/uniqueId";
import { ChangeEventHandler } from "react";
import BrCheckbox, { BrCheckboxProps } from "../BrCheckbox";
import BrMessage, { BrMessageProps } from "../BrMessage";

export interface BrCheckboxGroupProps {
  children: React.ReactElement<BrCheckboxProps>[];
  className?: string;
  title?: string;
  info?: string;
  inline?: boolean;
  inlineMargin?: SpacingSize;
  checkAll?: { id: string; label: string; disabled?: boolean; checked: boolean };
  onCheckAll?: ChangeEventHandler<HTMLInputElement>;
  feedback?: Omit<BrMessageProps, "category">;
}

const BrCheckboxGroup = (props: BrCheckboxGroupProps) => {
  const { children, title, info, inline, inlineMargin = 3, checkAll, onCheckAll, feedback } = props;

  const classesItem = classNames(inline ? `d-inline-block mr-${inlineMargin} mb-1` : "mb-1");

  return (
    <>
      {title && <p className={`label mb-${info ? 0 : 1}`}>{title}</p>}
      {info && <p className="text-down-01">{info}</p>}
      {checkAll && (
        <BrCheckbox
          className="mb-1"
          id={checkAll.id ? `marcar-todas-${checkAll.id}` : uniqueId("marcar-todas-")}
          label={checkAll.label ?? "Marcar todos"}
          disabled={checkAll?.disabled}
          checked={checkAll.checked}
          onChange={onCheckAll}
        />
      )}
      {children.map((option, index) => (
        <div key={index} className={classesItem}>
          {option}
        </div>
      ))}
      {feedback?.message && (
        <div className="mt-1">
          <BrMessage category="feedback" {...feedback} />
        </div>
      )}
    </>
  );
};

export default BrCheckboxGroup;
