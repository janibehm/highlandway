<script>
  import Navigation from '$lib/components/Navigation.svelte';
 /*  import LenisInit from '$lib/components/LenisInit.svelte'; */
</script>

<svelte:head>
  <link rel="preload" href="/img/about/distillery-hero-mobile.webp" as="image" media="(max-width: 480px)">
  <link rel="preload" href="/img/about/distillery-hero-tablet.webp" as="image" media="(min-width: 481px) and (max-width: 768px)">
  <link rel="preload" href="/img/about/distillery-hero.webp" as="image" media="(min-width: 769px)">
</svelte:head>

<!-- <LenisInit/> -->
<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <!-- Hero Section -->
  <div class="w-full h-[82vh] relative overflow-hidden">
  <div class="absolute inset-0">
    <img 
      src="/img/about/distillery-hero-mobile.webp" 
      srcset="/img/about/distillery-hero-mobile.webp 480w, /img/about/distillery-hero-tablet.webp 768w, /img/about/distillery-hero.webp 1440w"
      sizes="100vw"
      alt="Highland Way Distillery" 
      class="w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
  </div>
<!--   <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 class="text-5xl md:text-7xl font-playfair text-white text-center drop-shadow-lg">Our Story</h1>
  </div> -->
</div>
  
  <!-- Introduction -->
  <div class="container mx-auto py-16 px-4">
    <div class="max-w-3xl mx-auto mb-16 text-center">
      <p class="text-xl md:text-2xl font-light leading-relaxed">
        Highland Way brings the spirit of Scottish whisky-making tradition to
        your glass. 
        Our journey began with a passion for authentic highland whisky and a vision to create 
        exceptional spirits that honor centuries of craftsmanship.
      </p>
    </div>
    
    <!-- Founding Story -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <h2 class="text-3xl md:text-4xl font-playfair mb-6">From Scotland to Virginia</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>Founded in 1918, Highland Way combines time-honored distilling methods with innovative approaches to create distinctive whiskies that capture the essence of the Scottish highlands.</p>
          <p>Our founder, James MacLaren, brought his family's century-old distilling traditions from the misty Scottish Highlands to the rolling hills of Virginia, where we found the perfect conditions to create exceptional spirits.</p>
        </div>
      </div>
      <div class="rounded-lg overflow-hidden shadow-2xl">
        <img src="/img/about/founder.webp" alt="Highland Way Founder" class="w-full h-auto">
      </div>
    </div>
    
    <!-- Our Process -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
      <div class="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl">
        <img src="/img/about/barrels.jpg" alt="Whisky Making Process" class="w-full h-auto">
      </div>
      <div class="order-1 md:order-2">
        <h2 class="text-3xl md:text-4xl font-playfair mb-6">Craftsmanship & Tradition</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>Every bottle of Highland Way whisky represents our commitment to quality and authenticity. From carefully selected grains to our copper pot stills and hand-selected oak barrels, each step in our process honors traditional methods while embracing innovative techniques.</p>
          <p>We age our spirits in our stone warehouse, where Virginia's unique climate creates ideal conditions for developing complex flavors and smooth character that define Highland Way whiskies.</p>
        </div>
      </div>
    </div>
    
    <!-- Values Section -->
    <div class="mb-24">
      <h2 class="text-3xl md:text-4xl font-playfair text-center mb-12">Our Values</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-secondary-bg bg-opacity-10 p-8 rounded-lg text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-playfair mb-4">Quality</h3>
          <p>We never compromise on the quality of our ingredients or our process. Excellence is our standard in everything we create.</p>
        </div>
        
        <div class="bg-secondary-bg bg-opacity-10 p-8 rounded-lg text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-playfair mb-4">Innovation</h3>
          <p>We embrace new ideas and techniques to push the boundaries of whisky-making while respecting tradition.</p>
        </div>
        
        <div class="bg-secondary-bg bg-opacity-10 p-8 rounded-lg text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-playfair mb-4">Sustainability</h3>
          <p>We are committed to environmentally responsible practices that ensure the longevity of our craft and the planet.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Next Page CTA -->
  <div class="w-full bg-secondary-bg bg-opacity-10 py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-playfair mb-6">Discover Our Collection</h2>
      <p class="text-xl max-w-2xl mx-auto mb-8">Ready to experience the exceptional flavors of Highland Way? Explore our range of premium whiskies crafted with tradition and innovation.</p>
      <a 
        href="/products" 
        class="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded shadow transition-transform hover:-translate-y-1"
      >
        Explore Our Products
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</main>