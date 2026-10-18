import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Reveal from '../Reveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Ahmed Al Mansoori',
    role: 'Procurement Manager, Dubai — UAE',
    quote:
      'TRIVEDA EXPORTS has been a reliable towel supplier for our hotel group. The quality is consistent, the fabric is plush, and deliveries have always been on time.',
  },
  {
    name: 'Sarah Whitmore',
    role: 'Buying Director, London — United Kingdom',
    quote:
      'Their export documentation is seamless and the GSM options gave us exactly what our linen program needed. A genuinely professional Indian exporter.',
  },
  {
    name: 'Priya Nair',
    role: 'Owner, Wholesale Distributor — Singapore',
    quote:
      'Bulk orders at competitive pricing with custom branding support. Communication is quick and the after-sales service is excellent. Highly recommended.',
  },
]

const Testimonials = () => (
  <section id="testimonials" className="section testimonials">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Testimonials</span>
        <h2 className="section-title">
          What Our <span>Global Buyers Say</span>
        </h2>
        <p className="section-sub">
          Trusted by hoteliers, importers, and distributors across international markets.
        </p>
      </Reveal>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <figure className="card testimonial-card">
              <span className="testimonial-quote">
                <FaQuoteLeft />
              </span>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FaStar key={s} />
                ))}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
