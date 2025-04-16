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
        <img src="/img/products/product-1.jpg" alt="Highland Single Malt" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Highland Single Malt</h2>
        <p class="mb-4">Our signature single malt, aged 12 years in oak barrels. Notes of honey, vanilla, and a hint of peat.</p>
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
      </div>
      
      <!-- Product Card 2 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <img src="/img/products/product-2.jpg" alt="Virginia Highland Blend" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Virginia Highland Blend</h2>
        <p class="mb-4">A perfect marriage of Scottish tradition and American craftsmanship. Smooth with caramel and oak notes.</p>
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
      </div>
      
      <!-- Product Card 3 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <img src="/img/products/product-3.jpg" alt="Cask Strength Reserve" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-2xl font-playfair mb-2">Cask Strength Reserve</h2>
        <p class="mb-4">Unfiltered and undiluted, our cask strength offering provides bold flavors and remarkable complexity.</p>
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  </div>
  
  <Footer />
</main>