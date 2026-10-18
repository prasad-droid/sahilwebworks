import React, { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { IconWhatsApp } from "./Icons.jsx";
import "../styles/WhatsAppButton.css";

/**
 * Floating WhatsApp action button.
 * Appears after the user scrolls and opens a pre-filled chat.
 */
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
    `Hi ${siteConfig.brand.name}, I'd like to enquire about T-shirt supply.`
  )}`;

  return (
    <a
      className={`whatsapp-fab ${show ? "is-visible" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sampurnm Global on WhatsApp"
    >
      <span className="whatsapp-fab__pulse" aria-hidden="true" />
      <IconWhatsApp />
      <span className="whatsapp-fab__label">Chat with us</span>
    </a>
  );
}
