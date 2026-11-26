import { useEffect, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'
import { company, productCategories } from '../data/siteData'
import '../styles/ProductCategories.css'

const points = ['Product sourcing', 'Consistency', 'Bulk supply', 'Customized packaging']

export default function ProductCategories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = productCategories[activeIndex]

  // Deep links from the footer (e.g. #products-spices-masala) open the right tab.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash.startsWith('products-')) return
      const id = hash.slice('products-'.length)
      const index = productCategories.findIndex((category) => category.id === id)
      if (index >= 0) {
        setActiveIndex(index)
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const categoryInquiry = `Hello Tru Source Global, I would like to enquire about your ${active.title} products.`

  return (
    <section className="section products section--cream" id="products">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Our Products"
          title={<>Our Products. <span className="highlight-word">Your Global Sourcing Partner.</span></>}
          subtitle="Discover quality Indian agricultural commodities, spices and food products sourced to meet diverse international market requirements."
        />

        <div className="products__tabs" role="tablist" aria-label="Product categories">
          {productCategories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={activeIndex === index}
              aria-controls={`panel-${category.id}`}
              className={`products__tab${activeIndex === index ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="products__tab-number">{category.number}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div
          className="products__panel"
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          key={active.id}
        >
          <div className="products__intro">
            <div className="products__intro-image">
              <img src={active.image} alt={`${active.title} overview`} loading="lazy" />
            </div>
            <div className="products__intro-text">
              <span className="products__intro-kicker">Category {active.number} / 03</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <ul className="products__points">
                {points.map((point) => (
                  <li key={point}><Check size={15} aria-hidden="true" /> {point}</li>
                ))}
              </ul>
              <a
                className="products__intro-link"
                href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(categoryInquiry)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire about this category <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="products__grid">
            {active.products.map((product) => (
              <ProductCard key={product.name} product={product} categoryLabel={active.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
