<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte';   
    import CTA from '$lib/components/CTA.svelte';
    import Recipe from '$lib/components/Recipe.svelte';
    import MovingText from '$lib/components/MovingText.svelte';
    import FooterLanding from '$lib/components/FooterLanding.svelte';
    let triggerNode: HTMLElement | null = null; // Reference to the section before the footer
</script>
  
<div class="page-wrapper">
  <main class="w-full flex flex-col bg-black relative">
    <!-- Navigation Component -->
    <Navigation /> 
  
    <!-- Hero Component -->
    <div class="w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[32/9]  relative overflow-hidden">
        <!-- Enhanced image with corrected path -->
        <img
        src="/img/whisky.webp"
        alt="Highland Way Background"
        class="absolute inset-0 w-full h-full object-cover z-0"
        sizes="100vw"
        loading="eager"
      />
        
        <!-- Bubble Animation -->
        <div class="absolute inset-0 pointer-events-none z-10">
          <div id="background-wrap" class="absolute inset-0">
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>
          </div>
        </div>
        <!-- Text -->
        <div class="absolute inset-0 flex flex-col justify-start items-center px-4 pt-8 z-20">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white drop-shadow-lg text-center leading-tight max-w-xl">
              Experience the journey<br> 
              from the Highlands<br> 
              to your glass.
          </h1>
        </div>
    </div>

    <!-- CTA Component -->
    <div class="w-full flex justify-center">
      <CTA
        title="Discover Our Heritage"
        description="Experience the exceptional craftsmanship and rich tradition of Highland whisky. Our Virginia Highland Whisky embodies centuries of Scottish distilling expertise with a modern American twist."
        secondaryText="Each bottle tells a story of patience, passion, and precision - from the selection of finest ingredients to the meticulous aging process."
        primaryButtonText="Explore Products"
        primaryButtonLink="/products"
        secondaryButtonText="Book a Tour"
        secondaryButtonLink="/tour"
        imageSrc="/img/virginia-highland-whisky-1.jpg"
        imageAlt="Virginia Highland Whisky"
      />
    </div>

    <!-- Section before Footer -->
    <div class="w-full" >
      <Recipe />
    </div>
  
    <MovingText />
    <div class="h-30 bg-black"></div>
  
    <!-- Next Page CTA -->
    <div class="w-full bg-secondary-bg bg-opacity-20 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-playfair mb-6 text-white">Our Story</h2>
        <p class="text-xl max-w-2xl mx-auto mb-8 text-white">Discover the heritage and craftsmanship behind Highland Way. From Scotland's legendary highlands to Virginia's rolling countryside, our story is one of passion and tradition.</p>
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
  
    <!-- Footer -->
    <div class="w-full">
      <FooterLanding />
    </div>
  </main>
</div>

