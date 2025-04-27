<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';


</script>

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">Our Collection</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Product Card 1 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <img src="/img/products/product-1.webp" alt="Highland Single Malt" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Highland Single Malt</h2>
        <p class="mb-4">Our signature single malt, aged 12 years in oak barrels. Notes of honey, vanilla, and a hint of peat.</p>
<!--         <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
 -->      </div>
      
      <!-- Product Card 2 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <img src="/img/products/product-2.webp" alt="Virginia Highland Blend" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Virginia Highland Blend</h2>
        <p class="mb-4">A perfect marriage of Scottish tradition and American craftsmanship. Smooth with caramel and oak notes.</p>
<!--         <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
 -->      </div>
      
      <!-- Product Card 3 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <img src="/img/products/product-3.webp" alt="Cask Strength Reserve" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Cask Strength Reserve</h2>
        <p class="mb-4">Unfiltered and undiluted, our cask strength offering provides bold flavors and remarkable complexity.</p>
<!--         <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
 -->      </div>
    </div>
  </div>

    <!-- Next Page CTA -->
    <div class="w-full bg-secondary-bg bg-opacity-10 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-playfair mb-6">Elevate Your Whisky Experience</h2>
        <p class="text-xl max-w-2xl mx-auto mb-8">Ready to make the most of our exceptional whiskies? Discover delicious cocktails and perfect food pairings crafted by our experts.</p>
        <a 
          href="/recipes" 
          class="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded shadow transition-transform hover:-translate-y-1"
        >
          Explore Our Recipes
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  
  <Footer />
</main>