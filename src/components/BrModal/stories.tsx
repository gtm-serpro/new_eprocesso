import BrButton from "@/components/BrButton";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import BrModal, { BrModalProps } from ".";

export default {
  title: "Superfícies/Modal",
  component: BrModal,
} as Meta;

const Template: Story<BrModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrButton primary onClick={() => setOpen(true)}>
        Abrir Modal
      </BrButton>
      <BrModal {...args} isOpen={open} onClose={() => setOpen(false)}>
        Elementos que compõem o conteúdo do modal. Definem a largura e a altura do mesmo.
      </BrModal>
    </>
  );
};

export const Simples = Template.bind({});

export const ComActionPrincipal = Template.bind({});
ComActionPrincipal.args = {
  title: "Título do Modal",
  primaryAction: { label: "Ok", action: () => "", disabled: true },
};

export const ComActions = Template.bind({});
ComActions.args = {
  title: "Título do Modal",
  primaryAction: { action: () => "" },
  secondaryAction: { action: () => "" },
};
