import { Meta, Story } from "@storybook/react";

import { useEffect, useRef } from "react";
import BrRadio, { RadioProps } from ".";

export default {
  title: "Formulários/Radio",
  component: BrRadio as RadioProps,
  args: {
    label: "Rotulo",
  },
} as Meta<RadioProps>;

const Template: Story<RadioProps> = (args) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref.current]);

  return <BrRadio ref={ref} {...args} />;
};

export const Simples = Template.bind({});
