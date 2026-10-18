import { useCallback, useEffect, useState } from 'react';
import { business } from '../data/data';
import '../styles/hero.css';

const trustBadges = [
  { icon: 'origin', label: 'Indian Origin' },
  { icon: 'premium', label: 'Premium Product' },
  { icon: 'export', label: 'Export Focused' },
  { icon: 'global', label: 'Global Buyer Connect' },
];

const heroSlides = [
  {
    src: '/images/slide-1.jpeg',
    label: 'Product 1',
    alt: 'GOURI GLOBAL TRADE product — slide 1',
  },
  {
    src: '/images/slide-2.jpeg',
    label: 'Product 2',
    alt: 'GOURI GLOBAL TRADE product — slide 2',
  },
  {
    src: '/images/slide-3.jpeg',
    label: 'Product 3',
    alt: 'GOURI GLOBAL TRADE product — slide 3',
  },
  {
    src: '/images/slide-4.jpeg',
    label: 'Product 4',
    alt: 'GOURI GLOBAL TRADE product — slide 4',
  },
  {
    src: '/images/slide-5.jpeg',
    label: 'Product 5',
    alt: 'GOURI GLOBAL TRADE product — slide 5',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section id="home" className="hero">
      <div className="hero__deco hero__deco--one" aria-hidden="true" />
      <div className="hero__deco hero__deco--two" aria-hidden="true" />
      <div className="hero__deco hero__deco--three" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Premium Indian Food Exports</span>
          <h1 className="hero__title">
            Sourcing Locally.
            <span className="hero__title-accent"> Serving Globally.</span>
          </h1>
          <p className="hero__subtitle">Premium Gir Cow Ghee for Markets Around the World</p>
          <p className="hero__desc">
            {business.name} is a merchant export business connecting quality Indian
            food products with buyers across the globe. From {business.type === 'Merchant Exporter' ? 'handpicked Gir Cow Ghee' : 'premium Indian food products'} to
            traditional Indian sweets, we bring authentic flavours to international markets.
          </p>
          <div className="hero__actions">
            <a href="#product" className="btn btn--primary">
              Explore Our Product
            </a>
            <a href="#contact" className="btn btn--outline">
              Connect With Us
            </a>
          </div>

          <ul className="hero__badges" aria-label="Key trust points">
            {trustBadges.map((badge) => (
              <li key={badge.label} className="hero__badge">
                <span className={`hero__badge-icon icon-${badge.icon}`} aria-hidden="true" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div
            className="hero__image-wrap"
            role="region"
            aria-roledescription="carousel"
            aria-label="Our products"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="hero__image-frame">
              {heroSlides.map((slide, i) => (
                <img
                  key={`${slide.src}-backdrop`}
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  className={`hero__image-backdrop ${i === current ? 'is-active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
              {heroSlides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`hero__image ${i === current ? 'is-active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  aria-hidden={i !== current}
                />
              ))}
            </div>

            <button
              type="button"
              className="hero__slide-btn hero__slide-btn--prev"
              onClick={prev}
              aria-label="Previous product"
            >
              ‹
            </button>
            <button
              type="button"
              className="hero__slide-btn hero__slide-btn--next"
              onClick={next}
              aria-label="Next product"
            >
              ›
            </button>

            <div className="hero__dots" role="tablist" aria-label="Product slides">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`hero__dot ${i === current ? 'is-active' : ''}`}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-label={`Show ${slide.label}`}
                  aria-selected={i === current}
                />
              ))}
            </div>

            <div className="hero__tag hero__tag--top" aria-hidden="true">
              <span className="hero__tag-icon">✦</span> India&apos;s Finest
            </div>
            <div className="hero__tag hero__tag--bottom" aria-hidden="true">
              <span className="hero__tag-icon">🌍</span> Made for Global Markets
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}