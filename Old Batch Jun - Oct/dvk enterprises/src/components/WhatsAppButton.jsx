import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { SITE, waLink } from "../data/site";

function WhatsAppIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const OPTIONS = [
  {
    href: waLink(SITE.whatsappIndiaAlt),
    label: "WhatsApp India",
    value: SITE.whatsappIndiaAlt,
    note: "Primary contact",
    primary: true,
  },
  {
    href: waLink(SITE.whatsappIndia),
    label: "WhatsApp India",
    value: SITE.whatsappIndia,
    note: "Alternate number",
  },
  {
    href: waLink(SITE.whatsappUae),
    label: "WhatsApp UAE",
    value: SITE.whatsappUae,
    note: "UAE enquiries",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="wa-float" ref={wrapRef}>
      <div
        id="whatsapp-options"
        className={`wa-float__panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <p className="wa-float__title">Chat with DVK Enterprises</p>
        <p className="wa-float__subtitle">
          Choose a number and send us a pre-filled product enquiry.
        </p>

        <div className="wa-float__options">
          {OPTIONS.map(({ href, label, value, note, primary }) => (
            <a
              key={value}
              className={`wa-float__option${primary ? " wa-float__option--primary" : ""}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
            >
              <span className="wa-float__option-icon" aria-hidden="true">
                <WhatsAppIcon size={20} />
              </span>
              <span className="wa-float__option-text">
                <small>{label} · {note}</small>
                <strong>{value}</strong>
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="wa-float__hint">
          Opens WhatsApp in a new tab with your message ready to send.
        </p>
      </div>

      <button
        ref={buttonRef}
        type="button"
        className={`wa-float__button${open ? " is-open" : ""}`}
        aria-label={open ? "Close WhatsApp contact options" : "Open WhatsApp contact options"}
        aria-expanded={open}
        aria-controls="whatsapp-options"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X size={24} strokeWidth={2} aria-hidden="true" />
        ) : (
          <WhatsAppIcon size={28} />
        )}
        {!open && <span className="wa-float__pulse" aria-hidden="true" />}
      </button>
    </div>
  );
}
