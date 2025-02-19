import { Meta, Story } from "@storybook/react";

import BrMenu, { MenuProps } from ".";
import BrButton from "../BrButton";

export default {
  title: "Navegação/Menu",
  component: BrMenu,
  args: {
    closable: true,
    id: "main-navigation",
    systemName: "Nome da aplicação",
    systemLogoUrl: "https://www.gov.br/ds/assets/img/govbr-logo.png",
    data: [
      {
        label: "Página Inicial",
        icon: "home",
        onClick: () => alert("Página Inicial"),
        divider: true,
      },
      {
        label: "Folder",
        icon: "calendar",
        submenu: [
          {
            label: "Sub Folder 1",
            onClick: () => alert("Sub Folder 1"),
            icon: "moon",
          },
          {
            label: "Sub Folder 2",
            icon: "sun",
            submenu: [
              {
                label: "Sub Sub Folder 1",
                icon: "wifi",
                onClick: () => alert("Sub Sub Folder 1"),
              },
            ],
          },
        ],
      },
    ],
    logos: [
      {
        src: "https://www.gov.br/ds/assets/img/govbr-logo.png",
        alt: "Logo 01",
      },
      {
        src: "https://www.gov.br/ds/assets/img/govbr-logo.png",
        alt: "Logo 02",
      },
    ],
    externalLinks: [
      {
        link: "https://google.com/",
        label: "Link externo 01",
      },
      {
        link: "https://google.com/",
        label: "Link externo 02",
      },
    ],
    socialNetworks: [
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
    ],
    info: (
      <div className="text-center text-down-01">
        Todo o conteúdo deste site está publicado sob a licença{" "}
        <strong>Creative Commons Atribuição-SemDerivações 3.0</strong>
      </div>
    ),
  },
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <>
    <BrButton data-target="#main-navigation" icon="bars" size="small">
      Ativar menu
    </BrButton>
    <BrMenu {...args} />
  </>
);

export const Normal = Template.bind({});

export const Push = Template.bind({});
Push.args = { type: "push", closable: undefined };

export const Contextual = Template.bind({});
Contextual.args = { type: "contextual", contextualTriggerTitle: "Menu contextual" };
