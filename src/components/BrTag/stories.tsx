import { StoryContainer } from "@/helpers/storybook";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import BrTag, { BrTagProps } from ".";

export default {
  title: "Feedback/Tag",
  component: BrTag,
} as Meta;

const Template: Story<BrTagProps> = (args) => <BrTag {...args} />;

export const Default = Template.bind({});
Default.args = { value: "Tag" };

const Tag = Template.bind({});
Tag.argTypes = {
  type: { table: { disable: true } },
  color: { table: { disable: true } },
};

export const Texto = Template.bind({});
Texto.args = { color: "support-01", type: "text", value: "Texto", onClick: undefined };
Texto.argTypes = {
  type: { table: { disable: true } },
};

export const Contagem = () => (
  <StoryContainer>
    <Tag value="0" color="danger" type="count" />
    <Tag value="10" color="danger" type="count" />
    <Tag value="150" color="danger" type="count" />
    <Tag value="1500" color="danger" type="count" />
  </StoryContainer>
);

export const Status = () => (
  <div>
    <StoryContainer>
      <Tag color="danger" type="status" size="small" />
      <Tag color="danger" type="status" size="medium" />
      <Tag color="danger" type="status" size="large" />
    </StoryContainer>
    <StoryContainer>
      <Tag color="warning" type="status" size="small" />
      <Tag color="warning" type="status" size="medium" />
      <Tag color="warning" type="status" size="large" />
    </StoryContainer>
    <StoryContainer>
      <Tag color="success" type="status" size="small" />
      <Tag color="success" type="status" size="medium" />
      <Tag color="success" type="status" size="large" />
    </StoryContainer>
    <StoryContainer>
      <Tag color="danger" type="status" size="large" value="Offline" />
      <Tag color="warning" type="status" size="large" value="Ausente" />
      <Tag color="success" type="status" size="large" value="Online" />
    </StoryContainer>
  </div>
);

export const Ícone = () => (
  <StoryContainer>
    <Tag color="primary-default" type="icon" icon="car" />
    <Tag color="highlight" type="icon" icon="search" />
    <Tag color="support-07" type="icon" icon="user" />
  </StoryContainer>
);

export const InterativaPersistente = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Tag
      color="primary-default"
      type="interaction"
      value="Label"
      checked={checked}
      onChange={() => setChecked(!checked)}
      icon="car"
    />
  );
};
