// ==========================================================================
// ARTICLE CONTENT
// --------------------------------------------------------------------------
// Demo articles for the six topics listed on the Articles page. Each entry
// powers the topic card and the matching article detail route:
//   #/articles/<slug>
// Replace or extend this list when final editorial content is supplied.
// ==========================================================================

export const ARTICLES = [
  {
    slug: "indian-agro-export-market",
    title: "Indian Agro Export Market",
    category: "Market Overview",
    excerpt: "How Indian fresh produce moves through global supply chains.",
    readTime: "4 min read",
    intro:
      "India's agro-export sector connects a wide network of farms, packhouses and ports with buyers across the Middle East, Europe, Southeast Asia and North America. Understanding how that chain works helps buyers plan quality, timing and cost with confidence.",
    sections: [
      {
        heading: "A diverse, year-round supply base",
        paragraphs: [
          "India's climate ranges from tropical to temperate, allowing fresh fruits, vegetables and spices to be grown across different states and harvest windows. That diversity gives buyers a broad product range and, in many categories, supply through more than one season.",
          "For exporters, the challenge is not only volume. It is matching the right variety, grade and maturity to each destination market, then keeping that standard consistent from one shipment to the next.",
        ],
      },
      {
        heading: "From farm to port",
        paragraphs: [
          "A typical export programme follows a sequence that starts well before the container is booked.",
        ],
        bullets: [
          "Farm selection and pre-harvest checks",
          "Harvesting at the agreed maturity",
          "Grading, cleaning and hygienic packing",
          "Cold-chain movement to the port",
          "Inspection, documentation and container loading",
        ],
      },
      {
        heading: "What buyers look for",
        paragraphs: [
          "Consistency, food safety and clear communication matter as much as price. Buyers want a supplier who can confirm grade, packaging and schedule before dispatch, and who raises a problem before it reaches the port.",
          "Long-term relationships are built on repeatable quality, not a single successful shipment.",
        ],
      },
    ],
  },
  {
    slug: "fruits-and-vegetables",
    title: "Fruits & Vegetables",
    category: "Fresh Produce",
    excerpt:
      "Sourcing, grading and handling notes for bananas, pomegranates, mangoes, grapes and vegetables.",
    readTime: "5 min read",
    intro:
      "Fresh fruits and vegetables are among the most demanding products to export. Quality is decided long before the container is loaded — at the farm, during harvest and in the first hours of cooling.",
    sections: [
      {
        heading: "Sourcing at the right maturity",
        paragraphs: [
          "Every product has its own harvest window. Bananas are cut mature green, mangoes are picked once they have filled out, and grapes are selected for bunch shape and sugar levels. Picking too early affects flavour; picking too late shortens shelf life.",
          "Our sourcing teams work with growers on the maturity and grade required for each destination, because the same variety can need a different specification for a short sea voyage and a long one.",
        ],
      },
      {
        heading: "Grading and packing",
        paragraphs: [
          "After harvest, produce is sorted for size, colour, shape and defects. Grading is not cosmetic: it protects the buyer from inconsistent arrival quality and helps the packhouse build a uniform pallet.",
        ],
        bullets: [
          "Size and count per carton",
          "Colour and maturity consistency",
          "Removal of damaged or diseased fruit",
          "Correct liner, cushioning and ventilation",
        ],
      },
      {
        heading: "The cold chain",
        paragraphs: [
          "Temperature control from the packhouse to the container is critical. Pre-cooling removes field heat, and a stable set point prevents condensation, chilling injury and premature ripening during transit.",
          "We confirm the cold-chain set point with the buyer and carrier before dispatch so that handling at the destination matches the conditions maintained in transit.",
        ],
      },
    ],
  },
  {
    slug: "spices",
    title: "Spices",
    category: "Spices",
    excerpt: "Origin, grades and export considerations for Indian spices.",
    readTime: "4 min read",
    intro:
      "India is one of the world's most important spice origins. Quality is judged on far more than appearance — aroma, colour, moisture and cleanliness all shape the value of a consignment.",
    sections: [
      {
        heading: "Origin and variety",
        paragraphs: [
          "Spices are regional products. Cardamom, pepper, turmeric, chilli and cinnamon each have growing areas and varieties with distinct characteristics. Matching the right origin to the buyer's application is the first step in a good specification.",
          "We share the expected grade and typical parameters before shipment so buyers know what the lot will deliver in their processing line.",
        ],
      },
      {
        heading: "Quality parameters",
        paragraphs: [
          "A spice specification usually combines visual, physical and laboratory checks.",
        ],
        bullets: [
          "Moisture content and water activity",
          "Colour, aroma and flavour profile",
          "Foreign matter and cleanliness",
          "Particle size or whole-spice count",
          "Pesticide residue and microbiological limits",
        ],
      },
      {
        heading: "Packing and documentation",
        paragraphs: [
          "Spices are sensitive to moisture, light and odour transfer. Food-grade liners, sealed bags or cartons and clean storage conditions protect the product before loading.",
          "Export documentation should match the agreed specification, lot number and destination requirements. Traceability from the processing batch to the consignment makes inspection and clearance smoother.",
        ],
      },
    ],
  },
  {
    slug: "dry-fruits",
    title: "Dry Fruits",
    category: "Imported Dry Fruits",
    excerpt: "Imported dry fruits, processing and PAN India distribution.",
    readTime: "4 min read",
    intro:
      "Dry fruits travel long distances before they reach the Indian market. Careful sourcing, processing and storage protect the flavour, texture and food-safety standard buyers expect.",
    sections: [
      {
        heading: "Sourcing imported dry fruits",
        paragraphs: [
          "Almonds, cashews, pistachios, walnuts, figs, dates and saffron are sourced from established growing regions and inspected on arrival. Origin, crop year, size and grade are confirmed against the purchase specification.",
          "A consistent supply plan matters as much as the product itself, especially when a buyer needs regular volumes across the year.",
        ],
      },
      {
        heading: "Processing and food safety",
        paragraphs: [
          "Processing covers cleaning, sorting, grading and, where required, packing in a controlled environment. The aim is to remove defects and foreign matter without damaging the product.",
        ],
        bullets: [
          "Cleaning and foreign-matter removal",
          "Size and grade sorting",
          "Moisture and storage checks",
          "Hygienic packing and sealed liners",
          "Batch traceability",
        ],
      },
      {
        heading: "PAN India distribution",
        paragraphs: [
          "Imported dry fruits are processed in our facilities and supplied across India as well as exported to selected markets. Stock rotation, dry storage and protected transport keep the product in condition between the warehouse and the buyer.",
          "For repeat programmes, we agree pack sizes, labelling and delivery schedules so that replenishment fits the buyer's own sales cycle.",
        ],
      },
    ],
  },
  {
    slug: "export-packaging",
    title: "Export Packaging",
    category: "Packaging",
    excerpt: "Cartons, mesh bags, jute bags and private label options.",
    readTime: "4 min read",
    intro:
      "Packaging has to do two jobs at once: protect the product through a long journey and present it correctly in the destination market. The right format balances strength, ventilation, cost and branding.",
    sections: [
      {
        heading: "Choosing the right format",
        paragraphs: [
          "Fresh produce, spices and dry fruits each need different protection. Ventilated cartons suit fresh fruit, mesh bags allow airflow for vegetables, and jute or multi-layer bags work for many spices and grains.",
          "We select the pack format around the product, transit time, handling method and the buyer's own unpacking and display requirements.",
        ],
        bullets: [
          "Carton strength and ply",
          "Ventilation and liner requirements",
          "Food-grade contact materials",
          "Pallet pattern and container utilisation",
        ],
      },
      {
        heading: "Branding and private label",
        paragraphs: [
          "Buyers increasingly want their own brand, language and regulatory information on the pack. We support private-label printing, brand stickers and market-specific labelling.",
          "Artwork is checked before production so that weights, origin, storage instructions and batch details are correct for the destination.",
        ],
      },
      {
        heading: "Protecting the product in transit",
        paragraphs: [
          "A strong carton is only part of the answer. Cushioning, correct stacking, humidity control and container condition all affect arrival quality. Packaging trials and pre-shipment checks help catch problems before the container sails.",
        ],
      },
    ],
  },
  {
    slug: "quality-and-food-safety",
    title: "Quality & Food Safety",
    category: "Quality Assurance",
    excerpt:
      "Inspection, grading and international food safety expectations.",
    readTime: "5 min read",
    intro:
      "Food safety is a shared responsibility that runs from the farm to the container. A documented, repeatable process protects consumers, satisfies destination regulators and protects the buyer's brand.",
    sections: [
      {
        heading: "Controls start at the farm",
        paragraphs: [
          "Good exports begin with good raw material. Farm selection, water and soil awareness, pest monitoring and harvest hygiene reduce risk before the product reaches the packhouse.",
          "Growers are briefed on the agreed maturity, handling and delivery schedule so that the packhouse receives a consistent input.",
        ],
      },
      {
        heading: "Packhouse checks and testing",
        paragraphs: [
          "At the packhouse, product is inspected for grade, defects, cleanliness and temperature. Where the destination requires it, samples are sent for laboratory testing.",
        ],
        bullets: [
          "Incoming raw-material inspection",
          "Sorting, grading and foreign-matter control",
          "Hygiene and worker-practice checks",
          "Temperature and cold-chain records",
          "Pesticide residue and microbiological testing",
        ],
      },
      {
        heading: "Documentation and destination requirements",
        paragraphs: [
          "Each market has its own import rules. Phytosanitary certificates, fumigation records, health certificates and lab reports may all be required, and the details must match the consignment.",
          "We prepare documentation alongside the shipment and keep batch records so that any question can be traced back to the source. That discipline is what turns a one-off shipment into a dependable supply relationship.",
        ],
      },
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(
  ARTICLES.map((article) => [article.slug, article])
);

export function findArticle(slug) {
  return ARTICLE_BY_SLUG[slug];
}
