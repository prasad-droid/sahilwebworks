import { useState } from 'react';
import '../styles/inquiry.css';

const InquiryCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productInterest: '',
    estimatedQuantity: '',
    destinationCountry: '',
    productSpecifications: '',
    preferredPackaging: '',
    additionalRequirements: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.fullName || !formData.businessEmail || !formData.phone || !formData.productInterest) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.businessEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    // Fallback to WhatsApp since no backend configured
    const message = `Inquiry from SkyHigh RP Website:
Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.businessEmail}
Phone: ${formData.phone}
Product Interest: ${formData.productInterest}
Quantity: ${formData.estimatedQuantity}
Destination: ${formData.destinationCountry}
Specifications: ${formData.productSpecifications}
Packaging: ${formData.preferredPackaging}
Additional: ${formData.additionalRequirements}`;
    
    const encodedMessage = encodeURIComponent(message);
    // Using the phone number from contact - need to verify WhatsApp number
    // For now using the provided contact number
    const whatsappUrl = `https://wa.me/918177974851?text=${encodedMessage}`;
    
    // Simulate submission attempt
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: 'Thank you for your inquiry! Redirecting you to WhatsApp to complete your message.' 
      });
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="inquiry" className="inquiry section">
      <div className="container">
        <div className="section-header">
          <h2>Let's Discuss Your Export Requirements</h2>
          <p>
            Looking to source premium terry towels for global markets? 
            Share your requirements and our team can discuss the next steps with you.
          </p>
        </div>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="businessEmail">Business Email *</label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productInterest">Product Interest *</label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                required
              >
                <option value="">Select Product</option>
                <option value="Terry Towels">Terry Towels</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="estimatedQuantity">Estimated Quantity</label>
              <input
                type="text"
                id="estimatedQuantity"
                name="estimatedQuantity"
                value={formData.estimatedQuantity}
                onChange={handleChange}
                placeholder="e.g., 1000 pcs, 20 tons"
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="destinationCountry">Destination Country</label>
              <input
                type="text"
                id="destinationCountry"
                name="destinationCountry"
                value={formData.destinationCountry}
                onChange={handleChange}
                placeholder="e.g., United Kingdom, USA, Australia"
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="productSpecifications">Product Specifications</label>
              <textarea
                id="productSpecifications"
                name="productSpecifications"
                value={formData.productSpecifications}
                onChange={handleChange}
                placeholder="e.g., GSM, size, color for towels or variety for bananas"
              ></textarea>
            </div>
            <div className="form-group full-width">
              <label htmlFor="preferredPackaging">Preferred Packaging</label>
              <textarea
                id="preferredPackaging"
                name="preferredPackaging"
                value={formData.preferredPackaging}
                onChange={handleChange}
                placeholder="e.g., bale packing, carton, specific requirements"
              ></textarea>
            </div>
            <div className="form-group full-width">
              <label htmlFor="additionalRequirements">Additional Requirements</label>
              <textarea
                id="additionalRequirements"
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Any other details or questions"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
          {status.message && (
            <div className={`form-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <p className="form-note">
            Note: This form uses WhatsApp as a fallback since no backend is configured. 
            Your inquiry will be sent via WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
};

export default InquiryCTA;
