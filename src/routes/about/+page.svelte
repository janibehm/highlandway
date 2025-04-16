<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/FooterLanding.svelte';
</script>

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <!-- Hero Section -->
  <div class="w-full h-[90vh] relative">
    <div class="absolute inset-0">
      <img src="/img/about/distillery-hero.jpg" alt="Highland Way Distillery" class="w-full h-full object-cover opacity-60 mix-blend-overlay">
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-5xl md:text-7xl font-playfair text-white text-center">Our Story</h1>
    </div>
  </div>
  
  <!-- Introduction -->
  <div class="container mx-auto py-16 px-4">
    <div class="max-w-3xl mx-auto mb-16 text-center">
      <p class="text-xl md:text-2xl font-light leading-relaxed">
        Highland Way brings the spirit of Scottish whisky-making tradition to your glass. 
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
  
  <Footer />
</main>