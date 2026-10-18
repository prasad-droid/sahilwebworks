import ProductCard from "./ProductCard";
import "../styles/productSection.css";

// ==========================================================================
// PRODUCT SECTION — heading + intro + a group of product cards.
// Used on both the homepage (card layout) and the Products page (detail).
// ==========================================================================

export default function ProductSection({
  eyebrow,
  title,
  intro,
  groups,
  layout = "card",
  id,
}) {
  return (
    <section id={id} className="product-section section-pad">
      <div className="container">
        <header className="product-section__head reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-sub">{intro}</p>}
        </header>

        {groups.map((group) => (
          <div className="product-section__group" key={group.id}>
            <h3 className="product-section__group-title reveal">{group.title}</h3>
            <div className="product-section__grid">
              {group.products.map((product, i) => (
                <div
                  key={product.slug}
                  className="reveal"
                  style={{ transitionDelay: `${Math.min(i, 6) * 0.05}s` }}
                >
                  <ProductCard product={product} layout={layout} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
