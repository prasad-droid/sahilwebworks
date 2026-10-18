import Icon from "./Icon";
import { heroEyebrow, heroHighlights } from "../data/site";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  const go = (id) => (event) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img
          className="hero__image"
          src="/images/agriculture/fields-aerial.jpg"
          alt="Aerial view of lush green agricultural fields — representative industry imagery"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <svg className="hero__lines" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
          <path className="hero__line hero__line--1" d="M-40 700C240 640 420 520 720 470s520-140 760-260" />
          <path className="hero__line hero__line--2" d="M-40 800C280 760 480 660 760 610s500-130 740-230" />
          <path className="hero__line hero__line--3" d="M-40 600C200 540 400 420 700 360s560-160 820-300" />
          <circle className="hero__node hero__node--1" cx="720" cy="470" r="5" />
          <circle className="hero__node hero__node--2" cx="1120" cy="330" r="4" />
          <circle className="hero__node hero__node--3" cx="380" cy="560" r="4" />
        </svg>
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow" data-reveal>
          {heroEyebrow}
        </p>
        <h1 className="hero__title" data-reveal>
          CONNECTING MARKET WORLWIDE
        </h1>
        <p className="hero__subtitle" data-reveal>
          Connecting Products, Businesses and Opportunities Across Markets
        </p>
        <p className="hero__text" data-reveal>
          PrajtamEx operates in import, export and services, with a focus on agriculture-related
          markets and recycling companies.
        </p>
        <div className="hero__actions" data-reveal>
          <a className="btn btn--accent" href="#products" onClick={go("products")}>
            Explore Products
            <Icon name="arrowRight" size={17} />
          </a>
          <a className="btn btn--ghost-light" href="#services" onClick={go("services")}>
            View Our Services
          </a>
          <a className="btn btn--ghost-light" href="#contact" onClick={go("contact")}>
            Contact Us
          </a>
        </div>
      </div>

      <ul className="hero__cards" aria-label="Core focus areas">
        {heroHighlights.map((item) => (
          <li className="hero__card" key={item.id}>
            <img src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            <span className="hero__card-body">
              <span className="hero__card-icon">
                <Icon name={item.icon} size={18} />
              </span>
              <span className="hero__card-label">{item.label}</span>
            </span>
          </li>
        ))}
      </ul>

      <a className="hero__scroll" href="#about" onClick={go("about")} aria-label="Scroll to About section">
        <span className="hero__scroll-mouse" aria-hidden="true">
          <span />
        </span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
}
