<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import LenisInit from '$lib/components/LenisInit.svelte';
  import { urlFor } from '$lib/sanity';
  
  export let data;
  const { post } = data;
  
  // Format date for display
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
</script>

<style>
  /* Add spacing between paragraphs in Portable Text content */
  :global(.prose p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  /* Add more breathing room between sections */
  :global(.prose h2),
  :global(.prose h3) {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  /* Improve spacing around lists */
  :global(.prose ul),
  :global(.prose ol) {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  /* Add spacing between list items */
  :global(.prose li) {
    margin-bottom: 0.75rem;
  }

  /* Add spacing after images */
  :global(.prose img) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  /* Add spacing between blockquotes and surrounding content */
  :global(.prose blockquote) {
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    border-left: 4px solid var(--color-primary, #daa520);
    background-color: rgba(255, 255, 255, 0.05);
  }

  /* Style for navigation row */
  .navigation-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
</style>

<LenisInit />

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    {#if !post}
      <div class="flex justify-center items-center h-64">
        <p>Blog post not found.</p>
      </div>
    {:else}
      <!-- Blog Post Header -->
      <div class="max-w-4xl mx-auto mb-12">
        <span class="text-sm text-gray-400 block mb-4">{formatDate(post.publishedAt)}</span>
        <h1 class="text-4xl md:text-5xl font-playfair mb-8">{post.title}</h1>
        
        {#if post.mainImage}
          <img 
            src={urlFor(post.mainImage)
              .width(1600)
              .height(900)
              .format('webp')
              .quality(90)
              .url()}
            alt={post.mainImage.alt || post.title} 
            class="w-full h-auto rounded-lg mb-8"
            loading="eager"
          >
        {/if}
      </div>
      
      <!-- Blog Post Content -->
      <div class="max-w-4xl mx-auto prose prose-invert prose-lg">
        <PortableText value={post.body} />
      </div>
      
      <!-- Navigation Row with only Back to Blog link -->
      <div class="max-w-4xl mx-auto navigation-row">
        <a href="/blog" class="text-primary hover:text-primary-hover">← Back to Blog</a>
      </div>
    {/if}
  </div>
</main>

