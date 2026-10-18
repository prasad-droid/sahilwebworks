import { images } from '../data/images.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

const specialties = [
  'Dehydrated Garlic Powder',
  'Red Onion Powder',
  'Moringa Powder',
  'Customized Natural & Dehydrated Products',
]

const serves = ['Food industries', 'Nutraceutical industries', 'Wellness industries', 'Other B2B applications']

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <Reveal className="about__media" variant="fade-right">
          <div className="about__media-main">
            <img
              src={images.aboutMain.src}
              alt={images.aboutMain.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about__media-sub">
            <img
              src={images.aboutSub.src}
              alt={images.aboutSub.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about__badge" aria-hidden="true">
            <span className="about__badge-line" />
            <strong>India</strong>
            <span className="about__badge-arrow">
              <Icon name="arrow" size={18} />
            </span>
            <strong>Global Markets</strong>
          </div>
        </Reveal>

        <Reveal className="about__content" variant="fade-left" delay={120}>
          <p className="eyebrow">About Aviyana</p>
          <h2 className="section-title">
            Premium Indian Ingredients. Built for Global Buyers.
          </h2>
          <p className="about__intro">
            Aviyana Enterprises is an Indian supplier of premium dehydrated and
            natural products, focused on quality, reliability, and global reach.
          </p>

          <h3 className="about__subheading">Specialized in sourcing and supplying</h3>
          <ul className="about__list">
            {specialties.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="about__subheading">Products that serve</h3>
          <p className="about__serves">{serves.join(' · ')}</p>

          <p className="about__emphasis">
            Quality <span aria-hidden="true">•</span> Purity{' '}
            <span aria-hidden="true">•</span> Consistency{' '}
            <span aria-hidden="true">•</span> Reliable Supply
          </p>

          <button
            type="button"
            className="btn btn--forest btn--md"
            onClick={() => scrollToId('services')}
          >
            Learn More About Aviyana
            <Icon name="arrow" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}