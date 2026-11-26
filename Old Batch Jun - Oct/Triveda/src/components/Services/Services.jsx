import {
  FaHandshake,
  FaSearchDollar,
  FaBoxes,
  FaPenNib,
  FaCopyright,
  FaClipboardCheck,
  FaFileExport,
  FaLock,
  FaGlobeAsia,
  FaHeadset,
} from 'react-icons/fa'
import Reveal from '../Reveal'
import './Services.css'

const SERVICES = [
  { icon: <FaHandshake />, title: 'Merchant Export', desc: 'End-to-end export management from factory to port with full accountability.' },
  { icon: <FaSearchDollar />, title: 'Product Sourcing', desc: 'We source the right quality and price from trusted Indian manufacturers.' },
  { icon: <FaBoxes />, title: 'Bulk Supply', desc: 'Reliable bulk supply of towels and linen tailored to your order volume.' },
  { icon: <FaPenNib />, title: 'Custom Branding', desc: 'Your brand, logo, and labels woven onto every product we deliver.' },
  { icon: <FaCopyright />, title: 'Private Label Manufacturing', desc: 'Produce your own line of hospitality textiles with complete privacy.' },
  { icon: <FaClipboardCheck />, title: 'Quality Inspection', desc: 'Multi-stage quality checks ensure every shipment meets export standards.' },
  { icon: <FaFileExport />, title: 'Export Documentation', desc: 'Complete documentation handled — invoices, certifications, and customs.' },
  { icon: <FaLock />, title: 'Secure Packaging', desc: 'Protective, moisture-safe packaging built for international transit.' },
  { icon: <FaGlobeAsia />, title: 'Global Logistics', desc: 'Dependable shipping to markets across UAE, GCC, Europe, and beyond.' },
  { icon: <FaHeadset />, title: 'Customer Support', desc: 'A dedicated team to support you from inquiry through delivery.' },
]

const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">What We Do</span>
        <h2 className="section-title">
          Complete <span>Export Services</span>
        </h2>
        <p className="section-sub">
          From sourcing and manufacturing to documentation and worldwide delivery — we handle your entire export
          process with professional precision.
        </p>
      </Reveal>

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 5) * 60}>
            <div className="card service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Services
