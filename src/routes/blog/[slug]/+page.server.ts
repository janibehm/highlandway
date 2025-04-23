import { error } from '@sveltejs/kit';
import { getPost } from '$lib/sanity';

export const prerender = false; // Disable prerendering for this route

export async function load({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }
  
  return { post };
}