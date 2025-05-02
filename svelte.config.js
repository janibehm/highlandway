import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: false // Suppress errors for dynamic routes
        }),
        prerender: {
            entries: ['*']
        }
    }
};
