import ProductCard from "./ProductCard";
import powderMain from "../assets/images/moringa-powder-main.webp";
import powderBowl from "../assets/images/moringa-powder-bowl.webp";
import moringaLeaves from "../assets/images/moringa-leaves.webp";

const IMAGES = [
  {
    src: powderMain,
    alt: "Natural green moringa powder presented in a bowl",
    width: 1400,
    height: 1050,
  },
  {
    src: powderBowl,
    alt: "Moringa powder in a serving bowl, shown as a botanical ingredient",
    width: 1400,
    height: 933,
  },
  {
    src: moringaLeaves,
    alt: "Fresh moringa leaves arranged on a light surface",
    width: 1400,
    height: 934,
  },
];

export default function MoringaProducts({ onInquire }) {
  return (
    <ProductCard
      id="moringa"
      index="01"
      theme="moringa"
      eyebrow="Agriculture · Natural ingredients"
      title="Moringa Powder"
      description="Explore our Moringa Powder portfolio, a natural plant-based product suitable for businesses, distributors, retailers, and customers interested in botanical ingredients."
      highlights={[
        "Moringa Powder",
        "Natural green powder appearance",
        "Bulk and retail inquiry options",
        "Packaging requirements according to buyer needs",
      ]}
      images={IMAGES}
      ctaLabel="Enquire About Moringa Powder"
      product="Moringa Powder"
      note="Packaging and order requirements can be discussed with our team."
      badge="Plant-based"
      onInquire={onInquire}
    />
  );
}
