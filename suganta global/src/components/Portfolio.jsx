import { useEffect, useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/Portfolio.css';

const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const visibleItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item, event) => {
    lastTriggerRef.current = event.currentTarget;
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  useEffect(() => {
    if (!lightboxItem) return undefined;

    document.body.classList.add('lightbox-open');
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxItem]);

  return (
    <section id="portfolio" className="portfolio section--tight section--cream">
      <div className="container">
        <SectionHeading
          eyebrow="Visual Portfolio"
          title="Our Product Portfolio"
          description="A gallery of agricultural product imagery, showcasing rice, tea and flowers."
          align="center"
        />

        <Reveal className="portfolio__filters" delay={160} y={12} role="group" aria-label="Filter portfolio by product">
          {categories.map((category) => (
            <button
              type="button"
              className={`portfolio__filter${activeCategory === category ? ' is-active' : ''}`}
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <div className="portfolio__grid">
          {visibleItems.map((item, index) => (
            <Reveal
              as="article"
              className="portfolio-item"
              key={item.id}
              delay={80 + index * 55}
              y={24}
            >
              <button
                type="button"
                className="portfolio-item__button"
                aria-label={`View ${item.caption} image`}
                onClick={(event) => openLightbox(item, event)}
              >
                <img
                  className="portfolio-item__image"
                  src={item.image}
                  alt={item.alt}
                  width="900"
                  height="675"
                  loading="lazy"
                  decoding="async"
                />
                <span className="portfolio-item__overlay" aria-hidden="true">
                  <span className="portfolio-item__category">{item.category}</span>
                  <span className="portfolio-item__caption">{item.caption}</span>
                  <span className="portfolio-item__subtitle">{item.subtitle}</span>
                </span>
                <span className="portfolio-item__zoom" aria-hidden="true">
                  <Maximize2 size={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-lightbox-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="portfolio-lightbox__panel">
            <button
              type="button"
              ref={closeButtonRef}
              className="portfolio-lightbox__close"
              aria-label="Close image preview"
              onClick={closeLightbox}
            >
              <X size={20} />
            </button>
            <img
              className="portfolio-lightbox__image"
              src={lightboxItem.image}
              alt={lightboxItem.alt}
              width="900"
              height="675"
            />
            <div className="portfolio-lightbox__content">
              <span className="portfolio-lightbox__category">{lightboxItem.category}</span>
              <h3 id="portfolio-lightbox-title" className="portfolio-lightbox__title">
                {lightboxItem.caption}
              </h3>
              <p className="portfolio-lightbox__subtitle">{lightboxItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
