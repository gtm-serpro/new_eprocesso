import classNames from "classnames";
import React, { ReactNode, useCallback, useRef, useState } from "react";
import Container from "../../common/Container";
import CustomTag from "../../common/CustomTag";
import { useMtProps } from "../../hooks/useMtProps";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useSpreadProps } from "../../hooks/useSpreadProps";
import useUniqueId from "../../hooks/useUniqueId";
import IMtProps from "../../types/IMtProps";
import BrButton from "../BrButton";

export interface ILink {
  label: string;
  href?: string;
  onClick?: () => void;
  keepExpanded?: boolean;
}

export interface IFeature extends ILink {
  icon: string;
}

export interface HeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, "title">, IMtProps {
  /** Tamanho do container do header */
  fluid?: boolean | "sm" | "md" | "lg" | "xl";
  /** URL da imagem para o logo no header. */
  urlLogo?: string;
  /** Nome do sistema. Aparece ao lado do logo. */
  signature?: string;
  /** Título da página. */
  title: ReactNode;
  /** Subtítulo da página. */
  subTitle: ReactNode;
  /** Se é o header compacto ou não. */
  compact?: boolean;
  /** Densidade do header.
   *
   * - small: pequena
   * - medium: normal
   * - large: grande.
   */
  density?: "small" | "medium" | "large";
  /** Links de acesso rápido. */
  quickAccessLinks?: ILink[] | null;
  /** Links de features. */
  features?: IFeature[] | null;

  /** Se mostra ou não a barra de busca. */
  showSearchBar?: boolean;

  /** Evento disparado quando realiza uma busca pela barra de busca. */
  onSearch?: (terms: string) => void;

  /** Se mostra ou não o botão de login. */
  showLoginButton?: boolean;

  /** Se está logado ou não. */
  loggedIn?: boolean;

  /** Evento disparado ao clicar no botão de log-in. */
  onClickLogin?: () => void;

  /** Avatar que é mostrado ao se logar. */
  avatar?: React.ReactNode;

  /** Mostrar ou não o menu */
  showMenuButton?: boolean;

  /** ID do menu a ser ativado/desativado pelo botão de menu. */
  menuId?: string;

  /** Se o header está fixo no topo. */
  sticky?: boolean;
}

