import { Icon } from './Icons.jsx'

export default function ProductCard({ product, onEnquire }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
        <span className="product-card__number" aria-hidden="true">
          {product.number}
        </span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.description}</p>
        <ul className="product-card__tags" aria-label="Applications">
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn--link"
          onClick={() => onEnquire(product.enquiryValue)}
        >
          {product.cta}
          <Icon name="arrow" size={17} />
        </button>
      </div>
    </article>
  )
}