import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "@/styles/contact.css";

const PRODUCT_OPTIONS = [
  "Alcohol Swabs",
  "Medical Gloves",
  "Infusion Products",
  "Catheters",
  "Urine Collection Products",
  "Wound Care & Dressings",
  "Other",
];

const CONTACT_INFO = [
  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 91377 30636", href: "tel:+919137730636" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+91 91377 30636", href: "https://wa.me/919137730636" },
  { icon: <FaEnvelope />, label: "Email", value: "Info@viomglobalexim.com", href: "mailto:Info@viomglobalexim.com" },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Arihant Abhilasha, B112, Plot No. 10, Sector 35, Kharghar, Navi Mumbai, Maharashtra 410210, India",
    href: "https://maps.google.com/?q=Kharghar,+Navi+Mumbai,+Maharashtra+410210",
  },
  { icon: <FaClock />, label: "Business Hours", value: "Monday – Saturday, 9 AM – 6 PM", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  useEffect(() => {
    const handler = (e) => setForm((f) => ({ ...f, product: e.detail }));
    window.addEventListener("viom:enquire", handler);
    return () => window.removeEventListener("viom:enquire", handler);
  }, []);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildBody = () =>
    [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product Interested In: ${form.product}`,
      `Quantity: ${form.quantity}`,
      `Message: ${form.message}`,
    ].join("\n");

  const handleMail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Export Inquiry - ViOm Global Exim");
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:Info@viomglobalexim.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildBody());
    window.open(`https://wa.me/919137730636?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-head reveal" data-animation="fade-up">
          <span className="section-tag">Contact Us</span>
          <h2>
            Let&apos;s Build Global <span>Healthcare Partnerships</span>
          </h2>
          <p>Reach out for quotations, product details, or partnership opportunities. We respond promptly.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal" data-animation="fade-right">
            <div className="contact__brand">
              <h3>ViOm Global Exim</h3>
              <span>Connecting India to the World</span>
            </div>

            <ul className="contact__list">
              {CONTACT_INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact__list-icon">{item.icon}</span>
                  <div>
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__map">
              <iframe
                title="ViOm Global Exim location - Kharghar, Navi Mumbai"
                src="https://www.google.com/maps?q=Kharghar,%20Navi%20Mumbai,%20Maharashtra%20410210&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact__form reveal" data-animation="fade-left" onSubmit={handleMail}>
            <h3>Send an Inquiry</h3>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" required placeholder="Your full name" value={form.name} onChange={update("name")} />
              </div>
              <div className="contact__field">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Company name" value={form.company} onChange={update("company")} />
              </div>
            </div>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="country">Country *</label>
                <input id="country" type="text" required placeholder="Your country" value={form.country} onChange={update("country")} />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" required placeholder="you@company.com" value={form.email} onChange={update("email")} />
              </div>
            </div>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" type="tel" required placeholder="+00 000 000 0000" value={form.phone} onChange={update("phone")} />
              </div>
              <div className="contact__field">
                <label htmlFor="product">Product Interested In *</label>
                <select id="product" required value={form.product} onChange={update("product")}>
                  <option value="" disabled>
                    Select a product
                  </option>
                  {PRODUCT_OPTIONS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="quantity">Quantity</label>
              <input id="quantity" type="text" placeholder="e.g. 100,000 pieces" value={form.quantity} onChange={update("quantity")} />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" rows="4" required placeholder="Tell us about your requirements..." value={form.message} onChange={update("message")} />
            </div>
            <div className="contact__actions">
              <button type="submit" className="btn btn-primary">
                Send Inquiry <FiSend />
              </button>
              <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
