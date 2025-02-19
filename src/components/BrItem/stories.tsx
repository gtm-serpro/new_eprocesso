import BrCheckbox from "@/components/BrCheckbox";
import { Meta, Story } from "@storybook/react";

import BrItem, { BrItemProps } from ".";

export default {
  title: "Superfícies/Item",
  component: BrItem,
  args: {
    divider: false,
    children: "item x",
  },
} as Meta;

const Template: Story<BrItemProps> = (args) => {
  return <BrItem {...args} />;
};

export const Simples = Template.bind({});

export const ComCheck = Template.bind({});
ComCheck.args = {
  divider: true,
  children: <BrCheckbox label="item x" />,
};
