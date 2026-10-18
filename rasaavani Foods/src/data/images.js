// Central image registry.
//
// Brand assets (logo + official product photography) should be placed in
// `public/images/` and referenced here through stable local paths.
//
// The supplied Google Drive assets could not be downloaded directly (Google
// blocks server-side access), so the paths below are reserved for them:
//   - /images/logo.png        (Rasavaani logo)
//   - /images/product-achaar.jpg, product-mango.jpg, product-lemon.jpg,
//     product-bottles.jpg, product-picklejars.jpg  (official product shots)
//
// The remaining photographs are representative stock imagery (Wikimedia
// Commons / Pexels) used as editorial visuals. They are NOT actual Rasavaani
// products, kitchens, staff or facilities and are clearly captioned as
// representative where relevant.

export const images = {
  logo: '/images/logo.png',

  // Hero
  hero: '/images/hero-chilli.jpg',
  heroAlt: '/images/hero-chilli-2.jpg',

  // Story
  story: '/images/story-kitchen.jpg',
  storyMarket: '/images/story-market.jpg',

  // Signature & product photography
  productAchaar: '/images/product-achaar.jpg',
  productMango: '/images/product-mango.jpg',
  productLemon: '/images/product-lemon.jpg',
  productBottles: '/images/product-bottles.jpg',
  productPickleJars: '/images/product-picklejars.jpg',
  storyPreserves: '/images/story-preserves.jpg',
  preserveJalapeno: '/images/preserve-jalapeno.jpg',

  // Heritage
  heritageSpices: '/images/heritage-spices.jpg',
  heritageDarjeel: '/images/heritage-darjeel.jpg',
  heritageSouthThali: '/images/heritage-souththali.jpg',
  heritageMeal: '/images/heritage-meal.jpg',
  heritagePickle: '/images/heritage-pickle.jpg',

  // Ingredients
  ingredientMustard: '/images/ingredient-mustard.jpg',
  ingredientGaram: '/images/ingredient-garam.jpg',

  // Community
  communityFarmers: '/images/community-farmers.jpg',
  communityHarvest: '/images/community-harvest.jpg',

  // Global
  globalThali: '/images/global-thali.jpg',
}

export default images
