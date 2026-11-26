import { Icon } from './Icons.jsx';
import { heroImages } from '../data/gallery.js';
import { whatsappLink } from '../data/business.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

const STEPS = [
  {
    title: 'Explore Products',
    desc: 'Powders, spices, rice, raisins and more for bulk orders.',
    to: 'products',
    cta: 'Explore Products',
    className: 'btn btn--accent',
    icon: 'layers',
  },
  {
    title: 'Request a Quote',
    desc: 'Share your product, quantity and destination.',
    to: 'bulk-order',
    cta: 'Request a Quote',
    className: 'btn btn--white',
    icon: 'clipboard',
    quote: true,
  },
  {
    title: 'WhatsApp Us',
    desc: 'Talk to us directly on WhatsApp.',
    href: whatsappLink(),
    cta: 'WhatsApp Us',
    className: 'btn btn--on-dark',
    icon: 'whatsapp',
    external: true,
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' });
}

export function Hero() {
  const { startEnquiry } = useEnquiry();

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <h1 className="sr-only" id="hero-heading">
        From India to the World - quality Indian agricultural and food products for global B2B
        buyers
      </h1>

      {/* --- Backdrop ------------------------------------------------- */}
      <div className="hero__backdrop" aria-hidden="true">
        <img
          className="hero__backdrop-img hero__backdrop-img--base"
          src={heroImages.secondary.src}
          alt=""
          width="1920"
          height="1114"
          decoding="async"
        />
        <div className="hero__backdrop-tint" />
        <div className="hero__backdrop-grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="hero__inner container container--wide">
        {/* --- Copy -------------------------------------------------- */}
        <div className="hero__content">
          <p className="hero__eyebrow anim-up" style={{ animationDelay: '80ms' }}>
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Indian Agricultural &amp; Food Exports
          </p>

          <h2 className="hero__title anim-up" style={{ animationDelay: '180ms' }}>
            From India
            <span className="hero__title-line">
              to the <em className="hero__title-accent">World</em>
            </span>
          </h2>

          <p className="hero__headline anim-up" style={{ animationDelay: '300ms' }}>
            Quality Indian Agricultural &amp; Food Products for Global B2B Buyers
          </p>

          <p className="hero__description anim-up" style={{ animationDelay: '400ms' }}>
            AARAMBH WORLDTRADE connects quality Indian agricultural and food products with
            international importers, wholesalers, distributors, food manufacturers, retailers and
            B2B buyers.
          </p>

          <div className="hero__actions anim-up" style={{ animationDelay: '500ms' }}>
            {STEPS.map((step) => {
              if (step.href) {
                return (
                  <a
                    key={step.title}
                    className={`${step.className} hero__btn`}
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={step.icon} size={19} />
                    {step.cta}
                  </a>
                );
              }
              return (
                <button
                  key={step.title}
                  type="button"
                  className={`${step.className} hero__btn`}
                  onClick={() =>
                    step.quote ? startEnquiry('', { anchor: '#bulk-order' }) : scrollToId(step.to)
                  }
                >
                  <Icon name={step.icon} size={19} />
                  {step.cta}
                </button>
              );
            })}
          </div>

          <ul className="hero__audience anim-up" style={{ animationDelay: '620ms' }}>
            {[
              'Importers',
              'Wholesalers',
              'Distributors',
              'Food Manufacturers',
              'Spice Traders',
              'Supermarkets',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* --- Visual composition ------------------------------------ */}
        <div className="hero__visual anim-fade" style={{ animationDelay: '260ms' }}>
          <figure className="hero__card hero__card--primary">
            <img
              src={heroImages.primary.src}
              alt={heroImages.primary.alt}
              width="1920"
              height="1280"
              loading="eager"
              decoding="async"
            />
            <figcaption className="hero__card-caption">
              <span className="hero__card-tag">Product category visual</span>
            </figcaption>
          </figure>

          <figure className="hero__card hero__card--secondary">
            <img
              src={heroImages.secondary.src}
              alt={heroImages.secondary.alt}
              width="1920"
              height="1114"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="hero__card-caption">
              <span className="hero__card-tag">Industry reference</span>
            </figcaption>
          </figure>

          <div className="hero__chip hero__chip--origin" aria-hidden="true">
            <span className="hero__chip-icon">
              <Icon name="pin" size={18} />
            </span>
            <span className="hero__chip-text">
              <strong>Origin</strong>
              Maharashtra, India
            </span>
          </div>

          <div className="hero__chip hero__chip--reach" aria-hidden="true">
            <span className="hero__chip-icon">
              <Icon name="globe" size={18} />
            </span>
            <span className="hero__chip-text">
              <strong>Focus</strong>
              Global B2B buyers
            </span>
          </div>

          <div className="hero__ring" aria-hidden="true" />
        </div>
      </div>

      {/* --- Bottom rail --------------------------------------------- */}
      <div className="hero__rail">
        <div className="container container--wide hero__rail-inner">
          <p className="hero__rail-text">
            <Icon name="shield" size={18} />
            Quality-focused sourcing for international buyers
          </p>
          <p className="hero__rail-text">
            <Icon name="document" size={18} />
            Export documentation support
          </p>
          <p className="hero__rail-text">
            <Icon name="layers" size={18} />
            Bulk &amp; B2B quantities
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
