import { Check } from 'lucide-react';
import { packaging } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Packaging.css';

export default function Packaging() {
  return (
    <section id={packaging.id} className="section packaging">
      <div className="container">
        <SectionHeading
          eyebrow={packaging.eyebrow}
          title={packaging.heading}
          intro={packaging.intro}
          centered
        />

        <div className="packaging__grid">
          {packaging.blocks.map((block, index) => (
            <Reveal key={block.title} className={`packaging-card packaging-card--${block.accent}`} delay={index * 120}>
              <div className="packaging-card__media">
                <img src={block.image.src} alt={block.image.alt} loading="lazy" />
                <span className="packaging-card__icon">
                  <Icon name={block.icon} size={22} strokeWidth={1.7} />
                </span>
              </div>
              <div className="packaging-card__body">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>
                      <Check size={16} strokeWidth={2.2} /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="packaging__banner" image delay={120}>
          <img src={packaging.supportingImage.src} alt={packaging.supportingImage.alt} loading="lazy" />
          <div className="packaging__banner-overlay">
            <span className="eyebrow">Handled with care</span>
            <p>Every packing and transit arrangement is confirmed against the product, destination and buyer requirement.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
