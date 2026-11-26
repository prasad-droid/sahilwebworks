import {
  ArrowUpRight,
  CookingPot,
  Factory,
  Snowflake,
  Wheat,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { productCategories } from '../data/siteData'
import { requestProduct } from '../utils/links'
import '../styles/ProductCategories.css'

const categoryIcons = {
  Wheat,
  Factory,
  Snowflake,
  CookingPot,
}

export default function ProductCategories() {
  return (
    <section
      className="section categories"
      id="categories"
      aria-labelledby="categories-title"
    >
      <div className="container">
        <div className="categories__header">
          <Reveal>
            <SectionHeading
              id="categories-title"
              eyebrow="Product Categories"
              title="A broader food-export range, built around buyer demand."
              description="Beyond our flagship frozen French fries, we discuss additional food categories with international buyers based on their sourcing requirements."
            />
          </Reveal>
          <Reveal className="categories__header-link" delay={80}>
            <a href="#quote" className="text-link">
              Discuss a category
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="categories__grid">
          {productCategories.map((category, index) => {
            const Icon = categoryIcons[category.icon] || Snowflake
            return (
              <Reveal
                as="article"
                className={`category-card ${
                  category.featured ? 'category-card--featured' : ''
                }`}
                delay={index * 70}
                key={category.title}
              >
                <div className="category-card__media">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    width="900"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="image-credit">Representative image</span>
                  {category.badge && (
                    <span className="category-card__badge">
                      {category.badge}
                    </span>
                  )}
                  <span className="category-card__icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                </div>

                <div className="category-card__body">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <button
                    type="button"
                    className="category-card__link"
                    onClick={() => requestProduct(category.title)}
                  >
                    Enquire about this category
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="categories__note" delay={100}>
          <p>
            Product availability, packing and commercial details are confirmed
            on enquiry. Share your requirement and destination so we can
            respond with relevant information.
          </p>
          <a href="#quote" className="btn btn--dark btn--sm">
            Send an Enquiry
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
