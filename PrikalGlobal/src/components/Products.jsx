import { ArrowRight } from "lucide-react";
import productBrown from "@/assets/images/product-brown.jpg";
import productWhite from "@/assets/images/product-white.jpg";
import productTwisted from "@/assets/images/product-twisted.jpg";
import productFlat from "@/assets/images/product-flat.jpg";
import productSos from "@/assets/images/product-sos.jpg";
import productCustom from "@/assets/images/product-custom.jpg";
import Reveal from "./Reveal.jsx";

const PRODUCTS = [
  {
    title: "Brown Kraft Paper Bags",
    desc: "Durable, eco-friendly bags suitable for retail and packaging needs.",
    img: productBrown,
  },
  {
    title: "White Kraft Paper Bags",
    desc: "Premium appearance with excellent strength and printability.",
    img: productWhite,
  },
  {
    title: "Twisted Handle Paper Bags",
    desc: "Stylish and strong bags ideal for shopping and retail businesses.",
    img: productTwisted,
  },
  {
    title: "Flat Handle Paper Bags",
    desc: "Cost-effective packaging solution with practical usability.",
    img: productFlat,
  },
  {
    title: "SOS Paper Bags",
    desc: "Perfect for food packaging, grocery stores, and takeaway businesses.",
    img: productSos,
  },
  {
    title: "Customized Printed Paper Bags",
    desc: "Fully customized paper bags featuring logos, colors, and brand messaging.",
    img: productCustom,
  },
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Our Products</span>
        <h2 className="section-title">
          Premium <span className="accent">Kraft Paper Bags</span>
        </h2>
        <p className="section-desc">
          A complete range of sustainable paper bags manufactured with high-quality Kraft
          paper, available with custom sizes, printing, and handle styles for global buyers.
        </p>
      </Reveal>

      <div className="products-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90}>
            <div className="product-card">
              <div className="product-media">
                {p.img ? (
                  <img src={p.img} alt={p.title} loading="lazy" />
                ) : (
                  <div className="product-placeholder">{p.icon}</div>
                )}
                <span className="product-tag">Export Grade</span>
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#inquiry" className="product-link">
                  Get Pricing <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
