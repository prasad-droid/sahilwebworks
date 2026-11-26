import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { getProductsByCategory } from "../../data/products";
import { getCategory } from "../../data/categories";
import ProductCard from "../ProductCard/ProductCard";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

/**
 * A full product category block: heading, description and product grid.
 */
export default function ProductCategory({ slug, showHeading = true }) {
  const category = getCategory(slug);
  const items = getProductsByCategory(slug);

  if (!category) return null;

  return (
    <div className="product-category">
      {showHeading && (
        <ScrollReveal className="section-head">
          <span className="section-eyebrow">Product Range</span>
          <h2 className="section-title">{category.title}</h2>
          <p className="section-sub">{category.description}</p>
        </ScrollReveal>
      )}
      {category.slug === "engineering-products" && (
        <ScrollReveal className="category-highlight" delay={60}>
          <strong>Custom Sourcing Available</strong>
          <span>
            Engineering products are sourced to your specification — share drawings, standards or
            samples and our team will coordinate with suitable Indian manufacturers.
          </span>
        </ScrollReveal>
      )}
      {category.slug === "cattle-foods" && (
        <ScrollReveal className="category-highlight" delay={60}>
          <strong>Catalogue Available</strong>
          <span>
            Download our cattle feed catalogue below or contact us for custom formulations
            and bulk orders.
          </span>
        </ScrollReveal>
      )}
      <div className="product-grid">
        {items.map((product) => (
          <ScrollReveal key={product.id} delay={0}>
            <ProductCard product={product} ctaLabel={category.cta} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal className="text-center mt-3">
        <Link to="/request-quote" className="btn btn--outline">
          Request a Quote for {category.name} <FiArrowRight size={16} aria-hidden="true" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
