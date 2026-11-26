import { getProductsByCategory } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import useReveal from '../hooks/useReveal.js'
import '../styles/products.css'

/**
 * One product family (Masala, Mukhwas, Farali Flour, Multigrain Flour).
 * The heading, description, products and pack sizes all come from the
 * centralised data file.
 */
export default function ProductCategory({ category, onViewProduct, isActive }) {
  const [ref, isVisible] = useReveal()
  const items = getProductsByCategory(category.id)
  const { packaging } = items[0] ?? { packaging: [] }

  return (
    <article
      className={`category reveal ${isVisible ? 'is-visible' : ''} ${isActive ? 'is-highlighted' : ''}`.trim()}
      id={`category-${category.id}`}
      ref={ref}
      aria-labelledby={`category-${category.id}-heading`}
    >
      <header className="category__head">
        <div className="category__intro">
          <p className="category__eyebrow">{category.tagline}</p>
          <h3 className="category__title" id={`category-${category.id}-heading`}>
            {category.heading ?? category.name}
          </h3>
          <p className="category__description">{category.description}</p>
          {packaging.length ? (
            <p className="category__packs">
              <span className="category__packs-label">Available packaging</span>
              <span className="category__packs-list">
                {packaging.map((size) => (
                  <span className="pack-chip" key={size}>
                    {size}
                  </span>
                ))}
              </span>
            </p>
          ) : null}
        </div>

        <div className="category__media">
          <img
            className="category__image"
            src={category.image}
            alt={category.imageAlt}
            loading="lazy"
            decoding="async"
            width="720"
            height="480"
          />
        </div>
      </header>

      <ul className="products__grid">
        {items.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} onView={onViewProduct} />
          </li>
        ))}
      </ul>
    </article>
  )
}
