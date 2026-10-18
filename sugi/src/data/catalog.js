// ==========================================================================
// PRODUCT CATALOGUE
// --------------------------------------------------------------------------
// Product groups / names come from the client brief (Homepage.docx and
// Products.docx). Photos supplied in "Site Changes/Images/Import Products"
// are loaded automatically from src/assets/products/<slug>/.
//
// Products with no supplied photo render a branded placeholder until the
// client delivers images — see <ProductGallery />.
// ==========================================================================

const IMAGES = import.meta.glob("../assets/products/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

export function imagesFor(slug) {
  const prefix = `../assets/products/${slug}/`;
  return Object.keys(IMAGES)
    .filter((key) => key.startsWith(prefix))
    .sort()
    .map((key) => IMAGES[key]);
}

// --------------------------------------------------------------------------
// Groups
// --------------------------------------------------------------------------

export const INDIAN_GROUPS = [
  {
    id: "fresh-fruits",
    title: "Fresh Fruits",
    items: ["bananas", "pomegranates", "mangoes", "grapes"],
  },
  {
    id: "fresh-vegetables",
    title: "Fresh Vegetables",
    items: ["onions", "ginger", "green-chilli", "tomatoes", "okra"],
  },
  {
    id: "indian-spices",
    title: "Indian Spices",
    items: [
      "green-cardamom",
      "cloves",
      "cinnamon",
      "turmeric",
      "black-pepper",
      "red-chilli",
    ],
  },
  {
    id: "other-products",
    title: "Other Products",
    items: ["sweet-corn", "maize", "semi-husked-coconut", "raisins"],
  },
];

export const IMPORTED_GROUP = {
  id: "imported-dry-fruits",
  title: "Imported Dry Fruits",
  items: [
    "cashew-in-shell",
    "cashew-kernels",
    "almonds-in-shell",
    "almonds-kernels",
    "pistachios-in-shell",
    "pistachios-kernels",
    "walnuts-in-shell",
    "walnuts-kernels",
    "dried-figs",
    "dates-soft",
    "dry-dates",
    "saffron",
  ],
};

// Display names exactly as written in the client brief.
const NAMES = {
  bananas: "Bananas",
  pomegranates: "Pomegranates",
  mangoes: "Mangoes",
  grapes: "Grapes",
  onions: "Onions",
  ginger: "Ginger",
  "green-chilli": "Green Chilli",
  tomatoes: "Tomatoes",
  okra: "Okra",
  "green-cardamom": "Green Cardamom",
  cloves: "Cloves",
  cinnamon: "Cinnamon",
  turmeric: "Turmeric",
  "black-pepper": "Black Pepper",
  "red-chilli": "Red Chilli",
  "sweet-corn": "Sweet Corn",
  maize: "Maize",
  "semi-husked-coconut": "Semi Husked Coconut",
  raisins: "Raisins",
  "cashew-in-shell": "Cashew (In Shell)",
  "cashew-kernels": "Cashew (Kernels - Whole)",
  "almonds-in-shell": "Almonds (In Shell)",
  "almonds-kernels": "Almonds (Kernels)",
  "pistachios-in-shell": "Pistachios (In Shell)",
  "pistachios-kernels": "Pistachios (Kernels)",
  "walnuts-in-shell": "Walnuts (In Shell)",
  "walnuts-kernels": "Walnuts (Kernels)",
  "dried-figs": "Dried Figs",
  "dates-soft": "Dates (Soft / Wet)",
  "dry-dates": "Dry Dates (Kharik / Chuara)",
  saffron: "Saffron",
};

function build(slug, origin, groupTitle, groupId) {
  return {
    slug,
    name: NAMES[slug],
    origin,
    groupTitle,
    groupId,
    images: imagesFor(slug),
  };
}

const indian = INDIAN_GROUPS.flatMap((group) =>
  group.items.map((slug) => build(slug, "Indian Origin", group.title, group.id))
);

const imported = IMPORTED_GROUP.items.map((slug) =>
  build(slug, "Imported & Processed in India", IMPORTED_GROUP.title, IMPORTED_GROUP.id)
);

export const INDIAN_PRODUCTS = indian;
export const IMPORTED_PRODUCTS = imported;

export const PRODUCTS = [...indian, ...imported];

export const PRODUCT_BY_SLUG = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p])
);

export function findProduct(slug) {
  return PRODUCT_BY_SLUG[slug];
}
