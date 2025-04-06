<script lang="ts">
  import { onMount } from "svelte";
  export let videoSrc = "/videos/whisky_club.mp4";
  
  let email = "";
  let submitted = false;
  let error = false;
  
  function handleSubmit() {
    if (email && email.includes('@') && email.includes('.')) {
      submitted = true;
      error = false;
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
    } else {
      error = true;
    }
  }

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

<section class="w-full min-h-screen flex flex-col items-center justify-center bg-black px-4">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-5 w-full">
    <!-- Left Side: Newsletter -->
    <div class="flex-1 text-center md:text-left">
      <h2 class="pt-5 text-4xl font-bold text-white mb-4">Stay Updated</h2>
      {#if submitted}
        <p class="text-xl text-green-500 mb-6">Thank you for subscribing to our newsletter!</p>
      {:else}
        <p class="text-lg text-white mb-6">Subscribe to our newsletter for the latest news and offers.</p>
        <form class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0" on:submit|preventDefault={handleSubmit}>
          <input 
            type="email" 
            bind:value={email} 
            placeholder="Your email address" 
            class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 bg-gray-800 text-white border border-gray-600 flex-grow"
            class:border-red-500={error}
          />
          <button 
            type="submit" 
            class="px-6 py-2 bg-amber-700 text-white font-semibold rounded hover:bg-amber-600 transition-transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </form>
        {#if error}
          <p class="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
        {/if}
      {/if}
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
  
  <!-- Copyright text at bottom -->
  <div class="w-full text-center text-white text-sm mt-8 mb-4">
    &copy; {new Date().getFullYear()} Jani Behm. All rights reserved.
  </div>
</section>