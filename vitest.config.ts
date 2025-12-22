import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./test/setup.ts'],
    testTimeout: 30000, // 30 seconds for API calls
  },
});
