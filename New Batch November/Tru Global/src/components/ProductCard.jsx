import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/siteData'

export default function ProductCard({ product, categoryLabel }) {
  const inquiryText = `Hello Tru Source Global, I would like to request product details for ${product.name} (${categoryLabel}).`
  const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(inquiryText)}`

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card__label">{categoryLabel}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <a className="product-card__link" href={href} target="_blank" rel="noopener noreferrer">
          Request Product Details <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
