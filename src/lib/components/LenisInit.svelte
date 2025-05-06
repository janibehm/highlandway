<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { initLenis, destroyLenis, lenisStore } from '$lib/stores/lenis';
  import type { LenisInstance } from '$lib/stores/lenis-types';

  onMount(() => {
    console.log('LenisInit component mounted');
    
    // Always initialize Lenis regardless of screen size
    console.log('Initializing Lenis');
    const lenis = initLenis() as LenisInstance;
    console.log('Lenis initialized:', lenis);
    
    // Make scrollToTop available as a global method
    if (typeof window !== 'undefined') {
      (window as any).scrollToTop = () => {
        if (lenis && 'scrollTo' in lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo(0, 0);
        }
      };
    }
    
    // Cleanup on component destroy
    return () => {
      destroyLenis();
    };
  });
</script>