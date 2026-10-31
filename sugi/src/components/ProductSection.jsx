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
  // Groups of 5 or 6 products would leave empty trailing cells in the default
  // 4-column grid, which reads as a large blank area. Give those groups their
  // own column count so every row is filled on desktop.
  const variantFor = (count) => {
    if (count === 5 || count === 10 || count === 15) return "five";
    if (count === 6 || count === 9) return "three";
    return "";
  };

  return (
    <section id={id} className="product-section section-pad">
      <div className="container">
        <header className="product-section__head reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-sub">{intro}</p>}
        </header>

        {groups.map((group) => {
          const variant = variantFor(group.products.length);
          const gridClass = [
            "product-section__grid",
            layout === "detail"
              ? "product-section__grid--detail"
              : variant
                ? `product-section__grid--${variant}`
                : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div className="product-section__group" key={group.id}>
              <h3 className="product-section__group-title reveal">{group.title}</h3>
              <div className={gridClass}>
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
          );
        })}
      </div>
    </section>
  );
}
