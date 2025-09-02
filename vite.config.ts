import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'tests/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['src/setupTests.ts'],
		// Browser testing configuration
		browser: {
			enabled: false, // Set to true when you want to run browser tests
			name: 'chromium',
			provider: 'webdriverio',
			headless: true,
		}
	}
});
