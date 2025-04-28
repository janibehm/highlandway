<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte';   
    import CTA from '$lib/components/CTA.svelte';
    import Recipe from '$lib/components/Recipe.svelte';
    import MovingText from '$lib/components/MovingText.svelte';
    import FooterLanding from '$lib/components/FooterLanding.svelte';
</script>
  
  
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
        <div class="absolute inset-0 bg-black/40 flex flex-col justify-start md:justify-center">
            <div class="relative z-10 max-w-3xl px-6 pt-4 md:pt-0 md:px-10 md:ml-12">
                <h1 class="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">Highland Way</h1>
                <p class="text-lg md:text-xl mb-6 drop-shadow-md text-white">Experience the journey from the Highlands to your glass.</p>
                <a 
                    href="/about" 
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
  
    <!-- Next Page CTA -->
    <div class="w-full bg-secondary-bg bg-opacity-20 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-playfair mb-6 text-white">Our Story</h2>
        <p class="text-xl max-w-2xl mx-auto mb-8 text-white">Discover the heritage and craftsmanship behind Highland Way. From Scotland's legendary highlands to Virginia's rolling countryside, our story is one of passion and tradition.</p>
        <a 
          href="/about" 
          class="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded shadow transition-transform hover:-translate-y-1"
        >
          About Us
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  
    <div class="w-full">
      <FooterLanding />
    </div>
</main>