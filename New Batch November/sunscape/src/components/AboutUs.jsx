import { Handshake, Network, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { aboutHighlights } from '../data/features'
import { site } from '../data/site'
import '../styles/about.css'

const iconMap = { network: Network, growth: TrendingUp, relationships: Handshake }

export default function AboutUs() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__copy">
          <SectionHeading
            eyebrow="About Us"
            titleId="about-title"
            title="Building Connections. Creating Opportunities."
          />
          <p>
            Sunscape Enterprises is an import and export business focused on building valuable
            connections and creating opportunities in the global marketplace.
          </p>
          <p>
            We believe that successful business is built on{' '}
            <strong>strong relationships, effective communication</strong>, and a commitment to
            creating mutual value.
          </p>
          <p>
            Our vision is to establish a successful trading enterprise by{' '}
            <strong>connecting buyers with business opportunities</strong> and developing lasting
            relationships across markets. We aim to grow through professional business practices,
            customer satisfaction, and a continuous focus on expanding our opportunities.
          </p>

          <div className="about__highlights" data-reveal>
            {aboutHighlights.map(({ title, description, icon }) => {
              const Icon = iconMap[icon]
              return (
                <article className="about-highlight" key={title}>
                  <span className="about-highlight__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="about__visual" data-reveal>
          <div className="about__image-frame">
            <img
              src={site.images.about}
              alt="Business partners discussing opportunities around a table"
              loading="lazy"
              width="1200"
              height="800"
            />
          </div>
          <div className="about__quote-card">
            <span className="about__quote-line" />
            <p>{site.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
