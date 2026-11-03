import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#2c3e50', 
      color: '#fff', 
      padding: '80px 20px 40px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '40px', 
          marginBottom: '40px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="#" style={{
              fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif", 
              fontWeight: '700', 
              fontSize: '1.8rem', 
              letterSpacing: '-0.5px', 
              color: '#fff', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              Vancorix
            </a>

            <p style={{ margin: '20px 0 24px', fontSize: '0.9rem', opacity: 0.8 }}>
              Global Sourcing, Seamless Trade.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#d4a843', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#home" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Home</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#about" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> About Us</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#portfolio" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Portfolio</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#services" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Services</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#contact" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#d4a843', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Food & Agriculture</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Food Products</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Agricultural Products</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#aab7c2', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}><i style={{ marginRight: '8px', color: '#d4a843' }}>●</i> Global Sourcing</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#d4a843', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ color: '#aab7c2', fontSize: '0.85rem' }}>Phone:</span>
                <a href="tel:+919225354180" style={{ color: '#d4a843', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem' }}>+91 9225354180</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ color: '#aab7c2', fontSize: '0.85rem' }}>Email:</span>
                <a href="mailto:Trade.cancorix@gmail.com" style={{ color: '#d4a843', textDecoration: 'none', fontSize: '0.85rem' }}>Trade.cancorix@gmail.com</a>
              </li>
              <li>
                <span style={{ color: '#aab7c2', fontSize: '0.85rem' }}>WhatsApp:</span>
                <a href="https://wa.me/919225354180" target="_blank" style={{ color: '#d4a843', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem' }}>+91 9225354180</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '40px' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: '0', textAlign: 'center' }}>
            &copy; {currentYear} Vancorix International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;