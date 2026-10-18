import { company } from '../data/company.js'
import { images } from '../data/images.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

const features = [
  { icon: 'tag', label: 'Private Label' },
  { icon: 'box', label: 'Customized Packaging' },
  { icon: 'layers', label: 'Bulk Supply' },
  { icon: 'sliders', label: 'Product-Specific Requirements' },
]

export default function PrivateLabel({ onDiscuss }) {
  return (
    <section className="private-label section">
      <div className="private-label__bg" aria-hidden="true">
        <img src={images.privateLabel.src} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="private-label__overlay" aria-hidden="true" />

      <div className="container private-label__content">
        <Reveal>
          <p className="eyebrow eyebrow--gold">Private Label</p>
          <h2 className="private-label__title">
            Your Product. Your Brand. Our Supply Support.
          </h2>
          <p className="private-label__text">
            Looking for private-label or customized packaging solutions? Aviyana
            Enterprises can support suitable requirements based on product and
            order specifications.
          </p>
        </Reveal>

        <Reveal className="private-label__features" delay={140}>
          {features.map((feature) => (
            <div className="private-label__feature" key={feature.label}>
              <span className="private-label__feature-icon" aria-hidden="true">
                <Icon name={feature.icon} size={22} />
              </span>
              {feature.label}
            </div>
          ))}
        </Reveal>

        <Reveal className="private-label__actions" delay={240}>
          <button type="button" className="btn btn--gold btn--lg" onClick={onDiscuss}>
            Discuss Your Requirement
            <Icon name="arrow" size={18} />
          </button>
          <a
            href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline-light btn--lg"
          >
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}