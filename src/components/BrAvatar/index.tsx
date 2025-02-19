import Icon from "@/common/Icon";
import classNames from "classnames";

type AvatarType = "image" | "icon" | "letter";

export interface BrAvatarProps {
  className?: string;
  title?: string;
  src?: string;
  type?: AvatarType;
  size?: "medium" | "large";
}

const SwitchType = ({ type, src }: { type?: AvatarType; src: string }) => {
  switch (type) {
    case "image":
      return <img src={src} alt="Avatar" />;
    case "icon":
      return <Icon icon={src} aria-hidden="true" />;
    case "letter":
      return <>{src}</>;
    default:
      return <Icon icon="user" aria-hidden="true" />;
  }
};

const BrAvatar = (props: BrAvatarProps) => {
  const { className, title, src = "", type, size } = props;

  const rootClasses = classNames("br-avatar", title, size, className);
  const innerClasses = classNames({
    image: !type || type === "image" || type === "icon",
    letter: type === "letter",
  });

  return (
    <span className={rootClasses} title={title}>
      <span className={innerClasses}>
        <SwitchType type={type} src={src} />
      </span>
    </span>
  );
};

export default BrAvatar;
