import { ArrowUpRight, Check, MapPin, Snowflake } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import '../styles/AboutUs.css'

const aboutPoints = [
  'A clear product focus, led by frozen French fries.',
  'B2B communication from first enquiry through shipment.',
  'Coordination around packing, documentation and destination requirements.',
]

export default function AboutUs() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__inner">
        <Reveal className="about__media">
          <div className="about__image-wrap">
            <img
              src="/images/about-potatoes.jpg"
              alt="Representative image of freshly harvested potatoes"
              width="1400"
              height="2100"
              loading="lazy"
              decoding="async"
            />
            <span className="image-credit">Representative image</span>
          </div>

          <div className="about__image-accent" aria-hidden="true" />

          <div className="about__product-note">
            <span className="about__note-icon" aria-hidden="true">
              <Snowflake size={18} />
            </span>
            <p>
              <small>Primary product</small>
              <strong>Coated Frozen French Fries</strong>
            </p>
          </div>

          <div className="about__location-note">
            <span className="about__note-icon" aria-hidden="true">
              <MapPin size={18} />
            </span>
            <p>
              <small>Based in</small>
              <strong>Navi Mumbai, Maharashtra, India</strong>
            </p>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="About Shakti Global Exim"
              title="A focused export partner for the food trade."
              description="Shakti Global Exim is an India-based export business focused on supplying food products to international markets. Frozen French fries are our primary product, supported by export-ready packing and clear communication with buyers."
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="about__paragraph">
              Our offer is designed for importers, distributors, wholesalers and
              food-service businesses, with a current focus on the Middle East
              and Southeast Asia. Every conversation begins with the
              buyer&rsquo;s product, packing and destination requirements.
            </p>

            <ul className="about__points">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="about__actions">
              <a href="#specifications" className="btn btn--dark">
                View Product Specifications
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#contact" className="text-link">
                Discuss your requirement
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <blockquote className="about__quote">
              <p>&ldquo;Global Reach. Trusted Quality.&rdquo;</p>
              <footer>The standard we work towards.</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
