import { categories, getProductsByCategory } from '../data/products.js'
import { productsContent } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SmartImage from './SmartImage.jsx'
import '../styles/products.css'

/**
 * A quick-glance band of the four product categories, placed directly under
 * the hero so visitors can jump straight into the portfolio.
 */
export default function ProductHighlights({ onSelectCategory }) {
  const [ref, isVisible] = useReveal()

  return (
    <section className="highlights" aria-labelledby="highlights-heading">
      <div className="container">
        <div
          ref={ref}
          className={`highlights__head reveal ${isVisible ? 'is-visible' : ''}`.trim()}
        >
          <p className="section-heading__label">{productsContent.label}</p>
          <h2 className="highlights__title" id="highlights-heading">
            {productsContent.heading}
          </h2>
          <p className="highlights__text">{productsContent.text}</p>
        </div>

        <ul className="highlights__grid">
          {categories.map((category, index) => {
            const count = getProductsByCategory(category.id).length
            return (
              <li
                className={`highlight-card reveal ${isVisible ? 'is-visible' : ''}`.trim()}
                key={category.id}
                style={{ '--i': index, '--reveal-delay': `${index * 90}ms` }}
              >
                <button
                  type="button"
                  className="highlight-card__btn"
                  onClick={() => onSelectCategory?.(category.id)}
                >
                  <span className="highlight-card__media">
                    <SmartImage
                      className="highlight-card__image"
                      src={category.image}
                      alt={category.imageAlt}
                      label={category.name}
                      width="600"
                      height="450"
                    />
                  </span>
                  <span className="highlight-card__body">
                    <span className="highlight-card__name">{category.name}</span>
                    <span className="highlight-card__tagline">{category.tagline}</span>
                    <span className="highlight-card__meta">
                      {count} {count === 1 ? 'product' : 'products'}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
