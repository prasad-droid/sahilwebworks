import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import InquiryForm from "./InquiryForm";

const WHATSAPP_NUMBER = "919324029664";
const PHONE_DISPLAY = "+91 93240 29664";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Contact Us</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          Let's Discuss Your <span>Export Requirement</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          Reach out to our team for quotes, product specifications, samples, and export inquiries.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact__card reveal" data-animation="fade-up">
            <div className="contact__card-icon">
              <Phone size={20} />
            </div>
            <div>
              <h3>Phone</h3>
              <p>{PHONE_DISPLAY}</p>
            </div>
          </div>

          <div className="contact__card reveal" data-animation="fade-up" data-delay="1">
            <div className="contact__card-icon">
              <Mail size={20} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:chikhalkarenterprises@gmail.com">chikhalkarenterprises@gmail.com</a>
            </div>
          </div>

          <div className="contact__card reveal" data-animation="fade-up" data-delay="2">
            <div className="contact__card-icon">
              <MapPin size={20} />
            </div>
            <div>
              <h3>Company</h3>
              <p>CHIKHALKAR ENTERPRISES · India</p>
            </div>
          </div>

          <div className="contact__actions reveal" data-animation="fade-up" data-delay="3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello CHIKHALKAR ENTERPRISES, I would like to request a quote for towels.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="btn btn-primary">
              <Phone size={17} /> Call Now
            </a>
            <a href="mailto:chikhalkarenterprises@gmail.com" className="btn btn-outline">
              <Mail size={17} /> Email
            </a>
          </div>
        </div>

        <div className="reveal" data-animation="fade-left">
          <InquiryForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
