import Icon from "./Icon";
import AssetImage from "./AssetImage";

function hasList(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function ProductCard({ product, onView, onRequestQuote }) {
  const showSpecs = hasList(product.specifications);
  const availability =
    product.available === false
      ? "On request"
      : product.available === true
      ? "Available"
      : "";

  return (
    <article className="product-card" data-reveal>
      <div className="product-card__media">
        {product.image ? (
          <AssetImage src={product.image} alt={product.name || "Product image"} label="PrajtamEx" />
        ) : (
          <div className="product-card__placeholder" aria-hidden="true">
            <Icon name="image" size={30} />
          </div>
        )}
        {availability && (
          <span className={`product-card__badge ${product.available === false ? "is-request" : ""}`}>
            {availability}
          </span>
        )}
      </div>

      <div className="product-card__body">
        {product.category && <span className="product-card__category">{product.category}</span>}
        <h3 className="product-card__title">{product.name}</h3>
        {product.description && <p className="product-card__text">{product.description}</p>}

        {showSpecs && (
          <ul className="product-card__specs">
            {product.specifications.slice(0, 2).map((spec) => (
              <li key={spec}>
                <Icon name="check" size={13} />
                {spec}
              </li>
            ))}
          </ul>
        )}

        <div className="product-card__actions">
          <button type="button" className="btn btn--outline btn--sm" onClick={onView}>
            View Details
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={onRequestQuote}>
            Request Quote
          </button>
        </div>
      </div>
    </article>
  );
}
