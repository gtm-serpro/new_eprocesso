/* eslint-disable no-script-url */
import { useWindowWidth } from "@/hooks/useWindowWidth";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef } from "react";
import CustomTag from "../../../common/CustomTag";
import { useMtProps } from "../../../hooks/useMtProps";
import { useSpreadProps } from "../../../hooks/useSpreadProps";
import useUniqueId from "../../../hooks/useUniqueId";
import IMtProps from "../../../types/IMtProps";
import IMenuItem from "../IMenuItem";

interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "expanded">, IMtProps {
  label?: string;
  href?: string;
  icon?: string;
  submenu?: IMenuItem[];
  level?: number;
  divider?: boolean;
  expanded?: boolean;
  active?: boolean;
  danger?: boolean;
  keepMenuActive?: boolean;
  onClick?: () => void;
  menuType?: "normal" | "push" | "contextual";
  refMenuObject: React.MutableRefObject<any>;
}

type RefType = HTMLDivElement | HTMLAnchorElement;

const hasItemActiveRecursive = (items?: IMenuItem[]): boolean => {
  return (
    !!items?.length && items?.some((item) => item?.active || hasItemActiveRecursive(item?.submenu))
  );
};

const getParentFolder = (element?: Element | null) =>
  element?.parentElement?.closest(".side-menu") ||
  element?.parentElement?.closest(".menu-folder") ||
  element?.parentElement?.closest(".menu-body");

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      className,
      children,
      id,
      label,
      level = 2,
      href,
      icon,
      submenu,
      divider = false,
      expanded = false,
      active = false,
      danger = false,
      keepMenuActive = false,
      onClick,
      menuType = "normal",
      refMenuObject,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "menuitem_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);

    const itemRef = (ref ?? useRef<RefType>(null)) as React.MutableRefObject<RefType>;
    const itemElement = itemRef.current;
    const hasActive = useMemo(() => hasItemActiveRecursive(submenu), [submenu]);
    const windowWidth = useWindowWidth();

    useEffect(() => {
      if (itemElement && active) {
        itemElement.removeAttribute("hidden");
        itemElement.classList.add("active");

        const folder = getParentFolder(itemElement);
        const siblings = Array.from(
          (folder?.classList.contains("menu-folder")
            ? getParentFolder(folder)
            : folder
          )?.querySelectorAll(".menu-item") ?? []
        );

        siblings?.forEach((sibling) => {
          if (sibling !== itemElement) {
            sibling.removeAttribute("hidden");
            sibling.classList.remove("active");
          }
        });

        let foldersInTree: Element[] = [];
        let currentFolder = folder;

        while (currentFolder) {
          if (folder?.classList.contains("side-menu") && folder !== currentFolder) {
            currentFolder.querySelectorAll(".menu-item").forEach((el) => {
              if (!siblings.includes(el)) {
                el.setAttribute("hidden", "");
              }
            });
          }
          foldersInTree.push(currentFolder);
          currentFolder = getParentFolder(currentFolder);
        }

        const otherFolders = itemElement
          .closest(".menu-body")
          ?.querySelectorAll(".menu-folder, .side-menu");

        otherFolders?.forEach((otherFolder) => {
          if (foldersInTree.includes(otherFolder)) {
            otherFolder.classList.add("active");
          } else {
            otherFolder.classList.remove("active");
          }
        });
      }
    }, [itemElement, active]);

    return (
      <CustomTag
        {...(!!submenu?.length && level === 2 && { tagName: "div" })}
        className={classNames(!!submenu?.length && "menu-folder drop-menu", hasActive && "active")}
      >
        <CustomTag
          ref={itemRef}
          id={fid}
          tagName={expanded ? "div" : "a"}
          className={classNames(
            "menu-item",
            divider && "divider",
            className,
            ...mtProps,
            active && "active",
            danger && "text-danger",
            level > 2 && hasActive && "side-menu-init-open"
          )}
          {...(href && !expanded && { href: href })}
          {...(!!submenu?.length &&
            !expanded && { href: "#", onClick: (e: Event) => e.preventDefault() })}
          {...(onClick && {
            href: href ?? "#",
            onClick: (e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              onClick?.();
              if (
                !keepMenuActive &&
                !submenu?.length &&
                (["normal", "contextual"].includes(menuType) || windowWidth < 576)
              ) {
                refMenuObject?.current?._closeMenu();
              }
            },
          })}
          {...spreadProps}
        >
          <span className="icon">
            {icon && (
              <i className={icon.includes("fas ") ? icon : `fas fa-${icon}`} aria-hidden="true"></i>
            )}
          </span>
          <span className="content">{label}</span>
        </CustomTag>

        {!!submenu?.length && (
          <ul>
            {submenu.map((item, index) => (
              <li key={index}>
                <MenuItem
                  href={item.link}
                  icon={item.icon}
                  label={item.label}
                  submenu={item.submenu}
                  level={level + 1}
                  divider={item.divider}
                  expanded={item.expanded}
                  active={item.active}
                  danger={item.danger}
                  keepMenuActive={item.keepMenuActive}
                  onClick={item?.onClick}
                  menuType={menuType}
                  refMenuObject={refMenuObject}
                />
              </li>
            ))}
          </ul>
        )}
        {children}
      </CustomTag>
    );
  }
);

export default MenuItem;
