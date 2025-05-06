<script>
  import Navigation from '$lib/components/Navigation.svelte';
/*   import LenisInit from '$lib/components/LenisInit.svelte'; */


</script>
<!-- <LenisInit /> -->
<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">Contact Us</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <form class="space-y-6">
          <div>
            <label for="name" class="block mb-2">Name</label>
            <input type="text" id="name" class="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary" />
          </div>
          
          <div>
            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" class="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary" />
          </div>
          
          <div>
            <label for="subject" class="block mb-2">Subject</label>
            <select id="subject" class="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary">
              <option value="general">General Inquiry</option>
              <option value="tour">Tour Information</option>
              <option value="wholesale">Wholesale</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block mb-2">Message</label>
            <textarea id="message" rows="5" class="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-primary"></textarea>
          </div>
          
          <button type="submit" class="bg-primary hover:bg-primary-hover text-white py-2 px-8 rounded">Send Message</button>
        </form>
      </div>
      
      <!-- Contact Information -->
      <div>
        <div class="mb-8">
          <h2 class="text-2xl font-playfair mb-4">Visit Our Distillery</h2>
          <address class="not-italic">
            Highland Way Distillery<br>
            123 Whisky Lane<br>
            Charlottesville, VA 22903
          </address>
        </div>
        
        <div class="mb-8">
          <h2 class="text-2xl font-playfair mb-4">Hours</h2>
          <p>Thursday - Saturday: 11am - 6pm</p>
          <p>Sunday: 12pm - 5pm</p>
          <p>Monday - Wednesday: Closed</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-playfair mb-4">Contact</h2>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@highlandway.com</p>
        </div>
      </div>
    </div>
  </div>
</main>