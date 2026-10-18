/**
 * Product & category data for Sampurnm Global.
 * ------------------------------------------------------------------
 * Everything below is SAMPLE / PLACEHOLDER content for the initial build.
 * Product images are licensed stock photographs (Unsplash) used as
 * stand-ins and are clearly labelled as samples in the UI. Replace the
 * image URLs and details with verified company assets + information from
 * the forthcoming PDF.
 *
 * TO ADD A PRODUCT: append a new object to the `products` array.
 * Unconfirmed attributes should be left as `null` so the UI hides them
 * instead of displaying invented values.
 */

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const productCategories = [
  {
    id: "mens",
    name: "Men's T-Shirts",
    description:
      "Contemporary men's tees across everyday, casual and premium styles. Exact styles, fabrics and fits to be confirmed.",
    image: img("1503341504253-dff4815485f1"),
  },
  {
    id: "womens",
    name: "Women's T-Shirts",
    description:
      "On-trend women's tees designed for comfort and modern styling. Availability to be confirmed with the company.",
    image: img("1483985988355-763728e1935b"),
  },
  {
    id: "unisex",
    name: "Unisex T-Shirts",
    description:
      "Versatile unisex silhouettes suited to retail and promotional use. Details pending verification.",
    image: img("1576566588028-4147f3842f27"),
  },
  {
    id: "casual",
    name: "Casual T-Shirts",
    description:
      "Relaxed everyday tees built for comfort and repeat wear. Confirm prints, colours and sizing with us.",
    image: img("1523381210434-271e8be1f52b"),
  },
  {
    id: "printed",
    name: "Printed T-Shirts",
    description:
      "Graphic and printed tees for fashion and promotional programmes. Printing methods to be confirmed.",
    image: img("1618354691373-d851c5c3a990"),
  },
  {
    id: "custom",
    name: "Custom T-Shirts",
    description:
      "Made-to-requirement tees for brands, teams and events, subject to confirmed capabilities.",
    image: img("1596755094514-f87e34085b2c"),
  },
  {
    id: "bulk",
    name: "Bulk T-Shirt Supply",
    description:
      "Wholesale quantities for retailers and distributors. Discuss volumes, packing and timelines with us.",
    image: img("1556905055-8f358a7a47b2"),
  },
  {
    id: "export",
    name: "Export Orders",
    description:
      "T-shirt sourcing for international buyers. Share your destination market and requirements for a response.",
    image: img("1494412574643-ff11b0a5c1c3"),
  },
];

export const products = [
  {
    id: "sg-001",
    name: "Classic Crew Neck Tee",
    category: "Men's T-Shirts",
    image: img("1521572163474-6864f9cf17ab"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: "Crew neck",
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-002",
    name: "Premium Cotton Tee",
    category: "Unisex T-Shirts",
    image: img("1503341504253-dff4815485f1"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-003",
    name: "Graphic Print Tee",
    category: "Printed T-Shirts",
    image: img("1618354691373-d851c5c3a990"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-004",
    name: "Relaxed Fit Tee",
    category: "Casual T-Shirts",
    image: img("1583743814966-8936f5b7be1a"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: "Relaxed fit",
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-005",
    name: "Folded Jersey Collection",
    category: "Bulk T-Shirt Supply",
    image: img("1576566588028-4147f3842f27"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-006",
    name: "Studio Sample Tee",
    category: "Custom T-Shirts",
    image: img("1596755094514-f87e34085b2c"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: "To be confirmed",
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-007",
    name: "Everyday Basic Tee",
    category: "Men's T-Shirts",
    image: img("1562157873-818bc0726f68"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
  {
    id: "sg-008",
    name: "Contemporary Fit Tee",
    category: "Women's T-Shirts",
    image: img("1483985988355-763728e1935b"),
    colors: null,
    fabric: null,
    sizeRange: null,
    style: null,
    customization: null,
    moq: null,
    isPlaceholder: true,
  },
];

export const galleryImages = [
  { id: "g1", src: img("1441986300917-64674bd600d8", 1200), alt: "Apparel store display of folded and hanging garments", caption: "Sample stock image" },
  { id: "g2", src: img("1489987707025-afc232f7ea0f", 1200), alt: "Rack of assorted T-shirts and apparel", caption: "Sample stock image" },
  { id: "g3", src: img("1503341504253-dff4815485f1", 1200), alt: "Person wearing a plain contemporary T-shirt", caption: "Sample stock image" },
  { id: "g4", src: img("1576566588028-4147f3842f27", 1200), alt: "Neatly stacked folded T-shirts", caption: "Sample stock image" },
  { id: "g5", src: img("1523381210434-271e8be1f52b", 1200), alt: "Clothing on a hanger in soft neutral tones", caption: "Sample stock image" },
  { id: "g6", src: img("1618354691373-d851c5c3a990", 1200), alt: "T-shirt product close-up", caption: "Sample stock image" },
  { id: "g7", src: img("1490481651871-ab68de25d43d", 1200), alt: "Fashion lifestyle apparel photography", caption: "Sample stock image" },
  { id: "g8", src: img("1445205170230-053b83016050", 1200), alt: "Styled fashion outfit showcasing a fitted tee", caption: "Sample stock image" },
];

export default products;
