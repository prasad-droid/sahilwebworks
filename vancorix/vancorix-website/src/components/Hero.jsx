import React from 'react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #eef2f5 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 20px 40px'
    }}>
      <div style={{
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '60px', 
        alignItems: 'center', 
        minHeight: '600px'
      }}>
        <div style={{ maxWidth: '550px' }}>
          <span style={{
            display: 'inline-block', 
            padding: '8px 20px', 
            background: 'rgba(212, 168, 67, 0.2)', 
            color: '#d4a843', 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            marginBottom: '30px'
          }}>
            Global Sourcing. Seamless Trade.
          </span>

          <h1 style={{
            fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
            fontSize: '4rem', 
            fontWeight: '800', 
            letterSpacing: '-2px', 
            color: '#2c3e50', 
            lineHeight: '1.1', 
            marginBottom: '24px'
          }}>
            Connecting Global Markets Through Seamless Trade.
          </h1>

          <p style={{
            fontSize: '1.25rem', 
            color: '#5d6d7e', 
            lineHeight: '1.8', 
            marginBottom: '40px'
          }}>
            Vancorix International brings together global sourcing and international trade
            opportunities across the Food & Agriculture sector. We aim to make business
            connections simpler through professional sourcing and trade coordination.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="#portfolio" 
              style={{
                padding: '12px 28px', 
                fontWeight: '600', 
                letterSpacing: '0.5px', 
                textDecoration: 'none', 
                borderRadius: 4, 
                background: '#d4a843', 
                color: '#2c3e50', 
                transition: 'all 0.3s ease'
              }}>
                Explore Our Portfolio
            </a>
            <a 
              href="#contact" 
              style={{
                padding: '12px 28px', 
                fontWeight: '600', 
                letterSpacing: '0.5px', 
                textDecoration: 'none', 
                border: '1px solid #e0e0e0', 
                borderRadius: 4, 
                color: '#2c3e50', 
                transition: 'all 0.3s ease'
              }}>
                Contact Our Team
            </a>
          </div>
        </div>

        <div style={{ 
          position: 'relative', 
          justifySelf: 'end'
        }}>
          <img
            src="/assets/trade-shipping.jpg"
            alt="International trade shipping containers and agricultural products"
            loading="lazy"
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: 8, 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', 
              transform: 'translateY(20px)', 
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(20px)'; }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;