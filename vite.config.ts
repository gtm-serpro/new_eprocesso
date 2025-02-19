import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { checker } from "vite-plugin-checker";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  const target = process.env.TARGET;
  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      target &&
        target === "lib" &&
        dts({
          insertTypesEntry: true,
        }),
      react(),
      checker({
        typescript: true,
      }),
    ],
    build: {
      ...(target &&
        target === "lib" && {
          lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "@govbr-ds/react-components",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format}.js`,
          },
          rollupOptions: {
            external: ["react", "react-dom", "styled-components"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "styled-components": "styled",
              },
            },
          },
        }),
      ...(target &&
        target === "showcase" && {
          outDir: "showcase/",
        }),
    },
  });
};
