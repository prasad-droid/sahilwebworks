import "../styles/products.css";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Products({ onEnquire }) {
  return (
    <section id="products" className="section products" aria-labelledby="products-title">
      <span className="blob products__blob products__blob--one" />
      <span className="blob products__blob products__blob--two" />

      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">Our Products</span>
          <h2 className="section-title" id="products-title">
            Quality Indian Agricultural Products
          </h2>
          <p className="section-subtitle">
            Explore our range of Indian agricultural products prepared for
            international markets.
          </p>
        </Reveal>

        <div className="products__grid">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              delay={`reveal-delay-${(index % 3) + 1}`}
            >
              <ProductCard product={product} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>

        <Reveal className="products__note">
          <p>
            Building a requirement beyond this range? <strong>Tell us about your requirement</strong> —
            additional Indian agricultural products can be sourced and arranged based on
            buyer requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}