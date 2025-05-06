<script lang="ts">
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="w-full text-white shadow-md z-50 relative" style="background-color: var(--bg-black);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-[11vh]">
            <!-- Logo/Title -->
            <div class="text-2xl md:text-3xl font-bold">
                <a href="/" class="hover:text-gray-300">Highland Way</a>
            </div>

            <!-- Hamburger Menu - Visible on mobile and tablet (anything below xl) -->
            <div class="block xl:hidden">
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

            <!-- Menu Links - Only visible on XL screens -->
            <div class="hidden xl:flex space-x-8">
                <a href="/" class="hover:text-gray-300">Home</a>
                <a href="/about" class="hover:text-gray-300">About</a>
                <a href="/products" class="hover:text-gray-300">Products</a>
                <a href="/recipes" class="hover:text-gray-300">Recipes</a>
                <a href="/blog" class="hover:text-gray-300">Blog</a>
                <a href="/contact" class="hover:text-gray-300">Contact</a>
            </div>
        </div>
    </div>

    <!-- Mobile/Tablet Menu - Now Overlay -->
    {#if isMenuOpen}
        <div class="xl:hidden fixed top-[11vh] left-0 right-0 bg-black bg-opacity-95 z-50 shadow-lg border-t border-gray-800">
            <div class="py-2">
                <a href="/" class="block px-6 py-3 hover:bg-gray-900 transition-colors">Home</a>
                <a href="/about" class="block px-6 py-3 hover:bg-gray-900 transition-colors">About</a>
                <a href="/products" class="block px-6 py-3 hover:bg-gray-900 transition-colors">Products</a>
                <a href="/recipes" class="block px-6 py-3 hover:bg-gray-900 transition-colors">Recipes</a>
                <a href="/blog" class="block px-6 py-3 hover:bg-gray-900 transition-colors">Blog</a>
                <a href="/contact" class="block px-6 py-3 hover:bg-gray-900 transition-colors">Contact</a>
            </div>
        </div>
    {/if}
</nav>

<style>
    /* Optional: Add animation for smooth opening/closing */
    div.fixed {
        animation: fadeIn 0.2s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>