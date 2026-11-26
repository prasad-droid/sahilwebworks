import { productCategories } from '../data/siteData'
import { requestEnquiry } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/ProductCategories.css'

export default function ProductCategories() {
  return (
    <section className="section section--alt categories" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Our Products</p>
          <h2 className="section-title" id="products-title">
            Engineering Products &amp; Categories
          </h2>
          <p className="section-subtitle">
            Explore engineering goods and industrial products supplied by GLOBAL ENTERPRISES.
            Contact us with your requirements to discuss product availability and specifications.
          </p>
        </div>

        <div className="categories__grid">
          {productCategories.map((category, index) => (
            <article
              className={`category-card reveal delay-${(index % 3) + 1}`}
              key={category.id}
            >
              <div className="category-card__media">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  width="800"
                  height="600"
                />
                {category.isPlaceholder && (
                  <span className="category-card__tag">Placeholder</span>
                )}
              </div>
              <div className="category-card__body">
                <h3 className="category-card__title">{category.name}</h3>
                <p className="category-card__text">{category.description}</p>
                <div className="category-card__actions">
                  <a
                    href="#enquiry"
                    className="btn btn--primary btn--sm"
                    onClick={() => requestEnquiry(category.name)}
                  >
                    Enquire Now
                  </a>
                  <a href="#featured" className="category-card__link">
                    View Products
                    <Icon name="arrowRight" size={16} className="icon-trailing" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="categories__note reveal">
          <Icon name="clipboard" size={18} />
          Product categories shown above are placeholders. The final catalogue, images and
          descriptions can be added in{' '}
          <code>src/data/siteData.js</code> without changing any layout.
        </p>
      </div>
    </section>
  )
}
