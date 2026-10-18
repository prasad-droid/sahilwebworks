import Icon from "./Icon";
import Logo from "./Logo";
import SectionHeading from "./SectionHeading";
import EnquiryForm from "./EnquiryForm";
import { company, contact, whatsappLink, whatsappMessages, mailtoLink } from "../data/assets";

export default function Contact({ seed }) {
  return (
    <section id="contact" className="contact section" aria-label="Contact PrajtamEx">
      <div className="container">
        <SectionHeading
          label="CONTACT US"
          title="Let's Connect and Grow Together"
          subtitle="Looking for products, import/export opportunities or business services? Get in touch with PrajtamEx."
        />

        <div className="contact__grid">
          <div className="contact__info" data-reveal>
            <div className="contact__card">
              <Logo withTagline />
              <p>{company.description}</p>
            </div>

            <ul className="contact__details">
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <Icon name="users" size={19} />
                </span>
                <span>
                  <strong>{company.name}</strong>
                  <span className="contact__sub">Contact Person: {contact.person}</span>
                </span>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <Icon name="phone" size={19} />
                </span>
                <span>
                  <span className="contact__sub">Phone</span>
                  <a href={`tel:${contact.phoneDial}`}>{contact.phoneLabel}</a>
                </span>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <Icon name="chat" size={19} />
                </span>
                <span>
                  <span className="contact__sub">WhatsApp</span>
                  <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                    {contact.whatsappLabel}
                  </a>
                </span>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <Icon name="mail" size={19} />
                </span>
                <span>
                  <span className="contact__sub">Email</span>
                  <a href={mailtoLink({ subject: "Enquiry – PrajtamEx" })}>{contact.email}</a>
                </span>
              </li>
            </ul>

            <div className="contact__ctas">
              <a className="btn btn--primary" href={`tel:${contact.phoneDial}`}>
                <Icon name="phone" size={17} />
                Call Us
              </a>
              <a
                className="btn btn--whatsapp"
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" size={17} />
                WhatsApp
              </a>
              <a className="btn btn--outline" href={mailtoLink({ subject: "Enquiry – PrajtamEx" })}>
                <Icon name="mail" size={17} />
                Email Us
              </a>
            </div>
          </div>

          <div className="contact__form" data-reveal>
            <h3 className="contact__form-title">Send an Enquiry</h3>
            <EnquiryForm seed={seed} />
          </div>
        </div>
      </div>
    </section>
  );
}
