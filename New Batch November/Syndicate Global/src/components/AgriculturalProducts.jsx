import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './AgriculturalProducts.css';

const chilliPoints = [
  'Harvested during cool early morning hours',
  'Graded for size uniformity and surface quality',
  'Pre-cooled to remove field heat',
  'Packed in ventilated CFB cartons',
  'Cold-chain handling for freshness preservation',
];

const onionPoints = [
  'Proper field curing',
  'Uniform bulb size and firmness',
  'Export-grade quality grading',
  'Ventilated mesh packaging',
  'Transit-conscious handling',
];

const onionVarieties = [
  { name: 'Red Onions', image: '/images/onion-red.webp', alt: 'Freshly harvested red onions with papery skins' },
  { name: 'Pink Onions', image: '/images/onion-pink.webp', alt: 'Pink onions piled in a market basket' },
  { name: 'White Onions', image: '/images/onion-white.webp', alt: 'Fresh white onions on a rustic wooden surface' },
];

function QualityList({ items }) {
  return (
    <ul className="agri-product__list">
      {items.map((item) => (
        <li key={item}>
          <span><Check aria-hidden="true" /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AgriculturalProducts() {
  return (
    <section id="agriculture" className="section agriculture" aria-labelledby="agriculture-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Flagship Range · Perishable Agro-Produce</p>
          <h2 id="agriculture-title" className="section-title">
            Fresh from Indian fields. <span className="text-gold">Ready for global markets.</span>
          </h2>
          <p className="section-lead">
            Sourced from established growing regions and handled with discipline at
            every stage, our produce is prepared to arrive in the condition your
            customers expect.
          </p>
        </Reveal>

        <article className="agri-product">
          <Reveal className="agri-product__visual" image>
            <img
              src="/images/green-chillies.webp"
              alt="Fresh G4 green chillies with stems, graded and ready for packing"
              width="1800"
              height="1200"
              loading="lazy"
            />
            <span className="agri-product__visual-tag">Product A</span>
          </Reveal>
          <Reveal className="agri-product__content" delay={100}>
            <p className="agri-product__eyebrow">Green Chillies</p>
            <h3>G4 Green Chillies</h3>
            <p className="agri-product__desc">
              Premium G4 Green Chillies sourced from selected growing regions in India.
            </p>
            <h4>Quality &amp; Handling</h4>
            <QualityList items={chilliPoints} />
            <a className="btn btn--dark-outline" href="#contact">
              Request Specifications <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        </article>

        <article className="agri-product agri-product--reverse">
          <Reveal className="agri-product__visual" image>
            <img
              src="/images/onions-market.webp"
              alt="Fresh red and white onions displayed at a produce market"
              width="787"
              height="1400"
              loading="lazy"
            />
            <span className="agri-product__visual-tag">Product B</span>
          </Reveal>
          <Reveal className="agri-product__content" delay={100}>
            <p className="agri-product__eyebrow">Fresh Onions</p>
            <h3>Fresh Indian Onions</h3>
            <div className="agri-product__varieties" aria-label="Available onion varieties">
              <span>Red Onions</span><span>Pink Onions</span><span>White Onions</span>
            </div>
            <p className="agri-product__desc">
              Fresh Indian onions sourced from established growing regions and prepared
              for international markets.
            </p>
            <h4>Quality &amp; Handling</h4>
            <QualityList items={onionPoints} />
            <a className="btn btn--dark-outline" href="#contact">
              Request Specifications <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        </article>

        <Reveal className="onion-varieties">
          <p className="onion-varieties__label">Available onion varieties</p>
          <div className="onion-varieties__grid">
            {onionVarieties.map((variety, index) => (
              <Reveal as="figure" className="variety-card" key={variety.name} delay={index * 90}>
                <img src={variety.image} alt={variety.alt} width="1800" height="1200" loading="lazy" />
                <figcaption>{variety.name}</figcaption>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
