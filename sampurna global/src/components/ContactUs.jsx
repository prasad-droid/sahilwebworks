import React from "react";
import { siteConfig } from "../data/siteConfig.js";
import { useReveal } from "../hooks/useReveal.js";
import {
  IconPhone,
  IconWhatsApp,
  IconMapPin,
  IconMail,
  IconGlobe,
  IconArrowRight,
  IconAlert,
} from "./Icons.jsx";
import "../styles/ContactUs.css";

/**
 * Contact Us.
 * Phone (tel:) and WhatsApp (wa.me) links are live. Email and website are
 * shown only when a valid value exists in siteConfig — the supplied
 * "Info.smapurnmglobal.com" is NOT a valid email and is flagged for
 * confirmation rather than turned into a broken link.
 */
export default function ContactUs({ onEnquire }) {
  const [ref, visible] = useReveal();
  const { contact, brand } = siteConfig;

  return (
    <section
      id="contact"
      className="contact section section--surface"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div
          ref={ref}
          className={`contact__grid ${visible ? "is-visible" : ""}`}
        >
          <div className="contact__intro reveal">
            <p className="eyebrow">Contact Us</p>
            <h2 id="contact-heading">Contact {brand.name}</h2>
            <p className="contact__tagline">{brand.tagline}</p>
            <p>
              Reach out for wholesale requirements, product information or
              international export enquiries. We'd be glad to discuss how we can
              help.
            </p>

            <ul className="contact__list" role="list">
              <li>
                <span className="contact__ico">
                  <IconPhone />
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact__ico contact__ico--wa">
                  <IconWhatsApp />
                </span>
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__ico">
                  <IconMapPin />
                </span>
                <div>
                  <span className="contact__label">Address</span>
                  <address>
                    {contact.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              </li>
              <li>
                <span className="contact__ico contact__ico--muted">
                  <IconMail />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  ) : (
                    <span className="contact__pending">
                      To be confirmed
                      <small>
                        Provided value "{contact.emailRawProvided}" is not a valid
                        email address and needs verification.
                      </small>
                    </span>
                  )}
                </div>
              </li>
              <li>
                <span className="contact__ico contact__ico--muted">
                  <IconGlobe />
                </span>
                <div>
                  <span className="contact__label">Website</span>
                  {contact.website ? (
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.website}
                    </a>
                  ) : (
                    <span className="contact__pending">To be confirmed</span>
                  )}
                </div>
              </li>
            </ul>

            <div className="contact__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onEnquire?.("", "")}
              >
                Send an Enquiry
                <IconArrowRight />
              </button>
              <a
                className="btn btn--outline"
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact__map reveal reveal--right">
            <div className="contact__map-inner">
              <IconMapPin />
              <h3>{brand.name}</h3>
              <address>
                {contact.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <p className="contact__map-note">
                <IconAlert />
                {brand.activity} — {brand.businessType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
