// Define Portable Text block types
interface PortableTextSpan {
  _type: 'span';
  text: string;
  marks?: string[];
}

interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  children: PortableTextSpan[];
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

interface PortableTextImage {
  _type: 'image';
  _key: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

type PortableTextContent = PortableTextBlock | PortableTextImage;

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
  body?: PortableTextContent[];
}