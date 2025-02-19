import { getBreakpoints } from "@/helpers/styles";
import { Breakpoints } from "@/types/layout";
import { BRMenu } from "@govbr-ds/core";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef } from "react";
import useCommonProperties from "../../hooks/useCommonProperties";
import { useMtProps } from "../../hooks/useMtProps";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import IMenuItem from "./IMenuItem";
import IMenuLink from "./IMenuLink";
import IMenuLogo from "./IMenuLogo";
import ISocialNetwork from "./ISocialNetwork";
import MenuItem from "./MenuItem";

export interface MenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IMtProps,
    Omit<Breakpoints, "xs"> {
  systemLogoUrl?: string;
  systemName?: string;
  contextualTriggerTitle?: string;
  data: IMenuItem[];
  logos?: IMenuLogo[];
  externalLinks?: IMenuLink[];
  socialNetworks?: ISocialNetwork[];
  info?: React.ReactNode;
  type?: "normal" | "push" | "contextual";
  startActive?: boolean;
  shadow?: boolean;
  closable?: boolean;
  density?: "small" | "normal" | "large";
}

export interface MenuRef extends HTMLDivElement {
  element: HTMLDivElement;
}

const BrMenu = React.forwardRef<MenuRef, MenuProps>(
  (
    {
      className,
      children,
      id,
      data,
      logos,
      externalLinks,
      socialNetworks,
      info,
      systemLogoUrl,
      systemName,
      contextualTriggerTitle,
      type = "normal",
      density = "normal",
      sm,
      md = 4,
      lg = 3,
      xl = 2,
      startActive,
      closable = false,
      shadow,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "menu_____");
    const mtProps = useMtProps(props);

    if (type === "normal" || type === "contextual") {
      mtProps.forEach((prop, index) => {
        if (prop && prop.startsWith("m")) {
          delete mtProps[index];
        }
      });
    }
    const spreadProps = useSpreadProps(props);
    const breakpoints = useMemo(() => getBreakpoints({ sm, md, lg, xl }), [sm, md, lg, xl]);
    const refObject = useRef<typeof BRMenu>();
    const refDiv = useRef<HTMLDivElement>(null);
    const refContextualTrigger = useRef<HTMLButtonElement>(null);

    useCommonProperties<MenuRef>(ref, refDiv, {
      get element() {
        return refDiv.current;
      },
    });

    useEffect(() => {
      if (refDiv.current) {
        if (!refObject.current) {
          refObject.current = new BRMenu("br-menu", refDiv.current);
        }

        refObject.current.component = refDiv.current;
        refObject.current.breakpoints = Object.keys(breakpoints);

        refObject.current._setBreakpoints();
        refObject.current._setDropMenu();
        refObject.current._setSideMenu();

        if (type === "contextual") {
          refDiv.current
            .querySelector(".menu-panel")
            ?.classList.remove(...Object.keys(breakpoints));

          if (refContextualTrigger.current) {
            if (!refContextualTrigger.current.hasAttribute("data-click-listener")) {
              refContextualTrigger.current.addEventListener("click", () => {
                if (refDiv.current?.classList.contains("active")) {
                  refObject.current._closeMenu();
                } else {
                  refObject.current._openMenu();
                }
              });

              refContextualTrigger.current?.setAttribute("data-click-listener", "");
            }
          }

          const triggerHeight = refContextualTrigger.current?.offsetHeight;
          document.body.setAttribute(
            "style",
            `padding-bottom: ${triggerHeight}px; margin-bottom: 0 !important;`
          );
        } else {
          document.body.removeAttribute("style");
        }

        return () => {
          document.body.removeAttribute("style");
        };
      }
    }, [
      refDiv.current,
      refContextualTrigger.current,
      refObject.current,
      data,
      type,
      startActive,
      breakpoints,
    ]);

    useEffect(() => {
      document.querySelectorAll(".side-menu-init-open").forEach((el) => {
        const button = el as HTMLButtonElement;
        button.click();
        button.blur();
        button.classList.remove("side-menu-init-open");
      });
    }, []);

    return (
      <>
        {type === "contextual" && (
          <style>
            {`@media (min-width: 992px) {
  .br-menu.contextual.active,
  .br-menu.contextual .menu-trigger {
    position: fixed;
  }
}`}
          </style>
        )}
        <div
          data-breakpoints={Object.keys(breakpoints).join(" ")}
          ref={refDiv}
          id={fid}
          className={classNames(
            "br-menu",
            type === "push" && "push",
            type === "contextual" && "contextual",
            density === "small" && "small",
            density === "large" && "large",
            startActive && "active",
            startActive && type === "push" && "px-0",
            startActive && type === "push" && breakpoints,
            className,
            ...mtProps
          )}
          {...spreadProps}
        >
          {type === "contextual" && (
            <div className="menu-trigger">
              <button
                ref={refContextualTrigger}
                className="br-button primary block py-4"
                type="button"
              >
                {contextualTriggerTitle && <span className="mr-1">{contextualTriggerTitle}</span>}
                <i className="fas fa-chevron-up ml-5" aria-hidden="true"></i>
              </button>
            </div>
          )}

          <div
            className={classNames(
              "menu-container",
              type === "contextual" && shadow && "shadow-lg-up"
            )}
          >
            <div
              className={classNames(
                "menu-panel",
                shadow && "h-auto position-static shadow-lg-right",
                type === "normal" && breakpoints
              )}
            >
              {(systemLogoUrl || systemName || closable) && (
                <div className="menu-header">
                  <div className="menu-title">
                    {systemLogoUrl && <img src={systemLogoUrl} alt={systemName} />}
                    {systemLogoUrl && systemName && (
                      <span className="br-divider vertical mx-2"></span>
                    )}
                    {systemName && <span>{systemName}</span>}
                  </div>
                  {closable && (
                    <div className="menu-close">
                      <button
                        className="br-button circle"
                        type="button"
                        aria-label="Fechar o menu"
                        data-dismiss="menu"
                      >
                        <i className="fas fa-times" aria-hidden="true"></i>
                      </button>
                    </div>
                  )}
                </div>
              )}
              <div className="menu-body">
                {!!data?.length && (
                  <>
                    {data.map((item, index) => (
                      <MenuItem
                        key={index}
                        href={item.link}
                        icon={item.icon}
                        label={item.label}
                        submenu={item.submenu}
                        level={2}
                        divider={item.divider}
                        expanded={item.expanded}
                        active={item.active}
                        danger={item.danger}
                        keepMenuActive={item.keepMenuActive}
                        onClick={item?.onClick}
                        menuType={type}
                        refMenuObject={refObject}
                      />
                    ))}
                  </>
                )}
              </div>
              <div className="menu-footer">
                {logos && (
                  <div className="menu-logos">
                    {logos.map((logo, index) => (
                      <img key={index} src={logo.src} alt={logo.alt} />
                    ))}
                  </div>
                )}
                {externalLinks && (
                  <div className="menu-links">
                    {externalLinks.map((externalLink, index) => (
                      <a key={index} href={externalLink.link}>
                        <span className="mr-1">{externalLink.label}</span>
                        <i className="fas fa-external-link-square-alt" aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                )}
                {socialNetworks && (
                  <div className="menu-social">
                    <div className="text-semi-bold mb-1">Redes Sociais</div>
                    <div className="sharegroup">
                      {socialNetworks.map((socialNetwork, index) => (
                        <div key={index} className="share">
                          <a
                            className="br-button circle"
                            href={socialNetwork.link}
                            aria-label={`Compartilhar por ${socialNetwork.name}`}
                          >
                            <i className={socialNetwork.icon} aria-hidden="true"></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {info && <div className="menu-info">{info}</div>}
              </div>
            </div>
            <div className="menu-scrim" data-dismiss="menu" tabIndex={0} />
          </div>
          {children}
        </div>
      </>
    );
  }
);

export default BrMenu;
