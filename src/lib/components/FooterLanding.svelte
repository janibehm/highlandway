<script lang="ts">
  import Subscribe from './Subscribe.svelte';
  import Video from './Video.svelte';
  export let year: number = new Date().getFullYear();
</script>

<footer class="w-full bg-black px-4 py-8 h-auto">
  <div class="max-w-7xl mx-auto flex flex-col xl:grid xl:grid-cols-5 gap-8 xl:gap-8">
    <!-- Left Side: Subscribe component - TOP on XL, FIRST on mobile -->
    <div class="order-1 xl:col-span-5 mb-8 flex items-center justify-center">
      <Subscribe />
    </div>
    
    <!-- Left Side on XL: Empty Space -->
    <div class="hidden xl:block xl:col-span-1"></div>
    
    <!-- Middle: Video component with more width -->
    <div class="order-2 flex justify-center px-4 xl:col-span-3">
      <Video />
    </div>
    
    <!-- Button: Bottom on mobile, Right side on XL -->
    <div class="order-3 flex justify-center xl:justify-start xl:items-center xl:pl-4 xl:col-span-1">
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
</footer>