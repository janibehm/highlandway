/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    globals: true,
    exclude: [
      // Default exclusions
      'node_modules/**',
      'dist/**',
      '.svelte-kit/**',
      'build/**',
      // Exclude E2E tests
      'tests/**',
      '**/*.e2e.test.*',
      '**/*.e2e.*'
    ],
    include: [
      // Only include unit tests in src
      'src/**/*.test.{js,ts,svelte}',
      'src/**/*.spec.{js,ts,svelte}'
    ]
  }
});
