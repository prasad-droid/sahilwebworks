import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/Hero.css';

const highlights = [
  {
    label: 'Rice',
    icon: (
      <>
        <path d="M12 21V8" />
        <path d="M12 8c0-2.8 1.6-5 4-6 .4 2.8-.9 5.3-4 6Z" />
        <path d="M12 12c-2.4 0-4.3-1.5-5-4 2.7-.4 4.7.9 5 4Z" />
        <path d="M12 16c2.4 0 4.3-1.5 5-4-2.7-.4-4.7.9-5 4Z" />
      </>
    ),
  },
  {
    label: 'Tea',
    icon: (
      <>
        <path d="M5 9h11v5a5.5 5.5 0 0 1-11 0V9Z" />
        <path d="M16 10h1.8a2.7 2.7 0 0 1 0 5.4H16" />
        <path d="M8 5c0-1 1-1.4 1-2.4M12 5c0-1 1-1.4 1-2.4" />
      </>
    ),
  },
  {
    label: 'Flowers',
    icon: (
      <>
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 9.8c-1.9-.2-3.2-1.2-3.2-3 0-1.5 1.4-2.7 3.2-2.7s3.2 1.2 3.2 2.7c0 1.8-1.3 2.8-3.2 3Z" />
        <path d="M14.2 12c.2-1.9 1.2-3.2 3-3.2 1.5 0 2.7 1.4 2.7 3.2s-1.2 3.2-2.7 3.2c-1.8 0-2.8-1.3-3-3.2Z" />
        <path d="M12 14.2c1.9.2 3.2 1.2 3.2 3 0 1.5-1.4 2.7-3.2 2.7s-3.2-1.2-3.2-2.7c0-1.8 1.3-2.8 3.2-3Z" />
        <path d="M9.8 12c-.2 1.9-1.2 3.2-3 3.2-1.5 0-2.7-1.4-2.7-3.2s1.2-3.2 2.7-3.2c1.8 0 2.8 1.3 3 3.2Z" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__bg-image"
          src="/images/hero-rice-fields.webp"
          alt=""
          width="2000"
          height="1200"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__inner">
        <header className="hero__header">
          <SectionHeading
            eyebrow="Premium Agricultural Export"
            id="hero-title"
            titleAs="h1"
            title={
              <>
                Connecting Markets,{' '}
                <br />
                Delivering Trust
              </>
            }
            description="Your emerging partner for agricultural product exports, connecting quality Indian products with international markets across the UAE and Iraq."
            align="center"
            light
            wide
          />

          <Reveal className="hero__buttons" delay={240} y={16}>
            <a className="btn btn--gold" href="#products">
              Explore Our Products
            </a>
            <a className="btn btn--ghost-light" href="#contact">
              Contact Us
            </a>
          </Reveal>
        </header>

        <Reveal
          as="div"
          className="hero__highlights"
          delay={380}
          y={18}
          aria-label="Agricultural product categories"
        >
          {highlights.map((item) => (
            <div className="hero__highlight" key={item.label}>
              <svg
                className="hero__highlight-icon"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span className="hero__highlight-label">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
