<script lang="ts">
  export let title: string = "Highland Way";
  export let subtitle: string = "Experience the journey of a lifetime";

</script>

<section class="relative h-[100vh] flex items-start md:items-center text-white pt-10 md:pt-0">
  <img 
      src="/img/whisky-hero.webp" 
      sizes="100vw"
      height="100vh"
      alt="Highland Way scenic landscape"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
  />
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 max-w-3xl px-6 md:px-10 ml-10 md:ml-24">
    <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
    <p class="text-lg md:text-xl mb-6 drop-shadow-md">{subtitle}</p>
  </div>
</section>