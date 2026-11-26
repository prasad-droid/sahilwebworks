import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import turmericImg from "../assets/turmeric/image1.jpeg";
import moringaImg from "../assets/moringa/WhatsApp Image 2026-08-10 at 12.27.18 PM.jpeg";
import raisinImg from "../assets/raisin/golden raisin 2.jpeg";
import "../styles/products.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const products = [
  {
    name: "Turmeric Powder",
    tone: "turmeric",
    img: turmericImg,
    alt: "Premium turmeric powder from Sangli",
    desc: "High-curcumin turmeric sourced from Sangli, India's globally recognized turmeric region. Processed under hygienic conditions for superior color, aroma, and purity.",
    features: ["Natural Product", "Rich Color", "Export Quality", "Bulk Supply Available"],
  },
  {
    name: "Moringa Powder",
    tone: "moringa",
    img: moringaImg,
    alt: "Premium moringa powder",
    desc: "Nutrient-rich moringa powder produced from carefully selected moringa leaves and processed to retain maximum nutritional value.",
    features: ["Rich in Nutrients", "Natural Processing", "Premium Quality", "Export Ready"],
  },
  {
    name: "Raisins (Kismis)",
    tone: "raisin",
    img: raisinImg,
    alt: "Premium golden raisins from Sangli grapes",
    desc: "Premium-quality raisins produced from selected grapes. Known for excellent taste, texture, and quality standards.",
    features: ["GI Recognition Region", "Sweet Natural Taste", "High Quality", "Export Grade"],
  },
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="products-head"
      >
        <span className="section-eyebrow">Our Products</span>
        <h2 className="section-title">Premium Products From Farmer Producers</h2>
        <p className="section-subtitle">
          Farm-fresh, export-ready products with complete quality assurance.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="products-grid"
      >
        {products.map((p, i) => (
          <motion.article key={i} variants={fadeUp} className={`product-card product-card--${p.tone}`}>
            <div className="product-media">
              <img src={p.img} alt={p.alt} loading="lazy" />
            </div>
            <div className="product-body">
              <h3>{p.name}</h3>
              <p className="product-desc">{p.desc}</p>
              <ul className="product-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="product-link">
                Request a Quote <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Products;
