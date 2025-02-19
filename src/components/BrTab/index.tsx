import classNames from "classnames";

export type BrTabProps = {
  children: React.ReactNode;
  dense?: boolean;
  items: string[];
  activeIndex: number;
  onChange: (index: number) => void;
};

const BrTab = (props: BrTabProps) => {
  const { children, dense, items, activeIndex, onChange } = props;

  return (
    <div className={classNames("br-tab", dense && "large")}>
      <nav className="tab-nav">
        <ul>
          {items.length &&
            items.map((item, index) => (
              <li
                className={classNames("tab-item", { "is-active": index === activeIndex })}
                key={index}
              >
                <button type="button" aria-label={item} onClick={() => onChange(index)}>
                  <span className="name">{item}</span>
                </button>
              </li>
            ))}
        </ul>
      </nav>
      <div className="tab-content">{children}</div>
    </div>
  );
};

export default BrTab;
