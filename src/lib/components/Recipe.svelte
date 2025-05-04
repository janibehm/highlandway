<script lang="ts">
  export let imageSrc = "/img/cocktail.png";
  export let imageAlt = "Recipe Image";
  export let buttonText = "Find Recipes";
  export let buttonLink = "/recipes";
</script>

<section class="w-full">
  <div class="relative w-full h-170 bg-cover bg-center" style="background-image: url({imageSrc});">
    <img 
      src={imageSrc} 
      alt={imageAlt} 
      class="hidden" 
    />
    <!-- Button -->
    <div class="absolute inset-x-0 top-0 flex items-center justify-center">
      <a 
        href={buttonLink} 
        class="w-full px-6 py-3 bg-amber-800 text-white font-semibold rounded-b hover:bg-amber-700 transition-transform hover:-translate-y-1 text-center"
      >
        {buttonText}
      </a>
    </div>
  </div>
</section>