import { useState } from "react";
import "../styles/products.css";

export default function ProductCard({ product, onEnquire }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`product-card ${expanded ? "is-expanded" : ""}`}>
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
        {product.tag && <span className="product-card__tag">{product.tag}</span>}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <p className="product-card__specs">
          <span className="product-card__specs-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M4 6h16M4 12h16M4 12l2.5 2.5M4 12l2.5-2.5" />
            </svg>
          </span>
          {product.specifications}
        </p>

        {expanded && (
          <div className="product-card__details">
            <p>
              Full specifications, packaging and export details for this product
              are shared on enquiry.
            </p>
          </div>
        )}

        <div className="product-card__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onEnquire(product)}
          >
            Enquire Now
          </button>
          <button
            type="button"
            className="btn btn--outline product-card__toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
    </article>
  );
}