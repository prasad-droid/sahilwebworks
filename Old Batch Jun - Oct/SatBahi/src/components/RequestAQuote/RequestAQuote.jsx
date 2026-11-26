import { FiMail, FiPhone, FiMessageCircle, FiMapPin } from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";
import InquiryForm from "../InquiryForm/InquiryForm";
import { SITE, whatsappLink, mailtoLink, telLink } from "../../data/site";

export default function RequestAQuote() {
  return (
    <section className="section rfq" id="request-quote" aria-label="Request a quote">
      <div className="container">
        <div className="rfq__grid">
          <Reveal>
            <h2>Looking for Premium Tote Bags?</h2>
            <p>
              Tell us what you need and our team will help you find the right tote bag
              solution for your business.
            </p>

            <ul className="rfq__contact-list">
              <li>
                <a className="rfq__contact-item" href={telLink()}>
                  <FiPhone aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="rfq__contact-item"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMessageCircle aria-hidden="true" />
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="rfq__contact-item" href={mailtoLink()}>
                  <FiMail aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <div className="rfq__contact-item">
                  <FiMapPin aria-hidden="true" />
                  {SITE.addressLines.join(", ")}
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
