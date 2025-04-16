<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import LenisInit from '$lib/components/LenisInit.svelte';

</script>

<LenisInit />
<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">Distillery Tours</h1>
    
    <div class="prose prose-invert max-w-none mb-12">
      <p>Experience the art and craft of whisky making with a tour of our Highland Way distillery. Learn about our process, history, and the unique factors that contribute to our distinctive flavors.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Tour Option 1 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <h2 class="text-2xl font-playfair mb-2">Standard Tour</h2>
        <p class="mb-4">A 60-minute guided tour of our facilities, including mash house, still house, and barrel aging warehouse. Includes a tasting of three core expressions.</p>
        <p class="font-bold mb-4">$25 per person</p>
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">Book Now</button>
      </div>
      
      <!-- Tour Option 2 -->
      <div class="bg-secondary-bg bg-opacity-10 p-6 rounded-lg">
        <h2 class="text-2xl font-playfair mb-2">Premium Experience</h2>
        <p class="mb-4">A 90-minute in-depth exploration of our whisky-making process. Includes exclusive access to our private tasting room and sampling of reserve expressions.</p>
        <p class="font-bold mb-4">$45 per person</p>
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded">Book Now</button>
      </div>
    </div>
    
    <div class="bg-secondary-bg bg-opacity-5 p-8 rounded-lg">
      <h2 class="text-2xl font-playfair mb-4">Tour Information</h2>
      <ul class="space-y-2">
        <li>Tours available Thursday through Sunday</li>
        <li>Reservations required 24 hours in advance</li>
        <li>Participants must be 21+ with valid ID</li>
        <li>Private group tours available upon request</li>
        <li>Contact: tours@highlandway.com or call (555) 123-4567</li>
      </ul>
    </div>
  </div>

</main>