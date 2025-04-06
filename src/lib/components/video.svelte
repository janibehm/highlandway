<script lang="ts">
  import { onMount } from "svelte";
  export let videoSrc = "/videos/blond-woman-whisky.mp4";
  export let text = "I dare you";

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

<section class="w-full min-h-screen flex items-center justify-center bg-black px-4">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
    <!-- Left Side: Text -->
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-4xl font-bold text-white">{text}</h2>
      <p class="text-lg text-white mt-4">
        Contact <a href="mailto:behmdigital@gmail.com" class="text-blue-400 hover:underline">behmdigital@gmail.com</a>
      </p>
    </div>

    <!-- Right Side: Video -->
    <div class="flex-1">
      <video
        bind:this={videoElement}
        src={videoSrc}
        class="w-full max-h-[50vh] md:max-h-[60vh] rounded-lg shadow-lg object-cover"
        autoplay
        muted
        playsinline
        preload="auto"
      >
        <track kind="captions" src="/videos/captions.vtt" srclang="en" label="English" default />
      </video>
    </div>
  </div>
</section>