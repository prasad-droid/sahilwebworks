import { useState } from 'react'
import { ArrowUpRight, Boxes, Send } from 'lucide-react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import SectionHeading from './SectionHeading'
import { products } from '../data/products'
import { site } from '../data/site'
import '../styles/products.css'

export default function Products({ onRequestQuote }) {
  const [activeProduct, setActiveProduct] = useState(null)

  const requestQuote = (product) => {
    setActiveProduct(null)
    onRequestQuote(product)
  }

  return (
    <div className="catalogue" data-reveal>
      {products.length === 0 ? (
        <div className="catalogue-empty">
          <div className="catalogue-empty__visual">
            <img
              src={site.images.catalogue}
              alt="Stacked shipping containers at a commercial port"
              loading="lazy"
              width="1200"
              height="800"
            />
          </div>
          <div className="catalogue-empty__body">
            <span className="catalogue-empty__icon">
              <Boxes size={26} aria-hidden="true" />
            </span>
            <h3>Product catalogue is being prepared.</h3>
            <p>
              Share your product requirement and we will connect with you about sourcing and trading
              opportunities. Products will be added here as the catalogue is confirmed.
            </p>
            <button type="button" className="btn btn--navy" onClick={() => onRequestQuote(null)}>
              <Send size={16} aria-hidden="true" /> Send a Product Inquiry
            </button>
            <span className="catalogue-empty__note">
              No product details have been listed until they are supplied by the company.
            </span>
          </div>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setActiveProduct}
              onRequestQuote={requestQuote}
            />
          ))}
        </div>
      )}

      <div className="catalogue__footnote">
        <span>
          Looking for something specific? <ArrowUpRight size={15} aria-hidden="true" />
        </span>
        <button type="button" onClick={() => onRequestQuote(null)}>
          Tell us what you need
        </button>
      </div>

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onInquire={requestQuote}
      />
    </div>
  )
}
