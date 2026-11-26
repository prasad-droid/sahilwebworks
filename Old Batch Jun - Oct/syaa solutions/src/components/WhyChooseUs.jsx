import { Globe2, Layers, MessageSquare, Package } from 'lucide-react';
import { whyChooseUs } from '../data/site.js';

const icons = { package: Package, layers: Layers, globe: Globe2, messages: MessageSquare };

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section why-section" aria-labelledby="why-title">
      <div className="container">
        <div className="section-heading section-heading-center" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Why Choose SYAA SOLUTION
          </p>
          <h2 id="why-title">A Practical Partner for Modern Business.</h2>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((feature, index) => {
            const Icon = icons[feature.icon] || Package;
            return (
              <article className="why-card" key={feature.title} data-reveal>
                <span className="why-number">0{index + 1}</span>
                <span className="why-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.7} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
