import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Products({ onEnquire }) {
  return (
    <section className="products section" id="products">
      <div className="container">
        <SectionHeader
          eyebrow="Our Products"
          title="Natural Ingredients. Consistent Quality."
          subtitle="A focused portfolio of premium Indian agricultural ingredients for food, wellness and nutraceutical applications."
          align="center"
        />
        <div className="products__grid">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className="products__cell">
              <ProductCard product={product} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}