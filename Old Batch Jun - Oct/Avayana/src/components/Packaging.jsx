import { packaging } from '../data/packaging.js'
import { images } from '../data/images.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Packaging() {
  return (
    <section className="packaging section" id="packaging">
      <div className="packaging__bg" aria-hidden="true">
        <img src={images.packSectionBg.src} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="packaging__overlay" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="Packaging"
          title="Packaging That Fits Your Market"
          subtitle="Suitable packaging formats coordinated around your product and order requirements."
          align="center"
        />
        <div className="packaging__grid">
          {packaging.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <figure className="packaging-card">
                <div className="packaging-card__media">
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption className="packaging-card__caption">
                  <h3 className="packaging-card__title">{item.title}</h3>
                  <p className="packaging-card__desc">{item.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}