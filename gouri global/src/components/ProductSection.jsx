import { products } from '../data/data';
import { waLink } from '../utils/whatsapp';
import Reveal from './Reveal';
import ProductCard from './ProductCard';
import '../styles/products.css';

export default function ProductSection() {
  const featured = products[0];

  const scrollToEnquiry = (productName) => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppGhee = () => {
    const message =
      'Hello GOURI GLOBAL TRADE, I am interested in Gir Cow Ghee. Please share product details, pricing and export information.';
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="product" className="section product">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">Our Range</span>
            <h2 className="section-title">Our Featured Product</h2>
            <p className="section-subtitle">
              Gir Cow Ghee — Bringing the richness of Indian tradition to global markets.
            </p>
          </Reveal>
        </div>

        {/* Featured product */}
        <Reveal className="product__featured-wrap">
          <div className="product__featured">
            <div className="product__featured-media">
              <img
                src="/images/products-collage.jpeg"
                alt="Gir Cow Ghee and the GOURI GLOBAL TRADE product range"
                className="product__featured-image"
                loading="lazy"
              />
              <div className="product__featured-badge" aria-hidden="true">
                <span className="product__featured-badge-icon">✦</span>
                Signature Product
              </div>
            </div>

            <div className="product__featured-body">
              <span className="product__featured-eyebrow">Featured</span>
              <h3 className="product__featured-name">{featured.name}</h3>
              <p className="product__featured-desc">{featured.description}</p>

              <dl className="product__featured-specs">
                <div className="product__spec">
                  <dt>HS Code</dt>
                  <dd>{featured.hsCode}</dd>
                </div>
                <div className="product__spec">
                  <dt>Pack Sizes</dt>
                  <dd>{featured.sizes}</dd>
                </div>
                <div className="product__spec">
                  <dt>Packaging</dt>
                  <dd>{featured.packaging}</dd>
                </div>
                <div className="product__spec">
                  <dt>MOQ</dt>
                  <dd>{featured.moq}</dd>
                </div>
              </dl>

              <div className="product__featured-actions">
                <button
                  className="btn btn--primary"
                  onClick={() => scrollToEnquiry(featured.name)}
                >
                  Request Quotation
                </button>
                <button className="btn btn--accent" onClick={handleWhatsAppGhee}>
                  Enquire via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Product portfolio */}
        <div className="product__grid">
          {products.slice(1).map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} onEnquire={scrollToEnquiry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}