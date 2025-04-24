<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LenisInit from '$lib/components/LenisInit.svelte';
  
  export let data: { posts?: Array<{ title: string; excerpt?: string; slug: { current: string }; publishedAt?: string; mainImage?: { asset?: { url?: string }; alt?: string } }> };
  const { posts = [] } = data;
  console.log("Received posts:", posts); // Add this for debugging
  
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

<LenisInit />
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
              <img 
                src={post.mainImage.asset.url} 
                alt={post.mainImage.alt || post.title} 
                class="w-full h-56 object-cover"
                loading="lazy"
              >
            {:else}
              <div class="w-full h-56 bg-gray-800 flex items-center justify-center">
                <span>No image</span>
              </div>
            {/if}
            <div class="p-6">
              <span class="text-sm text-gray-400">{formatDate(post.publishedAt || new Date().toISOString())}</span>
              <h2 class="text-2xl font-playfair mt-2 mb-3">{post.title}</h2>
              <!-- Display excerpt if available, otherwise show a default message -->
              <p class="mb-4">{post.excerpt || "Read more about this Highland Way journal entry..."}</p>
              <button 
                type="button"
                class="text-primary hover:text-primary-hover cursor-pointer bg-transparent border-none p-0"
                on:click={() => window.location.href = `/blog/${post.slug.current}`}
              >
                Read More →
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <Footer />
</main>