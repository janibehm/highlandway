<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import Lenis from 'lenis';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    
    let { children } = $props();
    let lenis: any;
    
    beforeNavigate(() => {
        // Stop scrolling during navigation to prevent jumps
        if (lenis) lenis.stop();
    });
    
    afterNavigate(() => {
        // Scroll to top after navigation completes
        if (lenis) {
            lenis.start();
            lenis.scrollTo(0, { immediate: true });
        }
    });
    
    onMount(() => {
        lenis = new Lenis({
            wrapper: document.querySelector('#smooth-content')!,
            content: document.querySelector('#smooth-content-inner')!,
            duration: 1.2,
            smoothWheel: true,
        });
        
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
        
        return () => {
            lenis.destroy();
        };
    });
</script>

<div id="smooth-content">
    <div id="smooth-content-inner" class="max-w-[1440px] mx-auto">
        {@render children()}
    </div>
</div>


