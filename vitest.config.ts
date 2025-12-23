import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/tscBuild/**', '**/build/**'],
    setupFiles: ['./test/setup.ts'],
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
