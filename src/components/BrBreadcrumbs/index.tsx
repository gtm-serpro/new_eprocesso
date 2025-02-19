import CustomTag from "@/common/CustomTag";
import { memo } from "react";

export type Breadcrumb = {
  label: string;
  isHome?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  active?: boolean;
};

export type BreadcrumbsProps = {
  crumbs?: Breadcrumb[];
};

const handleClick = (onClick: Breadcrumb["onClick"]) => (e: React.MouseEvent<HTMLElement>) => {
  if (onClick) {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  }
};

const HomeCrumb = memo(({ label, href, onClick }: Breadcrumb) => {
  return (
    <li className="crumb home mr-0">
      <span className="sr-only">{label}</span>
      <a className="br-button circle small" onClick={handleClick(onClick)} href={href}>
        <i className="fas fa-home" />
      </a>
    </li>
  );
});

const RouteCrumb = memo(({ label, href, active, onClick }: Breadcrumb) => {
  return (
    <li className="crumb">
      <i className="text-center icon fas fa-chevron-right" />
      <CustomTag tagName={active ? null : "a"} onClick={handleClick(onClick)} href={href}>
        <span>{label}</span>
      </CustomTag>
    </li>
  );
});

const Crumb = memo(({ isHome, ...rest }: Breadcrumb) => {
  return isHome ? <HomeCrumb {...rest} /> : <RouteCrumb {...rest} />;
});

const BrBreadcrumbs = ({ crumbs = [] }: BreadcrumbsProps) => {
  return (
    <div className="br-breadcrumb">
      <ul className="crumb-list">
        {crumbs.map((crumb, index) => (
          <Crumb key={index} {...crumb} />
        ))}
      </ul>
    </div>
  );
};

export default memo(BrBreadcrumbs);
