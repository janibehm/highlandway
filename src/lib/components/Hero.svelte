<script lang="ts">
  export let title: string = "Highland Way";
  export let subtitle: string = "Experience the journey of a lifetime";
  export let buttonText: string = "Explore";
  export let buttonLink: string = "#";
</script>

<section class="relative h-[75vh] flex items-start md:items-center text-white pt-10 md:pt-0">
  <img 
      src="/img/hero-mobile.webp" 
      srcset="/img/hero-mobile.webp 480w, /img/hero-tablet.webp 768w, /img/hero.webp 1440w"
      sizes="100vw"
      alt="Highland Way scenic landscape"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
  />
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 max-w-3xl px-6 md:px-10 ml-10 md:ml-24">
    <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
    <p class="text-lg md:text-xl mb-6 drop-shadow-md">{subtitle}</p>
    <a 
      href={buttonLink} 
      class="inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded shadow hover:bg-gray-100 transition-transform hover:-translate-y-1"
    >
      {buttonText}
    </a>
  </div>
</section>