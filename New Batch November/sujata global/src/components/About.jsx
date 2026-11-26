import { Globe2, Layers3, UsersRound } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { images } from '../data/siteData'
import '../styles/About.css'

const facts = [
  { icon: Globe2, label: 'Import & Export' },
  { icon: Layers3, label: 'Flexible Cables' },
  { icon: UsersRound, label: 'International Buyers' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__visual" data-reveal="left">
          <div className="about__image-wrap">
            <img
              src={images.about}
              alt="Industrial reel with coiled electrical cable"
              loading="lazy"
            />
          </div>
          <div className="about__image-note">
            <span className="about__note-dot" aria-hidden="true" />
            Product-focused trading, built around buyer requirements
          </div>
        </div>

        <div className="about__content" data-reveal="right">
          <SectionHeading
            eyebrow="Who We Are"
            title={<>About Sujata Global Exim</>}
            subtitle="A professional trading partner for international cable buyers."
          />

          <div className="about__copy">
            <p>
              Sujata Global Exim is an import-export trading business specializing in
              flexible cables and focused on serving buyers in international markets.
            </p>
            <p>
              Our objective is to build meaningful business relationships by connecting
              buyers with product opportunities and providing professional communication
              throughout the inquiry and trading process.
            </p>
            <p>
              We aim to develop long-term partnerships by understanding buyer requirements
              and supporting international business opportunities.
            </p>
          </div>

          <ul className="about__facts">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
