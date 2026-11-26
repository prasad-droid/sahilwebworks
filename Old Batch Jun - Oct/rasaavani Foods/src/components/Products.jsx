import { useState } from 'react'
import ProductCard from './ProductCard.jsx'
import ProductModal from './ProductModal.jsx'
import { products } from '../data/products.js'
import { requestEnquiry } from '../utils/enquiry.js'
import '../styles/products.css'

export default function Products() {
  const [selected, setSelected] = useState(null)

  const handleEnquire = (product) => {
    requestEnquiry({ enquiryType: 'Product Enquiry', product: product.name })
  }

  return (
    <section id="products" className="section section--cream products">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow eyebrow--center">Our Products</p>
          <h2>A Journey Through India&rsquo;s Traditional Food Heritage</h2>
          <p>
            Lal Mirch Bharwa Achaar is only the beginning. We are building a
            collection of authentic Indian food products inspired by
            traditional recipes and preservation techniques.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={(index % 3) * 90}
              onDetails={setSelected}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        <div className="products__coming section--texture" data-reveal>
          <div className="products__coming-inner">
            <p className="eyebrow">Coming Soon</p>
            <h3>The Rasavaani Kitchen Is Just Getting Started.</h3>
            <p>
              Today, it is Lal Mirch Bharwa Achaar. Tomorrow, there will be many
              more stories to taste. We are exploring traditional recipes from
              different parts of India&mdash;recipes that deserve to be
              rediscovered, experienced and shared with a new generation.
            </p>
            <div className="btn-group products__coming-actions">
              <a href="#signature" className="btn btn--primary">
                Explore Products
              </a>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() =>
                  requestEnquiry({ enquiryType: 'General Enquiry' })
                }
              >
                Join Our Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
