<script lang="ts">
  export let year: number = new Date().getFullYear();
</script>

<footer class="w-full bg-gray-800 text-white py-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
    <!-- Left Section: Logo or Brand Name -->
    <div class="text-lg font-bold">
      <a href="/" class="hover:text-gray-300">Highland Way</a>
    </div>

    <!-- Center Section: Navigation Links -->
    <div class="flex space-x-6 mt-4 md:mt-0">
      <a href="/about" class="hover:text-gray-300">About</a>
      <a href="/products" class="hover:text-gray-300">Products</a>
      <a href="/contact" class="hover:text-gray-300">Contact</a>
    </div>

    <!-- Right Section: Copyright -->
    <div class="text-sm mt-4 md:mt-0">
      &copy; {year} Highland Way. All rights reserved.
    </div>
  </div>
</footer>