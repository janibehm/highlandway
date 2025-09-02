// src/routes/blog/+page.ts
import { getPosts } from '$lib/sanity';
import { postParser, type Post } from '$lib/parsers/postParser';

export const prerender = true;

export async function load(): Promise<{ posts: Post[] }> {
  try {
    const rawPosts = await getPosts();

    // Parse posts safely with manual parsing
    const posts: Post[] = [];
    
    for (const raw of rawPosts ?? []) {
      try {
        const parsedPost = postParser(raw);
        posts.push(parsedPost);
      } catch (err) {
        console.warn('Skipping invalid post:', raw._id || 'unknown', err);
        // Skip invalid posts silently
      }
    }

    return { posts };
  } catch (error) {
    console.error('Error loading posts:', error);
    return { posts: [] };
  }
}
