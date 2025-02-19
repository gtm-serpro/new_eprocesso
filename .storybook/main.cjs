const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-version"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    modernInlineRender: true,
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  staticDirs: ["../src/assets"],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { "@": path.resolve(path.dirname(__dirname), "src") },
      },
    });
  },
};
