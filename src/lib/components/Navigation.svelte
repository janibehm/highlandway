<script lang="ts">
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <nav class="w-full text-white shadow-md" style="background-color: var(--bg-black);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-[11vh]">
      
        <!-- Hamburger Menu -->
        <div class="md:hidden">
          <button
            class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            on:click={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
  
        <!-- Menu Links -->
        <div class="hidden md:flex space-x-8">
          <a href="/" class="hover:text-gray-300">Home</a>
          <a href="/about" class="hover:text-gray-300">About</a>
          <a href="/products" class="hover:text-gray-300">Products</a>
          <a href="/contact" class="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </div>
  
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden bg-gray-700">
        <a href="/" class="block px-4 py-2 hover:bg-gray-600">Home</a>
        <a href="/about" class="block px-4 py-2 hover:bg-gray-600">About</a>
        <a href="/products" class="block px-4 py-2 hover:bg-gray-600">Products</a>
        <a href="/contact" class="block px-4 py-2 hover:bg-gray-600">Contact</a>
      </div>
    {/if}
  </nav>