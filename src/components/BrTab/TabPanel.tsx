import classNames from "classnames";

export type BrTabPanelProps = {
  children: React.ReactNode;
  index: number;
  activeIndex?: number;
  id?: string;
};

const BrTabPanel = (props: BrTabPanelProps) => {
  const { children, index, activeIndex, ...rest } = props;
  const classes = classNames("tab-panel", { "is-active": index === activeIndex });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default BrTabPanel;
