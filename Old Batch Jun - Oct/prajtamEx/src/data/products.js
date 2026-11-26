/**
 * Product catalogue.
 *
 * The first two entries are based on the product photographs supplied in
 * /public/images (coco pith and fertilizer). The other two are intentionally
 * broad, editable categories until verified product names and descriptions are
 * supplied by the business.
 *
 * To add a product:
 *
 * {
 *   id: "unique-product-id",
 *   name: "Product Name",
 *   category: "Agriculture" | "Recycling" | "Other Products",
 *   description: "Short product description",
 *   image: "/images/products/product.jpg",
 *   imageAlt: "Descriptive image alt text",
 *   specifications: ["Specification label: value"],
 *   packaging: ["Packaging detail"],
 *   available: true
 * }
 */

export const products = [
  {
    id: "product-coco-pith",
    name: "Coco Pith",
    category: "Agriculture",
    description:
      "Agriculture product category supplied by PrajtamEx. Product grades, packaging and supply details can be shared on request.",
    image: "/images/agriculture/coco-pith-1.jpg",
    imageAlt: "Coco pith product image supplied by PrajtamEx",
    specifications: [],
    packaging: [],
  },
  {
    id: "product-fertilizer",
    name: "Fertilizer",
    category: "Agriculture",
    description:
      "Agriculture input category. Specifications, packaging and order requirements can be discussed directly with our team.",
    image: "/images/fertilizer/fertilizer-1.jpg",
    imageAlt: "Fertilizer product image supplied by PrajtamEx",
    specifications: [],
    packaging: [],
  },
  {
    id: "product-agriculture",
    name: "Agriculture Products",
    category: "Agriculture",
    description:
      "A flexible category for agriculture-related products. Share your requirement and we will respond with relevant options.",
    image: "/images/agriculture/spice-bazaar.jpg",
    imageAlt: "Spices and dry goods displayed at an agriculture market",
    specifications: [],
    packaging: [],
  },
  {
    id: "product-recycling",
    name: "Recycling Industry Products",
    category: "Recycling",
    description:
      "A category for recycling-sector products and opportunities. Contact us to discuss your material or product requirement.",
    image: "/images/recycling/recyclable-stacks.jpg",
    imageAlt: "Sorted recyclable materials stacked at a recycling facility",
    specifications: [],
    packaging: [],
  },
];

export const productCategories = ["All", "Agriculture", "Recycling", "Other Products"];

export default products;
