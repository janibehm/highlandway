<script lang="ts">
  import { onMount } from "svelte";
  export let videoSrc = "/videos/whisky_club.mp4";

  let videoElement = null as HTMLVideoElement | null;
  let videoLoaded = false;

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

  // Set up IntersectionObserver
  onMount(() => {
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

<div class="w-full flex justify-center relative">
  <video
    bind:this={videoElement}
    class="w-[90vw] md:w-[80vw] xl:w-[50vw] h-[50vh] md:h-[75vh] xl:h-[95vh] rounded-lg shadow-lg object-cover"
    data-src={videoSrc}
    poster="/img/logo.webp"
    autoplay
    muted
    playsinline
    preload="none"
  >
  </video>
</div>



