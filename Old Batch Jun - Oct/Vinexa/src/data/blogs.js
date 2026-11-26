// Blog posts for VINEXA GLOBAL ENTERPRISES.
// Reuses existing product imagery from src/data/productImages.js.

import { productImages as img } from "./productImages";

export const posts = [
  {
    id: "basmati-vs-non-basmati-rice",
    title: "Basmati vs Non-Basmati Rice: A Buyer's Guide",
    excerpt:
      "Understand the key differences between basmati and non-basmati rice varieties so you can pick the right grain and grade for your market.",
    date: "2026-05-14",
    tag: "Rice & Cereals",
    readTime: "4 min read",
    image: img.rice1121,
    content: [
      {
        heading: "Two families, very different markets",
        text: "Basmati rice is prized for its extra-long grains, distinctive aroma and exceptional elongation when cooked. Non-basmati varieties such as Sona Masoori, IR64 and Chinnor offer dependable quality, shorter cooking times and greater value for volume-focused buyers. Choosing between them is mostly about your target market and end-use.",
      },
      {
        heading: "Grades and specifications matter",
        text: "Buyers typically quote specifications like average grain length, foreign matter, moisture content and broken percentage. At VINEXA we line-check each lot and pack to the grade you specify, whether you need premium 1121 basmati or foodservice-grade IR64.",
      },
      {
        heading: "Sourcing with confidence",
        text: "From trusted milling clusters in India with FSSAI-compliant processing, we consolidate your order and ship in export-grade packaging. Share your specification and destination, and we will arrange samples before the final quote.",
      },
    ],
  },
  {
    id: "why-indian-pulses-in-global-demand",
    title: "Why Indian Pulses Are in High Demand Abroad",
    excerpt:
      "Toor, moong, chana, urad and masoor dal are staples in global kitchens — and India's processing advantage keeps buyers coming back.",
    date: "2026-06-02",
    tag: "Cereals & Pulses",
    readTime: "3 min read",
    image: img.pulsesToor,
    content: [
      {
        heading: "A protein-rich pantry staple",
        text: "Pulses are a primary source of plant protein and dietary fibre, making them a core commodity for food processors, distributors and retail chains across Asia, the Middle East, Europe and Africa.",
      },
      {
        heading: "India's processing edge",
        text: "From clean, evenly split dals to carefully sorted whole pulses, Indian mills produce consistent grades that meet international quality standards. Investing in sorting, grading and moisture control translates directly into fewer rejections at your end.",
      },
      {
        heading: "Planning your import cycle",
        text: "Pulse prices move with the crop season, so timing and committed supply lines matter. VINEXA works with verified suppliers to lock availability, arrange export documentation and manage shipping to your port of discharge.",
      },
    ],
  },
  {
    id: "sourcing-quality-indian-spices",
    title: "A Guide to Sourcing Quality Indian Spices for Export",
    excerpt:
      "From black pepper to turmeric and chilli powder, learn what to check when building a reliable spice supply chain from India.",
    date: "2026-06-26",
    tag: "Spices",
    readTime: "5 min read",
    image: img.spicesBlackPepper,
    content: [
      {
        heading: "Start with the source region",
        text: "India's spice character comes from its growing regions. Value fresh lots from the right geographies, then check essential-oil content, volatile-oil percentage, colour value and purity to match the quality your customers expect.",
      },
      {
        heading: "Quality checks buyers should ask for",
        text: "Insist on certificates of analysis covering moisture, foreign matter and adulterant screening. Pre-shipment inspection and microbial testing give you confidence before goods leave the port.",
      },
      {
        heading: "A partner who ships what it promises",
        text: "A dependable exporter consolidates small lots, arranges FSSAI and export certifications, and handles logistics end-to-end. VINEXA manages the paperwork so you receive consistent, document-complete shipments every time.",
      },
    ],
  },
];

export const getPost = (id) => posts.find((p) => p.id === id);