<style>
  /* Force page to be scrollable */
  :global(html), :global(body) {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-y: auto !important;
    position: relative !important;
  }

  :global(body) {
    background-color: black !important;
    display: block !important; /* Changed from flex to avoid layout conflicts */
    min-height: 100vh !important;
    overflow-x: hidden !important;
  }

  /* Ensure SvelteKit app container is proper */
  :global(#svelte), :global(div[id^="svelte"]), :global(div[id^="__svelte"]) {
    display: block !important;
    min-height: 100vh !important;
    width: 100% !important;
    overflow-y: visible !important;
  }

  /* Wrapper to ensure content is scrollable */
  .page-wrapper {
    display: block;
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow-y: visible;
  }

  /* KEYFRAMES */

  @-webkit-keyframes animateBubble {
      0% {
          margin-top: 100px;
      }
      100% {
          margin-top: -100%;
      }
  }

  @-moz-keyframes animateBubble {
      0% {
          margin-top: 100px;
      }
      100% {
          margin-top: -100%;
      }
  }

  @keyframes animateBubble {
      0% {
          margin-top: 100px;
      }
      100% {
          margin-top: -100%;
      }
  }

  @-webkit-keyframes sideWays { 
      0% { 
          margin-left:0px;
      }
      100% { 
          margin-left:50px;
      }
  }

  @-moz-keyframes sideWays { 
      0% { 
          margin-left:0px;
      }
      100% { 
          margin-left:50px;
      }
  }

  @keyframes sideWays { 
      0% { 
          margin-left:0px;
      }
      100% { 
          margin-left:50px;
      }
  }

  /* ANIMATIONS */

  .x1 {
      -webkit-animation: animateBubble 15s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 15s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 15s linear infinite, sideWays 2s ease-in-out infinite alternate;
    
    left: -5%;
    top: 5%;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x2 {
      -webkit-animation: animateBubble 10s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite, sideWays 4s ease-in-out infinite alternate;
    
    left: 5%;
    top: 80%;
    
    -webkit-transform: scale(0.07);
    -moz-transform: scale(0.07);
    transform: scale(0.07);
  }

  .x3 {
      -webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
    
    left: 10%;
    top: 40%;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x4 {
      -webkit-animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    
    left: 20%;
    top: 0;
    
    -webkit-transform: scale(0.07);
    -moz-transform: scale(0.07);
    transform: scale(0.07);
  }

  .x5 {
      -webkit-animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    
    left: 30%;
    top: 50%;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x6 {
      -webkit-animation: animateBubble 11s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 11s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 11s linear infinite, sideWays 2s ease-in-out infinite alternate;
    
    left: 50%;
    top: 0;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x7 {
      -webkit-animation: animateBubble 10s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite, sideWays 2s ease-in-out infinite alternate;
    
    left: 65%;
    top: 70%;
    
    -webkit-transform: scale(0.07);
    -moz-transform: scale(0.07);
    transform: scale(0.07);
  }

  .x8 {
      -webkit-animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 12s linear infinite, sideWays 3s ease-in-out infinite alternate;
    
    left: 80%;
    top: 10%;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x9 {
      -webkit-animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 19s linear infinite, sideWays 4s ease-in-out infinite alternate;
    
    left: 90%;
    top: 50%;
    
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    transform: scale(0.1);
  }

  .x10 {
      -webkit-animation: animateBubble 16s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 16s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 16s linear infinite, sideWays 2s ease-in-out infinite alternate;
    
    left: 80%;
    top: 80%;
    
    -webkit-transform: scale(0.07);
    -moz-transform: scale(0.07);
    transform: scale(0.07);
  }

  /* OBJECTS */

  .bubble {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      
      /* Darker box-shadow */
      -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3), inset 0px 10px 30px 5px rgba(190, 95, 35, 0.8);
      -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3), inset 0px 10px 30px 5px rgba(190, 95, 35, 0.8);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3), inset 0px 10px 30px 5px rgba(190, 95, 35, 0.8);
      
      height: 140px;
      position: absolute;
      width: 140px;
      
      /* Darker base gradient */
      background: linear-gradient(135deg, 
          rgba(190, 95, 35, 0.9) 0%,
          rgba(210, 105, 30, 0.8) 35%,
          rgba(180, 70, 0, 0.7) 70%
      );
      opacity: 0.85;
      pointer-events: none !important;
  }

  .bubble:after {
      /* Darker highlight gradient */
      background: -moz-radial-gradient(center, ellipse cover, rgba(230, 137, 60, 0.5) 0%, rgba(190, 95, 35, 0) 70%);
      background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(230, 160, 60, 0.5)), color-stop(70%,rgba(190, 95, 35, 0)));
      background: -webkit-radial-gradient(center, ellipse cover, rgba(230, 160, 60, 0.5) 0%,rgba(145, 113, 93, 0) 70%);
      background: -o-radial-gradient(center, ellipse cover, rgba(230, 160, 60, 0.5) 0%,rgba(190, 95, 35, 0) 70%);
      background: -ms-radial-gradient(center, ellipse cover, rgba(230, 160, 60, 0.5) 0%,rgba(190, 95, 35, 0) 70%);
      background: radial-gradient(ellipse at center, rgba(230, 160, 60, 0.5) 0%,rgba(190, 95, 35, 0) 70%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80e6a03c', endColorstr='#00be5f23',GradientType=1 );

      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      
      /* Darker inner highlight */
      -webkit-box-shadow: inset 0 20px 30px rgba(230, 160, 60, 0.3);
      -moz-box-shadow: inset 0 20px 30px rgba(230, 160, 60, 0.3);
      box-shadow: inset 0 20px 30px rgba(230, 160, 60, 0.3);
      
      content: "";
      height: 126px;
      left: 7px;
      position: absolute;
      width: 126px;
  }

  /* Add variety with different bubble colors (darker versions) */
  .x1, .x4, .x7, .x10 {
      background: linear-gradient(135deg, 
          rgba(190, 95, 35, 0.9) 0%,
          rgba(200, 100, 30, 0.8) 50%, 
          rgba(180, 70, 0, 0.7) 100%
      );
  }

  .x2, .x5, .x8 {
      background: linear-gradient(135deg, 
          rgba(200, 100, 30, 0.9) 0%,
          rgba(210, 130, 15, 0.8) 50%,
          rgba(190, 95, 35, 0.7) 100%
      );
  }

  .x3, .x6, .x9 {
      background: linear-gradient(135deg, 
          rgba(180, 70, 0, 0.9) 0%,
          rgba(190, 95, 35, 0.8) 50%,
          rgba(200, 100, 30, 0.7) 100%
      );
  }

  /* Fix scrolling issues */
  :global(html), :global(body) {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      position: relative;
  }

  :global(body) {
      background-color: black;
      display: flex;
      flex-direction: column;
  }

  /* Ensure main content is scrollable */
  :global(#svelte) {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      width: 100%;
  }

  /* Override any conflicting styles */
  :global(.overflow-y-auto) {
    overflow-y: visible !important;
  }
</style>