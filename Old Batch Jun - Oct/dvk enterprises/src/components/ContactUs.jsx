import {
  ArrowUpRight,
  Earth,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Reveal from "./Reveal";
import { LINKS, SITE } from "../data/site";

const CONTACT_OPTIONS = [
  {
    icon: Phone,
    label: "Call India",
    value: SITE.phoneIndia,
    href: LINKS.telIndia,
    note: "India business line",
  },
  {
    icon: Phone,
    label: "Call UAE",
    value: SITE.phoneUae,
    href: LINKS.telUae,
    note: "UAE business line",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    href: LINKS.mail,
    note: "For detailed enquiries",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp India",
    value: SITE.whatsappIndiaAlt,
    href: LINKS.waIndia,
    note: "Primary WhatsApp",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp UAE",
    value: SITE.whatsappUae,
    href: LINKS.waUae,
    note: "UAE WhatsApp",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp India",
    value: SITE.whatsappIndia,
    href: LINKS.waIndiaAlt,
    note: "Alternate number",
    external: true,
  },
];

export default function ContactUs() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__head">
          <p className="eyebrow">
            <span>Contact</span>
          </p>
          <h2 id="contact-title" className="section-title">
            Connect With DVK Enterprises
          </h2>
          <p className="section-lede">
            Choose the contact option that works best for you. We welcome
            conversations with buyers, partners, and individual customers.
          </p>
        </Reveal>

        <div className="contact__grid">
          <div className="contact__cards">
            {CONTACT_OPTIONS.map(
              ({ icon: Icon, label, value, href, note, external }, index) => (
                <Reveal
                  as="a"
                  className="contact-card"
                  key={`${label}-${value}`}
                  href={href}
                  delay={(index % 2) * 60}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="contact-card__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="contact-card__body">
                    <small>{label}</small>
                    <strong>{value}</strong>
                    <em>{note}</em>
                  </span>
                  <ArrowUpRight
                    className="contact-card__arrow"
                    size={17}
                    aria-hidden="true"
                  />
                </Reveal>
              ),
            )}
          </div>

          <Reveal className="contact__office" delay={100}>
            <span className="contact__office-icon" aria-hidden="true">
              <MapPin size={22} strokeWidth={1.7} />
            </span>
            <p className="eyebrow eyebrow--light">
              <span>Office</span>
            </p>
            <h3>Badlapur East, Maharashtra</h3>
            <address>
              J 104, Tulsi Aarambh, Raj Group, Tulsi City, Badlapur East,
              Maharashtra – 421503, India.
            </address>

            <a
              className="contact__directions"
              href={LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            <div className="contact__office-meta">
              <span>
                <Earth size={15} aria-hidden="true" />
                India &amp; UAE contacts
              </span>
              <span>
                <MessageCircle size={15} aria-hidden="true" />
                WhatsApp available
              </span>
            </div>

            <span className="contact__office-ring" aria-hidden="true" />
          </Reveal>
        </div>

        <Reveal className="contact__business" delay={120}>
          <span>DVK Enterprises</span>
          <p>Merchant Trader &amp; Exporter · We Grow Together.</p>
          <a href={LINKS.mail}>{SITE.email}</a>
        </Reveal>
      </div>
    </section>
  );
}
