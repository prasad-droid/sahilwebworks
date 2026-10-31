import { Link } from "../router";
import ProductGallery from "./ProductGallery";
import { specsFor } from "../data/catalog";
import "../styles/productShowcase.css";

// ==========================================================================
// PRODUCT SHOWCASE CARD
// Homepage / portfolio: compact image + name + "Read More".
// `layout="detail"` (Products page) adds the full panel: slidable images,
// product name, a bordered Specifications table, Get A Quote and Read More.
// ==========================================================================

export default function ProductCard({ product, layout = "card" }) {
  const detailed = layout === "detail";

  if (detailed) {
    const specs = specsFor(product);

    return (
      <article className="showcase-card showcase-card--detail">
        <div className="showcase-card__media">
          <ProductGallery images={product.images} name={product.name} />
        </div>

        <div className="showcase-card__body">
          <h3 className="showcase-card__name">{product.name}</h3>

          <div className="showcase-card__specs">
            <h4 className="showcase-card__specs-title">Specifications</h4>
            <table className="showcase-card__spec-table">
              <tbody>
                {specs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="showcase-card__actions">
            <Link to="/quote" className="btn btn-primary btn-inline">
              Get A Quote
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to={`/products/${product.slug}`}
              className="btn btn-dark-outline btn-inline"
            >
              Read More
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="showcase-card">
      <div className="showcase-card__media">
        <ProductGallery images={product.images} name={product.name} />
      </div>

      <div className="showcase-card__body">
        <h3 className="showcase-card__name">{product.name}</h3>
        <p className="showcase-card__group">{product.groupTitle}</p>

        <Link to={`/products/${product.slug}`} className="btn btn-dark-outline showcase-card__cta">
          Read More
          <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
