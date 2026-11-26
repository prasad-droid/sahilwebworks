import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { hero } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal className="hero__eyebrow">
            <span className="pill">{hero.eyebrow}</span>
          </Reveal>

          <Reveal as="h1" delay={80}>
            {hero.title.map((line, index) => (
              <span key={line} className={index === hero.title.length - 1 ? 'hero__title-accent' : ''}>
                {line}
                {index < hero.title.length - 1 && <br />}
              </span>
            ))}
          </Reveal>

          <Reveal as="p" className="hero__description" delay={160}>
            {hero.description}
          </Reveal>

          <Reveal className="hero__actions" delay={240}>
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label} <ArrowRight size={17} strokeWidth={2} />
            </a>
            <a className="btn btn-outline" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label} <ArrowUpRight size={17} strokeWidth={2} />
            </a>
          </Reveal>

          <Reveal className="hero__highlights" delay={320}>
            {hero.highlights.map((item) => (
              <div className="hero-highlight" key={item.title}>
                <span className="hero-highlight__icon">
                  <Icon name={item.icon} size={19} strokeWidth={1.8} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual" image delay={160}>
          <div className="hero__photo hero__photo--produce">
            <img src={hero.images.produce.src} alt={hero.images.produce.alt} fetchPriority="high" />
          </div>
          <div className="hero__photo hero__photo--textile">
            <img src={hero.images.textile.src} alt={hero.images.textile.alt} loading="eager" />
          </div>
          <div className="hero__photo hero__photo--logistics">
            <img src={hero.images.logistics.src} alt={hero.images.logistics.alt} loading="lazy" />
          </div>
          <div className="hero__visual-note">
            <ArrowDownRight size={18} strokeWidth={1.6} />
            <span>Indian origin · Global destination</span>
          </div>
          <div className="hero__seal" aria-hidden="true">
            <span>EST.</span>
            <strong>INDIA</strong>
          </div>
        </Reveal>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
