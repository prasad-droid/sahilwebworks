export default function ProductCard({ product, onEnquire }) {
  const handleEnquire = () => {
    if (onEnquire) onEnquire(product);
  };

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          width="800"
          height="600"
        />
        <span className="product-card__tag">Indian Origin</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__meta">
          <span className="product-card__meta-label">Application</span>
          <p>{product.application}</p>
        </div>

        <div className="product-card__action">
          <button type="button" className="btn btn-primary product-card__btn" onClick={handleEnquire}>
            Enquire Now
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}