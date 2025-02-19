import classNames from "classnames";

export type BrLoadingProps = {
  label?: string;
  large?: boolean;
};

const BrLoading = ({ label, large: medium }: BrLoadingProps) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className={classNames("loading", medium && "medium")}></div>
      {label && <span className="rotulo mt-1">{label}</span>}
    </div>
  );
};

export default BrLoading;
