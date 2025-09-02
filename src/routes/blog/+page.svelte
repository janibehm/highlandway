<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import { urlFor } from '$lib/sanity';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import type { Post } from '$lib/parsers/postParser';


  export let data: { posts: Post[] };

  const { posts } = data;

  console.log("Received posts:", posts); 
  
  // Format date for display
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Handle navigation to blog post
  function navigateToBlogPost(slug: string) {
    if (browser) {
      // Save current scroll position before navigating
      localStorage.setItem('blogScrollPos', window.scrollY.toString());
      window.location.href = `/blog/${slug}`;
    }
  }

  onMount(() => {
    if (browser) {
      // Restore scroll position if returning from an article
      const savedScrollPos = localStorage.getItem('blogScrollPos');
      if (savedScrollPos) {
        // Small delay to ensure content is loaded
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPos, 10));
          // Clear the saved position after restoring it
          localStorage.removeItem('blogScrollPos');
        }, 100);
      }
    }
  });
</script>

<svelte:head>
  <title>Highland Way Journal - Blog</title>
  <meta name="description" content="Read the latest stories, insights, and news from Highland Way whisky. Discover the craft, heritage, and passion behind our Virginia Highland Whisky." />
</svelte:head>

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">The Highland Way Journal</h1>
    
    {#if !posts || posts.length === 0}
      <div class="flex justify-center items-center h-64">
        <p>No blog posts found.</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each posts as post}
          <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
           {#if post.mainImage?.asset?.url}
          <img src={urlFor(post.mainImage).width(600).height(400).url()} alt={post.mainImage.alt || post.title} />
            {:else}
              <div class="w-full h-56 bg-gray-800 flex items-center justify-center">
                <span>No image</span>
              </div>
            {/if}
            <div class="p-6">
              <span class="text-sm text-gray-400">{formatDate(post.publishedAt || new Date().toISOString())}</span>
              <h2 class="text-2xl font-playfair mt-2 mb-3">{post.title}</h2>
              <p class="mb-4">{post.excerpt || "Read more about this Highland Way journal entry..."}</p>
              <button 
                type="button"
                class="text-primary hover:text-primary-hover cursor-pointer bg-transparent border-none p-0"
                on:click={() => post.slug?.current && navigateToBlogPost(post.slug.current)}
              >
                Read More →
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <!-- Next Page CTA -->
  <div class="w-full bg-secondary-bg bg-opacity-20 py-16 mt-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-playfair mb-6">Get in Touch</h2>
      <p class="text-xl max-w-2xl mx-auto mb-8">Have questions about our whisky, want to arrange a distillery tour, or interested in wholesale opportunities? We'd love to hear from you.</p>
      <a 
        href="/contact" 
        class="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded shadow transition-transform hover:-translate-y-1"
      >
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</main>