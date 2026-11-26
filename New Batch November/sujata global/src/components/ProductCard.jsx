import { ArrowRight, MessageCircle } from 'lucide-react'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/Products.css'

export default function ProductCard({ product }) {
  return (
    <article className="product-card" data-reveal>
      <div className="product-card__media">
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="product-card__tag">{product.tag}</span>
      </div>

      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-card__actions">
          <a className="btn btn--primary product-card__enquiry" href="#quote">
            Enquire Now <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            className="product-card__whatsapp"
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
