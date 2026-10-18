import { Compass, Eye, Target } from 'lucide-react'
import { images } from '../data/images'
import SmartImage from './SmartImage'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__copy reveal">
            <p className="eyebrow">About Us</p>
            <h2 className="section-title">About Trans-Aura International</h2>
            <h3 className="about__sub">Connecting Global Buyers with Quality Products from India</h3>
            <p>
              Trans-Aura International is an India-based export and trading company focused on
              connecting international buyers with quality products and reliable suppliers from
              India. We serve importers, distributors, manufacturers, traders, and industrial users
              seeking dependable sourcing solutions and competitive pricing.
            </p>
            <p>
              Our core focus is on the B2B export of industrial chemicals and selected commercial
              products, supported by reliable Indian sourcing, quality coordination, export
              documentation, and shipment management.
            </p>

            <div className="about__approach">
              <div className="about__approach-head">
                <span className="about__approach-icon" aria-hidden="true">
                  <Compass size={20} />
                </span>
                <h3>Our Approach</h3>
              </div>
              <p>
                We believe successful international trade is built on quality, transparency,
                reliability, and long-term relationships. From understanding a buyer&rsquo;s
                requirement and identifying the right supply source to coordinating documentation
                and shipment, we aim to make the sourcing process simple, professional, and
                dependable.
              </p>
            </div>
          </div>

          <div className="about__media reveal" style={{ '--reveal-delay': '0.15s' }}>
            <div className="about__media-img">
              <SmartImage src={images.about.src} alt={images.about.alt} />
            </div>
            <div className="about__badge" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
                <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.4" />
                <ellipse cx="24" cy="24" rx="6" ry="13" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="2.6" fill="currentColor" />
              </svg>
              <div>
                <strong>Trans-Aura International</strong>
                <span>The Aura of Global Excellence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__blocks">
          <div className="about__block reveal" style={{ '--reveal-delay': '0.05s' }}>
            <span className="about__block-icon" aria-hidden="true">
              <Eye size={22} />
            </span>
            <h3>Our Vision</h3>
            <p>
              To establish Trans-Aura International as a trusted global sourcing partner for
              businesses looking to procure quality products from India.
            </p>
          </div>
          <div className="about__block reveal" style={{ '--reveal-delay': '0.15s' }}>
            <span className="about__block-icon" aria-hidden="true">
              <Target size={22} />
            </span>
            <h3>Our Mission</h3>
            <p>
              To connect global buyers with dependable Indian suppliers while delivering quality,
              competitive value, and professional export support at every stage of the transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}