const BrHeader = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      fluid,
      className,
      children,
      id,
      urlLogo,
      signature,
      title,
      subTitle,
      compact = false,
      density = "medium",
      quickAccessLinks,
      features,
      loggedIn = false,
      showLoginButton = true,
      onClickLogin,
      showSearchBar = false,
      onSearch,
      avatar,
      showMenuButton = false,
      menuId,
      sticky = false,
      ...props
    },
    ref
  ) => {
    const fid = useUniqueId(id, "header_____");
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [quickAcessExpanded, setQuickAccessExpanded] = useState(false);
    const [featuresExpanded, setFeaturesExpanded] = useState(false);

    const refHeaderActions = useRef(null);
    const refButtonQuickAccess = useRef(null);
    const refButtonFeatures = useRef(null);

    const handleActivateSearch = useCallback(() => {
      setSearchActive(true);
    }, []);

    const handleInactivateSearch = useCallback(() => {
      setSearchActive(false);
    }, []);

    const handleClickQuickAcess = useCallback(() => {
      setQuickAccessExpanded((quickAcessExpanded) => !quickAcessExpanded);
    }, []);

    const handleClickFeatures = useCallback(() => {
      setFeaturesExpanded((featuresExpanded) => !featuresExpanded);
    }, []);

    useOutsideClick(refButtonQuickAccess, () => {
      setQuickAccessExpanded(false);
    });

    useOutsideClick(refButtonFeatures, () => {
      setFeaturesExpanded(false);
    });

    const handleSearchKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          onSearch?.(searchTerm);
        }
      },
      [onSearch, searchTerm]
    );

    const titleString =
      typeof title === "string"
        ? title
        : typeof title === "object"
        ? (title as React.ReactElement)?.props?.children
        : "";

    return (
      <header
        data-sticky={sticky || null}
        ref={ref}
        id={fid}
        className={classNames(
          "br-header",
          { compact: compact },
          { small: density === "small" },
          { large: density === "large" },
          className,
          ...mtProps
        )}
        {...spreadProps}
      >
        <Container fluid={fluid}>
          <div className="header-top">
            {(urlLogo || signature) && (
              <div className="header-logo">
                {urlLogo && <img src={urlLogo} alt={titleString} />}
                {urlLogo && signature && (
                  <span className="br-divider vertical mx-half mx-sm-1"></span>
                )}
                {signature && <div className="header-sign">{signature}</div>}
              </div>
            )}
            <div className="header-actions" ref={refHeaderActions}>
              {!!quickAccessLinks?.length && (
                <div
                  className={classNames("header-links", "dropdown", { show: quickAcessExpanded })}
                >
                  <button
                    ref={refButtonQuickAccess}
                    onClick={handleClickQuickAcess}
                    className={classNames("br-button", "circle", "small", {
                      active: quickAcessExpanded,
                    })}
                    type="button"
                    data-toggle="dropdown"
                    aria-label="Abrir Acesso Rápido"
                  >
                    <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div className="br-list" style={{ left: "auto", right: 0 }}>
                    <div className="header">
                      <div className="title">Acesso Rápido</div>
                    </div>
                    {quickAccessLinks?.map((link, index) => (
                      <a
                        key={`quickAccessLink-${index}`}
                        className="br-item"
                        onClick={(e) => {
                          if (link.onClick) {
                            e.preventDefault();
                            e.stopPropagation();
                            link.onClick();
                          }

                          if (!link.keepExpanded) {
                            setQuickAccessExpanded(false);
                          }
                        }}
                        href={link.href || "#"}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {!!quickAccessLinks?.length && !!features?.length && (
                <span className="br-divider vertical mx-half mx-sm-1"></span>
              )}
              {!!features?.length && (
                <div
                  className={classNames("header-functions", "dropdown", { show: featuresExpanded })}
                >
                  <button
                    ref={refButtonFeatures}
                    onClick={handleClickFeatures}
                    className={classNames("br-button", "circle", "small", {
                      active: featuresExpanded,
                    })}
                    type="button"
                    data-toggle="dropdown"
                    aria-label="Abrir Funcionalidades do Sistema"
                  >
                    <i className="fas fa-th" aria-hidden="true"></i>
                  </button>
                  <div className="br-list" style={{ left: "auto", right: 0 }}>
                    <div className="header">
                      <div className="title">Funcionalidades do Sistema</div>
                    </div>
                    {features?.map((feature, index) => (
                      <div key={`feature-${index}`} className="align-items-center br-item">
                        <CustomTag tagName={feature.href && "a"} href={feature.href}>
                          <button
                            onClick={(e) => {
                              if (feature.onClick) {
                                e.preventDefault();
                                e.stopPropagation();
                                feature.onClick();
                              }
                              if (!feature.keepExpanded) {
                                setFeaturesExpanded(false);
                              }
                            }}
                            className="br-button circle small"
                            type="button"
                            aria-label={feature.label}
                          >
                            <i
                              className={
                                feature.icon.includes("fas ")
                                  ? feature.icon
                                  : `fas fa-${feature.icon}`
                              }
                              aria-hidden="true"
                            ></i>
                            <span className="text">{feature.label}</span>
                          </button>
                        </CustomTag>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {showSearchBar && (
                <div className="header-search-trigger">
                  <button
                    className="br-button circle"
                    type="button"
                    aria-label="Abrir Busca"
                    data-toggle="search"
                    data-target=".header-search"
                    onClick={handleActivateSearch}
                  >
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              )}
              {showLoginButton && (
                <div className="header-login">
                  <div className={classNames("header-sign-in", { "d-none": loggedIn })}>
                    <BrButton onClick={onClickLogin} /* signIn */ size="small" data-trigger="login">
                      <i className="fas fa-user" aria-hidden="true"></i>
                      <span className="d-sm-inline">Entrar</span>
                    </BrButton>
                  </div>
                  <div className={classNames({ "d-none": !loggedIn })}>{avatar}</div>
                </div>
              )}
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              {showMenuButton && (
                <div className={classNames("header-menu-trigger", { "d-none": !showMenuButton })}>
                  <BrButton
                    icon="bars"
                    size="small"
                    circle
                    type="button"
                    aria-label="Menu"
                    data-toggle="menu"
                    data-target={menuId ? `#${menuId}` : "#"}
                    id="navigation"
                  />
                </div>
              )}
              <div className="header-info">
                <div className="header-title">{title}</div>
                <div className="header-subtitle">{subTitle}</div>
              </div>
            </div>
            {showSearchBar && (
              <div className={classNames("header-search", { active: searchActive })}>
                <div className="br-input has-icon">
                  <label htmlFor={`searchbox-${fid}`}>Texto da pesquisa</label>
                  <input
                    id={`searchbox-${fid}`}
                    type="text"
                    placeholder="O que você procura?"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleSearchKeyDown}
                  />
                  <button
                    className="br-button circle small"
                    type="button"
                    aria-label="Pesquisar"
                    onClick={() => onSearch?.(searchTerm)}
                  >
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <BrButton
                  onClick={handleInactivateSearch}
                  circle
                  icon="times"
                  className="search-close"
                  type="button"
                  aria-label="Fechar Busca"
                  data-dismiss="search"
                />
              </div>
            )}
          </div>
        </Container>
        {children}
      </header>
    );
  }
);

export default BrHeader;
