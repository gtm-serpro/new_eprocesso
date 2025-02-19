import { useState } from "react";
import { Link, useHref as href, useNavigate } from "react-router-dom";
import { BrAvatar, BrDivider, BrHeader } from "..";

type Props = { fluid?: boolean | "sm" | "md" | "lg" | "xl" };

const Header: React.FC<Props> = ({ fluid }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <BrHeader
      fluid={fluid}
      showMenuButton
      showSearchBar
      signature="React Components"
      menuId="main-navigation"
      urlLogo="https://www.gov.br/ds/assets/img/govbr-logo.png"
      title={<Link to="/">React Components</Link>}
      subTitle={
        <div className="d-flex">
          {import.meta.env.VITE_APP_VERSION}
          <BrDivider vertical ml={2} mr={2} />
          {import.meta.env.MODE.toUpperCase()}
        </div>
      }
      quickAccessLinks={[
        { label: "Acesso Rápido 1", href: href("/page-1"), onClick: () => navigate("/page-1") },
        { label: "Acesso Rápido 2", href: href("/page-2"), onClick: () => navigate("/page-2") },
        { label: "Acesso Rápido 3", href: href("/page-3"), onClick: () => navigate("/page-3") },
        { label: "Acesso Rápido 4", href: href("/page-4"), onClick: () => navigate("/page-4") },
      ]}
      features={[
        { label: "Funcionalidade 1", icon: "chart-bar", onClick: () => alert("Funcionalidade 1") },
        {
          label: "Funcionalidade 2",
          icon: "headset",
          onClick: () => alert("Funcionalidade 2"),
        },
        { label: "Funcionalidade 3", icon: "comment", onClick: () => alert("Funcionalidade 3") },
        {
          label: "Funcionalidade 4",
          icon: "adjust",
          onClick: () => alert("Funcionalidade 4"),
          keepExpanded: true,
        },
      ]}
      loggedIn={loggedIn}
      onClickLogin={() => {
        /** Realizar as ações necessárias para o login */
        setLoggedIn(true);
      }}
      onSearch={(searchTerm) => {
        alert(`Buscando o termo "${searchTerm}"`);
      }}
      avatar={<BrAvatar type="image" src="https://picsum.photos/id/823/400" />}
    />
  );
};

export default Header;
