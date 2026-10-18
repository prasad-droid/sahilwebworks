import { allPackagingSizes, products } from '../data/products.js'
import { packagingContent } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/packaging.css'

/** Which product categories are offered in a given pack size. */
function categoriesForSize(size) {
  const names = new Set(
    products.filter((product) => product.packaging.includes(size)).map((product) => product.category),
  )
  return [...names]
}

export default function Packaging() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="packaging" id="packaging" aria-labelledby="packaging-heading">
      <div className="container">
        <SectionHeading
          label={packagingContent.label}
          heading={packagingContent.heading}
          text={packagingContent.text}
          id="packaging-heading"
        />

        <ul className={`packaging__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {allPackagingSizes.map((size, index) => {
            const categories = categoriesForSize(size)
            return (
              <li
                className="pack-visual"
                key={size}
                style={{ '--i': index, '--reveal-delay': `${index * 70}ms` }}
              >
                <div className="pack-visual__pouch" aria-hidden="true">
                  <span className="pack-visual__crimp" />
                  <span className="pack-visual__label">
                    <span className="pack-visual__brand">Krishima</span>
                    <span className="pack-visual__size">{size}</span>
                  </span>
                </div>
                <p className="pack-visual__size-text">{size}</p>
                <p className="pack-visual__categories">{categories.join(' · ')}</p>
              </li>
            )
          })}
        </ul>

        <p className="packaging__note">{packagingContent.visualNote}</p>
      </div>
    </section>
  )
}
