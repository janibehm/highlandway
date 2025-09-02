import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    environment: 'node', // Use node environment for E2E tests with Puppeteer
    testTimeout: 30000, // Increase timeout for E2E tests
  },
});
