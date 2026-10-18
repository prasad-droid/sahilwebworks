import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { countries, productCategories, WHATSAPP_NUMBER, CONTACT } from "../../data/data";

const initial = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  category: "",
  quantity: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initial);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildMessage = () =>
    Object.entries(form)
      .filter(([k, v]) => v && k !== "message")
      .map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`)
      .join("%0A") + (form.message ? `%0A%0AMessage: ${form.message}` : "");

  const mailHref = () => {
    const subject = encodeURIComponent(`Export Inquiry - ${form.category || "Products"} | ${form.name || form.company || "New Inquiry"}`);
    const body = encodeURIComponent(
      Object.entries(form)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`)
        .join("\n")
    );
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const waHref = () =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hello Viraj Import & Export, I would like to enquire about your products.\n\n${buildMessage()}`
    )}`;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">Contact Us</span>
          <h2 className="section__title">Request a Catalogue or Quote</h2>
          <p className="section__sub">
            Tell us what you need — we typically respond within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info" data-reveal="left">
            <h3 className="contact__info-title">Get In Touch</h3>
            <p className="contact__info-desc">
              Our export team is ready to help you source premium Indian products.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <FiPhone aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a href="tel:+919226559225">{CONTACT.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <FiMessageCircle aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a href={waHref()} target="_blank" rel="noreferrer">
                    {CONTACT.whatsapp}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <FiMail aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <FiMapPin aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__label">Address</span>
                  <address>
                    Viraj, Islampur,
                    <br />
                    District Sangli,
                    <br />
                    Maharashtra 415409, India
                  </address>
                </div>
              </li>
            </ul>

            <div className="contact__map">
              <iframe
                title="Viraj Import & Export location on Google Maps"
                src="https://www.google.com/maps?q=Islampur,+Sangli,+Maharashtra+415409,+India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <form className="contact__form" data-reveal="right" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Name *</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required value={form.name} onChange={update} />
              </div>
              <div className="contact__field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Company name" value={form.company} onChange={update} />
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="country">Country *</label>
                <select id="country" name="country" required value={form.country} onChange={update}>
                  <option value="">Select country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="category">Product Category *</label>
                <select id="category" name="category" required value={form.category} onChange={update}>
                  <option value="">Select category</option>
                  {productCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required value={form.email} onChange={update} />
              </div>
              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={update} />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="quantity">Quantity / Volume</label>
              <input id="quantity" name="quantity" type="text" placeholder="e.g. 500 pcs / 1 container" value={form.quantity} onChange={update} />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your requirements…"
                value={form.message}
                onChange={update}
              />
            </div>

            <div className="contact__actions">
              <a href={mailHref()} className="btn btn--primary btn--lg">
                Send Inquiry <FiSend />
              </a>
              <a href={waHref()} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--lg">
                WhatsApp <FiMessageCircle />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
