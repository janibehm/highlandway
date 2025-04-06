<script lang="ts">
  import Navigation from '$lib/components/navigation.svelte';   
  import Hero from '$lib/components/hero.svelte';
  import Cta from '$lib/components/cta.svelte';
  import Recipe from '$lib/components/recipe.svelte';
  import Video from '$lib/components/video.svelte';
  import LenisInit from '$lib/components/lenisInit.svelte';
</script>

<!-- Initialize Lenis -->
<LenisInit />

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

</main>