import { ArrowRight, MessageCircle } from 'lucide-react';
import heroPouch from '../assets/images/hero-pouch.jpg';
import { whatsappLink } from '../data/site';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" /> Export-grade · India origin
          </p>
          <h1>
            Sun-dried harvest,
            <br />
            milled to <em>fine uniform</em> powder
          </h1>
          <p className="hero-lead">
            Premium botanical powders for importers and trade desks — lab-tested,
            batch-traceable, vacuum-sealed and shipped to 19 markets across four continents.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#quote">
              Request a Quote <ArrowRight size={17} strokeWidth={2} />
            </a>
            <a
              className="btn btn-ghost-light"
              href={whatsappLink('Hello Vancorix International, I would like to know more about your botanical powders.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} strokeWidth={2} /> Chat on WhatsApp
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Markets served</dt>
              <dd>19 <span>countries</span></dd>
            </div>
            <div>
              <dt>Product range</dt>
              <dd>08 <span>SKUs</span></dd>
            </div>
            <div>
              <dt>Every lot</dt>
              <dd>Lab <span>tested</span></dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={heroPouch} alt="Vacuum-sealed pouch of export-grade turmeric powder" />
          </div>
          <div className="hero-badge">
            <span>Spec sheet</span>
            <strong>08 SKUs</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
