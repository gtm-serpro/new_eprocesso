import { addons } from "@storybook/addons";
import dsTheme from "./dsTheme.cjs";

addons.setConfig({
  theme: dsTheme,
  showPanel: true,
  panelPosition: "bottom",
  previewTabs: {
    canvas: {
      title: "Visualizar",
    },
  },
});
