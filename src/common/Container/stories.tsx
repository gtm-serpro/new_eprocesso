import { Meta, Story } from "@storybook/react";

import Typography from "@/common/Typography";
import BrCard from "@/components/BrCard";

import Container, { ContainerProps } from ".";

export default {
  title: "Layout e Tipografia/Container",
  component: Container,
} as Meta;

export const Default: Story<ContainerProps> = (args) => (
  <div style={{ width: "100%", height: "100%" }}>
    <Container {...args} style={{ backgroundColor: "#DCDCDC" }}>
      <BrCard>Item</BrCard>
      <BrCard>Item</BrCard>
      <BrCard>Item</BrCard>
    </Container>
  </div>
);
Default.args = {
  ...Default.args,
  flex: true,
  fullHeight: true,
  justifyContent: "around",
  alignItems: "center",
  padding: 3,
};

const GreyContainer = ({ size }: { size: "sm" | "md" | "lg" | "xl" }) => (
  <Container style={{ backgroundColor: "#DCDCDC" }} fluid={size} margin={{ b: 1 }}>
    <Typography weight="bold">Fluid {size}</Typography>
  </Container>
);

export const Sizes: Story<ContainerProps> = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <Typography weight="bold">Dica: </Typography>
    <Typography>
      Redimensione a janela do navegador para testar a responsividade dos breakpoints
    </Typography>
    <br />
    <br />
    <GreyContainer size="sm" />
    <GreyContainer size="md" />
    <GreyContainer size="lg" />
    <GreyContainer size="xl" />
  </div>
);
