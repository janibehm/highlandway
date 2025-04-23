<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LenisInit from '$lib/components/LenisInit.svelte';
  
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
        
        {#if post.mainImage?.asset?.url}
          <img 
            src={post.mainImage.asset.url} 
            alt={post.mainImage.alt || post.title} 
            class="w-full h-auto rounded-lg mb-8"
          >
        {/if}
      </div>
      
      <!-- Blog Post Content -->
      <div class="max-w-4xl mx-auto prose prose-invert prose-lg">
        <PortableText value={post.body} />
      </div>
      
      <!-- Back to Blog Link -->
      <div class="max-w-4xl mx-auto mt-12">
        <a href="/blog" class="text-primary hover:text-primary-hover">← Back to Blog</a>
      </div>
    {/if}
  </div>
  
  <Footer />
</main>