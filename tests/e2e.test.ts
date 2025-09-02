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
    await page.goto(`${baseURL}/blog`);
    
    const title = await page.title();
    expect(title).toContain('Highland Way');
    
    // Check if the page loaded successfully
    const heading = await page.$('h1');
    expect(heading).toBeTruthy();
  }, 30000);

  it('should load the home page', async () => {
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle0' });
    
    const title = await page.title();
    expect(title).toContain('Highland Way');
    
    // Check for main content
    const heading = await page.$('h1');
    expect(heading).toBeTruthy();
  }, 30000);

  it('should navigate to individual blog post if posts exist', async () => {
    await page.goto(`${baseURL}/blog`);
    
    // Look for blog post links
    const blogLinks = await page.$$('button[type="button"]');
    
    if (blogLinks.length === 0) {
      console.log('No blog posts found to test navigation');
      expect(true).toBe(true); // Pass the test if no posts exist
      return;
    }

    // Click the first blog post link if it exists
    if (blogLinks[0]) {
      await blogLinks[0].click();
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      
      // Verify we're on a blog post page
      const url = page.url();
      expect(url).toContain('/blog/');
      
      const title = await page.title();
      expect(title).toContain('Highland Way');
    }
  }, 30000);
});
