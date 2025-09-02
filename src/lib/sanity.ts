// src/lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: 'gesdkajg',     
  dataset: 'production',
  useCdn: true,              
  apiVersion: '2023-05-03',  
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate optimized image URLs
export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch all blog posts
export async function getPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{_id, name, slug, image{asset->{_id, url}}},
      publishedAt,
      excerpt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]->{_id, title},
      body
    }`
  );
}

// Fetch a single post by slug
export async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{_id, name, slug, image{asset->{_id, url}}},
      publishedAt,
      excerpt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]->{_id, title},
      body
    }`,
    { slug }
  );
}
