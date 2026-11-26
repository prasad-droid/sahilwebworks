import { useEffect, useState } from 'react'
import { featuredProducts } from '../data/siteData'
import { requestEnquiry } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/FeaturedProducts.css'

export default function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState(null)

  useEffect(() => {
    if (!activeProduct) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveProduct(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeProduct])

  const handleEnquire = (productName) => {
    setActiveProduct(null)
    requestEnquiry(productName)
  }

  return (
    <section className="section featured" id="featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Selected Range</p>
          <h2 className="section-title" id="featured-title">
            Featured Engineering Products
          </h2>
          <p className="section-subtitle">
            A selection of engineering products we can discuss on enquiry. Share your
            specifications and we will help with product information and availability.
          </p>
        </div>

        <div className="featured__grid">
          {featuredProducts.map((product, index) => (
            <article className={`product-card reveal delay-${(index % 4) + 1}`} key={product.id}>
              <div className="product-card__media">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width="800"
                  height="640"
                />
                <span className="product-card__category">{product.category}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{product.name}</h3>
                <p className="product-card__text">{product.description}</p>

                {product.specs && product.specs.length > 0 && (
                  <ul className="product-card__specs">
                    {product.specs.map((spec, i) => (
                      <li key={`${product.id}-spec-${i}`}>
                        <Icon name="check" size={15} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="product-card__actions">
                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => setActiveProduct(product)}
                >
                  View Details
                </button>
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => handleEnquire(product.name)}
                >
                  Request Details
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="featured__note reveal">
          <Icon name="clipboard" size={18} />
          Featured products above are placeholders. Populate <code>featuredProducts</code> in{' '}
          <code>src/data/siteData.js</code> — the cards and detail modal update automatically.
        </p>
      </div>

      {activeProduct && (
        <div
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={() => setActiveProduct(null)}
        >
          <div className="product-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="product-modal__close"
              onClick={() => setActiveProduct(null)}
              aria-label="Close product details"
            >
              <Icon name="close" size={22} />
            </button>

            <div className="product-modal__media">
              <img src={activeProduct.image} alt={activeProduct.name} />
            </div>

            <div className="product-modal__body">
              <span className="product-modal__category">{activeProduct.category}</span>
              <h3 id="product-modal-title">{activeProduct.name}</h3>
              <p>{activeProduct.description}</p>

              {activeProduct.specs && activeProduct.specs.length > 0 && (
                <div className="product-modal__specs">
                  <h4>Specifications</h4>
                  <ul>
                    {activeProduct.specs.map((spec, i) => (
                      <li key={`modal-spec-${i}`}>
                        <Icon name="check" size={16} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <span className="placeholder-note">
                    Specification placeholders — replace with verified product data.
                  </span>
                </div>
              )}

              <div className="product-modal__actions">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => handleEnquire(activeProduct.name)}
                >
                  Enquire Now
                  <Icon name="arrowRight" size={17} className="icon-trailing" />
                </button>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setActiveProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
