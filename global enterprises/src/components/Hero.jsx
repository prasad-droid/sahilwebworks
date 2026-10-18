import { company } from '../data/siteData'
import Icon from './Icons'
import '../styles/Hero.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="false">
        <img
          className="hero__image"
          src={HERO_IMAGE}
          alt="Engineering machinery and precision industrial components on a production line"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__grid-pattern" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Engineering Goods &amp; Industrial Supplies
          </p>

          <h1 className="hero__title" id="hero-title">
            Engineering Excellence,
            <br />
            <span className="hero__title-accent">Globally Delivered.</span>
          </h1>

          <p className="hero__text">
            {company.name} supplies engineering goods to meet industrial requirements, with a
            focus on connecting customers with the products they need. Our website is being
            developed to help customers discover our product range and enquire about their
            requirements.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn btn--primary btn--lg">
              Explore Our Products
              <Icon name="arrowRight" size={19} className="icon-trailing" />
            </a>
            <a href="#contact" className="btn btn--ghost-light btn--lg">
              Contact Us
            </a>
          </div>

          <ul className="hero__highlights">
            <li>
              <Icon name="supply" size={20} />
              Engineering goods supply
            </li>
            <li>
              <Icon name="coordination" size={20} />
              Requirement coordination
            </li>
            <li>
              <Icon name="globe" size={20} />
              Enquiries from any market
            </li>
          </ul>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  )
}
