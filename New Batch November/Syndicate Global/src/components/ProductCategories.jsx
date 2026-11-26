import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './ProductCategories.css';

const categories = [
  {
    number: '01',
    tag: 'Perishable',
    title: 'Perishable Agro-Produce',
    text: 'Fresh Indian Red Onions, G4 Green Chillies, and seasonal fruits & vegetables managed with strict cold-chain discipline.',
    image: '/images/green-chillies-market.webp',
    alt: 'Freshly harvested green chillies piled at an Indian produce market',
    href: '#agriculture',
    linkLabel: 'Explore Range',
    className: 'category-card--agri',
  },
  {
    number: '02',
    tag: 'Non-Perishable',
    title: 'Non-Perishable Commodities',
    text: 'Shelf-stable agricultural staples, grains, pulses, and spices graded, cleaned, and packed for global transit.',
    image: '/images/warehouse-cartons.webp',
    alt: 'Packed commodity cartons stored in a warehouse ready for export',
    href: '#contact',
    linkLabel: 'Request Details',
    className: 'category-card--commodities',
  },
  {
    number: '03',
    tag: 'Technical Textiles',
    title: 'Precision Technical Textiles',
    text: 'Custom jacquard and plain polyester narrow fabric woven border tapes engineered for mat and industrial manufacturing.',
    image: '/images/woven-tapes.webp',
    alt: 'Close-up of narrow woven tape rolls in beige and gold tones',
    href: '#textiles',
    linkLabel: 'Explore Range',
    className: 'category-card--textile',
  },
  {
    number: '04',
    tag: 'Industrial Inputs',
    title: 'Industrial Granules & Metals',
    text: 'Commercial-grade polymer granules (virgin & reprocessed) and industrial ferrous & non-ferrous metals sourced strictly to buyer specifications.',
    image: '/images/container-yard.webp',
    alt: 'Shipping containers stacked at an export yard ready for industrial cargo',
    href: '#contact',
    linkLabel: 'Request Details',
    className: 'category-card--industrial',
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="section section--tight product-categories" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Our Product Portfolio</p>
          <h2 id="products-title" className="section-title">
            Our Products. <span className="text-gold">Your Global Sourcing Advantage.</span>
          </h2>
          <p className="section-lead">
            From perishable produce and shelf-stable staples to technical textiles,
            polymer granules, and industrial metals, we deliver with a focus on quality,
            consistency, and international requirements.
          </p>
        </Reveal>

        <div className="product-categories__grid">
          {categories.map((item, index) => (
            <Reveal key={item.number} delay={index * 120}>
              <a className={`category-card ${item.className}`} href={item.href}>
                <img src={item.image} alt={item.alt} width="1800" height="1200" loading="lazy" />
                <span className="category-card__overlay" aria-hidden="true" />
                <span className="category-card__content">
                  <span className="category-card__top">
                    <span className="category-card__number">{item.number}</span>
                    <span className="category-card__tag">{item.tag}</span>
                  </span>
                  <span className="category-card__title">{item.title}</span>
                  <span className="category-card__text">{item.text}</span>
                  <span className="category-card__link">
                    {item.linkLabel} <ArrowUpRight aria-hidden="true" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
