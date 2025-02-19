import { Meta, Story } from "@storybook/react";

import BrAvatar, { BrAvatarProps } from ".";

export default {
  title: "Utilidades/Avatar",
  component: BrAvatar,
} as Meta;

export const Simples: Story<BrAvatarProps> = (args) => <BrAvatar {...args} />;

export const Fotografico: Story<BrAvatarProps> = (args) => <BrAvatar {...args} />;
Fotografico.args = {
  src: "https://picsum.photos/id/823/400",
  type: "image",
};
