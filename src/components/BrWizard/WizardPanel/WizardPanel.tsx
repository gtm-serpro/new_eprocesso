import classNames from "classnames";
import React from "react";
import { useMtProps } from "../../../hooks/useMtProps";
import { useSpreadProps } from "../../../hooks/useSpreadProps";
import IMtProps from "../../../types/IMtProps";

export interface WizardPanelProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
  /** Título do painel */
  title: string;

  /** Se mostra ou não o header do título */
  showHeader?: boolean;

  /** Se o painel está desabilitado */
  disabled?: boolean;
}

const BrWizardPanel = React.forwardRef<HTMLDivElement, WizardPanelProps>(
  ({ className, children, title, showHeader = true, ...props }, ref) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    return (
      <div
        ref={ref}
        className={classNames("wizard-panel-content", className, ...mtProps)}
        {...spreadProps}
      >
        {showHeader && <div className="h3">{title}</div>}
        <div className="text" tabIndex={0}>
          {children}
        </div>
      </div>
    );
  }
);

export default BrWizardPanel;
