import BrItem from "@/components/BrItem";
import { Meta, Story } from "@storybook/react";

import BrList, { ListProps } from ".";

const child = (
  <>
    <BrItem>Item 1</BrItem>
    <BrItem>Item 2</BrItem>
  </>
);

export default {
  title: "Superfícies/List",
  component: BrList,
  args: {
    title: "Lista de Itens",
    children: child,
  },
} as Meta;

export const Simples: Story<ListProps> = (args) => <BrList {...args} />;
