import ProductCard from "./ProductCard";
import rugsLivingRoom from "../assets/images/rugs-livingroom.webp";
import carpetsRolled from "../assets/images/carpets-rolled.webp";
import rugDetail from "../assets/images/rug-detail.webp";

const IMAGES = [
  {
    src: rugsLivingRoom,
    alt: "Area rug styled in a contemporary living room interior",
    width: 1400,
    height: 934,
  },
  {
    src: carpetsRolled,
    alt: "Rolled carpets in layered colours and traditional patterns",
    width: 1400,
    height: 2488,
  },
  {
    src: rugDetail,
    alt: "Close detail of a textured rug with a woven pattern",
    width: 1400,
    height: 2100,
  },
];

export default function CarpetsAndRugs({ onInquire }) {
  return (
    <ProductCard
      id="carpets"
      index="02"
      theme="carpets"
      eyebrow="Home décor · Interior furnishing"
      title="Carpets & Rugs"
      description="Discover our carpets and rugs collection, designed for buyers looking for home décor and interior furnishing products. Explore different patterns, textures, colours, and styles according to your requirements."
      highlights={[
        "Carpets",
        "Area Rugs",
        "Different patterns and designs",
        "Multiple colour options",
        "Retail and bulk inquiries",
      ]}
      images={IMAGES}
      ctaLabel="Explore Carpets & Rugs"
      product="Carpets"
      note="Choose Carpets or Rugs in the enquiry form."
      badge="Home décor"
      reverse
      onInquire={onInquire}
    />
  );
}
