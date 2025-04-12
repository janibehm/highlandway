<script lang="ts">
  import { onMount } from "svelte";
  export let videoSrc = "/videos/whisky_club.mp4";

  let videoElement = null as HTMLVideoElement | null;

  // Function to handle autoplay when the video is in the viewport
  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
      threshold: 0.5, // Trigger when 50% of the video is visible
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

  


    <div class="flex-1">
      <video
        bind:this={videoElement}
        src={videoSrc}
        class="w-full h-[50vh] xl:h-[90vh] md:h-[50vh] rounded-lg shadow-lg object-cover"
        autoplay
        muted
        playsinline
        preload="auto"
      >
      </video>
    </div>

  

