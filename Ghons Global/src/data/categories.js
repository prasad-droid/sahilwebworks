export const categories = [
  {
    slug: "imitation-jewellery",
    name: "Imitation Jewellery",
    tagline: "Premium Fashion & Bridal Jewellery",
    description:
      "Trendy and premium-quality imitation jewellery designed for retailers, resellers, boutiques, and global buyers. From elegant necklaces to bridal mangtikas and complete jewellery sets, our collections blend fashion-forward design with export-grade quality and competitive wholesale pricing.",
    image: "/images/products/American Diamond Necklace with Earrings.jpeg",
    keywords:
      "Imitation Jewellery Exporter, Fashion Jewellery Supplier, Wholesale Jewellery India, Artificial Jewellery Export, Boutique Jewellery Supplier",
    featured: true,
  },
  {
    slug: "spices",
    name: "Spices",
    tagline: "Aromatic & Authentic Indian Spices",
    description:
      "Fresh, aromatic, and authentically sourced Indian spices packed for domestic and international wholesale supply. Consistent quality, clean processing, and flexible bulk packaging options.",
    image: "/images/products/Kundan Bridal Necklace set.jpeg",
    keywords:
      "Spices Exporter India, Wholesale Spices, Indian Spices Supplier, Bulk Spices Export, Masala Wholesaler",
    featured: false,
  },
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    tagline: "Premium Quality Dry Fruits & Nuts",
    description:
      "Handpicked premium dry fruits and nuts sourced from trusted farms, ideal for retailers, distributors, and gift markets worldwide with flexible packaging and bulk supply.",
    image: "/images/products/Choker set with Mangtika.jpg",
    keywords:
      "Dry Fruits Exporter, Wholesale Dry Fruits, Nuts Supplier India, Dry Fruits Bulk, Cashew Almond Supplier",
    featured: false,
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    tagline: "Elegant Décor for Modern Homes",
    description:
      "Stylish and contemporary home décor products that add elegance to modern living spaces, available for wholesale and bulk supply to lifestyle and gift stores.",
    image: "/images/products/Pink Kundan Choker set.jpg",
    keywords:
      "Home Decor Wholesale, Décor Supplier India, Lifestyle Products Export, Home Accessories Wholesaler",
    featured: false,
  },
  {
    slug: "kitchenware",
    name: "Kitchenware",
    tagline: "Practical & Stylish Kitchen Essentials",
    description:
      "Durable, functional, and beautifully designed kitchenware for everyday living, supplied in bulk to retailers, distributors, and online sellers worldwide.",
    image: "/images/products/AD Silver plated Necklace set with changeable Pendent.jpg",
    keywords:
      "Kitchenware Wholesale, Kitchen Products Supplier India, Cookware Export, Kitchen Accessories Bulk",
    featured: false,
  },
  {
    slug: "lifestyle",
    name: "Lifestyle Products",
    tagline: "Modern Products for Everyday Living",
    description:
      "A curated range of fashion accessories and lifestyle products built for fast-moving retail and e-commerce channels, with reliable bulk supply across markets.",
    image: "/images/products/Long Necklace Set with Earrings.jpg",
    keywords:
      "Lifestyle Products Supplier, Fashion Accessories Wholesale, Gift Products Export, Consumer Goods India",
    featured: false,
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const getFeaturedCategories = () => categories.filter((c) => c.featured);
