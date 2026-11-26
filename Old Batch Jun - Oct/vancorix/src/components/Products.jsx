import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, whatsappLink } from '../data/site';

const Products = () => {
  return (
    <section className="section products" id="products">
      <div className="shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Spec sheet · 08 SKUs</p>
            <h2>Product contract</h2>
            <p className="section-lead">
              Defined mesh, packing and minimum order quantities — so your sourcing desk
              can compare and decide quickly.
            </p>
          </div>
          <a className="text-link" href="#quote">
            Full catalogue <ArrowUpRight size={17} strokeWidth={2} />
          </a>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-media">
                <img src={product.image} alt={`${product.name} in a dish`} loading="lazy" />
                <span className="product-index">{product.id}</span>
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p className="product-botanical">{product.botanical}</p>
                <dl className="spec-list">
                  <div>
                    <dt>Mesh</dt>
                    <dd>{product.mesh}</dd>
                  </div>
                  <div>
                    <dt>Pack</dt>
                    <dd>{product.pack}</dd>
                  </div>
                  <div>
                    <dt>MOQ</dt>
                    <dd>{product.moq}</dd>
                  </div>
                </dl>
                <a
                  className="product-link"
                  href={whatsappLink(`Hello Vancorix, please share the spec sheet and current terms for ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Request spec sheet <ArrowUpRight size={15} strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
