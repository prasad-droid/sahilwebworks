import { ArrowRight, Globe2, MessageCircle } from 'lucide-react'
import { images } from '../data/siteData'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <img src={images.hero} alt="" fetchpriority="high" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__pill hero-animate">
            <Globe2 size={15} aria-hidden="true" /> Your International Trading Partner
          </span>

          <h1 className="hero__title hero-animate">
            Connecting Global Markets with <span>Quality Flexible Cables.</span>
          </h1>

          <p className="hero__description hero-animate">
            Sujata Global Exim is focused on connecting international buyers with flexible
            cable trading opportunities through professional communication, reliable
            coordination, and customer-focused business relationships.
          </p>

          <div className="hero__actions hero-animate">
            <a className="btn btn--primary hero__btn" href="#products">
              Explore Our Products <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--outline-light hero__btn" href="#quote">
              Send an Inquiry <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <a
            className="hero__whatsapp hero-animate"
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Prefer WhatsApp? Send an inquiry now
          </a>
        </div>

        <div className="hero__visual hero-animate" aria-hidden="true">
          <div className="hero__visual-frame">
            <img src={images.heroSecondary} alt="" loading="eager" />
          </div>
          <div className="hero__visual-label">
            <strong>Flexible Cables</strong>
            <span>Import • Export • Trading</span>
          </div>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64 C320,10 640,90 960,42 C1200,8 1340,30 1440,22 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  )
}
