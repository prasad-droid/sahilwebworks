import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { textiles } from '../data/site';
import { requestProductDetails } from '../utils/inquiry';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './TextileProducts.css';

export default function TextileProducts() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id={textiles.id} className="section section--tint textiles">
      <div className="container">
        <div className="textiles__intro-grid">
          <SectionHeading eyebrow={textiles.eyebrow} title={textiles.heading} />
          <Reveal className="textiles__description" delay={90}>
            <p>{textiles.description}</p>
            <a className="btn btn-primary" href="#contact" onClick={() => requestProductDetails('Narrow Fabric Woven Tapes')}>
              {textiles.cta.label} <ArrowRight size={17} />
            </a>
          </Reveal>
        </div>

        <div className="textiles__showcase">
          <Reveal className="textiles__gallery" image>
            <div className="textiles__main-image">
              <img src={textiles.gallery[activeImage].src} alt={textiles.gallery[activeImage].alt} loading="lazy" />
              <span className="textiles__caption">{textiles.gallery[activeImage].caption}</span>
            </div>
            <div className="textiles__thumbs" role="group" aria-label="Product image gallery">
              {textiles.gallery.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  className={`textiles__thumb ${index === activeImage ? 'is-active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${image.caption}`}
                  aria-pressed={index === activeImage}
                >
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="textiles__features" delay={120}>
            <h3>Built to the requirement, not to a catalogue.</h3>
            <div className="textiles__feature-grid">
              {textiles.features.map((feature) => (
                <div className="textile-feature" key={feature.title}>
                  <span className="textile-feature__icon">
                    <Check size={16} strokeWidth={2.2} />
                  </span>
                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="textiles__applications">
              <span className="eyebrow">Applications</span>
              <div className="textiles__application-list">
                {textiles.applications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
