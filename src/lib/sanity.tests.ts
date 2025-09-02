// src/lib/sanity.test.ts
import { describe, it, expect, vi } from 'vitest';
import { getPosts, getPost } from './sanity';
import { postParser } from './parsers/postParser';

// Mock the Sanity client
vi.mock('@sanity/client', () => ({
  createClient: vi.fn(() => ({
    fetch: vi.fn()
  }))
}));

describe('Sanity Functions', () => {
  it('should fetch posts correctly', async () => {
    const mockPosts = [
      {
        _id: '1',
        title: 'Test Post',
        slug: { current: 'test-post' },
        publishedAt: '2024-01-01T00:00:00Z'
      }
    ];
    
    // Mock the client.fetch method
    const { client } = await import('./sanity');
    vi.mocked(client.fetch).mockResolvedValue({ ms: 1, result: mockPosts });
    
    const posts = await getPosts();
    expect(posts).toEqual(mockPosts);
  });
});

describe('Post Parser', () => {
  it('should parse valid post data', () => {
    const rawPost = {
      _id: '1',
      title: 'Test Post',
      slug: { current: 'test-post' },
      publishedAt: '2024-01-01T00:00:00Z',
      excerpt: 'Test excerpt'
    };
    
    const parsed = postParser(rawPost);
    expect(parsed.title).toBe('Test Post');
    expect(parsed.slug.current).toBe('test-post');
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
});