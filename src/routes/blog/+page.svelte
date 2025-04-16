<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">The Highland Way Journal</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Blog Post 1 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-1.jpg" alt="The Art of Whisky Tasting" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">April 10, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">The Art of Whisky Tasting</h2>
          <p class="mb-4">Learn how to appreciate the complex flavors and aromas of fine whisky with our master distiller's guide to tasting.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
      
      <!-- Blog Post 2 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-2.jpg" alt="From Grain to Glass" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">March 15, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">From Grain to Glass</h2>
          <p class="mb-4">A behind-the-scenes look at our whisky-making process, from selecting local grains to the final bottling.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
      
      <!-- Blog Post 3 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-3.jpg" alt="The Perfect Whisky Cocktails" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">February 28, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">The Perfect Whisky Cocktails</h2>
          <p class="mb-4">Our head mixologist shares three signature cocktail recipes featuring Highland Way whiskies.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
      
      <!-- Blog Post 4 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-4.jpg" alt="The Importance of Water" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">February 10, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">The Importance of Water</h2>
          <p class="mb-4">Why water quality is crucial to whisky production and how Virginia's natural springs influence our flavor profile.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
      
      <!-- Blog Post 5 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-5.jpg" alt="Whisky and Food Pairings" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">January 25, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">Whisky and Food Pairings</h2>
          <p class="mb-4">Elevate your dining experience with our guide to pairing Highland Way whiskies with complementary foods.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
      
      <!-- Blog Post 6 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/blog/blog-6.jpg" alt="Meet Our Master Distiller" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-400">January 5, 2025</span>
          <h2 class="text-2xl font-playfair mt-2 mb-3">Meet Our Master Distiller</h2>
          <p class="mb-4">An interview with Eleanor Mackenzie, the creative force behind Highland Way's award-winning whisky expressions.</p>
          <span class="text-primary hover:text-primary-hover cursor-pointer">Read More →</span>
        </div>
      </div>
    </div>
  </div>
  
  <Footer />
</main>