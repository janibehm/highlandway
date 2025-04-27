<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte';   
    import Hero from '$lib/components/Hero.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import Recipe from '$lib/components/Recipe.svelte';
    import MovingText from '$lib/components/MovingText.svelte';
 /*    import LenisInit from '$lib/components/LenisInit.svelte'; */
    import FooterLanding from '$lib/components/FooterLanding.svelte';
</script>
  
<!-- Initialize Lenis -->
<!-- <LenisInit /> -->
  
<main class="w-full flex flex-col bg-black">
    <!-- Navigation Component -->
    <Navigation /> 
  
    <!-- Hero Component -->
    <div class="w-full h-[75vh] relative overflow-hidden">
        <img 
            src="/img/hero.webp" 
            alt="Highland Way Background"
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40 flex items-center">
            <div class="relative z-10 max-w-3xl px-6 md:px-10 ml-10 md:ml-24">
                <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">Highland Way</h1>
                <p class="text-lg md:text-xl mb-6 drop-shadow-md text-white">Experience the journey from the Highlands to your glass.</p>
                <a 
                    href="/blog" 
                    class="inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded shadow hover:bg-gray-100 transition-transform hover:-translate-y-1"
                >
                    Explore
                </a>
            </div>
        </div>
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

    <!-- Rest of your components remain unchanged -->
    <div class="w-full">
      <Recipe />
    </div>
  
    <MovingText />
    <div class="h-30 bg-black"></div>
  
    <div class="w-full">
      <FooterLanding />
    </div>
</main>