<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { initLenis, destroyLenis } from '$lib/stores/lenis';

  // Minimum width for enabling Lenis (tablet size)
  const MIN_WIDTH_FOR_LENIS = 768;
  
  onMount(() => {
    // Check if screen width is tablet or larger
    const isLargeScreen = window.innerWidth >= MIN_WIDTH_FOR_LENIS;
    
    // Only initialize Lenis on larger screens
    if (isLargeScreen) {
      initLenis();
    }
    
    // Handle resize/orientation changes
    const handleResize = () => {
      const isCurrentlyLargeScreen = window.innerWidth >= MIN_WIDTH_FOR_LENIS;
      
      // If changed from small to large screen, initialize Lenis
      if (!isLargeScreen && isCurrentlyLargeScreen) {
        initLenis();
      }
      
      // If changed from large to small screen, destroy Lenis
      if (isLargeScreen && !isCurrentlyLargeScreen) {
        destroyLenis();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (isLargeScreen) {
        destroyLenis();
      }
    };
  });
</script>