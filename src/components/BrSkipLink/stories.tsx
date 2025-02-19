import { Meta, Story } from "@storybook/react";

import BrSkipLink, { BrSkipLinkProps } from ".";

export default {
  title: "Utilidades/SkipLink",
  component: BrSkipLink,
} as Meta;

export const Simples: Story<BrSkipLinkProps> = (args) => (
  <BrSkipLink {...args}>Conteúdo</BrSkipLink>
);
Simples.args = {
  data: [
    {
      label: "Ir para o conteúdo (1/4)",
      link: "#main-component",
    },
    {
      label: "Ir para o conteúdo (2/4)",
      link: "#main-component",
    },
    {
      label: "Ir para o conteúdo (3/4)",
      link: "#main-component",
    },
    {
      label: "Ir para o conteúdo (4/4)",
      link: "#main-component",
    },
  ],
};
