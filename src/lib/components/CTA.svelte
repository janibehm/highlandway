<script lang="ts">
  export let title: string;
  export let description: string;
  export let secondaryText: string;
  export let primaryButtonText: string;
  export let primaryButtonLink: string;
  export let secondaryButtonText: string;
  export let secondaryButtonLink: string;
  export let imageSrc: string;
  export let imageAlt: string;
</script>

<section class="w-full mt-2 xl:mb-2 py-12 xl:pb-38 px-6 bg-black xl:pt-34" style="background-color: var(--bg-black);">
  <div class="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-8">
    <div class="flex-1 text-center xl:text-left xl:mt-8">
      <h2 class="text-4xl mb-6 font-bold" style="color: var(--text-white);">{title}</h2>
      <p class="text-lg leading-relaxed mb-6" style="color: var(--text-white);">{description}</p>
      <p class="text-lg leading-relaxed mb-6" style="color: var(--text-white);">{secondaryText}</p>
      <div class="flex flex-col sm:flex-row gap-4 mt-8 mb-6 xl:justify-start justify-center">
        <a 
          href={primaryButtonLink} 
          class="px-6 py-3 font-semibold rounded transition-transform hover:-translate-y-1 text-center"
          style="background-color: var(--primary-color); color: white;"
          on:mouseover={(event) => {
            const target = event.target as HTMLElement;
            if (target) target.style.backgroundColor = 'var(--primary-hover-color)';
          }}
          on:focus={(event) => {
            const target = event.target as HTMLElement;
            if (target) target.style.backgroundColor = 'var(--primary-hover-color)';
          }}
          on:mouseout={(event) => {
            const target = event.target as HTMLElement;
            if (target) target.style.backgroundColor = 'var(--primary-color)';
          }}
          on:blur={(event) => {
            const target = event.target as HTMLElement;
            if (target) target.style.backgroundColor = 'var(--primary-color)';
          }}
        >
          {primaryButtonText}
        </a>
        <a 
          href={secondaryButtonLink} 
          class="px-6 py-3 border-2 font-semibold rounded transition-transform hover:-translate-y-1 text-center"
          style="border-color: var(--primary-color); color: var(--primary-color);"
          on:mouseover={(event) => {
            const target = event.target as HTMLElement | null;
            if (target) target.style.backgroundColor = 'var(--secondary-color)';
          }}
          on:focus={(event) => {
            const target = event.target as HTMLElement | null;
            if (target) target.style.backgroundColor = 'var(--secondary-color)';
          }}
          on:mouseout={(event) => {
            const target = event.target as HTMLElement | null;
            if (target) target.style.backgroundColor = 'transparent';
          }}
          on:blur={(event) => {
            const target = event.target as HTMLElement | null;
            if (target) target.style.backgroundColor = 'transparent';
          }}
        >
          {secondaryButtonText}
        </a>
      </div>
    </div>
    <div class="flex-1 rounded-lg overflow-hidden shadow-xl xl:order-last order-first">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        class="w-full h-auto block transition-transform duration-300 hover:scale-105" 
      />
    </div>
  </div>
</section>
