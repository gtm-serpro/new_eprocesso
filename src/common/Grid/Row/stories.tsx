import { Meta, Story } from "@storybook/react";

import Row, { RowProps } from ".";
import Col from "../Col";

import Container from "@/common/Container";
import Typography from "@/common/Typography";
import BrCard from "@/components/BrCard";

export default {
  title: "Layout e Tipografia/Row",
  component: Row,
} as Meta;

const Item = ({ minHeight }: { minHeight: number }) => (
  <BrCard style={{ backgroundColor: "#DCDCDC", minHeight }}>
    <Typography weight="bold">Coluna</Typography>
  </BrCard>
);

const Template: Story<RowProps> = (args) => (
  <Container>
    <Row {...args}>
      <Col>
        <Item minHeight={200} />
      </Col>
      <Col>
        <Item minHeight={150} />
      </Col>
      <Col>
        <Item minHeight={100} />
      </Col>
      <Col>
        <Item minHeight={50} />
      </Col>
    </Row>
  </Container>
);

export const Alinhamentos = Template.bind({});
Alinhamentos.args = {
  ...Alinhamentos.args,
  justifyContent: "center",
  alignItems: "center",
  noGutters: false,
};
