import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import turmericImg from "../assets/turmeric/image3.jpeg";
import moringaImg from "../assets/moringa/WhatsApp Image 2026-08-10 at 12.27.21 PM.jpeg";
import raisinImg from "../assets/raisin/golden raisin 3.jpeg";
import "../styles/product-info.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tabs = [
  {
    key: "turmeric",
    label: "Turmeric Information",
    img: turmericImg,
    imgAlt: "Turmeric powder from Sangli, Maharashtra",
    heading: "Turmeric Powder — India's Golden Spice",
    intro:
      "Sourced from Sangli, Maharashtra — a globally recognized turmeric belt — our high-curcumin turmeric is processed hygienically to preserve its rich golden color, aroma and active compounds.",
    sections: [
      {
        title: "Benefits of Turmeric",
        desc: "Known for powerful anti-inflammatory and antioxidant properties that support immunity, digestion, and overall wellness.",
      },
      {
        title: "Curcumin Content",
        desc: "High-curcumin Sangli varieties with superior coloring power and purity, ideal for pharmaceutical and wellness use.",
      },
      {
        title: "Uses in Food Industry",
        desc: "A staple in curries, spice blends, condiments and natural food colorants used by processors worldwide.",
      },
      {
        title: "Health Applications",
        desc: "Widely used in supplements, herbal formulations, cosmetics and nutraceutical products.",
      },
      {
        title: "Export Opportunities",
        desc: "Consistent global demand across the Middle East, Europe and Asia for certified export-grade turmeric.",
      },
    ],
  },
  {
    key: "moringa",
    label: "Moringa Information",
    img: moringaImg,
    imgAlt: "Moringa powder and leaves",
    heading: "Moringa Powder — The Superfood Leaf",
    intro:
      "Our moringa powder is made from carefully selected leaves and processed gently to retain maximum nutritional value, meeting the needs of the booming global superfood market.",
    sections: [
      {
        title: "Nutritional Benefits",
        desc: "Rich in protein, iron, calcium and vitamins A, C and E — a complete natural nutrient source.",
      },
      {
        title: "Uses in Health Products",
        desc: "A key ingredient in supplements, capsules, protein powders and herbal wellness products.",
      },
      {
        title: "Food Industry Applications",
        desc: "Used in smoothies, health bars, fortification programs and natural food fortification.",
      },
      {
        title: "International Demand",
        desc: "Rapidly rising demand in Europe, North America and the Middle East as a premium superfood.",
      },
      {
        title: "Sustainable Farming Benefits",
        desc: "Drought-resistant and fast-growing, moringa supports sustainable, climate-smart agriculture.",
      },
    ],
  },
  {
    key: "raisin",
    label: "Raisin Information",
    img: raisinImg,
    imgAlt: "Premium raisins produced from Sangli grapes",
    heading: "Raisins (Kismis) — Naturally Sweet",
    intro:
      "Premium raisins produced from selected grapes grown in our region, known for excellent taste, texture and dependable export quality.",
    sections: [
      {
        title: "Nutritional Value",
        desc: "Natural sugars, dietary fiber, iron and antioxidants make raisins a wholesome energy snack.",
      },
      {
        title: "Uses in Food Industry",
        desc: "Essential for bakery, confectionery, cereals, muesli, snack mixes and desserts.",
      },
      {
        title: "Quality Standards",
        desc: "Sun-dried and processed under hygienic conditions to meet strict export-grade specifications.",
      },
      {
        title: "Storage Benefits",
        desc: "Long shelf life and easy storage and transport, making them reliable for bulk trade.",
      },
      {
        title: "Export Market Demand",
        desc: "Strong and growing demand across the Gulf, Europe and Southeast Asia.",
      },
    ],
  },
];

const ProductInformation = () => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="product-info" className="section product-info">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="product-info-head"
        >
          <span className="section-eyebrow">Product Information</span>
          <h2 className="section-title">Know Your Product, Inside Out</h2>
          <p className="section-subtitle">
            Detailed information on benefits, applications and market opportunities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="tabs"
          role="tablist"
        >
          {tabs.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === i}
              className={`tab-btn ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={tab.key}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="tab-panel"
        >
          <div className="tab-panel-head">
            <div className="tab-panel-img">
              <img src={tab.img} alt={tab.imgAlt} loading="lazy" />
            </div>
            <h3>{tab.heading}</h3>
            <p>{tab.intro}</p>
          </div>
          <div className="tab-grid">
            {tab.sections.map((s, i) => (
              <div key={i} className="tab-item">
                <span className="tab-item-check">
                  <Check size={16} />
                </span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInformation;
