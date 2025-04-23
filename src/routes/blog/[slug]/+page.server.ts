import { getPost } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      throw error(404, 'Post not found');
    }
    
    return { post };
  } catch (err) {
    console.error('Error loading post:', err);
    throw error(404, 'Post not found');
  }
}