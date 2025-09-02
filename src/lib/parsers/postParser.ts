// src/lib/parsers/postParser.ts

export interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { 
    asset: { 
      _id: string; 
      url: string 
    }; 
    alt: string 
  };
  author?: {
    _id: string;
    name: string;
    slug: { current: string };
    image?: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
  }>;
  body?: any;
}

// Manual parsing function that returns serializable data
export function postParser(raw: any): Post {
  // Skip posts with '_inherit' values
  if (raw.title === '_inherit' || raw.slug === '_inherit' || raw.publishedAt === '_inherit') {
    throw new Error('Post contains _inherit values');
  }

  // Validate required fields
  if (!raw._id || !raw.title || !raw.slug?.current || !raw.publishedAt) {
    throw new Error('Missing required fields');
  }

  return {
    _id: raw._id,
    title: raw.title,
    excerpt: raw.excerpt || undefined,
    slug: { current: raw.slug.current },
    publishedAt: raw.publishedAt,
    mainImage: raw.mainImage && raw.mainImage !== '_inherit' ? {
      asset: {
        _id: raw.mainImage.asset._id,
        url: raw.mainImage.asset.url
      },
      alt: raw.mainImage.alt || ''
    } : undefined,
    author: raw.author ? {
      _id: raw.author._id,
      name: raw.author.name,
      slug: { current: raw.author.slug.current },
      image: raw.author.image ? {
        asset: {
          _id: raw.author.image.asset._id,
          url: raw.author.image.asset.url
        }
      } : undefined
    } : undefined,
    categories: raw.categories || [],
    body: raw.body || undefined
  };
}
