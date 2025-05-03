import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null, // No SPA fallback
            precompress: false,
            strict: true // Ensure errors are raised for non-prerenderable routes
        }),
        prerender: {
            entries: [
                '*', // Include all static routes
                '!/api/subscribe', // Exclude dynamic API route
                '!/blog/[slug]' // Exclude dynamic blog route
            ]
        }
    }
};
