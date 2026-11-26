import { availabilityLabel } from '../data/products.js'

export default function ProductCard({ product, onDetails, onEnquire, delay = 0 }) {
  const isAvailable = product.status === 'available'

  return (
    <article
      className={`product-card ${isAvailable ? 'product-card--available' : ''}`}
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <div className="product-card__media media media--zoom">
        <img src={product.image} alt={product.alt || product.name} loading="lazy" />
        <span
          className={`product-card__status product-card__status--${product.status}`}
        >
          {availabilityLabel[product.status]}
        </span>
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.shortDescription}</p>

        <div className="product-card__actions">
          <button
            type="button"
            className="product-card__details"
            onClick={() => onDetails(product)}
          >
            Product details
          </button>
          <button
            type="button"
            className="btn btn--sm btn--primary"
            onClick={() => onEnquire(product)}
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  )
}
