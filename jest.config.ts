import type { Config } from "@jest/types";

export default (): Config.InitialOptions => {
  return {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/.jest/jest.setup.ts"],
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
    testPathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/node_modules/", "<rootDir>/dist/"],
    roots: ["./src"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/**/*stories.tsx",
      "!src/**/types.ts",
      "!src/**/*.d.ts",
      "!src/index.ts",
      "!src/types/*",
      "!src/showcase/*",
      "!src/helpers/storybook.tsx",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
      "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: ["/node_modules/(?!@govbr)"],
  };
};
