import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/Products.css';

function selectProduct(productName) {
  window.dispatchEvent(
    new CustomEvent('suganta:select-product', { detail: productName }),
  );
}

export default function Products() {
  return (
    <section id="products" className="products section--tight section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Our Products"
          title="Our Agricultural Products"
          description="Rice, tea and flowers presented for international sourcing opportunities."
          align="center"
        />

        <div className="products__grid">
          {products.map((product, index) => (
            <article
              className={`product-card product-card--${product.accent}`}
              key={product.id}
            >
              <Reveal
                as="div"
                className="product-card__media"
                delay={120 + index * 70}
                y={28}
              >
                <img
                  className="product-card__image"
                  src={product.image}
                  alt={product.imageAlt}
                  width="900"
                  height="675"
                  loading="lazy"
                  decoding="async"
                />
                <span className="product-card__index" aria-hidden="true">
                  {product.index}
                </span>
              </Reveal>

              <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                <a
                  className="btn btn--gold btn--block product-card__enquiry"
                  href="#contact"
                  aria-label={`Enquire about ${product.name} using the contact form`}
                  onClick={() => selectProduct(product.name)}
                >
                  {product.enquiryLabel}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
