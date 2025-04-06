<script lang="ts">
  export let imageSrc = "/img/recipe.png";
  export let imageAlt = "Recipe Image";
  export let buttonText = "Find Recipes";
  export let buttonLink = "/recipes";
</script>

<section class="w-full">
  <div class="relative w-full h-[75vh] bg-cover bg-center" style="background-image: url({imageSrc});">
    <img 
      src={imageSrc} 
      alt={imageAlt} 
      class="hidden" 
    />
    <!-- Button -->
    <div class="absolute inset-0 flex items-center justify-center">
      <a 
        href={buttonLink} 
        class="px-6 py-3 bg-amber-800 text-white font-semibold rounded hover:bg-amber-700 transition-transform hover:-translate-y-1 text-center"
        style="margin-left: 620px;" 
      >
        {buttonText}
      </a>
    </div>
  </div>
</section>