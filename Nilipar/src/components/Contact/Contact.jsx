import { FiPhoneCall, FiMail, FiMapPin, FiDownload, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../data/siteData";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./Contact.css";

const CONTACT_BUTTONS = [
  { label: "Call Now", href: `tel:${SITE.phoneRaw}`, icon: FiPhoneCall, className: "btn--primary" },
  { label: "WhatsApp", href: SITE.whatsappLink, icon: FaWhatsapp, className: "btn--whatsapp" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FiMail, className: "btn--ghost" },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--white">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Contact Us"
            title="Let's Build a Greener Supply Chain Together"
            description="Request a catalogue, a quotation, or discuss a bulk order. Our export team responds within 24 hours."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal direction="left" className="contact__info">
            <h3 className="contact__name">{SITE.name}</h3>
            <p className="contact__tagline">{SITE.tagline}</p>

            <ul className="contact__details">
              <li>
                <span className="contact__icon"><FiPhoneCall aria-hidden="true" /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon"><FiMail aria-hidden="true" /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon"><FiMapPin aria-hidden="true" /></span>
                <div>
                  <strong>Office</strong>
                  <address>
                    {SITE.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>

            <div className="contact__buttons">
              {CONTACT_BUTTONS.map(({ label, href, icon: Icon, className }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`btn ${className}`}>
                  <Icon aria-hidden="true" /> {label}
                </a>
              ))}
              <a href={`mailto:${SITE.email}?subject=Catalogue%20Request%20-%20Nilipar%20Enterprises`} className="btn btn--accent">
                <FiDownload aria-hidden="true" /> Request Catalogue
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" className="contact__form-wrap">
            <form
              className="contact__form"
              action={`mailto:${SITE.email}`}
              method="post"
              encType="text/plain"
              aria-label="Request a quotation"
            >
              <h3 className="contact__form-title">Request a Quote</h3>
              <div className="contact__row">
                <label className="contact__field">
                  <span>Full Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="contact__field">
                  <span>Business Email</span>
                  <input type="email" name="email" placeholder="name@company.com" required />
                </label>
              </div>
              <div className="contact__row">
                <label className="contact__field">
                  <span>Company / Country</span>
                  <input type="text" name="company" placeholder="Company, Country" required />
                </label>
                <label className="contact__field">
                  <span>Product of Interest</span>
                  <select name="product" required defaultValue="">
                    <option value="" disabled>
                      Select a product
                    </option>
                    <option>Jute Bags</option>
                    <option>Bagasse Products</option>
                    <option>Custom Branded Bags</option>
                    <option>Full Catalogue</option>
                  </select>
                </label>
              </div>
              <label className="contact__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us your quantity, specification, and delivery destination..."
                />
              </label>
              <button type="submit" className="btn btn--primary contact__submit">
                <FiMessageSquare aria-hidden="true" /> Send Enquiry
              </button>
            </form>

            {/* MAP SLOT: replace with <iframe> Google Maps embed when a link is provided */}
            <div className="contact__map">
              <FiMapPin aria-hidden="true" />
              <p>Find us in Sindhudurg, Maharashtra — interactive map coming soon.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
