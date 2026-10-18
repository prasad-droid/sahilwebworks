import React from "react";
import { productCategories } from "../data/products.js";
import { useReveal } from "../hooks/useReveal.js";
import { IconArrowRight } from "./Icons.jsx";
import "../styles/ProductCategories.css";

/**
 * Product Categories grid.
 * Suggested category placeholders — replace/refine once the actual product
 * information is available. No category is presented as confirmed inventory.
 */
export default function ProductCategories({ onEnquire }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="categories"
      className="categories section section--beige"
      aria-labelledby="categories-heading"
    >
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Product Categories</p>
          <h2 id="categories-heading">Explore Our T-Shirt Collection</h2>
          <p>
            Discover our T-shirt portfolio and contact Sampurnm Global to discuss
            product availability, quantities, and sourcing requirements.
          </p>
        </div>

        <div
          ref={ref}
          className={`categories__grid ${visible ? "is-visible" : ""}`}
        >
          {productCategories.map((cat, i) => (
            <article
              key={cat.id}
              className={`category-card reveal ${
                visible ? "is-visible" : ""
              } reveal--delay-${(i % 3) + 1}`}
            >
              <div className="category-card__media">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <span className="category-card__tag badge">Sample</span>
              </div>
              <div className="category-card__body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <button
                  type="button"
                  className="category-card__btn"
                  onClick={() => onEnquire?.(cat.name)}
                >
                  Enquire Now
                  <IconArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="categories__note">
          Note: The categories above are suggested placeholders for the initial
          layout. They will be confirmed and refined once the official product
          information is supplied.
        </p>
      </div>
    </section>
  );
}
