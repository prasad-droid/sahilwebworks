import '../styles/contact.css';

const contactInfo = [
  {
    icon: '✉',
    label: 'Email',
    value: 'nexaboundglobal@gmail.com',
    href: 'mailto:nexaboundglobal@gmail.com'
  },
  {
    icon: '☎',
    label: 'Phone',
    value: '+91 96658 95667',
    href: 'tel:+919665895667'
  },
  {
    icon: '✆',
    label: 'WhatsApp',
    value: '+91 96658 95667',
    href: 'https://wa.me/919665895667'
  }
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let's Build a Global Business Connection</h2>
          <p className="section-subheading">
            Reach out to our team for sourcing requirements, bulk orders, or general enquiries.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map(item => (
            <div key={item.label} className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">{item.icon}</div>
              <div className="contact-card-label">{item.label}</div>
              <div className="contact-card-value">
                <a
                  href={item.href}
                  target={item.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}