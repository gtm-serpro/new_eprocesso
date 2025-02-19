import classNames from "classnames";

import styles from "./BrTag.module.css";

import { BrColor } from "@/types/colors";

import Icon from "@/common/Icon";
import { formatCount, isIconAllowed } from "./helpers";

const Tags = {
  text: "TextTag",
  status: "StatusTag",
  count: "CountTag",
  icon: "IconTag",
  interaction: "Interaction",
};

export type BrTagType = keyof typeof Tags;

export interface BrTagProps {
  type?: BrTagType;
  value?: string;
  color?: BrColor;
  size?: "small" | "medium" | "large";
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BrTag = (props: BrTagProps) => {
  const {
    value,
    type = "text",
    color = "primary-default",
    size,
    icon,
    style,
    className,
    onClick,
    checked,
    onChange,
  } = props;

  const rootClasses = classNames(
    "br-tag",
    type,
    color,
    !!size && size,
    !!onClick && styles.clickableTag,
    type === "interaction" && "interaction-select",
    className
  );

  const content = type === "count" && value ? formatCount(value) : value;

  switch (type) {
    case "status":
      return (
        <div style={style}>
          <span className={rootClasses}></span>
          {content && <span>{content}</span>}
        </div>
      );
    case "interaction":
      return (
        <div className={rootClasses} style={style}>
          <input id="tag" type="checkbox" checked={checked} onChange={onChange} tabIndex={0} />
          <label htmlFor="tag">
            {!!icon && isIconAllowed(type) && <Icon icon={icon} />}
            <span>{content}</span>
          </label>
        </div>
      );
    default:
      return (
        <div className={rootClasses} style={style}>
          {!!icon && isIconAllowed(type) && <Icon icon={icon} />}
          {content && <span>{content}</span>}
        </div>
      );
  }
};

export default BrTag;
