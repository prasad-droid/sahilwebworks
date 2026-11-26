import { ArrowRight, Leaf, Layers3 } from 'lucide-react';
import { whyUs } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section id={whyUs.id} className="section portfolio">
      <div className="container">
        <div className="portfolio__head">
          <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.heading} intro={whyUs.intro} />
          <Reveal className="portfolio__quick-links" delay={90}>
            <a href="#agriculture">
              <Leaf size={18} strokeWidth={1.7} /> Agricultural produce <ArrowRight size={15} />
            </a>
            <a href="#textiles">
              <Layers3 size={18} strokeWidth={1.7} /> Technical textiles <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="portfolio__grid">
          {whyUs.cards.map((card, index) => (
            <Reveal key={card.title} className="portfolio-card" delay={index * 80}>
              <span className="portfolio-card__icon">
                <Icon name={card.icon} size={26} strokeWidth={1.5} />
              </span>
              <span className="portfolio-card__number">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="portfolio-card__rule" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
