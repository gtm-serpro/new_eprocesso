interface IMenuItem {
  label?: string;
  link?: string;
  submenu?: IMenuItem[];
  icon?: string;
  divider?: boolean;
  expanded?: boolean;
  active?: boolean;
  danger?: boolean;
  keepMenuActive?: boolean;
  onClick?: () => void;
}

export default IMenuItem;
