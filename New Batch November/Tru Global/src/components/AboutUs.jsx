import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { highlights } from '../data/siteData'
import '../styles/AboutUs.css'

export default function AboutUs() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__content" data-reveal="left">
          <SectionHeading
            eyebrow="About Us"
            title={<>Connecting Indian Excellence with <span className="highlight-word">Global Opportunities.</span></>}
          />

          <div className="about__copy">
            <p>
              Tru Source Global is an India-based import-export and global sourcing company focused on
              connecting reliable Indian suppliers with buyers across international markets.
            </p>
            <p>
              We specialize in sourcing and supplying quality <strong>agricultural commodities</strong>,
              <strong> spices</strong>, food products and processed food ingredients.
            </p>
            <p>
              Our approach is built on <strong>quality</strong>, <strong>transparency</strong>, competitive
              pricing and dependable supply. Our goal is to develop long-term partnerships with
              international buyers by providing genuine products, professional service, export-ready
              packaging and reliable logistics support.
            </p>
          </div>

          <ul className="about__highlights">
            {highlights.map((item) => (
              <li key={item.title} className="about__highlight">
                <span className="about__check"><Check size={17} strokeWidth={2.5} aria-hidden="true" /></span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__media" data-reveal="right">
          <div className="about__image-main">
            <img
              src="/images/about-sourcing.jpg"
              alt="Agricultural sourcing and fresh produce handling in India"
              loading="lazy"
            />
          </div>
          <div className="about__image-secondary">
            <img
              src="/images/about-export.jpg"
              alt="Export-ready food products and international logistics"
              loading="lazy"
            />
          </div>
          <div className="about__stat-card">
            <span>Our Focus</span>
            <strong>Long-term<br />partnerships</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
