import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa'
import Reveal from '../Reveal'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+91 91758 09636',
    href: 'tel:+919175809636',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+91 91758 09636',
    href: 'https://wa.me/919175809636',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'trivedaexports@gmail.com',
    href: 'mailto:trivedaexports@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Office',
    value: '401, Pushpak Heights, Jai Jalaram Nagar, Vijapur Road, Solapur, Maharashtra, India',
    href: 'https://www.google.com/maps?q=Pushpak+Heights,+Vijapur+Road,+Solapur,+Maharashtra,+India',
  },
]

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Get In Touch</span>
        <h2 className="section-title">
          Start Your <span>Bulk Inquiry</span> Today
        </h2>
        <p className="section-sub">
          Request our catalogue, discuss your specifications, and get a competitive export quote — we respond quickly.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal variant="left" className="contact-info">
          <h3 className="contact-brand">TRIVEDA EXPORTS</h3>
          <p className="contact-tagline">Crafting Comfort for the World</p>

          <div className="contact-list">
            {CONTACT_INFO.map((item) => (
              <a key={item.label} href={item.href} className="contact-item" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <span className="contact-item-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href="tel:+919175809636">
              <FaPhoneAlt /> Call Now
            </a>
            <a className="btn btn-accent" href="https://wa.me/919175809636" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a className="btn btn-outline" href="mailto:trivedaexports@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a
              className="btn btn-outline"
              href="https://wa.me/919175809636?text=Hello%20TRIVEDA%20EXPORTS%2C%20please%20send%20me%20your%20product%20catalogue."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf /> Request Catalogue
            </a>
          </div>
        </Reveal>

        <Reveal variant="right" className="contact-map-wrap">
          <iframe
            title="TRIVEDA EXPORTS Office Location - Solapur, Maharashtra"
            src="https://www.google.com/maps?q=Pushpak%20Heights%2C%20Vijapur%20Road%2C%20Solapur%2C%20Maharashtra%2C%20India&output=embed"
            className="contact-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </div>
  </section>
)

export default Contact
