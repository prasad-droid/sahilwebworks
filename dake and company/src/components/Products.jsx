import { PHOTOS } from '../data/business.js'

const kraftBags = [
  '100% recyclable paper',
  'Durable construction',
  'Strong twisted paper handles',
  'Multiple size options',
  'Custom branding and printing options',
  'Suitable for retail and commercial applications',
  'Reliable bulk supply',
]

const corrugated = [
  'Strong corrugated construction',
  'Multiple box sizes and configurations',
  'Custom dimensions available',
  'Suitable for shipping and transportation',
  'Custom printing options',
  'Bulk-order capability',
  'Suitable for domestic and export requirements',
]

const sizes = ['18 × 8 × 24 cm', '22 × 14 × 28 cm', '26 × 17 × 35 cm', '30 × 18 × 40 cm']

export function Products() {
  return (
    <section className="section section--ivory" id="products">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Our Products</p>
          <h2 className="section__title">Reliable Packaging. Built for Business.</h2>
          <p className="section__subtitle">
            We supply packaging solutions designed around the needs of retailers, brands, e-commerce businesses, distributors, importers and commercial buyers.
          </p>
        </header>
        <div className="products__grid">
          <article className="product-card">
            <div className="product-card__media">
              <img src={PHOTOS[1]} alt="Kraft paper bags by Dake and Company" loading="lazy" />
            </div>
            <div className="product-card__content">
              <header className="product-card__header">
                <div>
                  <p className="product-card__index">01</p>
                  <h3 className="product-card__title">Kraft Paper Bags</h3>
                </div>
              </header>
              <p className="product-card__subtitle">Practical. Durable. Customizable. Recyclable.</p>
              <p>
                Our kraft paper bags combine functionality with a clean, professional appearance—making them suitable for retail stores, fashion brands, e-commerce businesses, boutiques, gifting, lifestyle products and more. Available in multiple sizes with strong twisted paper handles, we can source bags to your required dimensions, specifications and branding requirements.
              </p>
              <ul className="product-card__list">
                {kraftBags.map((item) => (
                  <li key={item} className="product-card__list-item">
                    <span className="product-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p style={{ color: 'var(--navy)', fontWeight: 600, marginBottom: '0.8rem' }}>Available sizes</p>
                <div className="product-card__sizes">
                  {sizes.map((size) => (
                    <span key={size} className="product-card__size">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-card__media">
              <img src={PHOTOS[2]} alt="Corrugated packaging boxes by Dake and Company" loading="lazy" />
            </div>
            <div className="product-card__content">
              <header className="product-card__header">
                <div>
                  <p className="product-card__index">02</p>
                  <h3 className="product-card__title">Corrugated Packaging Boxes</h3>
                </div>
              </header>
              <p className="product-card__subtitle">Protection That Travels With Your Product.</p>
              <p>
                Our corrugated boxes are designed to provide practical protection during storage, handling, transportation and delivery. We source boxes for businesses that require dependable packaging for e-commerce shipments, retail distribution, manufacturing, exports and general commercial applications.
              </p>
              <ul className="product-card__list">
                {corrugated.map((item) => (
                  <li key={item} className="product-card__list-item">
                    <span className="product-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>From standard shipping cartons to customized packaging requirements, we work around your product dimensions, box specifications, quantity and application.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Products
