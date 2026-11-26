import React, { useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { productCategories } from "../data/products.js";
import {
  IconArrowRight,
  IconWhatsApp,
  IconPhone,
  IconMapPin,
  IconMail,
} from "./Icons.jsx";
import "../styles/Footer.css";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer({ onEnquire }) {
  const { brand, contact, navLinks } = siteConfig;
  const [legalNotice, setLegalNotice] = useState("");

  const showLegal = (label) =>
    setLegalNotice(
      `"${label}" page has not been created yet — this is a placeholder link.`
    );

  return (
    <footer className="footer">
      {/* Final CTA */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <p className="eyebrow eyebrow--light">Ready to start?</p>
            <h2>Ready to Explore Our T-Shirt Portfolio?</h2>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onEnquire?.("", "")}
          >
            Contact Us
            <IconArrowRight />
          </button>
        </div>
      </div>

      <div className="container footer__main">
        <div className="footer__brand">
          <a
            className="footer__logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
            }}
          >
            <span className="footer__logo-mark" aria-hidden="true">
              S
            </span>
            {brand.name}
          </a>
          <p className="footer__tagline">{brand.tagline}</p>
          <p className="footer__about">
            {brand.name} is a {brand.businessType.toLowerCase()} focused on{" "}
            {brand.activity.toLowerCase()} — connecting retail, wholesale and
            export buyers through a professional product portfolio and a simple
            enquiry process.
          </p>
          <a
            className="footer__wa"
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            Chat on WhatsApp
          </a>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul role="list">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("enquiry");
                }}
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product portfolio">
          <h3>Product Portfolio</h3>
          <ul role="list">
            {productCategories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <a
                  href="#categories"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("categories");
                  }}
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__contact">
          <h3>Get in Touch</h3>
          <ul role="list">
            <li>
              <IconPhone />
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <IconMapPin />
              <address>
                {contact.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </li>
            <li>
              <IconMail />
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                <span className="footer__pending">Email — to be confirmed</span>
              )}
            </li>
          </ul>
          <div className="footer__contact-cta">
            <button
              type="button"
              className="btn btn--outline btn--sm"
              onClick={() => onEnquire?.("", "")}
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <div className="footer__legal">
          <button type="button" onClick={() => showLegal("Privacy Policy")}>
            Privacy Policy
          </button>
          <button type="button" onClick={() => showLegal("Terms & Conditions")}>
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {legalNotice && (
        <div className="footer__notice" role="status" aria-live="polite">
          <span>{legalNotice}</span>
          <button
            type="button"
            aria-label="Dismiss notice"
            onClick={() => setLegalNotice("")}
          >
            ×
          </button>
        </div>
      )}
    </footer>
  );
}
