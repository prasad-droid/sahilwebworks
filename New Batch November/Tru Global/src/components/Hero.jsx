import { ArrowRight, MessageSquareText, ShieldCheck, Globe2 } from 'lucide-react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <img src="/images/hero-farm.jpg" alt="" fetchpriority="high" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__pill">
            <Globe2 size={15} aria-hidden="true" /> Agricultural Sourcing &amp; Global Export
          </span>

          <h1 className="hero__title">
            From Indian Farms<br />to <span>Global Markets.</span>
          </h1>

          <p className="hero__tagline">Quality Sourced. Trust Delivered. Partnerships Built.</p>

          <p className="hero__description">
            Tru Source Global connects international buyers with quality Indian agricultural commodities,
            spices and food products through dependable sourcing, transparent operations and customized
            export solutions.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary hero__btn" href="#products">
              Explore Our Products <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--outline-light hero__btn" href="#contact">
              Get a Business Quote <MessageSquareText size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-icon"><ShieldCheck size={20} aria-hidden="true" /></span>
            <p>Your Trusted Sourcing Partner for Quality Indian Products.</p>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__image hero__image--main">
            <img src="/images/hero-spices.jpg" alt="" loading="eager" />
          </div>
          <div className="hero__image hero__image--small">
            <img src="/images/hero-field.jpg" alt="" loading="eager" />
          </div>
          <div className="hero__badge">
            <strong>India</strong>
            <span>to the world</span>
          </div>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path fill="#fefefe" d="M0,64 C320,10 640,90 960,42 C1200,8 1340,30 1440,22 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  )
}
