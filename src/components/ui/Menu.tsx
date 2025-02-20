import { useCallback, useState } from "react";
import { useHref as href, useLocation, useNavigate } from "react-router-dom";
import { BrDivider, BrMenu, BrRadioGroup, Col } from "../..";

const Menu = () => {
  const imageSample = "https://www.gov.br/ds/assets/img/govbr-logo.png";
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [type, setType] = useState<"normal" | "push" | "contextual">("push");
  const [size, setSize] = useState<2 | 3 | 4 | 6>(3);
  const [active, setActive] = useState(true);

  const activeAndOnClick = useCallback(
    (route: string) => {
      return {
        onClick: () => navigate(route),
        ...(pathname === route && { active: true }),
      };
    },
    [navigate, pathname]
  );

  return (
    <BrMenu
      closable
      shadow={type === "normal"}
      type="normal"
      // startActive={active}
      md={size}
      lg={size}
      xl={size}
      systemName="React Components"
      systemLogoUrl={imageSample}
      id="main-navigation"
      data={[
        {
          label: "Página Inicial",
          icon: "home",
          link: href("/"),
          divider: true,
          ...activeAndOnClick("/"),
        },
        {
          label: "Página 1",
          icon: "sitemap",
          link: href("/page-1"),
          divider: true,
          ...activeAndOnClick("/page-1"),
        },
        {
          label: "Folder",
          icon: "calendar",
          submenu: [
            {
              label: "Página 2",
              icon: "tasks",
              link: href("/page-2"),
              ...activeAndOnClick("/page-2"),
            },
            {
              label: "Sub Folder 1",
              icon: "chart-pie",
              submenu: [
                {
                  label: "Página 3",
                  icon: "users",
                  link: href("/page-3"),
                  ...activeAndOnClick("/page-3"),
                },
                {
                  label: "Sub Folder 2",
                  icon: "address-card",
                  submenu: [
                    {
                      label: "Página 4",
                      icon: "desktop",
                      link: href("/page-4"),
                      ...activeAndOnClick("/page-4"),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
      logos={[
        {
          src: imageSample,
          alt: "Logo 01",
        },
        {
          src: imageSample,
          alt: "Logo 02",
        },
      ]}
      externalLinks={[
        {
          link: "https://google.com/",
          label: "Link externo 01",
        },
        {
          link: "https://google.com/",
          label: "Link externo 02",
        },
      ]}
      socialNetworks={[
        {
          link: "#",
          icon: "fab fa-facebook-f",
          name: "Facebook",
        },
        {
          link: "#",
          icon: "fab fa-twitter",
          name: "Twitter",
        },
        {
          link: "#",
          icon: "fab fa-linkedin-in",
          name: "Linkedin",
        },
        {
          link: "#",
          icon: "fab fa-whatsapp",
          name: "Whatsapp",
        },
      ]}
      info={
        <>
          <Col>
            <BrRadioGroup
              title="Layout do Menu"
              name="type"
              options={[
                { label: "Flutuante (padrão)", value: "normal" },
                { label: "Fixo na lateral", value: "push" },
                { label: "Contextual", value: "contextual" },
              ]}
              value={type}
              onChange={(e) => {
                setType(e.target.value as "normal" | "push" | "contextual");
                setActive(true);
              }}
            />
          </Col>
          {type !== "contextual" && (
            <Col margin={{ t: 3 }}>
              <BrRadioGroup
                title="Largura do Menu"
                name="size"
                options={[
                  { label: "1/6", value: 2 },
                  { label: "1/4 (padrão)", value: 3 },
                  { label: "1/3", value: 4 },
                  { label: "1/2", value: 6 },
                ]}
                value={size}
                onChange={(e) => setSize(+e.target.value as 2 | 3 | 4 | 6)}
              />
            </Col>
          )}
          <BrDivider mt={3} mb={3} ml={-3} mr={-3} />
          <Col>
            <div className="text-center">
              Todo o conteúdo deste site está publicado sob a licença{" "}
              <strong>Creative Commons Atribuição-SemDerivações 3.0</strong>
            </div>
          </Col>
        </>
      }
    />
  );
};

export default Menu;
