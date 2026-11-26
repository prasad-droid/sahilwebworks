import ProductCard from "./ProductCard";
import rubberbandsPile from "../assets/images/rubberbands-pile.webp";
import rubberbandsMacro from "../assets/images/rubberbands-macro.webp";
import rubberbandsCraft from "../assets/images/rubberbands-craft.webp";

const IMAGES = [
  {
    src: rubberbandsPile,
    alt: "A pile of colourful hair rubber bands",
    width: 1400,
    height: 1867,
  },
  {
    src: rubberbandsMacro,
    alt: "Macro view of assorted rubber bands in different colours",
    width: 1400,
    height: 934,
  },
  {
    src: rubberbandsCraft,
    alt: "Rubber bands organised for a craft or accessory project",
    width: 1400,
    height: 934,
  },
];

export default function RubberBands({ onInquire }) {
  return (
    <ProductCard
      id="rubber-bands"
      index="04"
      theme="rubber"
      eyebrow="Fashion accessories · Everyday essentials"
      title="Rubber Bands"
      description="Discover our rubber band product range for customers, retailers, distributors, and wholesale buyers. Product requirements and available varieties can be discussed with our team."
      highlights={[
        "Hair rubber bands",
        "Different colours",
        "Different sizes",
        "Wholesale and retail requirements",
      ]}
      images={IMAGES}
      ctaLabel="Enquire About Rubber Bands"
      product="Rubber Bands"
      note="Varieties and sizes can be discussed with our team."
      badge="Everyday range"
      reverse
      onInquire={onInquire}
    />
  );
}
