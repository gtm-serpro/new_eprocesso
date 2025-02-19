import "@fortawesome/fontawesome-free/css/all.min.css";
import "@govbr-ds/core/dist/core.min.css";
import dsTheme from "./dsTheme.cjs";

const [major, minor, patch, postfix] = import.meta.env.VITE_APP_VERSION.split(".");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    theme: dsTheme,
  },
  version: {
    major: `v${major}`,
    minor,
    patch,
    postfix,
    style: {
      "font-size": "14px",
      "text-transform": "lowercase",
      "background-color": "#d4e5ff",
      color: "#000",
    },
  },
};
