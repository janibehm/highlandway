<script lang="ts">
  // Words to display in the moving text
  export let words: string[] = [
    "High Land Blend",
    "Brewed In Scotland",
    "Pure Malt",
    "Virgin Oak"
  ];
  
  // Control animation speed (higher = slower)
  export const  animationDuration: number = 25; // seconds
</script>

<div class="w-full bg-black py-4 overflow-hidden">
  <div class="moving-text-container">
    <div class="moving-text">
      {#each words as word, i}
        <span class="text-white text-xl md:text-2xl font-medium mx-8">
          {word}
          {#if i < words.length - 1}
            <span class="mx-4 opacity-40">•</span>
          {/if}
        </span>
      {/each}
      
      <!-- Duplicate words for seamless looping -->
      {#each words as word, i}
        <span class="text-white text-xl md:text-2xl font-medium mx-8">
          {word}
          {#if i < words.length - 1}
            <span class="mx-4 opacity-40">•</span>
          {/if}
        </span>
      {/each}
    </div>
  </div>
</div>

<style>
  .moving-text-container {
    position: relative;
    width: 100%;
    white-space: nowrap;
  }
  
  .moving-text {
    display: inline-block;
    animation-name: moveRight;
    animation-duration: calc(var(--animation-duration, 25) * 1s);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    will-change: transform;
  }
  
  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>