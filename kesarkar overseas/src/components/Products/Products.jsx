import { FaEnvelope, FaDownload, FaLeaf } from "react-icons/fa6";
import Reveal from "../Reveal";
import { selectProduct, scrollToId } from "../../utils/config";
import cuminImg from "../../assets/images/cumin-powder.jpeg";
import onionImg from "../../assets/images/onion-powder.jpeg";
import garlicImg from "../../assets/images/garlic-powder.jpeg";
import tomatoImg from "../../assets/images/tomato.jpeg";
import beetrootImg from "../../assets/images/beetroot.jpeg";
import carrotImg from "../../assets/images/carrot.jpeg";
import gingerImg from "../../assets/images/ginger.jpeg";
import rawMangoImg from "../../assets/images/raw mango.jpeg";
import bananaImg from "../../assets/images/banana.jpeg";
import pineappleImg from "../../assets/images/pineapple.jpeg";
import strawberryImg from "../../assets/images/strawberry.jpeg";
import lemonImg from "../../assets/images/lemon.jpeg";
import orangeImg from "../../assets/images/orange.jpeg";
import amlaImg from "../../assets/images/amla.jpeg";

const vegetablePowders = [
  {
    name: "Onion Powder",
    desc: "Finely ground dehydrated onion with natural aroma — ideal for seasoning and food manufacturing.",
    img: onionImg,
  },
  {
    name: "Garlic Powder",
    desc: "Rich, pungent garlic powder made from premium dehydrated garlic bulbs.",
    img: garlicImg,
  },
  {
    name: "Cumin Powder",
    desc: "Warm, earthy cumin powder from premium Indian cumin seeds for authentic flavour.",
    img: cuminImg,
  },
  {
    name: "Tomato Powder",
    desc: "Deep red, tangy tomato powder with excellent colour retention for sauces and soups.",
    img: tomatoImg,
  },
  {
    name: "Beetroot Powder",
    desc: "Vibrant natural colourant and nutritional ingredient from premium beetroot.",
    img: beetrootImg,
  },
 {
    name: "Carrot Powder",
    desc: "Sweet, naturally golden carrot powder rich in beta-carotene.",
    img: carrotImg,
  },
  {
    name: "Ginger Powder",
    desc: "Aromatic, spicy ginger powder for culinary and beverage applications.",
    img: gingerImg,
  },
];

const fruitPowders = [
  {
    name: "Raw Mango Powder (Amchur)",
    desc: "Tart, tangy raw mango powder prized in Indian cooking and seasoning blends.",
    img: rawMangoImg,
  },
  {
    name: "Banana Powder",
    desc: "Mild, creamy banana powder for baby food, baking, and beverages.",
    img: bananaImg,
  },
  {
    name: "Pineapple Powder",
    desc: "Tropical, tangy-sweet pineapple powder with intense fruit flavour.",
    img: pineappleImg,
  },
  {
    name: "Strawberry Powder",
    desc: "Fresh strawberry flavour with natural pink colour for desserts and dairy.",
    img: strawberryImg,
  },
  {
    name: "Lemon Powder",
    desc: "Zesty citrus powder with bright acidic notes for flavouring.",
    img: lemonImg,
  },
  {
    name: "Orange Powder",
    desc: "Sunny citrus powder delivering natural orange taste and colour.",
    img: orangeImg,
  },
  {
    name: "Amla Powder",
    desc: "Nutrient-dense Indian gooseberry powder rich in vitamin C.",
    img: amlaImg,
  },
];

const PlaceholderImg = ({ name }) => {
  const initial = name.charAt(0);
  const hue = name.length % 2 === 0 ? "#6fa34a" : "#d9a441";
  return (
    <div className="product-placeholder" role="img" aria-label={`${name} placeholder image`}>
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`grad-${name.replace(/\s+/g, "-")}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d6b35" />
            <stop offset="100%" stopColor={hue} />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#grad-${name.replace(/\s+/g, "-")})`} />
        <circle cx="200" cy="200" r="110" fill="rgba(255,255,255,0.14)" />
        <text x="200" y="218" textAnchor="middle" fontSize="130" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif">
          {initial}
        </text>
      </svg>
      <span className="product-placeholder-tag">Photo coming soon</span>
    </div>
  );
};

const ProductCard = ({ product, index }) => (
  <Reveal delay={(index % 4) * 90} className="product-card hover-lift">
    <div className="product-media">
      {product.img ? (
        <img src={product.img} alt={`${product.name} by Kesarkar Overseas`} loading="lazy" />
      ) : (
        <PlaceholderImg name={product.name} />
      )}
      <span className="product-badge">
        <FaLeaf /> Veg
      </span>
    </div>
    <div className="product-body">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.desc}</p>
      <div className="product-actions">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => selectProduct(product.name)}
        >
          <FaEnvelope /> Enquire Now
        </button>
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => scrollToId("inquiry")}
        >
          <FaDownload /> Catalogue
        </button>
      </div>
    </div>
  </Reveal>
);

const ProductGroup = ({ label, blurb, items }) => (
  <div className="product-group">
    <Reveal className="product-group-head">
      <h3 className="product-group-title">{label}</h3>
      <p className="product-group-blurb">{blurb}</p>
    </Reveal>
    <div className="product-grid">
      {items.map((product, i) => (
        <ProductCard key={product.name} product={product} index={i} />
      ))}
    </div>
  </div>
);

const Products = () => (
  <section className="section products" id="products">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Our Products</span>
        <h2 className="section-title">
          Premium Dehydrated <span className="accent">Fruit &amp; Vegetable Powders</span>
        </h2>
        <p className="section-subtitle">
          A diverse catalogue of naturally processed ingredients sourced from trusted
          Indian manufacturers and supplied in bulk to global markets.
        </p>
      </Reveal>

      <ProductGroup
        label="Dehydrated Vegetable Powders"
        blurb="Essential culinary ingredients for seasoning blends, soups, sauces, and food processing."
        items={vegetablePowders}
      />
      <ProductGroup
        label="Dehydrated Fruit Powders"
        blurb="Natural fruit flavour and colour for beverages, bakery, dairy, and health foods."
        items={fruitPowders}
      />
    </div>
  </section>
);

export default Products;
