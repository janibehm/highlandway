<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">Our History</h1>
    
    <div class="prose prose-invert max-w-none">
      <p class="lead text-xl mb-8">From the misty highlands of Scotland to the rolling hills of Virginia, our story is one of passion, tradition, and innovation.</p>
      
      <div class="mb-12">
        <h2>Scottish Roots</h2>
        <p>The Highland Way story begins in the rugged landscapes of Scotland, where our founder, James MacLaren, spent his youth learning the art of whisky making from his grandfather, a master distiller at one of Speyside's most revered distilleries.</p>
        <p>Those early lessons—patience, precision, respect for tradition—would form the foundation of Highland Way's approach to crafting exceptional spirits.</p>
      </div>
      
      <div class="mb-12">
        <h2>The American Chapter</h2>
        <p>In 2015, James brought his vision and expertise to Virginia, drawn by the region's pure water, ideal climate, and agricultural bounty. After three years of planning and construction, Highland Way Distillery opened its doors in 2018.</p>
        <p>Our facility marries traditional Scottish distilling methods with American innovation, creating a unique approach that honors the past while embracing the future.</p>
      </div>
      
      <div class="mb-12">
        <h2>Craft and Quality</h2>
        <p>From the beginning, our commitment has been to small-batch production that prioritizes quality over quantity. We source local grains, use traditional copper pot stills, and age our spirits in hand-selected oak barrels.</p>
        <p>This dedication to craft has earned Highland Way recognition from whisky enthusiasts and critics alike, with our signature expressions receiving awards at international spirits competitions.</p>
      </div>
      
      <div>
        <h2>Looking Forward</h2>
        <p>While we honor tradition, we also embrace innovation. Our master distiller continues to experiment with new techniques and expressions, ensuring that Highland Way remains at the forefront of American whisky craftsmanship.</p>
        <p>As we grow, we remain committed to our founding principles: exceptional quality, sustainable practices, and creating spirits that tell the story of our Scottish heritage and Virginia home.</p>
      </div>
    </div>
  </div>
  
  <Footer />
</main>