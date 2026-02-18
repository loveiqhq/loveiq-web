import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    exclude: ["node_modules", "e2e", ".next"],
    coverage: {
      provider: "v8",
      include: ["lib/**/*.ts", "app/api/**/*.ts", "proxy.ts"],
      exclude: ["node_modules", ".next", "__tests__"],
      thresholds: {
        lines: 70,
        statements: 70,
        functions: 65,
        branches: 62,
      },
      reporter: ["text", "lcov"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
