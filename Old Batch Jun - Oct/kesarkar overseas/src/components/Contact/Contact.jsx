import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Reveal from "../Reveal";
import { COMPANY, buildWhatsAppLink } from "../../utils/config";

const cards = [
  {
    icon: <FaPhone />,
    title: "Call Us",
    lines: [{ text: COMPANY.phone, href: `tel:${COMPANY.phoneLink}` }],
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    lines: [
      {
        text: COMPANY.whatsapp,
        href: buildWhatsAppLink("Hello Kesarkar Overseas, I would like to know more about your products."),
      },
    ],
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    lines: [{ text: COMPANY.email, href: `mailto:${COMPANY.email}` }],
  },
];

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaXTwitter />, label: "X (Twitter)" },
];

const Contact = () => (
  <section className="section contact" id="contact">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Contact Us</span>
        <h2 className="section-title">
          Let's Talk About <span className="accent">Your Sourcing Needs</span>
        </h2>
        <p className="section-subtitle">
          Reach out to our export team for quotations, product information, or bulk
          supply inquiries.
        </p>
      </Reveal>

      <div className="contact-grid">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="contact-card hover-lift">
            <div className="contact-icon">{c.icon}</div>
            <h3 className="contact-title">{c.title}</h3>
            {c.lines.map((line) => (
              <a key={line.text} className="contact-value" href={line.href}>
                {line.text}
              </a>
            ))}
          </Reveal>
        ))}
      </div>

      <Reveal className="contact-note">
        <div className="contact-note-icon">
          <FaLocationDot />
        </div>
        <div>
          <h3 className="contact-note-title">Office Address</h3>
          <p className="contact-note-text">
            Our office address and Google Maps location will be published here soon.
            For now, please connect with us by phone, WhatsApp, or email.
          </p>
        </div>
        <div className="contact-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#contact"
              aria-label={s.label}
              className="contact-social"
              onClick={(e) => e.preventDefault()}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
