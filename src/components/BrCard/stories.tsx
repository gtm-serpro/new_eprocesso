import BrButton from "@/components/BrButton";
import { Meta, Story } from "@storybook/react";
import BrCard, { BrCardProps } from ".";

export default {
  title: "Superfícies/Card",
  component: BrCard,
} as Meta;

export const Simples: Story<BrCardProps> = (args) => <BrCard {...args}>Conteúdo</BrCard>;

export const Completo: Story<BrCardProps> = (args) => (
  <BrCard
    avatar={{ title: "título do avatar" }}
    footer={
      <BrButton primary size="small">
        Conteúdo Rodapé
      </BrButton>
    }
    {...args}
  >
    Conteúdo
  </BrCard>
);
Completo.args = { title: "Título", subtitle: "Subtítulo" };
