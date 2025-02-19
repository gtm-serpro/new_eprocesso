import { Meta, Story } from "@storybook/react";

import Col, { ColProps } from ".";
import Row from "../Row";

import Container from "@/common/Container";
import Typography from "@/common/Typography";
import BrCard from "@/components/BrCard";

export default {
  title: "Layout e Tipografia/Col",
  component: Col,
} as Meta;

const Item = ({ text }: { text: string }) => (
  <BrCard
    style={{
      backgroundColor: "#DCDCDC",
      minHeight: 80,
      textAlign: "center",
    }}
  >
    <Typography weight="bold">{text}</Typography>
  </BrCard>
);

export const Breakpoints: Story<ColProps> = () => (
  <Container>
    <Typography weight="bold">Dica: </Typography>
    <Typography>
      Redimensione a janela do navegador para testar a responsividade dos breakpoints
    </Typography>
    <Row margin={{ t: 3 }}>
      <Col sm={12}>
        <Item text="sm={12}" />
      </Col>
      <Col sm={12} md={6}>
        <Item text="sm={12} md={6}" />
      </Col>
      <Col sm={12} md={6}>
        <Item text="sm={12} md={6}" />
      </Col>
      <Col sm={6} md={3}>
        <Item text="sm={6} md={3}" />
      </Col>
      <Col sm={6} md={3}>
        <Item text="sm={6} md={3}" />
      </Col>
      <Col sm={6} md={3}>
        <Item text="sm={6} md={3}" />
      </Col>
      <Col sm={6} md={3}>
        <Item text="sm={6} md={3}" />
      </Col>
    </Row>
  </Container>
);
