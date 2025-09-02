// src/lib/parsers/postParser.test.ts
import { describe, it, expect } from 'vitest';
import { postParser } from './postParser';

describe('Post Parser', () => {
  it('should parse valid post data', () => {
    const rawPost = {
      _id: '1',
      title: 'Test Post',
      slug: { current: 'test-post' },
      publishedAt: '2024-01-01T00:00:00Z',
      excerpt: 'Test excerpt',
      mainImage: {
        asset: {
          _id: 'img1',
          url: 'https://example.com/image.jpg'
        },
        alt: 'Test image'
      },
      author: {
        _id: 'author1',
        name: 'John Doe',
        slug: { current: 'john-doe' },
        image: {
          asset: {
            _id: 'authorimg1',
            url: 'https://example.com/author.jpg'
          }
        }
      },
      categories: [],
      body: []
    };
    
    const parsed = postParser(rawPost);
    
    expect(parsed.title).toBe('Test Post');
    expect(parsed.slug.current).toBe('test-post');
    expect(parsed.excerpt).toBe('Test excerpt');
    expect(parsed.mainImage?.asset.url).toBe('https://example.com/image.jpg');
    expect(parsed.author?.name).toBe('John Doe');
  });
  
  it('should throw error for posts with _inherit values', () => {
    const rawPost = {
      _id: '1',
      title: '_inherit',
      slug: { current: 'test-post' },
      publishedAt: '2024-01-01T00:00:00Z'
    };
    
    expect(() => postParser(rawPost)).toThrow('Post contains _inherit values');
  });
  
  it('should handle missing optional fields', () => {
    const rawPost = {
      _id: '1',
      title: 'Test Post',
      slug: { current: 'test-post' },
      publishedAt: '2024-01-01T00:00:00Z'
      // No excerpt, mainImage, author, etc.
    };
    
    const parsed = postParser(rawPost);
    
    expect(parsed.title).toBe('Test Post');
    expect(parsed.excerpt).toBeUndefined();
    expect(parsed.mainImage).toBeUndefined();
    expect(parsed.author).toBeUndefined();
    expect(parsed.categories).toEqual([]);
  });
  
  it('should throw error for missing required fields', () => {
    const rawPost = {
      _id: '1',
      // Missing title, slug, publishedAt
    };
    
    expect(() => postParser(rawPost)).toThrow('Missing required fields');
  });
});
