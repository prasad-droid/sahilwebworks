import { useState } from 'react';
import { ArrowDown, Check, Minus, Plus } from 'lucide-react';
import { agriculture } from '../data/site';
import { requestProductDetails } from '../utils/inquiry';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './AgriculturalProducts.css';

export default function AgriculturalProducts() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section id={agriculture.id} className="section section--beige agriculture">
      <div className="container">
        <SectionHeading
          eyebrow={agriculture.eyebrow}
          title={agriculture.heading}
          intro={agriculture.intro}
        />

        <div className="agriculture__grid">
          {agriculture.products.map((product, index) => {
            const isOpen = openCard === product.name;
            return (
              <Reveal key={product.name} className="product-card" delay={(index % 2) * 110}>
                <div className="product-card__media">
                  <img src={product.image.src} alt={product.image.alt} loading="lazy" />
                  <span className="product-card__origin">India · Fresh produce</span>
                </div>
                <div className="product-card__body">
                  <span className="product-card__subtitle">{product.subtitle}</span>
                  <h3>{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>

                  <ul className="product-card__highlights">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Check size={15} strokeWidth={2.4} /> {highlight}
                      </li>
                    ))}
                  </ul>

                  {product.process && (
                    <div className={`product-card__process ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        className="product-card__process-toggle"
                        aria-expanded={isOpen}
                        onClick={() => setOpenCard(isOpen ? null : product.name)}
                      >
                        {isOpen ? 'Hide handling process' : 'View handling process'}
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                      <ol className="product-card__steps">
                        {product.process.map((step, stepIndex) => (
                          <li key={step}>
                            <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <button
                    type="button"
                    className="btn btn-primary product-card__cta"
                    onClick={() => requestProductDetails(product.name)}
                  >
                    {agriculture.cta.label} <ArrowDown size={16} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="agriculture__note">
          <span className="pill">Specification policy</span>
          <p>{agriculture.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
