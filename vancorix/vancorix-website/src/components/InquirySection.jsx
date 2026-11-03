import React, { useState } from 'react';

const InquirySection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    contactNumber: '',
    country: '',
    inquiryType: 'Other',
    productRequirement: '',
    estimatedQuantity: '',
    additionalMessage: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.companyName.trim()) {
      errors.companyName = 'Company name is required';
    }

    if (!formData.businessEmail.trim()) {
      errors.businessEmail = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      errors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Please enter a valid phone number';
    }

    if (!formData.country.trim()) {
      errors.country = 'Country is required';
    }

    if (!formData.productRequirement.trim()) {
      errors.productRequirement = 'Product/business requirement is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          fullName: '',
          companyName: '',
          businessEmail: '',
          contactNumber: '',
          country: '',
          inquiryType: 'Other',
          productRequirement: '',
          estimatedQuantity: '',
          additionalMessage: '',
        });
        setFormErrors({});
      }, 3000);
    }
  };

  if (showSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div style={{ marginBottom: '30px' }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{ margin: '0 auto 20px' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14 9 10.5"></polyline>
          </svg>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Thank You!</h3>
          <p style={{ color: '#5d6d7e', marginBottom: '20px' }}>
            Your inquiry has been submitted successfully. We will get back to you soon.
          </p>
          <button onClick={() => window.location.reload()} style={{ 
            padding: '12px 28px', 
            background: '#d4a843', 
            color: '#2c3e50', 
            border: 'none', 
            borderRadius: 4, 
            cursor: 'pointer'
          }}>
            Back to Top
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '80px 20px' }}>
      <h2 style={{
        fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        fontSize: '2.8rem', 
        color: '#2c3e50', 
        marginBottom: '16px',
        textAlign: 'center'
      }}>Let's Explore Business Opportunities Together</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <form 
          onSubmit={handleSubmit} 
          style={{ maxWidth: '600px', margin: '0 auto' }}
          noValidate
        >
          <div style={{ 
            display: 'grid', 
            gap: '20px', 
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{
                display: 'block', 
                marginBottom: '8px', 
                color: '#2c3e50', 
                fontWeight: '500'
              }}>Full Name <span style={{ color: '#e74c3c' }}>*</span></label>
              <input
                type="text"
                style={{
                  width: '100%', 
                  padding: '12px 16px', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: 4, 
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                  fontSize: '1rem', 
                  color: '#2c3e50', 
                  outline: 'none', 
                  transition: 'border-color 0.3s'
                }}
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block', 
                marginBottom: '8px', 
                color: '#2c3e50', 
                fontWeight: '500'
              }}>Company Name <span style={{ color: '#e74c3c' }}>*</span></label>
              <input
                type="text"
                style={{
                  width: '100%', 
                  padding: '12px 16px', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: 4, 
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                  fontSize: '1rem', 
                  color: '#2c3e50', 
                  outline: 'none', 
                  transition: 'border-color 0.3s'
                }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{
              display: 'block', 
              marginBottom: '8px', 
              color: '#2c3e50', 
              fontWeight: '500'
            }}>Business Email <span style={{ color: '#e74c3c' }}>*</span></label>
            <input
              type="email"
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                outline: 'none', 
                transition: 'border-color 0.3s'
              }}
              required
            />
          </div>

          <div>
            <label style={{
              display: 'block', 
              marginBottom: '8px', 
              color: '#2c3e50', 
              fontWeight: '500'
            }}>Contact Number <span style={{ color: '#e74c3c' }}>*</span></label>
            <input
              type="tel"
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                outline: 'none', 
                transition: 'border-color 0.3s'
              }}
              required
              pattern="^\+?[\d\s-]{8,}$"
            />
          </div>

          <div>
            <label style={{
              display: 'block', 
              marginBottom: '8px', 
              color: '#2c3e50', 
              fontWeight: '500'
            }}>Country <span style={{ color: '#e74c3c' }}>*</span></label>
            <select
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                appearance: 'none', 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'none\' stroke=\'currentColor%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")', 
                backgroundRepeat: 'no-repeat', 
                backgroundRight: '12px'
              }}
            >
              <option value="">Select country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
              <option value="Germany">Germany</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block', 
              marginBottom: '8px', 
              color: '#2c3e50', 
              fontWeight: '500'
            }}>Inquiry Type <span style={{ color: '#e74c3c' }}>*</span></label>
            <select
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                appearance: 'none', 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'none\' stroke=\'currentColor%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")', 
                backgroundRepeat: 'no-repeat', 
                backgroundRight: '12px'
              }}
            >
              <option value="Import Requirement">Import Requirement</option>
              <option value="Export Requirement">Export Requirement</option>
              <option value="Food Products">Food Products</option>
              <option value="Agricultural Products">Agricultural Products</option>
              <option value="Global Sourcing">Global Sourcing</option>
              <option value="Business Partnership">Business Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block', 
              marginBottom: '8px', 
              color: '#2c3e50', 
              fontWeight: '500'
            }}>Product / Business Requirement <span style={{ color: '#e74c3c' }}>*</span></label>
            <textarea
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                minHeight: '120px', 
                resize: 'vertical', 
                outline: 'none', 
                transition: 'border-color 0.3s'
              }}
              required
            ></textarea>
          </div>

          <div>
            <label>Estimated Quantity (optional)</label>
            <input
              type="text"
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                outline: 'none', 
                transition: 'border-color 0.3s'
              }}
              placeholder="e.g., 500 MT, 20 containers"
            />
          </div>

          <div>
            <label>Additional Message</label>
            <textarea
              style={{
                width: '100%', 
                padding: '12px 16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', 
                fontSize: '1rem', 
                color: '#2c3e50', 
                minHeight: '100px', 
                resize: 'vertical', 
                outline: 'none', 
                transition: 'border-color 0.3s'
              }}
              placeholder="Share any additional details about your business needs..."
            ></textarea>
          </div>

          <button type="submit" style={{
            width: '100%', 
            padding: '12px 28px', 
            background: '#d4a843', 
            color: '#2c3e50', 
            border: 'none', 
            borderRadius: 4, 
            fontWeight: '600', 
            letterSpacing: '0.5px'
          }}>
            Submit Inquiry
          </button>
        </form>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
        <p style={{ color: '#5d6d7e', marginBottom: '20px' }}>
          Alternatively, connect via WhatsApp: <a
            href="https://wa.me/919225354180"
            target="_blank"
            style={{ color: '#d4a843', textDecoration: 'none', fontWeight: '600' }}
          >
            +91 9225354180
          </a>
        </p>
      </div>
    </div>
  );
};

export default InquirySection;