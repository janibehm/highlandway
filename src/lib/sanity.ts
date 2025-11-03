// src/lib/sanity.ts
import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { Post } from '$lib/types/post';

// Initialize Sanity client
export const client: SanityClient = createClient({
  projectId: 'gesdkajg',     
  dataset: 'production',
  useCdn: true,              
  apiVersion: '2023-05-03',  
});

// Initialize the image URL builder
const builder: ImageUrlBuilder = imageUrlBuilder(client);

// Helper function to generate optimized image URLs
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}

// Fetch all blog posts with validation in the query
export async function getPosts(): Promise<Post[]> {
  return await client.fetch<Post[]>(
    `*[
      _type == "post" && 
      !(_id match "*_inherit*") && 
      !defined(title._invalid) && 
      defined(slug.current) && 
      defined(publishedAt)
    ] | order(publishedAt desc) {
      _id,
      title,
      "slug": { "current": slug.current },
      author->{
        _id, 
        name, 
        "slug": { "current": slug.current },
        image{asset->{_id, url}}
      },
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
export async function getPost(slug: string): Promise<Post | null> {
  return await client.fetch<Post | null>(
    `*[
      _type == "post" && 
      slug.current == $slug && 
      !(_id match "*_inherit*") && 
      !defined(title._invalid) && 
      defined(slug.current) && 
      defined(publishedAt)
    ][0] {
      _id,
      title,
      "slug": { "current": slug.current },
      author->{
        _id, 
        name, 
        "slug": { "current": slug.current },
        image{asset->{_id, url}}
      },
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
