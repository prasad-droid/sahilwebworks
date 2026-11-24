import { ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { BULK_NOTE, PRODUCTS, quoteMessage, whatsappLink } from '../data/site';

const Products = ({ onBuyNow }) => {
  return (
    <section className="section products" id="products">
      <div className="shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Direct retail · Bulk enquiries</p>
            <h2>Products</h2>
            <p className="section-lead">
              All SKUs are available for B2B, bulk and custom enquiries. Moringa Powder is the
              only product you can order directly with Cash on Delivery — request a quote on
              WhatsApp for the other products.
            </p>
          </div>
          <a
            className="text-link"
            href={whatsappLink(quoteMessage())}
            target="_blank"
            rel="noreferrer"
          >
            Request Quote <ArrowUpRight size={17} strokeWidth={2} />
          </a>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => {
            const isDirectSale = Boolean(product.retail);

            return (
              <article className="product-card is-available" key={product.id}>
                <div className="product-media">
                  <img src={product.image} alt={product.imageAlt} loading="lazy" />
                  <span className="product-index">{product.id}</span>
                  <span className="status-badge status-live">Available now</span>
                </div>

                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p className="product-botanical">{product.botanical}</p>

                  {isDirectSale ? (
                    <>
                      <div className="retail-panel">
                        <p className="panel-label">Retail · 200 g pouch</p>
                        <dl className="spec-list">
                          <div>
                            <dt>Fineness</dt>
                            <dd>{product.retail.fineness}</dd>
                          </div>
                          <div>
                            <dt>Drying</dt>
                            <dd>{product.retail.drying}</dd>
                          </div>
                          <div>
                            <dt>Pack</dt>
                            <dd>{product.retail.pack}</dd>
                          </div>
                          <div>
                            <dt>Price</dt>
                            <dd>{product.retail.price}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="bulk-panel">
                        <p className="panel-label">B2B / bulk / custom</p>
                        <p>{product.bulk}</p>
                      </div>

                      <div className="product-actions">
                        <button
                          className="btn btn-gold buy-button"
                          type="button"
                          onClick={() => onBuyNow(product)}
                        >
                          <ShoppingBag size={16} strokeWidth={2} /> Buy with COD
                        </button>
                        <a
                          className="product-link"
                          href={whatsappLink(quoteMessage(product.name))}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle size={15} strokeWidth={2} /> Request Quote
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <dl className="spec-list">
                        <div>
                          <dt>Indicative spec</dt>
                          <dd>{product.spec}</dd>
                        </div>
                        <div>
                          <dt>Availability</dt>
                          <dd>B2B / bulk enquiries</dd>
                        </div>
                      </dl>

                      <div className="bulk-panel">
                        <p className="panel-label">B2B / bulk / custom</p>
                        <p>{BULK_NOTE}</p>
                      </div>

                      <div className="product-actions">
                        <a
                          className="btn btn-gold request-quote-button"
                          href={whatsappLink(quoteMessage(product.name))}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle size={16} strokeWidth={2} /> Request Quote
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
