<script lang="ts">
  import { initLenis, destroyLenis } from '$lib/stores/lenis';
  import Navigation from '$lib/components/Navigation.svelte';   
  import Hero from '$lib/components/hero.svelte';
  import Cta from '$lib/components/cta.svelte';
  import Recipe from '$lib/components/recipe.svelte';
  import Video from '$lib/components/video.svelte';
/*   import Footer from '$lib/components/Footer.svelte'; */ // Import Footer component
  import { onMount, onDestroy } from 'svelte';
    
    // Initialize Lenis for smooth scrolling
    onMount(() => {
        initLenis();
    });
    
    // Clean up Lenis on component destroy
    onDestroy(() => {
        destroyLenis();
    });
</script>


<main class="w-full flex flex-col">
  <!-- Navigation Component -->
  <Navigation /> 

  <!-- Hero Component -->
  <div class="w-full">
    <Hero 
      title="Explore with us"
      subtitle="Experience the journey from the Highlands to your glass."
      buttonText="Explore"
      buttonLink="#discover" 
    />
  </div>

  <!-- CTA Component -->
  <div class="w-full flex justify-center">
    <Cta
      title="Discover Our Heritage"
      description="Experience the exceptional craftsmanship and rich tradition of Highland whisky. Our Virginia Highland Whisky embodies centuries of Scottish distilling expertise with a modern American twist."
      secondaryText="Each bottle tells a story of patience, passion, and precision - from the selection of finest ingredients to the meticulous aging process."
      primaryButtonText="Explore Products"
      primaryButtonLink="/products"
      secondaryButtonText="Book a Tour"
      secondaryButtonLink="/tour"
      imageSrc="/img/virginia-highland-whisky-1.jpg"
      imageAlt="Virginia Highland Whisky"
    />
  </div>

  <!-- Recipe Component -->
  <div class="w-full">
    <Recipe />
  </div>

  <!-- Video Component -->
  <div class="w-full">
    <Video />
  </div>

<!-- Footer Component -->
  <!-- <Footer /> -->
</main>