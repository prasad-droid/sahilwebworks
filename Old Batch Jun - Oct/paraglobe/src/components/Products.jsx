import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function Products({ onEnquire }) {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Products</span>
          <h2 className="section-title">Sustainable Products. Global Possibilities.</h2>
          <p className="section-subtitle">
            Explore our range of biodegradable tableware and takeaway food
            packaging solutions designed for modern food businesses.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onEnquire={() => onEnquire(product)}
            />
          ))}
        </div>

        <div className="products-more">
          <a href="#/catalog" className="btn btn-outline">
            View Full Catalogue
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}