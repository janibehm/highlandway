<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte';   
    import Hero from '$lib/components/Hero.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import Recipe from '$lib/components/Recipe.svelte';
    import MovingText from '$lib/components/MovingText.svelte';
    import LenisInit from '$lib/components/LenisInit.svelte';
	import FooterLanding from '$lib/components/FooterLanding.svelte';
  </script>
  
  <!-- Initialize Lenis -->
  <LenisInit />
  
  <main class="w-full flex flex-col bg-black">
    <!-- Navigation Component -->
    <Navigation /> 
  
    <!-- Hero Component -->
    <div class="w-full">
      <Hero 
        title="Highland Way"
        subtitle="Experience the journey from the Highlands to your glass."
        buttonText="Explore"
        buttonLink="/blog" 
      />
    </div>
    <!-- CTA Component -->
    <div class="w-full flex justify-center">
      <CTA
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
  
    <!-- Moving Text Component -->
    <MovingText />
  <div class="h-30 bg-black"></div>
  
<!-- Footer Component -->
<div class="w-full">
  <FooterLanding />
</div>
  </main>