import { useSite } from "../store/SiteContext";
import "../styles/hero.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const { content } = useSite();
  const hero = content?.hero || {};
  const image = hero.image || HERO_IMAGE;

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img
          src={image}
          alt={hero.title || "SUGI International"}
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__inner">
          <p className="eyebrow hero-anim" style={{ animationDelay: "0.1s" }}>
            {hero.eyebrow}
          </p>
          <h1 className="hero__title hero-anim" style={{ animationDelay: "0.2s" }}>
            {hero.title} {hero.titleAccent && <em>{hero.titleAccent}</em>}
          </h1>
          <p className="hero__text hero-anim" style={{ animationDelay: "0.32s" }}>
            {hero.text}
          </p>
          <div className="hero__actions hero-anim" style={{ animationDelay: "0.44s" }}>
            <a href={hero.ctaPrimary?.href || "#portfolio"} className="btn btn-gold">
              {hero.ctaPrimary?.label}
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href={hero.ctaSecondary?.href || "#enquiry"} className="btn btn-outline">
              {hero.ctaSecondary?.label}
            </a>
          </div>
          <p className="hero__markets hero-anim" style={{ animationDelay: "0.56s" }}>
            <span className="hero__dot-inline" aria-hidden="true" />
            {hero.marketsLine}
          </p>
        </div>
      </div>

      {/* Decorative animated trade elements */}
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__dot hero__dot--1 drift-a" />
        <span className="hero__dot hero__dot--2 drift-b" />
        <span className="hero__dot hero__dot--3 drift-a" />
        <svg className="hero__route" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path
            d="M20 160 C 120 60, 240 190, 380 40"
            fill="none"
            stroke="rgba(184,151,91,0.35)"
            strokeWidth="1.5"
            className="route-line"
          />
        </svg>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
