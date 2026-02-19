import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: ["__tests__/setup.ts"],
    exclude: ["node_modules", "e2e", ".next"],
    coverage: {
      provider: "v8",
      include: ["lib/**/*.ts", "app/api/**/*.ts", "proxy.ts"],
      exclude: ["node_modules", ".next", "__tests__", "lib/glossary-data.ts"],
      thresholds: {
        lines: 70,
        statements: 70,
        functions: 65,
        branches: 58,
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
