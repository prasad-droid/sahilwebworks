/**
 * Business gallery.
 *
 * Every image is local to /public/images. Photographs supplied by the business
 * are flagged with `stock: false`; supporting industry photographs are flagged
 * with `stock: true` and are never presented as PrajtamEx products or facilities.
 */

export const galleryItems = [
  {
    id: "gallery-coco-pith",
    src: "/images/agriculture/coco-pith-4.jpg",
    category: "Products",
    alt: "Coco pith product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "gallery-fertilizer-2",
    src: "/images/fertilizer/fertilizer-2.jpg",
    category: "Products",
    alt: "Fertilizer product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "gallery-fields",
    src: "/images/agriculture/fields-aerial.jpg",
    category: "Agriculture",
    alt: "Aerial view of green agricultural fields — representative industry imagery",
    stock: true,
  },
  {
    id: "gallery-fertilizer-3",
    src: "/images/fertilizer/fertilizer-3.jpg",
    category: "Products",
    alt: "Fertilizer product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "gallery-grain",
    src: "/images/agriculture/grain-sacks.jpg",
    category: "Agriculture",
    alt: "Sacks of agricultural produce at a wholesale market — representative industry imagery",
    stock: true,
  },
  {
    id: "gallery-fertilizer-4",
    src: "/images/fertilizer/fertilizer-4.jpg",
    category: "Products",
    alt: "Fertilizer product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "gallery-bales",
    src: "/images/agriculture/hay-bales.jpg",
    category: "Agriculture",
    alt: "Golden hay bales across a harvested field — representative industry imagery",
    stock: true,
  },
  {
    id: "gallery-fertilizer-5",
    src: "/images/fertilizer/fertilizer-5.jpg",
    category: "Products",
    alt: "Fertilizer product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "gallery-fertilizer-process",
    src: "/images/fertilizer/fertilizer-process.jpg",
    category: "Products",
    alt: "Fertilizer processing imagery supplied by PrajtamEx",
    stock: false,
  },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export default galleryItems;
