import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "../styles/products.css";

export default function Products({ onEnquire }) {
  return (
    <section className="products" id="products">
      <div className="container">
        <Reveal className="products__header">
          <p className="section-label">Our Products</p>
          <h2 className="section-title">
            Tamarind &amp; Ginger. Exported Worldwide.
          </h2>
          <p className="section-subtitle">
            India&rsquo;s finest tamarind and ginger, sourced and exported for
            international markets. Enquire for grades, packaging and availability.
          </p>
        </Reveal>

        <div className="products__grid">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 90}>
              <ProductCard product={product} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>

        <Reveal className="products__note">
          <p>
            New to sourcing from India? Enquire directly for current grades,
            packaging options and export availability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}