import { createClient } from '@sanity/client'; 

export const client = createClient({
  projectId: 'gesdkajg', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Define interfaces that match your Sanity schema
interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

interface Category {
  _id: string;
  title: string;
  description?: string;
}

interface MainImage {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  publishedAt: string;
  excerpt: string;
  mainImage: MainImage;
  categories: Category[];
  body: any; // For Portable Text - could use a more specific type
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
      categories[]->{_id, title}
    }`
  );
}

// Fetch a single post by slug
export async function getPost(slug: string): Promise<Post | null> {
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