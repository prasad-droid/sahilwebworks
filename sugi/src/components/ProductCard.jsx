import { Link } from "../router";
import ProductGallery from "./ProductGallery";
import "../styles/productShowcase.css";

// ==========================================================================
// PRODUCT SHOWCASE CARD
// Slidable real images + product name + "Read More" → product detail page.
// `layout="detail"` puts the gallery and details side by side (Products page).
// ==========================================================================

export default function ProductCard({ product, layout = "card" }) {
  const detailed = layout === "detail";

  return (
    <article className={`showcase-card ${detailed ? "showcase-card--detail" : ""}`}>
      <div className="showcase-card__media">
        <ProductGallery images={product.images} name={product.name} />
        <span className="showcase-card__origin">{product.origin}</span>
      </div>

      <div className="showcase-card__body">
        <h3 className="showcase-card__name">{product.name}</h3>
        <p className="showcase-card__group">{product.groupTitle}</p>

        {detailed && (
          <dl className="showcase-card__meta">
            <div>
              <dt>Origin</dt>
              <dd>{product.origin}</dd>
            </div>
            <div>
              <dt>Packaging</dt>
              <dd>Customized export packaging as per buyer requirement</dd>
            </div>
            <div>
              <dt>Quality</dt>
              <dd>Farm inspection, grading, cleaning &amp; hygienic packing</dd>
            </div>
          </dl>
        )}

        <Link to={`/products/${product.slug}`} className="btn btn-dark-outline showcase-card__cta">
          Read More
          <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
