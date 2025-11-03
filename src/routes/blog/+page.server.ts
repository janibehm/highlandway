import { getPosts } from '$lib/sanity';
import type { Post } from '$lib/types/post';

// Server-side memory cache
let postsCache: { data: Post[]; timestamp: number } | null = null;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export const prerender = true;

export async function load(): Promise<{ posts: Post[] }> {
  try {
    // Check server-side cache first
    const now = Date.now();
    if (postsCache && (now - postsCache.timestamp) < CACHE_DURATION) {
      console.log('Serving posts from server cache');
      return { posts: postsCache.data };
    }

    // Fetch fresh data if cache is missing or expired
    const posts = await getPosts();

    // Update cache
    postsCache = {
      data: posts ?? [],
      timestamp: now
    };

    return { posts: posts ?? [] };
  } catch (error) {
    console.error('Error loading posts:', error);
    return { posts: [] };
  }
}
