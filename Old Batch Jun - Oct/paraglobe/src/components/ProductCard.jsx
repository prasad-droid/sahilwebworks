export default function ProductCard({ product, index = 0, onEnquire }) {
  return (
    <article className={`product-card reveal reveal-visual reveal-delay-${index % 4}`}>
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="product-card__img"
        />
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__short">{product.short}</p>
        <p className="product-card__desc">{product.description}</p>

        <dl className="product-card__specs">
          <div className="product-card__spec">
            <dt>Size / Variants</dt>
            <dd>{product.sizes}</dd>
          </div>
          <div className="product-card__spec">
            <dt>Application</dt>
            <dd>{product.applications}</dd>
          </div>
        </dl>

        <button type="button" className="btn btn-primary product-card__cta" onClick={onEnquire}>
          Enquire Now
          <span className="btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}