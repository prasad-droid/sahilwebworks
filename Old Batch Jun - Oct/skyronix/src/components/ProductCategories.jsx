import Reveal from './Reveal.jsx'
import { products } from '../data/products.js'
import { ArrowUpRight, MessageCircle } from './Icons.jsx'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function ProductCategories() {
  return (
    <section id="products" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Product Range</span>
          <h2 className="section-title">
            16+ toy categories, <span className="accent">sourced &amp; shipped</span> for you
          </h2>
          <p className="section-sub">
            Every category above is backed by audited suppliers, quality checks, and documentation
            you can rely on for your market.
          </p>
        </Reveal>

        <div className="products-grid">
          {products.map((product, i) => (
            <Reveal
              key={product.id}
              as="a"
              href="#contact"
              className={`product-card ${product.featured ? 'product-card--featured' : ''}`}
              delay={(i % 4) * 70}
            >
              <div className="product-card__img">
                <img src={product.image} alt={product.alt} loading="lazy" />
              </div>
              <span className="product-card__index">{pad(product.id)}</span>
              <div className="product-card__body">
                <h3 className="product-card__title">
                  {product.name}
                  <span className="product-card__arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </h3>
                <p className="product-card__tagline">{product.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head" delay={120}>
          <p className="section-sub muted">
            Looking for a specific toy type not listed here? Ask us — chances are we already supply
            it.
          </p>
          <p>
            <a href="#contact" className="btn btn--outline">
              <MessageCircle size={18} />
              Talk to a Product Expert
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}