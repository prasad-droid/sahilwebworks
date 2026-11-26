import { useRef, useState } from 'react';
import products from '../data/products';
import '../styles/inquiry.css';

const productCategories = ['Corrugated Packaging', 'Agriculture & Food'];

export default function InquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    product: '',
    quantity: '',
    specifications: '',
    customization: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('B2B Inquiry - ' + formData.productCategory);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Phone / WhatsApp: ${formData.phone}\n` +
      `Country: ${formData.country}\n` +
      `Product Category: ${formData.productCategory}\n` +
      `Product: ${formData.product}\n` +
      `Required Quantity: ${formData.quantity}\n` +
      `Product Specifications: ${formData.specifications}\n` +
      `Customization Requirements: ${formData.customization}\n` +
      `Destination Country / Port: ${formData.destination}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:nexaboundglobal@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    formRef.current.reset();
  };

  const whatsappNumber = '919665895667';
  const defaultWhatsappMessage = 'Hello Nexabound Global, I am interested in sourcing products from India. I would like to discuss my requirements.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  const categoryProducts = products.filter(p => p.category === formData.productCategory);

  const benefits = [
    'Send your product requirements, specifications, quantity, and destination',
    'Get pricing and sourcing details from our team',
    'Q&A on WhatsApp for quick responses'
  ];

  return (
    <section className="inquiry section" id="inquiry">
      <div className="container">
        <div className="inquiry-grid">
          <div className="inquiry-info">
            <span className="section-label">Enquiry</span>
            <h2 className="section-heading">Tell Us What You Need</h2>
            <p className="inquiry-info-text">
              Looking for bulk quantities or customized products from India? Send us your product requirements, specifications, quantity, and destination.
            </p>

            <div className="inquiry-benefits">
              {benefits.map(benefit => (
                <div key={benefit} className="inquiry-benefit">
                  <span className="inquiry-benefit-check" aria-hidden="true">✓</span>
                  {benefit}
                </div>
              ))}
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inquiry-form-whatsapp" style={{ marginBottom: '24px', display: 'inline-flex' }}>
              Chat on WhatsApp
            </a>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--dark)' }}>Prefer email?</strong> We respond to enquiries at{' '}
              <a href="mailto:nexaboundglobal@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>nexaboundglobal@gmail.com</a>
            </div>
          </div>

          <div className="inquiry-form-card">
            <h3 className="inquiry-form-title">Request a Quote</h3>
            {submitted && (
              <div style={{ padding: '14px 18px', background: 'rgba(40, 92, 77, 0.1)', border: '1px solid rgba(40, 92, 77, 0.3)', borderRadius: 'var(--radius-sm)', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--secondary-dark)', fontWeight: 600 }}>
                Thank you. Your email app has been opened with your enquiry. We will get back to you shortly.
              </div>
            )}
            <form className="inquiry-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="Your company"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="inquiry-form-input"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="phone">Phone / WhatsApp *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="inquiry-form-input"
                  placeholder="+91 / your number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="productCategory">Product Category *</label>
                <select
                  id="productCategory"
                  name="productCategory"
                  className="inquiry-form-select"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  {productCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="product">Product *</label>
                <select
                  id="product"
                  name="product"
                  className="inquiry-form-select"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  disabled={!formData.productCategory}
                >
                  <option value="">Select product</option>
                  {categoryProducts.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div className="inquiry-form-group">
                <label className="inquiry-form-label" htmlFor="quantity">Required Quantity</label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="e.g. 1000 pcs / 5 MT"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group full-width">
                <label className="inquiry-form-label" htmlFor="specifications">Product Specifications</label>
                <input
                  id="specifications"
                  name="specifications"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="Size, material, grade, packaging details"
                  value={formData.specifications}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group full-width">
                <label className="inquiry-form-label" htmlFor="customization">Customization Requirements</label>
                <input
                  id="customization"
                  name="customization"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="Printing, dimensions, packaging requirements"
                  value={formData.customization}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group full-width">
                <label className="inquiry-form-label" htmlFor="destination">Destination Country / Port</label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  className="inquiry-form-input"
                  placeholder="e.g. Port of Rotterdam / USA"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-group full-width">
                <label className="inquiry-form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="inquiry-form-textarea"
                  placeholder="Tell us more about your requirements"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="inquiry-form-actions">
                <button type="submit" className="inquiry-form-submit">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}