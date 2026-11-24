import { ArrowRight } from 'lucide-react';
import { categories } from '../data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './ProductOverview.css';

export default function ProductOverview() {
  return (
    <section id={categories.id} className="section section--tint categories">
      <div className="container">
        <SectionHeading
          eyebrow={categories.eyebrow}
          title={categories.heading}
          intro={categories.intro}
          centered
        />

        <div className="categories__grid">
          {categories.cards.map((card, index) => (
            <Reveal key={card.title} className={`category-card category-card--${card.accent}`} delay={index * 120}>
              <div className="category-card__media">
                <img src={card.image.src} alt={card.image.alt} loading="lazy" />
                <span className="category-card__number">{card.number}</span>
              </div>
              <div className="category-card__body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="category-card__tags">
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="btn btn-outline category-card__cta" href={card.cta.href}>
                  {card.cta.label} <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
