import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import { products } from '../data/siteData'
import '../styles/Products.css'

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="What We Trade"
          title="Our Products"
          subtitle="Focused trading in flexible cables for buyers seeking dependable international business coordination."
          center
        />

        <div className="products__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="products__note" data-reveal>
          Need something specific? Share your requirement and our team will discuss the
          available options with you.
        </p>
      </div>
    </section>
  )
}
