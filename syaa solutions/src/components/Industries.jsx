import { Building2, Coffee, Factory, Gift, ShoppingBag, Utensils } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { industries } from '../data/site.js';

const icons = [ShoppingBag, Coffee, Factory, Building2, Utensils, Gift];

export default function Industries() {
  return (
    <section id="industries" className="section industries-section" aria-labelledby="industries-title">
      <div className="container">
        <div className="section-heading section-heading-center" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Industries We Serve
          </p>
          <h2 id="industries-title">Packaging Solutions Across Multiple Industries.</h2>
          <p className="section-lead">
            From online businesses and bakeries to hospitality and manufacturing, we understand that
            every industry has different packaging requirements.
          </p>
        </div>

        <div className="industry-grid">
          {industries.map((industry, index) => {
            const Icon = icons[index] || ShoppingBag;
            return (
              <article className="industry-card" key={industry.name} data-reveal>
                <div className="industry-media">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.imageAlt}
                    width="640"
                    height="480"
                  />
                </div>
                <div className="industry-body">
                  <span className="industry-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
