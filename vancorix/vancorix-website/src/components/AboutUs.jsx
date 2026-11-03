import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '80px 20px' }}>
      <h2 style={{ 
        fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        fontSize: '3.2rem', 
        fontWeight: '700', 
        letterSpacing: '-1.5px', 
        color: '#2c3e50', 
        marginBottom: '16px',
        textAlign: 'center'
      }}>Building Connections. Creating Global Opportunities.</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px', 
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <img
            src="/assets/global-trade.jpg"
            alt="Global trade and agricultural sourcing operations"
            loading="lazy"
            style={{ 
              width: '100%', 
              borderRadius: 8, 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          />

          <div>
            <p style={{
              color: '#5d6d7e', 
              marginBottom: '30px', 
              fontSize: '1.05rem', 
              lineHeight: '1.8',
              margin: '0'
            }}>
              Vancorix International operates in the import-export sector, with a focus on
              Food & Agriculture. Our vision is to connect businesses across markets through
              global sourcing opportunities and seamless trade coordination.
            </p>

            <blockquote style={{
              fontStyle: 'italic', 
              color: '#5d6d7e', 
              lineHeight: '1.8', 
              margin: '24px 0', 
              paddingLeft: '20px', 
              borderLeft: '3px solid #d4a843', 
              maxWidth: '600px',
              color: '#2c3e50'
            }}>
              <p>
                We aim to create meaningful business relationships by understanding buyer
                requirements, identifying suitable sourcing opportunities, and facilitating
                professional trade discussions.
              </p>
              <p>
                Our approach is built around the belief that successful international trade
                begins with trust, clear communication, and long-term business relationships.
              </p>
            </blockquote>

            <p style={{
              marginTop: '30px', 
              color: '#5d6d7e', 
              lineHeight: '1.8'
            }}>
              <strong style={{ color: '#d4a843' }}>Global Sourcing, Seamless Trade.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;