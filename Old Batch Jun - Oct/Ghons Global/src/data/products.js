const img = (file) => `/images/products/${file}`;

export const products = [
  {
    id: 1,
    slug: "kundan-bridal-necklace-set",
    category: "imitation-jewellery",
    name: "Kundan Bridal Necklace Set",
    description:
      "Royal kundan bridal necklace set with traditional detailing, made for festive and wedding wear.",
    image: img("Kundan Bridal Necklace set.jpeg"),
    gallery: [
      img("Kundan Bridal Necklace set.jpeg"),
      img("Kundan Bridal Necklace Set (2).jpeg"),
    ],
    tag: "Best Seller",
  },
  {
    id: 2,
    slug: "kundan-necklace-set",
    category: "imitation-jewellery",
    name: "Kundan Necklace Set",
    description:
      "Classic kundan necklace set with matching finish, ideal for boutiques and resellers.",
    image: img("Kundan Necklace Set.jpg"),
    gallery: [img("Kundan Necklace Set.jpg")],
    tag: null,
  },
  {
    id: 3,
    slug: "ad-tear-drop-necklace-set",
    category: "imitation-jewellery",
    name: "AD Tear Drop Necklace Set",
    description:
      "American diamond tear drop necklace set with matching earrings and pendant.",
    image: img("AD Tear drop Necklace Set  img 1.jpeg"),
    gallery: [
      img("AD Tear drop Necklace Set  img 1.jpeg"),
      img("AD Tear drop Necklace Set img 2.jpeg"),
      img("AD Tear drop Necklace Set_img_3.jpeg"),
      img("AD Tear drop Necklace Set_earings .jpeg"),
      img("AD Tear drop Necklace Set_pendant.jpeg"),
    ],
    tag: "New",
  },
  {
    id: 4,
    slug: "american-diamond-necklace-with-earrings",
    category: "imitation-jewellery",
    name: "American Diamond Necklace with Earrings",
    description:
      "Sparkling American diamond necklace paired with matching earrings for an elegant look.",
    image: img("American Diamond Necklace with Earrings.jpeg"),
    gallery: [
      img("American Diamond Necklace with Earrings.jpeg"),
      img("American Diamond Necklace with Earrings (2).jpeg"),
    ],
    tag: "Trending",
  },
  {
    id: 5,
    slug: "american-diamond-silver-plated-necklace-set",
    category: "imitation-jewellery",
    name: "American Diamond Silver Plated Necklace Set",
    description:
      "Silver plated American diamond necklace set, lightweight and export-grade.",
    image: img("American Diamond Silver plated Necklace Set 2.jpeg"),
    gallery: [
      img("American Diamond Silver plated Necklace Set 2.jpeg"),
      img("American Diamond Silver plated Necklace Set_with earring.jpeg"),
    ],
    tag: null,
  },
  {
    id: 6,
    slug: "ad-silver-plated-necklace-set-with-pendant",
    category: "imitation-jewellery",
    name: "AD Silver Plated Necklace Set with Pendant",
    description:
      "American diamond silver plated necklace set featuring a changeable pendant.",
    image: img("AD Silver plated Necklace set with changeable Pendent.jpg"),
    gallery: [img("AD Silver plated Necklace set with changeable Pendent.jpg")],
    tag: null,
  },
  {
    id: 7,
    slug: "choker-set-with-mangtika",
    category: "imitation-jewellery",
    name: "Choker Set with Mangtika",
    description:
      "Statement choker paired with a matching mangtika for festive and bridal looks.",
    image: img("Choker set with Mangtika.jpg"),
    gallery: [
      img("Choker set with Mangtika.jpg"),
      img("Choker Set with Mangtika 2.jpg"),
      img("Choker Necklace Set with Mangtika.jpeg"),
    ],
    tag: "Hot",
  },
  {
    id: 8,
    slug: "pink-kundan-choker-set",
    category: "imitation-jewellery",
    name: "Pink Kundan Choker Set",
    description:
      "Delicate pink kundan choker set with a soft, feminine finish.",
    image: img("Pink Kundan Choker set.jpg"),
    gallery: [img("Pink Kundan Choker set.jpg")],
    tag: null,
  },
  {
    id: 9,
    slug: "long-necklace-set-with-earrings",
    category: "imitation-jewellery",
    name: "Long Necklace Set with Earrings",
    description:
      "Graceful long necklace set with matching earrings for an elegant statement.",
    image: img("Long Necklace Set with Earrings.jpg"),
    gallery: [img("Long Necklace Set with Earrings.jpg")],
    tag: null,
  },
  {
    id: 10,
    slug: "necklace-set-with-earrings",
    category: "imitation-jewellery",
    name: "Necklace Set with Earrings",
    description:
      "Everyday necklace set with matching earrings, perfect for retail shelves.",
    image: img("Necklace Set with Earrings.jpg"),
    gallery: [img("Necklace Set with Earrings.jpg")],
    tag: null,
  },
  {
    id: 11,
    slug: "necklace-with-earrings",
    category: "imitation-jewellery",
    name: "Necklace with Earrings",
    description:
      "Classic necklace with matching earrings, a versatile bestseller.",
    image: img("Necklace with earrings.jpg"),
    gallery: [img("Necklace with earrings.jpg")],
    tag: null,
  },
  {
    id: 12,
    slug: "designer-jewellery-set",
    category: "imitation-jewellery",
    name: "Designer Jewellery Set",
    description:
      "Designer imitation jewellery set, ideal for boutique and reseller orders.",
    image: img("prod2.jpeg"),
    gallery: [img("prod2.jpeg")],
    tag: "Bulk Pick",
  },
];

export const getProductsByCategory = (categorySlug) =>
  products.filter((p) => p.category === categorySlug);

export const getFeaturedProducts = (limit = 6) => products.slice(0, limit);
