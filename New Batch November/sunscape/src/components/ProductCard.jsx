import { ArrowUpRight, Eye } from 'lucide-react'
import '../styles/products.css'

export default function ProductCard({ product, onViewDetails, onRequestQuote }) {
  return (
    <article className="product-card" data-reveal>
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.imageAlt || product.name}
          loading="lazy"
          width="800"
          height="600"
        />
        {product.category && <span className="product-card__category">{product.category}</span>}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        {product.description && <p>{product.description}</p>}
        <div className="product-card__actions">
          <button type="button" className="btn btn--ghost" onClick={() => onViewDetails(product)}>
            <Eye size={16} aria-hidden="true" /> View Details
          </button>
          <button type="button" className="btn btn--navy" onClick={() => onRequestQuote(product)}>
            Request Quote <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
