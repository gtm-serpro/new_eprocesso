import { CSSProperties } from "react";
import classNames from "classnames";
import BrButton from "../BrButton";
import Icon from "@/common/Icon";
import BrAvatar, { BrAvatarProps } from "../BrAvatar";

export type BrCardProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  avatar?: BrAvatarProps;
  footer?: React.ReactNode;
  disabled?: boolean;
  hover?: boolean;
  fixedHeight?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

const BrCard = (props: BrCardProps) => {
  const {
    children,
    className,
    style,
    title,
    subtitle,
    avatar,
    footer,
    disabled,
    hover,
    fixedHeight,
    onClick,
  } = props;

  const classesRoot = classNames("br-card", { disabled, hover, "h-fixed": fixedHeight }, className);

  const classesTitle = classNames({ "ml-3": !!avatar });

  const showHeader = !!title || !!subtitle || !!avatar;

  return (
    <div className={classesRoot} onClick={onClick} style={style}>
      {showHeader && (
        <div className="card-header">
          <div className="d-flex">
            {avatar && <BrAvatar {...avatar} />}
            <div className={classesTitle}>
              {title && <div className="text-weight-semi-bold text-up-02">{title}</div>}
              {subtitle && <div>{subtitle}</div>}
            </div>
            <div className="ml-auto">
              <BrButton circle>
                <Icon icon="ellipsis-v" aria-hidden="true" />
              </BrButton>
            </div>
          </div>
        </div>
      )}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default BrCard;
