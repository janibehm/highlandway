<script lang="ts">
  import Subscribe from './Subscribe.svelte';
  let Video: any = null;

  function lazyLoadVideo(node: HTMLElement) {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        console.log('Video is in view, loading component...');
        const module = await import('./Video.svelte');
        Video = module.default;
        observer.disconnect();
      }
    }, { threshold: 0.1 }); // Adjust threshold as needed
    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
</script>

<footer class="w-full bg-black px-4 py-8 h-auto">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Left Side: Subscribe component -->
    <div class="order-1 mb-8 md:mb-0">
      <Subscribe />
    </div>
    
    <!-- Right Side: Lazy load Video component -->
    <div class="order-2" use:lazyLoadVideo>
      {#if Video}
        <svelte:component this={Video} />
      {/if}
    </div>
  </div>
  
  <div class="max-w-7xl mx-auto mt-8 text-center text-white text-sm">
    &copy; {new Date().getFullYear()} Highland Way. All rights reserved.
  </div>
</footer>