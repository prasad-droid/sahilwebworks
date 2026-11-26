import { useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { ProductCard } from './ProductCard.jsx';
import { ProductDetails } from './ProductDetails.jsx';
import { Icon } from './Icons.jsx';
import { products } from '../data/products.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

const FILTERS = [
  { id: 'all', label: 'All Products' },
  { id: 'powders', label: 'Powders & Ingredients' },
  { id: 'spices', label: 'Spices' },
  { id: 'agri', label: 'Grains & Agro' },
];

const BUCKETS = {
  powders: ['Dehydrated Ingredients', 'Spices & Powders', 'Herbal Ingredients', 'Fruit Powders'],
  spices: ['Whole & Ground Spices', 'Spices & Powders'],
  agri: ['Grains & Cereals', 'Dried Fruits', 'Multi-Product Sourcing'],
};

export function Products() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);
  const { startEnquiry } = useEnquiry();

  const visible = useMemo(() => {
    if (filter === 'all') return products;
    const buckets = BUCKETS[filter] || [];
    return products.filter((p) => buckets.includes(p.category));
  }, [filter]);

  return (
    <section className="products section section--surface" id="products" aria-labelledby="products-heading">
      <div className="container container--wide">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Indian Agricultural &amp; <span className="text-accent">Food Products</span>
            </>
          }
          description="We source a wide range of Indian agricultural and food products for bulk B2B orders and international buyers."
          align="center"
        >
          <div className="products__filters" role="group" aria-label="Filter products by category">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`products__filter ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionHeading>

        <ul className="products__grid">
          {visible.map((product, i) => (
            <Reveal
              as="li"
              key={product.id}
              className="products__cell"
              delay={Math.min(i, 5) * 70}
            >
              <ProductCard product={product} index={i} onOpenDetails={setActive} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="products__foot" delay={100}>
          <div className="products__foot-inner">
            <div>
              <h3 className="products__foot-title">Looking for something specific?</h3>
              <p className="products__foot-text">
                We are a multi-product exporter. Share your requirement and we will confirm what we
                can source and quote.
              </p>
            </div>
            <div className="products__foot-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
              >
                Send Bulk Inquiry
                <Icon name="arrowRight" size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <ProductDetails product={active} onClose={() => setActive(null)} />
    </section>
  );
}

export default Products;
