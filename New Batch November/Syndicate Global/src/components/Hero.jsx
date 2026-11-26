import { ArrowRight, Boxes, ClipboardCheck, ShieldCheck } from 'lucide-react';
import './Hero.css';

const trustPoints = [
  { icon: ClipboardCheck, label: 'Lot-level quality checks' },
  { icon: Boxes, label: 'Export-grade packaging' },
  { icon: ShieldCheck, label: 'Transit discipline' },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="/images/hero-farms.webp"
        alt="Fresh agricultural fields in India being harvested for export"
        width="1800"
        height="1200"
        fetchPriority="high"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            Indian sourcing partner · Worldwide delivery
          </p>

          <h1 id="hero-title" className="hero__title">
            <span>Reliable Sourcing.</span>
            <span>Verifiable Quality.</span>
            <span>Global Reach.</span>
          </h1>

          <p className="hero__subtitle">
            Syndicate Global EXIM is your dedicated multi-vertical export partner from
            India—supplying perishable and non-perishable agro-commodities, technical
            textiles, polymer granules, and industrial metals. We de-risk international
            procurement through strict quality control, transparent compliance, and
            end-to-end transit discipline.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#products">
              Explore Our Products <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href="#contact">
              Send an Inquiry
            </a>
          </div>

          <p className="hero__trust">
            <ShieldCheck aria-hidden="true" />
            Your Reliable Sourcing Partner from India.
          </p>
        </div>

        <div className="hero__proof" aria-label="Operational strengths">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div className="hero__proof-item" key={label}>
              <span className="hero__proof-icon">
                <Icon aria-hidden="true" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About Us section">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
