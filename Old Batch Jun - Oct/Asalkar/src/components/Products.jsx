import { ShieldIcon, ArrowRightIcon } from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import img1 from "../assets/images/WhatsApp Image 2026-08-10 at 10.09.05 PM.jpeg";
import img2 from "../assets/images/WhatsApp Image 2026-08-10 at 10.09.07 PM.jpeg";
import img3 from "../assets/images/WhatsApp Image 2026-08-22 at 4.47.29 PM.jpeg";
import img4 from "../assets/images/WhatsApp Image 2026-08-22 at 4.47.31 PM.jpeg";
import img5 from "../assets/images/WhatsApp Image 2026-08-22 at 4.47.34 PM (1).jpeg";
import img6 from "../assets/images/WhatsApp Image 2026-08-22 at 4.47.34 PM.jpeg";
import img7 from "../assets/images/WhatsApp Image 2026-08-22 at 4.47.35 PM.jpeg";
import "../styles/products.css";

const PRODUCTS = [
  {
    name: "Bath Towels",
    desc: "Soft, absorbent, and durable towels suitable for residential and commercial use.",
    tags: ["350-650 GSM", "Standard & Jumbo Sizes"],
    image: img1,
    badge: "Best Seller",
  },
  {
    name: "Hand Towels",
    desc: "High-quality hand towels available in various sizes and GSM specifications.",
    tags: ["300-500 GSM", "Multiple Sizes"],
    image: img2,
    badge: "Popular",
  },
  {
    name: "Face Towels",
    desc: "Comfortable and skin-friendly face towels with excellent absorbency.",
    tags: ["280-400 GSM", "Skin Friendly"],
    image: img3,
  },
  {
    name: "Bath Sheets",
    desc: "Extra-large luxury towels offering premium comfort and superior performance.",
    tags: ["500-700 GSM", "Extra Large"],
    image: img4,
    badge: "Luxury",
  },
  {
    name: "Hotel Towels",
    desc: "Designed specifically for hotels, resorts, and hospitality businesses.",
    tags: ["Hospitality Grade", "Bulk Supply"],
    image: img5,
    badge: "Hotel Grade",
  },
  {
    name: "Gym Towels",
    desc: "Lightweight and durable towels suitable for fitness centers and sports facilities.",
    tags: ["Lightweight", "Quick Dry"],
    image: img6,
  },
  {
    name: "Customized Cotton Terry Towels",
    desc: "Custom sizes, colors, GSM, branding, and packaging options available according to customer requirements.",
    tags: ["Custom Size & Color", "Private Label", "Custom Packaging"],
    image: img7,
    badge: "Made To Order",
  },
];

const Products = () => {
  const ref = useReveal();

  return (
    <section className="section products" id="products">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Our Products</span>
          <h2 className="section-title">
            Premium Cotton <span>Terry Towels</span>
          </h2>
          <p className="section-subtitle">
            A complete range of cotton terry towels crafted for international quality standards —
            available in bulk for global buyers.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product, i) => (
            <article
              className="product-card reveal"
              key={product.name}
              style={{ "--delay": `${(i % 3) * 0.12}s` }}
            >
              <div className="product-media">
                <img
                  className="media-bg"
                  src={product.image}
                  alt={`${product.name} - cotton terry towels exported from India by Asalkaar Global Exim`}
                  loading="lazy"
                />
                {product.badge && <span className="badge">{product.badge}</span>}
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="product-tags">
                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#inquiry" className="product-link">
                  Request Price <ArrowRightIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="product-cta reveal">
          <ShieldIcon />
          <h3>Looking for a specific specification?</h3>
          <p>Share your size, GSM, color, branding, and quantity requirements with us.</p>
          <a href="#inquiry" className="btn btn-primary">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
