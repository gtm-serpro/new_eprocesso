import BrButton from "@/components/BrButton";
import classNames from "classnames";
import { MouseEventHandler, useEffect, useRef } from "react";
import { BrModalActions } from ".";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ModalFooter = ({
  primaryAction,
  secondaryAction,
  keepOpenOnPrimaryAction,
  keepOpenOnSecondaryAction,
  focusOnPrimaryAction,
  focusOnSecondaryAction,
  onClose,
  formId,
}: BrModalActions) => {
  const justify = !!primaryAction && !!secondaryAction ? "end" : "center";
  const classes = classNames("br-modal-footer px-2", `justify-content-${justify}`);

  const secondaryButtonRef = useRef<HTMLButtonElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focusOnPrimaryAction) {
      if (primaryButtonRef.current && document.activeElement !== primaryButtonRef.current) {
        primaryButtonRef.current.contentEditable = "true";
        primaryButtonRef.current.focus?.();
        primaryButtonRef.current.contentEditable = "false";
      }
    } else if (focusOnSecondaryAction) {
      if (secondaryButtonRef.current && document.activeElement !== secondaryButtonRef.current) {
        secondaryButtonRef.current.contentEditable = "true";
        secondaryButtonRef.current?.focus?.();
        secondaryButtonRef.current.contentEditable = "false";
      }
    }
  }, [primaryButtonRef, secondaryButtonRef]);

  const handlePrimary = () => {
    primaryAction?.action && primaryAction.action();
    !keepOpenOnPrimaryAction && onClose?.();
  };

  const handleSecondary = () => {
    secondaryAction?.action && secondaryAction.action();
    !keepOpenOnSecondaryAction && onClose?.();
  };

  const buttonProps: ButtonProps = formId
    ? { type: "submit" }
    : { type: "button", onClick: handlePrimary };

  return primaryAction || secondaryAction ? (
    <div className={classes}>
      {!!secondaryAction && (
        <BrButton
          ref={secondaryButtonRef}
          secondary
          size="small"
          mt={1}
          ml={1}
          onClick={handleSecondary}
          disabled={secondaryAction.disabled}
          block
          clearBlock="md"
        >
          {secondaryAction.label || "Cancelar"}
        </BrButton>
      )}
      {!!primaryAction && (
        <BrButton
          ref={primaryButtonRef}
          primary
          size="small"
          mt={1}
          ml={1}
          disabled={primaryAction.disabled}
          block
          clearBlock="md"
          {...buttonProps}
        >
          {primaryAction.label || "Confirmar"}
        </BrButton>
      )}
    </div>
  ) : null;
};

export default ModalFooter;
