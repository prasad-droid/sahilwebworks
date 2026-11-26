import "../styles/contact.css";
import QuoteForm from "./QuoteForm";
import Reveal from "./Reveal";

const contactDetails = [
  {
    icon: "phone",
    label: "Phone",
    value: "+91 7406103339",
    href: "tel:+917406103339",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+91 7406103339",
    href: "https://wa.me/917406103339",
  },
  {
    icon: "mail",
    label: "Email",
    value: "varidianexim@gmail.com",
    href: "mailto:varidianexim@gmail.com",
  },
  {
    icon: "pin",
    label: "Office Address",
    value:
      "Ground Floor, R S No.20/D/2, VPC No. 2824, Peerwadi Khadhaklat, Belgavi, Karnataka - 591228",
    href: null,
  },
];

function ContactIcon({ name }) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    );
  }
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.8-.3-4-1L3 20l1-5.5a8.5 8.5 0 1 1 17-3Z" />
        <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.6" />
    </svg>
  );
}

export default function Contact({ selectedProduct }) {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <span className="blob contact__blob contact__blob--one" />
      <span className="blob contact__blob contact__blob--two" />

      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">Contact / Request a Quote</span>
          <h2 className="section-title" id="contact-title">
            Let&rsquo;s Build a Global Partnership
          </h2>
          <p className="section-subtitle">
            Looking to source quality Indian agricultural products? Send us your
            requirement and connect with Varidian Exim.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay="reveal-delay-1" className="contact__info">
            <div className="contact__cards">
              {contactDetails.map((item) => (
                <div className="contact__card" key={item.label}>
                  <span className="contact__card-icon" aria-hidden="true">
                    <ContactIcon name={item.icon} />
                  </span>
                  <div>
                    <span className="contact__card-label">{item.label}</span>
                    {item.href ? (
                      <a
                        className="contact__card-value"
                        href={item.href}
                        target={item.icon === "whatsapp" ? "_blank" : undefined}
                        rel={item.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__card-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__info-note">
              <p>
                Prefer a quick conversation? Reach out directly on WhatsApp or email and
                our team will respond with details for your requirement.
              </p>
              <a
                className="btn btn-accent"
                href="https://wa.me/917406103339"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay="reveal-delay-2" className="contact__form">
            <QuoteForm selectedProduct={selectedProduct} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}