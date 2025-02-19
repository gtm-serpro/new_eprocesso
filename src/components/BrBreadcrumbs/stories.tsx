import { Meta, Story } from "@storybook/react";
import BrBreadcrumbs from ".";

export default {
  title: "Navegação/Breadcrumbs",
  component: BrBreadcrumbs,
} as Meta;

const bc = [
  {
    isHome: true,
    label: "home",
    onClick: () => {
      alert("home");
    },
  },
  {
    label: "rota",
    href: "#",
    onClick: () => {
      alert("rota");
    },
  },
  {
    label: "subrota",
    active: true,
  },
];

export const Simples: Story = (args) => <BrBreadcrumbs {...args} />;
Simples.args = { ...Simples.args, crumbs: bc };
