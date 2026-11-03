import React from 'react';
import { Globe, Target, MessageCircle, ShieldCheck, Users, Handshake } from 'lucide-react';

const WhyChooseUsCard = ({ id, title, icon, description }) => {
  return (
    <div style={{
      background: '#fff', 
      borderRadius: 8, 
      padding: 30, 
      transition: 'transform 0.3s ease', 
      border: '1px solid #e0e0e0',
      marginBottom: 20
    }}>
      <div
        style={{
          width: '48px', 
          height: '48px', 
          margin: '0 auto 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#d4a843', 
          fontSize: '1.2rem'
        }}>
        {icon}
      </div>

      <h3 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '10px'
      }}>
        {title}
      </h3>

      <p style={{ 
        textAlign: 'center', 
        color: '#5d6d7e', 
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  const cards = [
    { id: 1, title: 'Global Perspective', icon: Globe, description: 'An international approach to sourcing and business opportunities.' },
    { id: 2, title: 'Sector Focus', icon: Target, description: 'Specialized business focus on Food & Agriculture.' },
    { id: 3, title: 'Sourcing Approach', icon: MessageCircle, description: 'Understanding product requirements and exploring suitable sourcing opportunities.' },
    { id: 4, title: 'Professional Communication', icon: ShieldCheck, description: 'Clear discussions and structured business coordination.' },
    { id: 5, title: 'Buyer-Oriented Approach', icon: Users, description: 'Understanding the needs of importers, distributors, and wholesale buyers.' },
    { id: 6, title: 'Long-Term Relationships', icon: Handshake, description: 'Building business connections beyond individual transactions.' },
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
      }}>Your Partner in Global Trade Opportunities</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {cards.map((card) => (
            <WhyChooseUsCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;