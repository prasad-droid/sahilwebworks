import { ArrowRight, Boxes, PackageOpen, Tag } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { packagingServices } from '../data/siteData'
import '../styles/PrivateLabel.css'

const icons = [Boxes, PackageOpen, Tag]

export default function PrivateLabel() {
  return (
    <section className="section private-label section--cream" id="private-label">
      <div className="container">
        <div className="private-label__head" data-reveal>
          <SectionHeading
            eyebrow="Customized Packaging & Private Label"
            title={<>Your Brand. Your Packaging. <span className="highlight-word">Our Sourcing Support.</span></>}
            subtitle="We understand that every international buyer has different market requirements. Tru Source Global supports customized packaging and private-label sourcing solutions according to product specifications, destination-country regulations and buyer requirements."
          />
          <a className="btn btn--navy private-label__head-cta" href="#contact">
            Discuss Your Packaging Requirements <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="private-label__grid">
          {packagingServices.map((service, index) => {
            const Icon = icons[index] || Boxes
            return (
              <article className="pl-card" key={service.number} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="pl-card__image">
                  <img src={service.image} alt={`${service.title} illustration`} loading="lazy" />
                  <span className="pl-card__icon"><Icon aria-hidden="true" /></span>
                </div>
                <div className="pl-card__body">
                  <span className="pl-card__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
