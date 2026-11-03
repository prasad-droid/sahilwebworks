import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '80px 20px' }}>
      <h2 style={{
        fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        fontSize: '2.8rem', 
        color: '#2c3e50', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>Let's Connect and Grow Together</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px'
        }}>
          <div>
            <div style={{
              width: '30px', 
              height: '30px', 
              background: 'rgba(212, 168, 67, 0.1)', 
              borderRadius: 6, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '12px'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2 14.8 14.8 0 0 1 0 4.11 2 2 0 0 1 1.72 2 19.79 19.79 0 0 1 6.06 1.5 19.5 19.5 0 0 1 8 2.18 2 2 0 0 1 9.19 4l1.45 1.45a8 8 0 0 1-6 6 19.79 19.79 0 0 1-3.07 8.67 2 2 0 0 1-3.07 8.63A2 2 0 0 1 .08 22 2 2 0 0 1 2.11 19.9a14.8 14.8 0 0 1 6-6 2 2 0 0 1 3.08-.08zm-11.18 1.11a8.94 8.94 0 0 1 .59 5.9l1.46-1.46a8.95 8.95 0 0 1-5.88-5.88l-1.46 1.46zM 4.94 4.94l 1.41 1.41 1.41-1.41-1.41-1.41z"/>
              </svg>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '4px' }}>Phone</h4>
              <p style={{ color: '#5d6d7e' }}>
                <a href="tel:+919225354180" style={{ color: '#d4a843', textDecoration: 'none' }}>
                  +91 9225354180
                </a>
              </p>
            </div>
          </div>

          <div>
            <div style={{ width: '30px', height: '30px', background: 'rgba(212, 168, 67, 0.1)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4c1.66 0 3.05.69 4.22 1.8l1.84 1.84c1.51-.29 2.82-.08 4.08.28 1.36.27 2.57 1.05 3.46 2.08 1.29 1.51.83 3.36-.24 4.3l1.36 1.36c-.89 1.54-2.3 1.84-3.59.78L8.33 13.5c.67-.93.09-2.03-.86-2.5L5.86 6.08c1.02-.64 2.36-.63 3.19.12l1.84 1.84c-.66 1.51-.08 2.82.28 4.08zM12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '4px' }}>Email</h4>
              <p style={{ color: '#5d6d7e' }}>
                <a href="mailto:Trade.cancorix@gmail.com" style={{ color: '#d4a843', textDecoration: 'none' }}>
                  Trade.cancorix@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <div style={{ width: '30px', height: '30px', background: 'rgba(212, 168, 67, 0.1)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="3 21 9 21 9 15"></polyline>
              </svg>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '4px' }}>WhatsApp</h4>
              <p style={{ color: '#5d6d7e' }}>
                <a href="https://wa.me/919225354180" target="_blank" style={{ color: '#d4a843', textDecoration: 'none', fontWeight: '600' }}>
                  +91 9225354180
                </a>
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '400px' }}>
          <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Location</h4>
          <p style={{ color: '#5d6d7e', fontSize: '0.9rem' }}>
            Pashan, Pune, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;