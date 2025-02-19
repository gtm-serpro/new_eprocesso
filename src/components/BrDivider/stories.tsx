import { Meta, Story } from "@storybook/react";

import BrDivider, { BrDividerProps } from ".";

export default {
  title: "Utilidades/Divider",
  component: BrDivider,
} as Meta;

export const Horizontal: Story<BrDividerProps> = () => (
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <BrDivider mt={3} mb={3} />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </div>
);

export const Vertical: Story<BrDividerProps> = () => (
  <div className="d-flex">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <BrDivider ml={3} mr={3} vertical={true} />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </div>
);
