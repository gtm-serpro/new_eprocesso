import { Meta, Story } from "@storybook/react";

import BrHeader, { HeaderProps } from ".";

export default {
  title: "Layout e Tipografia/Header",
  component: BrHeader,
  args: {
    signature: "React Components",
    showMenuButton: true,
    showSearchBar: true,
    menuId: "main-navigation",
    urlLogo: "https://www.gov.br/ds/assets/img/govbr-logo.png",
    title: "React Components",
    subTitle: `${import.meta.env.VITE_APP_VERSION} - ${import.meta.env.MODE.toUpperCase()}`,
    quickAccessLinks: [
      { label: "Acesso Rápido 1", onClick: () => alert("Acesso rápido 1") },
      { label: "Acesso Rápido 2", onClick: () => alert("Acesso rápido 2") },
    ],
    features: [
      { label: "Funcionalidade 1", icon: "chart-bar", onClick: () => alert("Funcionalidade 1") },
      {
        label: "Funcionalidade 2",
        icon: "headset",
        onClick: () => alert("Funcionalidade 2"),
      },
      { label: "Funcionalidade 3", icon: "comment", onClick: () => alert("Funcionalidade 3") },
      { label: "Funcionalidade 4", icon: "adjust", onClick: () => alert("Funcionalidade 4") },
    ],
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => {
  return <BrHeader {...args} />;
};

export const Completo = Template.bind({});
