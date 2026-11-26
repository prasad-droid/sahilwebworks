import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { IMAGES } from "@/assets/images";
import "@/styles/products.css";

const PRODUCTS = [
  { name: "Alcohol Swabs", category: "Alcohol Swabs", desc: "Sterile alcohol prep pads for skin disinfection and safe injection preparation.", img: IMAGES.alcoholSwabs },
  { name: "Examination Gloves", category: "Medical Gloves", desc: "Powder-free nitrile examination gloves for safe, hygienic clinical use.", img: IMAGES.nitrileGloves },
  { name: "Infusion Sets", category: "Infusion Products", desc: "Single-use infusion sets for accurate and reliable fluid administration.", img: IMAGES.infusionSet },
  { name: "Catheters", category: "Urology Products", desc: "Disposable catheters designed for safe, comfortable patient care.", img: IMAGES.product2 },
  { name: "Urine Collection Products", category: "Urology Products", desc: "Urine bags and collection systems for reliable hospital use.", img: IMAGES.product6 },
  { name: "Wound Dressings", category: "Wound Care", desc: "Sterile dressings that protect wounds and promote faster healing.", img: IMAGES.product4 },
  { name: "Gauze & Bandages", category: "Wound Care", desc: "Absorbent gauze and bandages for effective wound management.", img: IMAGES.gauzeBandage },
];

const CATEGORIES = ["All", "Alcohol Swabs", "Medical Gloves", "Infusion Products", "Urology Products", "Wound Care"];

const enquire = (product) => {
  window.dispatchEvent(new CustomEvent("viom:enquire", { detail: product }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-head reveal" data-animation="fade-up">
          <span className="section-tag">Our Products</span>
          <h2>
            Premium Medical <span>Disposable Products</span>
          </h2>
          <p>
            A comprehensive portfolio of medical consumables for hospitals, distributors, and healthcare
            institutions worldwide.
          </p>
        </div>

        <div className="products__filter reveal" data-animation="fade-up">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`products__filter-btn ${active === cat ? "is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((product, i) => (
            <article className="product-card reveal" data-animation="fade-up" data-delay={i % 4} key={product.name}>
              <div className="product-card__media">
                <img src={product.img} alt={`${product.name} from ViOm Global Exim`} loading="lazy" />
                <span className="product-card__tag">{product.category}</span>
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <button className="product-card__enquire" onClick={() => enquire(product.name)}>
                  Enquire Now <FiArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
