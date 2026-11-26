// Product categories. Images are real company photography imported from
// src/assets/images, with premium SVG placeholders where photos are pending.

import riceImg from "../assets/images/Website Images/Basmati & Non Basmati Rice/BASMATI 1121.png";
import spicesImg from "../assets/images/Website Images/SPICES/BLACK PEPPER.png";
import engineeringCatalogImg from "../assets/images/Website Images/Engineering Products/Catalog - Engineering Product.png";
import cattleFeedCatalogImg from "../assets/images/Website Images/Cattle Food/cattle feed pellets.webp";

export const categories = [
  {
    id: "rice-dal",
    slug: "rice-dal",
    name: "Cereals and Pulses",
    title: "Cereals and Pulses",
    description:
      "Premium basmati and non-basmati rice varieties along with quality pulses and dal sourced from trusted Indian suppliers.",
    image: riceImg,
    cta: "Product Details",
  },
  {
    id: "spices",
    slug: "spices",
    name: "Spices",
    title: "Spices",
    description:
      "Authentic Indian spices — whole and ground — sourced directly from growing regions to ensure peak freshness and flavour.",
    image: spicesImg,
    cta: "Product Details",
  },
  {
    id: "cattle-foods",
    slug: "cattle-foods",
    name: "Cattle Foods",
    title: "Cattle Foods",
    description:
      "Quality cattle feed products formulated for livestock nutrition, sourced from verified Indian manufacturers.",
    image: cattleFeedCatalogImg,
    cta: "Request Details",
  },
  {
    id: "engineering-products",
    slug: "engineering-products",
    name: "Engineering Products",
    title: "Engineering Products",
    description:
      "We source industrial and engineering products based on customer specifications.",
    image: engineeringCatalogImg,
    cta: "Discuss Requirement",
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
