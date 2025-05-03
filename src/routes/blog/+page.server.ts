import { getPosts } from '$lib/sanity';

export const prerender = true; 

export async function load() {
  try {
    const posts = await getPosts();
    return { posts };
  } catch (error) {
    console.error('Error loading posts:', error);
    return { posts: [] };
  }
}