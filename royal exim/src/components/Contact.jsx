import Reveal from "./Reveal";
import InquiryForm from "./InquiryForm";
import { site } from "../data/site";
import { IconPhone, IconWhatsApp, IconMail, IconLocation } from "./Icons";
import "../styles/contact.css";

const WHATSAPP_LINK = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

const CHANNELS = [
  {
    id: "c-phone",
    icon: IconPhone,
    label: "Phone",
    value: site.phone,
    href: `tel:+${site.phoneRaw}`,
  },
  {
    id: "c-whatsapp",
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: site.phone,
    href: WHATSAPP_LINK,
  },
  {
    id: "c-email",
    icon: IconMail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    id: "c-location",
    icon: IconLocation,
    label: "Location",
    value: site.location,
    href: null,
  },
];

export default function Contact({ initialProduct = null }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal className="contact__header">
          <p className="section-label">Contact &amp; Enquiry</p>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Looking to source products from India? Get in touch with A1 Royal
            Exim and share your requirements.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__side">
            <div className="contact__panel">
              <h3>A1 Royal Exim</h3>
              <p className="contact__panel-tag">{site.tagline}</p>

              <ul className="contact__channels">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <>
                      <span className="contact__channel-icon">
                        <Icon />
                      </span>
                        <strong>{channel.value}</strong>
                    </>
                  );
                  return (
                    <li key={channel.id}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          target={
                            channel.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            channel.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {content}
                        </a>
                      ) : (
                        <span>{content}</span>
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="contact__panel-note">
                Prefer to talk? Call or message us on WhatsApp directly with
                your sourcing requirements.
              </p>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <InquiryForm initialProduct={initialProduct} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}