import React from 'react';
import { Globe, Leaf } from 'lucide-react';

const BrandHighlights = () => {
  const highlights = [
    { id: 1, title: 'Global Sourcing', icon: Globe, description: 'Connecting businesses with quality suppliers worldwide' },
    { id: 2, title: 'Food & Agriculture', icon: Leaf, description: 'Specialized sourcing in the food and agriculture sector' },
  ];

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
      }}>Business Identity</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit', gap: '30px' }}>
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              style={{
                background: '#fff', 
                borderRadius: 8, 
                padding: 30, 
                transition: 'transform 0.3s ease', 
                border: '1px solid #e0e0e0'
              }}
            >
              <div
                style={{
                  width: '40px', 
                  height: '40px', 
                  margin: '0 auto 20px', 
                  background: 'rgba(212, 168, 67, 0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#d4a843', 
                  fontSize: '1.2rem'
                }}>
                {highlight.icon}
              </div>

              <h3 style={{ 
                textAlign: 'center', 
                color: '#2c3e50', 
                marginBottom: '12px'
              }}>
                {highlight.title}
              </h3>

              <p style={{ 
                textAlign: 'center', 
                color: '#5d6d7e', 
                lineHeight: '1.6'
              }}>
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandHighlights;