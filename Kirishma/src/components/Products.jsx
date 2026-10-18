import { categories } from '../data/products.js'
import ProductCategory from './ProductCategory.jsx'
import SectionHeading from './SectionHeading.jsx'
import { productsContent } from '../data/content.js'
import '../styles/products.css'

/**
 * The main product portfolio. Renders one <ProductCategory> per category
 * straight from the centralised product data.
 */
export default function Products({ onViewProduct, activeCategoryId }) {
  return (
    <section className="products" id="products" aria-labelledby="products-heading">
      <div className="container">
        <SectionHeading
          label={productsContent.label}
          heading={productsContent.heading}
          text={productsContent.text}
          id="products-heading"
        />

        <nav className="products__jump" aria-label="Product categories">
          {categories.map((category) => (
            <a className="products__jump-link" key={category.id} href={`#category-${category.id}`}>
              {category.name}
            </a>
          ))}
        </nav>

        <div className="products__list">
          {categories.map((category) => (
            <ProductCategory
              key={category.id}
              category={category}
              onViewProduct={onViewProduct}
              isActive={activeCategoryId === category.id}
            />
          ))}
        </div>

        <p className="products__note">{productsContent.note}</p>
      </div>
    </section>
  )
}
