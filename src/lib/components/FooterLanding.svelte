<script lang="ts">
  import Subscribe from './Subscribe.svelte';
  import Video from './Video.svelte';
  export let year: number = new Date().getFullYear();
</script>

<footer class="w-full bg-black px-4 py-8 h-auto ">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Left Side: Subscribe component -->
    <div class="order-1 mb-8 md:mb-0">
      <Subscribe />
    </div>
    
    <!-- Right Side: Video component -->
    <div class="order-2">
      <Video />
    </div>
  </div>
  
  <div class="max-w-7xl mx-auto mt-8 text-center text-white text-sm ">
    &copy; {year} Highland Way. All rights reserved.
  </div>
</footer>