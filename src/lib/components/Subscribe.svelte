<script lang="ts">
  // State variables
  let email = "";
  let error = false;
  let submitted = false;
  let status = '';

  // Form submission handler
  async function handleSubmit() {
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      error = true;
      return;
    }
    
    error = false;
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      
      if (data.success) {
        submitted = true;
        status = 'Subscribed!';
      } else {
        status = 'Error: ' + (data.error || 'Something went wrong');
      }
    } catch (err) {
      status = 'Error: Could not connect to server';
    }
  }
</script>

<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16 w-full">
  <!-- Left Side: Newsletter -->
  <div class="flex-1 text-center md:text-left">
    <h2 class="text-4xl font-bold text-white mb-4">Stay Updated</h2>
    
    {#if submitted}
      <p class="text-xl text-green-500 mb-6">Thank you for subscribing to our newsletter!</p>
      {#if status}
        <p class="text-white">{status}</p>
      {/if}
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
      
      {#if status && !submitted}
        <p class="text-yellow-500 text-sm mt-2">{status}</p>
      {/if}
    {/if}
  </div>
</div>