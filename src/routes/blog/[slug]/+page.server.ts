import { error } from '@sveltejs/kit';
import { getPosts, getPost, type Post } from '$lib/sanity';

export const prerender = true;

// This function tells SvelteKit which slugs to prerender
export async function entries() {
  const posts = await getPosts();
  
  // Return an array of slug objects for each post
  return posts.map((post: Post) => ({
    slug: post.slug.current
  }));
}

export async function load({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }
  
  return { post };
}