import { Meta, Story } from "@storybook/react";
import BrFooter, { BrFooterProps } from ".";

export default {
  title: "Layout e Tipografia/Footer",
  component: BrFooter,
} as Meta;

const Template: Story<BrFooterProps> = (args) => <BrFooter {...args} />;

export const Padrao = Template.bind({});
Padrao.storyName = "Padrão";
Padrao.args = {
  urlLogo: "https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png",
  links: [
    {
      category: "Categoria 1",
      items: [
        {
          label: "Ad deserunt nostrud",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
      ],
    },
    {
      category: "Categoria 2",
      items: [
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
      ],
    },
    {
      category: "Categoria 3",
      items: [
        {
          label: "Ad deserunt nostrud",
          link: "#",
        },
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
      ],
    },
    {
      category: "Categoria 4",
      items: [
        {
          label: "Ad deserunt nostrud",
          link: "#",
        },
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
      ],
    },
    {
      category: "Categoria 5",
      items: [
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
      ],
    },
    {
      category: "Categoria 6",
      items: [
        {
          label: "Ex qui laborum consectetur aute commodo",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
        {
          label: "Nulla occaecat eiusmod",
          link: "#",
        },
      ],
    },
  ],
  socialNetworks: [
    { name: "Facebook", link: "#", icon: "fab fa-facebook-square" },
    { name: "Twitter", link: "#", icon: "fab fa-twitter-square" },
    { name: "Linkedin", link: "#", icon: "fab fa-linkedin" },
  ],
  footerImages: [
    {
      link: "#",
      name: "Footer Image 1",
      url: "https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png",
    },
    {
      link: "#",
      name: "Footer Image 2",
      url: "https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png",
    },
  ],
  userLicenseText: (
    <>
      Texto destinado a exibição de informações relacionadas à&nbsp;<b>licença de uso.</b>
    </>
  ),
};
