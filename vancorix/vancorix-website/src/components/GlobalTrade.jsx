import React from 'react';

const GlobalTrade = () => {
  return (
    <div style={{ padding: '80px 20px' }}>
      <h2 style={{
        fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        fontSize: '3.2rem', 
        fontWeight: '700', 
        letterSpacing: '-1.5px', 
        color: '#2c3e50', 
        marginBottom: '16px',
        textAlign: 'left'
      }}>From Local Sourcing to Global Opportunities</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <p style={{
              color: '#5d6d7e', 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              marginBottom: '30px'
            }}>
              Vancorix International aims to bridge sourcing opportunities and international
              buyer requirements through a professional, relationship-driven approach to global
              trade.
            </p>

            <a 
              href="#contact" 
              style={{
                display: 'inline-block', 
                padding: '12px 28px', 
                fontWeight: '600', 
                letterSpacing: '0.5px', 
                textDecoration: 'none', 
                borderRadius: 4,
                background: '#d4a843', 
                color: '#2c3e50'
              }}>
                Start a Business Discussion
            </a>
          </div>

          <div>
            <img
              src="/assets/trade-containers.jpg"
              alt="International cargo containers and global trade logistics"
              loading="lazy"
              style={{ 
                width: '100%', 
                borderRadius: 8, 
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTrade;