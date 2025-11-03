import type { Post } from '$lib/types/post';

const CACHE_PREFIX = 'highland_way_';
const POST_LIST_KEY = `${CACHE_PREFIX}post_list`;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export function getCacheKey(slug: string): string {
  return `${CACHE_PREFIX}post_${slug}`;
}

export function setCache<T>(key: string, data: T): void {
  try {
    const cacheItem: CacheItem<T> = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheItem));
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
}

export function getCache<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const cacheItem: CacheItem<T> = JSON.parse(item);
    const age = Date.now() - cacheItem.timestamp;

    // Return null if cache is expired
    if (age > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }

    return cacheItem.data;
  } catch (error) {
    console.warn('Cache read failed:', error);
    return null;
  }
}

export function invalidateCache(slug?: string): void {
  if (slug) {
    // Invalidate specific post
    localStorage.removeItem(getCacheKey(slug));
  } else {
    // Invalidate all posts
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  }
}

export function cachePostList(posts: Post[]): void {
  setCache(POST_LIST_KEY, posts);
}

export function getCachedPostList(): Post[] | null {
  return getCache<Post[]>(POST_LIST_KEY);
}

export function cachePost(post: Post): void {
  if (post.slug?.current) {
    setCache(getCacheKey(post.slug.current), post);
  }
}

export function getCachedPost(slug: string): Post | null {
  return getCache<Post>(getCacheKey(slug));
}