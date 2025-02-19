import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import BrTab, { BrTabProps } from ".";
import BrTabPanel from "./TabPanel";

const items = ["Panel 1", "Panel 2", "Panel 3"];

export default {
  title: "Navegação/Tab",
  component: BrTab,
  args: { items },
} as Meta;

export const Simples: Story<BrTabProps> = (args) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BrTab {...args} activeIndex={activeTab} onChange={setActiveTab}>
      <BrTabPanel activeIndex={activeTab} index={0}>
        Painel 1
      </BrTabPanel>
      <BrTabPanel activeIndex={activeTab} index={1}>
        Painel 2
      </BrTabPanel>
      <BrTabPanel activeIndex={activeTab} index={2}>
        Painel 3
      </BrTabPanel>
    </BrTab>
  );
};
