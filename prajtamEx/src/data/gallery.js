import { suppliedAssets } from "./assets";

/**
 * Visual gallery.
 *
 * Supplied company assets are listed first (`asset` references src/data/assets.js).
 * Stock photographs are representative industry imagery and are flagged with
 * `stock: true` — they are never presented as PrajtamEx products or facilities.
 */

const stock = (id, src, category, alt) => ({
  id,
  src,
  category,
  alt,
  stock: true,
  asset: null,
  driveId: null,
});

export const galleryItems = [
  {
    id: "prajtamex-1",
    asset: suppliedAssets.image1,
    src: suppliedAssets.image1.local,
    driveId: suppliedAssets.image1.driveId,
    alt: suppliedAssets.image1.alt,
    category: "PrajtamEx",
    stock: false,
  },
  {
    id: "prajtamex-2",
    asset: suppliedAssets.image2,
    src: suppliedAssets.image2.local,
    driveId: suppliedAssets.image2.driveId,
    alt: suppliedAssets.image2.alt,
    category: "PrajtamEx",
    stock: false,
  },
  {
    id: "prajtamex-3",
    asset: suppliedAssets.image3,
    src: suppliedAssets.image3.local,
    driveId: suppliedAssets.image3.driveId,
    alt: suppliedAssets.image3.alt,
    category: "PrajtamEx",
    stock: false,
  },
  {
    id: "prajtamex-4",
    asset: suppliedAssets.image4,
    src: suppliedAssets.image4.local,
    driveId: suppliedAssets.image4.driveId,
    alt: suppliedAssets.image4.alt,
    category: "PrajtamEx",
    stock: false,
  },
  stock(
    "gal-fields",
    "/images/agriculture/fields-aerial.jpg",
    "Agriculture",
    "Aerial view of lush green agricultural fields in Punjab, India"
  ),
  stock(
    "gal-spice",
    "/images/agriculture/spice-bazaar.jpg",
    "Products",
    "Spices and dry goods displayed at a New Delhi market stall"
  ),
  stock(
    "gal-scrap",
    "/images/recycling/scrap-crane.jpg",
    "Recycling",
    "Magnet crane lifting scrap metal inside a recycling yard"
  ),
  stock(
    "gal-ship",
    "/images/trade/container-ship.jpg",
    "Trade",
    "Aerial view of a container ship navigating a busy harbour"
  ),
  stock(
    "gal-farmland",
    "/images/agriculture/farmland-panorama.jpg",
    "Agriculture",
    "Geometric patchwork of farmland seen from above"
  ),
  stock(
    "gal-cubes",
    "/images/recycling/metal-cubes.jpg",
    "Recycling",
    "Densely packed metal scrap cubes prepared for recycling"
  ),
  stock(
    "gal-grain",
    "/images/agriculture/grain-spice-market.jpg",
    "Products",
    "Grains and spices in open sacks at a wholesale market"
  ),
  stock(
    "gal-port",
    "/images/trade/container-port.jpg",
    "Trade",
    "Container port with cargo cranes and ships under a clear sky"
  ),
  stock(
    "gal-bales",
    "/images/agriculture/hay-bales.jpg",
    "Agriculture",
    "Golden hay bales across a harvested field in summer"
  ),
  stock(
    "gal-bottles",
    "/images/recycling/plastic-bottles.jpg",
    "Recycling",
    "Crushed plastic bottles collected for recycling"
  ),
  stock(
    "gal-containers",
    "/images/trade/stacked-containers.jpg",
    "Trade",
    "Intermodal shipping containers stacked at an industrial port"
  ),
  stock(
    "gal-warehouse",
    "/images/trade/warehouse.jpg",
    "Business",
    "Workers walking along an aisle inside a logistics warehouse"
  ),
  stock(
    "gal-harvester",
    "/images/agriculture/harvester.jpg",
    "Agriculture",
    "Combine harvester working through a golden wheat field"
  ),
  stock(
    "gal-stacks",
    "/images/recycling/recyclable-stacks.jpg",
    "Recycling",
    "Aerial view of organised recyclable material stacks"
  ),
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export default galleryItems;
