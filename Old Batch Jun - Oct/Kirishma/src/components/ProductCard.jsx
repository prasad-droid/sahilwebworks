import SmartImage from './SmartImage.jsx'
import '../styles/products.css'

/**
 * Reusable product card: image, category, name, description, pack sizes and
 * a "View Product" trigger that opens the detail modal.
 */
export default function ProductCard({ product, onView }) {
  return (
    <article className="card">
      <div className="card__media">
        <SmartImage
          className="card__image"
          src={product.image}
          alt={product.imageAlt}
          label={product.name}
          width="600"
          height="450"
        />
        <span className="card__category">{product.category}</span>
      </div>

      <div className="card__body">
        <h4 className="card__name">{product.name}</h4>
        {product.description ? <p className="card__description">{product.description}</p> : null}

        <div className="card__packs">
          <span className="card__packs-label">Available packaging</span>
          <span className="card__packs-list">
            {product.packaging.map((size) => (
              <span className="pack-chip" key={size}>
                {size}
              </span>
            ))}
          </span>
        </div>

        <button type="button" className="btn btn--outline card__btn" onClick={() => onView?.(product)}>
          View Product
        </button>
      </div>
    </article>
  )
}
