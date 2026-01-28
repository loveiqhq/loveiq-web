import nextConfig from "eslint-config-next";

const eslintConfig = [
  {
    ignores: ["scripts/*-output.js"],
  },
  ...nextConfig,
];

export default eslintConfig;
