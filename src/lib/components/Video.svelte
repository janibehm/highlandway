<script lang="ts">
  import { onMount } from "svelte";
  export let videoSrc = "/videos/whisky_club.mp4";
  export let posterSrc = "/img/logo.webp";

  let videoElement = null as HTMLVideoElement | null;
  let videoLoaded = false;
  let containerElement: HTMLDivElement;
  let posterLoaded = false;

  // Function to load the video source
  function loadVideo() {
    if (videoElement && !videoLoaded) {
      videoElement.src = videoSrc;
      videoLoaded = true;
    }
  }

  // Function to handle autoplay when the video is in the viewport
  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Load the video if it hasn't been loaded yet
        loadVideo();
        
        if (videoElement) {
          videoElement.play();
        }
      } else {
        if (videoElement) {
          videoElement.pause();
        }
      }
    });
  }

  // Preload the poster image
  function preloadPosterImage() {
    if (!posterLoaded) {
      const img = new Image();
      img.onload = () => {
        posterLoaded = true;
      };
      img.src = posterSrc;
    }
  }

  // Set up IntersectionObserver and preload poster
  onMount(() => {
    // Preload the poster image immediately
    preloadPosterImage();
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Lower threshold to start loading earlier
      rootMargin: "100px", // Start loading when within 100px of viewport
    });
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  });
</script>

<div class="w-full flex justify-center relative" bind:this={containerElement}>
  <div class="relative w-[90vw] md:w-[80vw] xl:w-[50vw] h-[50vh] md:h-[75vh] xl:h-[95vh] overflow-hidden rounded-lg shadow-lg">
    <!-- Poster background that loads immediately -->
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center z-0"
      style="background-image: url('{posterSrc}');">
    </div>
    
    <!-- Video element (lazy loaded) -->
    <video
      bind:this={videoElement}
      class="absolute inset-0 w-full h-full object-cover z-10"
      data-src={videoSrc}
      poster={posterSrc}
      autoplay
      muted
      playsinline
      preload="none"
    >
    </video>
  </div>
</div>



