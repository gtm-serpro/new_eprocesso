import CustomTag from "@/common/CustomTag";
import { useMtProps } from "@/hooks/useMtProps";
import IMtProps from "@/types/IMtProps";
import { MessageIcon, MessageStatus } from "@/types/messages";
import classNames from "classnames";
import { ReactNode, forwardRef, useState } from "react";
import BrButton from "../BrButton";

export interface BrMessageProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
  id?: string;
  status?: MessageStatus;
  category?: "feedback" | "message";
  message: ReactNode;
  title?: string;
  inlineTitle?: boolean;
  closable?: boolean;
}

const BrMessage = forwardRef<HTMLElement, BrMessageProps>((props: BrMessageProps, ref) => {
  const {
    id,
    message,
    status = "info",
    category = "message",
    title,
    inlineTitle,
    closable = false,
    className,
  } = props;

  const [visible, setVisible] = useState(true);
  const mtProps = useMtProps(props);
  const BodyWrapper = inlineTitle ? "span" : "p";

  const iconElement = (
    <i
      className={classNames(`fas fa-${MessageIcon[status]}`, category === "message" && "fa-lg")}
      aria-hidden="true"
    />
  );

  if (!visible) {
    return null;
  }

  return (
    <CustomTag
      ref={ref}
      tagName={category === "feedback" ? "span" : "div"}
      className={classNames(
        category === "feedback" && "feedback",
        category === "message" && "br-message",
        status,
        className,
        ...mtProps
      )}
      id={id}
      role="alert"
    >
      {category === "message" && <div className="icon">{iconElement}</div>}

      {category === "feedback" && iconElement}

      {category === "feedback" && message}

      {category === "message" && (
        <>
          <div className="content">
            {title && <span className="message-title mr-2">{title}</span>}
            <BodyWrapper className="message-body">{message}</BodyWrapper>
          </div>
          {closable && (
            <div className="close">
              <BrButton circle size="small" aria-label="Fechar" onClick={() => setVisible(false)}>
                <i className="fas fa-times" aria-hidden="true"></i>
              </BrButton>
            </div>
          )}
        </>
      )}
    </CustomTag>
  );
});

export default BrMessage;
