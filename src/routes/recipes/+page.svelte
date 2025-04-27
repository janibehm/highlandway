<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
/*   import LenisInit from '$lib/components/LenisInit.svelte'; */

</script>
<!-- <LenisInit /> -->
<main class="w-full flex flex-col bg-black text-white">
  <Navigation />
  
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-playfair mb-8">Highland Way Recipes</h1>
    
    <p class="text-xl mb-12">Discover delicious ways to enjoy our whiskies, from classic cocktails to innovative new creations.</p>
    
    <!-- Filter Controls -->
    <div class="mb-12">
      <div class="flex flex-wrap gap-4">
        <button class="bg-primary hover:bg-primary-hover text-white py-2 px-6 rounded">All Recipes</button>
        <button class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded">Cocktails</button>
        <button class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded">Food Pairings</button>
        <button class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded">Seasonal</button>
      </div>
    </div>
    
    <!-- Recipes Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <!-- Recipe Card 1 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-highland-sour.jpg" alt="Highland Sour" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-primary text-white text-xs px-2 py-1 rounded">Cocktail</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Highland Sour</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>2 oz Highland Way Single Malt</li>
              <li>¾ oz fresh lemon juice</li>
              <li>½ oz honey syrup (1:1)</li>
              <li>1 egg white</li>
              <li>Dash of Angostura bitters</li>
              <li>Lemon twist for garnish</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Combine whisky, lemon juice, honey syrup, and egg white in a shaker.</li>
              <li>Dry shake (without ice) for 30 seconds.</li>
              <li>Add ice and shake again until well-chilled.</li>
              <li>Strain into a rocks glass over fresh ice.</li>
              <li>Add a dash of bitters on top and garnish with lemon twist.</li>
            </ol>
          </div>
        </div>
      </div>
      
      <!-- Recipe Card 2 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-smoked-old-fashioned.jpg" alt="Smoked Old Fashioned" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-primary text-white text-xs px-2 py-1 rounded">Cocktail</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Smoked Old Fashioned</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>2 oz Highland Way Cask Strength</li>
              <li>¼ oz maple syrup</li>
              <li>2 dashes Angostura bitters</li>
              <li>1 dash orange bitters</li>
              <li>Orange peel for garnish</li>
              <li>Cinnamon stick for smoking (optional)</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>In a mixing glass, combine whisky, maple syrup, and both bitters.</li>
              <li>Add ice and stir for 30 seconds until well-chilled.</li>
              <li>Strain into a rocks glass over a large ice cube.</li>
              <li>Express orange peel over the drink and drop it in.</li>
              <li>For the smoke effect: light a cinnamon stick, extinguish the flame, and capture the smoke in the glass before serving.</li>
            </ol>
          </div>
        </div>
      </div>
      
      <!-- Recipe Card 3 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-whisky-glazed-salmon.jpg" alt="Whisky Glazed Salmon" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-secondary text-white text-xs px-2 py-1 rounded">Food Pairing</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Whisky Glazed Salmon</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>4 salmon fillets (6 oz each)</li>
              <li>¼ cup Highland Way Virginia Highland Blend</li>
              <li>¼ cup maple syrup</li>
              <li>2 tbsp soy sauce</li>
              <li>1 tbsp Dijon mustard</li>
              <li>2 cloves garlic, minced</li>
              <li>Salt and pepper to taste</li>
              <li>Fresh dill for garnish</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Preheat oven to 400°F (200°C).</li>
              <li>In a bowl, whisk together whisky, maple syrup, soy sauce, mustard, and garlic.</li>
              <li>Season salmon with salt and pepper.</li>
              <li>Place salmon in a baking dish and pour half the glaze over the fillets.</li>
              <li>Bake for 15-18 minutes, basting halfway with remaining glaze.</li>
              <li>Garnish with fresh dill before serving.</li>
            </ol>
          </div>
          
          <div class="mt-4 p-3 bg-gray-800 rounded">
            <h3 class="font-bold">Whisky Pairing:</h3>
            <p>Serve with a glass of Highland Way Virginia Highland Blend to complement the flavors.</p>
          </div>
        </div>
      </div>
      
      <!-- Recipe Card 4 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-highland-hot-toddy.jpg" alt="Highland Hot Toddy" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-primary text-white text-xs px-2 py-1 rounded">Cocktail</span>
          <span class="bg-gray-700 text-white text-xs px-2 py-1 rounded ml-2">Seasonal</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Highland Hot Toddy</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>2 oz Highland Way Single Malt</li>
              <li>1 tbsp honey</li>
              <li>½ oz fresh lemon juice</li>
              <li>1 cinnamon stick</li>
              <li>2 cloves</li>
              <li>Star anise</li>
              <li>Hot water</li>
              <li>Lemon wheel for garnish</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Warm a mug by filling it with hot water, then empty.</li>
              <li>Add honey and whisky to the mug and stir to combine.</li>
              <li>Add lemon juice, cinnamon stick, cloves, and star anise.</li>
              <li>Fill with hot water and stir gently.</li>
              <li>Garnish with a lemon wheel and serve immediately.</li>
            </ol>
          </div>
        </div>
      </div>
      
      <!-- Recipe Card 5 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-whisky-chocolate-mousse.jpg" alt="Whisky Chocolate Mousse" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-secondary text-white text-xs px-2 py-1 rounded">Food Pairing</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Whisky Chocolate Mousse</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>8 oz dark chocolate (70% cacao), chopped</li>
              <li>¼ cup Highland Way Cask Strength</li>
              <li>2 tbsp strong coffee</li>
              <li>4 eggs, separated</li>
              <li>¼ cup granulated sugar</li>
              <li>1 cup heavy cream</li>
              <li>Chocolate shavings for garnish</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Melt chocolate in a heatproof bowl over simmering water.</li>
              <li>Remove from heat and stir in whisky and coffee. Let cool slightly.</li>
              <li>Whisk in egg yolks one at a time.</li>
              <li>In a separate bowl, whip egg whites until foamy, then gradually add sugar and beat until stiff peaks form.</li>
              <li>In another bowl, whip heavy cream until soft peaks form.</li>
              <li>Fold egg whites into chocolate mixture, then fold in whipped cream.</li>
              <li>Divide into serving glasses and refrigerate for at least 4 hours.</li>
              <li>Garnish with chocolate shavings before serving.</li>
            </ol>
          </div>
          
          <div class="mt-4 p-3 bg-gray-800 rounded">
            <h3 class="font-bold">Whisky Pairing:</h3>
            <p>Serve with a dram of Highland Way Cask Strength for a perfect after-dinner treat.</p>
          </div>
        </div>
      </div>
      
      <!-- Recipe Card 6 -->
      <div class="bg-secondary-bg bg-opacity-10 rounded-lg overflow-hidden">
        <img src="/img/recipes/recipe-highland-manhattan.jpg" alt="Highland Manhattan" class="w-full h-64 object-cover">
        <div class="p-6">
          <span class="bg-primary text-white text-xs px-2 py-1 rounded">Cocktail</span>
          <h2 class="text-2xl font-playfair mt-4 mb-2">Highland Manhattan</h2>
          
          <div class="mb-4">
            <h3 class="text-lg mb-2">Ingredients:</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>2 oz Highland Way Virginia Highland Blend</li>
              <li>1 oz sweet vermouth</li>
              <li>2 dashes Angostura bitters</li>
              <li>1 dash orange bitters</li>
              <li>Brandied cherry for garnish</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg mb-2">Instructions:</h3>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Add all ingredients to a mixing glass with ice.</li>
              <li>Stir for 30 seconds until well-chilled.</li>
              <li>Strain into a chilled coupe or martini glass.</li>
              <li>Garnish with a brandied cherry.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Submit Your Recipe CTA -->
    <div class="mt-16 p-8 bg-secondary-bg bg-opacity-10 rounded-lg text-center">
      <h2 class="text-3xl font-playfair mb-4">Share Your Highland Way Creation</h2>
      <p class="mb-6 max-w-2xl mx-auto">Have you crafted an exceptional cocktail or culinary creation featuring our whisky? We'd love to feature it in our collection.</p>
      <a href="/contact" class="bg-primary hover:bg-primary-hover text-white py-3 px-8 rounded inline-block">Submit Your Recipe</a>
    </div>
  </div>
  
  <Footer />
</main>