import ProductCard from "./ProductCard";
import hairclipsPink from "../assets/images/hairclips-pink.webp";
import hairclipsPebbles from "../assets/images/hairclips-pebbles.webp";
import hairclipCloseup from "../assets/images/hairclip-closeup.webp";

const IMAGES = [
  {
    src: hairclipsPink,
    alt: "Collection of decorative hair clips in a soft pink palette",
    width: 1400,
    height: 2100,
  },
  {
    src: hairclipsPebbles,
    alt: "Assorted claw clips and hair accessories arranged on a neutral surface",
    width: 1400,
    height: 1400,
  },
  {
    src: hairclipCloseup,
    alt: "Close view showing the detail and finish of a fashion hair clip",
    width: 1400,
    height: 2100,
  },
];

export default function HairAccessories({ onInquire }) {
  return (
    <ProductCard
      id="hair-accessories"
      index="03"
      theme="fashion"
      eyebrow="Fashion accessories · Everyday styling"
      title="Hair Clips"
      description="Explore our range of hair clips for retailers, wholesalers, fashion accessory stores, and individual customers. Discover different styles, colours, and designs."
      highlights={[
        "Fashion hair clips",
        "Multiple designs",
        "Different colour options",
        "Wholesale and retail inquiries",
      ]}
      images={IMAGES}
      ctaLabel="Enquire About Hair Clips"
      product="Hair Clips"
      note="Design and colour preferences can be shared in the enquiry form."
      badge="Fashion range"
      onInquire={onInquire}
    />
  );
}
