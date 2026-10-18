import {
  FaAward,
  FaShieldAlt,
  FaTags,
  FaIndustry,
  FaClock,
  FaShip,
  FaHeadset,
  FaUsers,
} from 'react-icons/fa'
import Reveal from '../Reveal'
import './WhyChooseUs.css'

const REASONS = [
  { icon: <FaAward />, title: 'Hospitality Grade Products', desc: 'Textiles built to the demanding standards of premium hotels.' },
  { icon: <FaShieldAlt />, title: 'International Quality Standards', desc: 'Consistent quality across every shipment, every time.' },
  { icon: <FaTags />, title: 'Competitive Pricing', desc: 'Direct factory relationships that keep your costs low.' },
  { icon: <FaIndustry />, title: 'Reliable Manufacturer Network', desc: 'Partnered mills verified for quality and capacity.' },
  { icon: <FaClock />, title: 'Timely Delivery', desc: 'Disciplined production and logistics planning.' },
  { icon: <FaShip />, title: 'Bulk Export Expertise', desc: 'Deep experience shipping large volumes internationally.' },
  { icon: <FaHeadset />, title: 'Dedicated Customer Support', desc: 'One point of contact from inquiry to after-sales.' },
  { icon: <FaUsers />, title: 'Long-Term Business Relationships', desc: 'We grow together with our clients across the world.' },
]

const WhyChooseUs = () => (
  <section id="why" className="section why">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Why Choose Us</span>
        <h2 className="section-title">
          The <span>TRIVEDA EXPORTS</span> Advantage
        </h2>
        <p className="section-sub">
          A dependable export partner committed to premium quality, transparent pricing, and on-time delivery.
        </p>
      </Reveal>

      <div className="why-grid">
        {REASONS.map((reason, i) => (
          <Reveal key={reason.title} delay={(i % 4) * 80}>
            <div className="card why-card">
              <span className="why-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default WhyChooseUs
