import Icon from "@/common/Icon";
import BrButton from "@/components/BrButton";
import { useBodyOverflowHidden } from "@/hooks/useBodyOverflowHidden";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import classNames from "classnames";
import { Fragment, MouseEvent } from "react";
import ModalFooter from "./ModalFooter";

type ModalAction = {
  label?: string;
  disabled?: boolean;
  action?: () => void;
};

export interface BrModalState {
  isOpen: boolean;
  showClose?: boolean;
}

export interface BrModalActions {
  formId?: string;
  keepOpenOnPrimaryAction?: boolean;
  keepOpenOnSecondaryAction?: boolean;
  focusOnPrimaryAction?: boolean;
  focusOnSecondaryAction?: boolean;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
  onClose?: () => void;
}

type dimension = number | string;

export interface BrModalProps extends BrModalState, BrModalActions {
  children?: React.ReactNode;
  title?: string;
  minWidth?: dimension;
  minHeight?: dimension;
  height?: dimension;
  width?: dimension;
  formId?: string;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
}

const BrModal = (props: BrModalProps) => {
  const {
    children,
    title,
    showClose,
    primaryAction,
    secondaryAction,
    isOpen,
    keepOpenOnPrimaryAction,
    keepOpenOnSecondaryAction,
    focusOnPrimaryAction,
    focusOnSecondaryAction,
    onClose,
    minWidth,
    minHeight,
    height,
    width,
    formId,
  } = props;

  const scrimClasses = classNames("br-scrim", "foco", { active: true });

  const isSmallScreen = useWindowWidth() < 1024;

  const handleClickOnScrim = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const Wrapper = formId ? "form" : Fragment;
  const wrapperProps = formId ? { id: formId, onSubmit: primaryAction?.action } : {};

  useBodyOverflowHidden(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper {...wrapperProps}>
      <div className={scrimClasses} onClick={handleClickOnScrim}>
        <div className="br-modal p-0 auto">
          <div className="br-card py-2" style={{ flexDirection: "column" }}>
            <div className="br-modal-header">
              {title && (
                <div className="br-modal-title px-2" title={title}>
                  {title}
                </div>
              )}
              {(showClose || title) && (
                <BrButton circle close size="small" aria-label="Fechar" onClick={onClose}>
                  <Icon icon="times" aria-hidden="true" />
                </BrButton>
              )}
            </div>
            <div
              className="mb-2 px-2"
              style={{
                overflowY: "auto",
                width: isSmallScreen ? "95vw" : width,
                minWidth: isSmallScreen ? "95vw" : minWidth,
                height,
                minHeight,
                maxHeight: "calc(100vh - 200px)",
              }}
            >
              {children}
            </div>
            <ModalFooter
              formId={formId}
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
              keepOpenOnPrimaryAction={keepOpenOnPrimaryAction}
              keepOpenOnSecondaryAction={keepOpenOnSecondaryAction}
              focusOnPrimaryAction={focusOnPrimaryAction}
              focusOnSecondaryAction={focusOnSecondaryAction}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BrModal;
