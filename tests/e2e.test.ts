// tests/e2e.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';

describe('E2E Tests', () => {
  let browser: Browser;
  let page: Page;
  const baseURL = 'http://localhost:4173';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should load the blog page', async () => {
    await page.goto(`${baseURL}/blog`, { waitUntil: 'networkidle2' });
    
    const title = await page.title();
    expect(title).toContain('Highland Way');
    
    // Check if main content is present
    const mainContent = await page.$('main, .blog-posts, article');
    expect(mainContent).toBeTruthy();
  });

  it('should load the home page', async () => {
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle2' });
    
    const title = await page.title();
    expect(title).toContain('Highland Way');
    
    // Check if main content is present
    const mainContent = await page.$('main');
    expect(mainContent).toBeTruthy();
  });

  it('should navigate to individual blog post if posts exist', async () => {
    await page.goto(`${baseURL}/blog`, { waitUntil: 'networkidle2' });
    
    // Look for blog post links
    const postLinks = await page.$$('a[href*="/blog/"]:not([href="/blog"])');
    
    if (postLinks.length > 0) {
      // Click on the first post link
      await postLinks[0].click();
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
      
      // Check that we're on a blog post page
      const url = page.url();
      expect(url).toMatch(/\/blog\/.+/);
      
      // Check for content
      const content = await page.$('main, article, .post-content');
      expect(content).toBeTruthy();
    } else {
      console.log('No blog posts found to test navigation');
    }
  });
});
