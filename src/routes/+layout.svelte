<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
import Lenis from 'lenis'
    
    let { children } = $props();
    
    onMount(() => {
        const lenis = new Lenis({
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


