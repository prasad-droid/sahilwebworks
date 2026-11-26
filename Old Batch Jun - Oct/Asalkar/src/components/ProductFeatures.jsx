import {
  LeafIcon,
  DropletIcon,
  HeartIcon,
  LayersIcon,
  TagIcon,
  BoxIcon,
} from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/features.css";

const FEATURES = [
  {
    icon: <LeafIcon />,
    title: "100% Cotton Material",
    desc: "Made from high-quality cotton for superior softness and durability.",
  },
  {
    icon: <DropletIcon />,
    title: "High Absorbency",
    desc: "Excellent moisture absorption and quick drying performance.",
  },
  {
    icon: <HeartIcon />,
    title: "Soft & Comfortable",
    desc: "Skin-friendly fabric suitable for everyday use.",
  },
  {
    icon: <LayersIcon />,
    title: "Various GSM Options",
    desc: "Available in different GSM ranges as per customer requirements.",
  },
  {
    icon: <TagIcon />,
    title: "Custom Branding",
    desc: "Private labeling and custom branding available.",
  },
  {
    icon: <BoxIcon />,
    title: "Export Standard Packaging",
    desc: "International packaging standards for safe transportation.",
  },
];

const ProductFeatures = () => {
  const ref = useReveal();

  return (
    <section className="section features">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Our Towels</span>
          <h2 className="section-title">
            Premium <span>Product Features</span>
          </h2>
          <p className="section-subtitle">
            Every towel we export is crafted with attention to quality, comfort, and performance.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, i) => (
            <div
              className="feature-card reveal"
              key={feature.title}
              style={{ "--delay": `${(i % 3) * 0.12}s` }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
