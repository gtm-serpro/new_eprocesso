import { Meta, Story } from "@storybook/react";

import Typography, { TypographyProps } from ".";

export default {
  title: "Layout e Tipografia/Typography",
  component: Typography,
} as Meta;

export const Default: Story<TypographyProps> = (args) => (
  <Typography {...args} onClick={undefined}>
    Conteúdo Texto
  </Typography>
);

const onClick = () => alert("click");

export const ComEventoClique: Story<TypographyProps> = () => (
  <div>
    <div>
      <Typography onClick={onClick}>Passe o cursor do mouse aqui</Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="primary-default">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="secondary-01">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="info">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="success">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="warning">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
    <div>
      <Typography onClick={onClick} color="danger">
        Passe o cursor do mouse aqui
      </Typography>
    </div>
  </div>
);
