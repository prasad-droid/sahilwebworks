import Products from './Products'
import SectionHeading from './SectionHeading'
import '../styles/products.css'

export default function BusinessOverview({ onRequestQuote }) {
  return (
    <section id="products" className="section products-section" aria-labelledby="products-title">
      <div className="container">
        <SectionHeading
          eyebrow="Business & Products"
          titleId="products-title"
          title="Explore Business Opportunities with Sunscape Enterprises."
          description="Discover our business offerings and connect with us for product requirements, sourcing opportunities, and trading inquiries."
          align="center"
        />
        <Products onRequestQuote={onRequestQuote} />
      </div>
    </section>
  )
}
