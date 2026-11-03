import React from 'react';
import { Truck, Leaf, Container } from 'lucide-react';

const PortfolioCategory = ({ title, icon, description }) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 8,
      padding: 30,
      transition: 'transform 0.3s ease',
      border: '1px solid #e0e0e0',
      marginBottom: 30
    }}>
      <div
        style={{
          width: '60px', 
          height: '60px', 
          margin: '0 auto 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#d4a843', 
          fontSize: '1.3rem'
        }}>
        {icon}
      </div>

      <h3 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '15px'
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
          color: '#2c3e50', 
          marginTop: '10px'
        }}
      >
        Discuss Requirements
      </a>
    </div>
  );
};

const BusinessPortfolio = () => {
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
      }}>Our Business Portfolio</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <PortfolioCategory
            title="Food Products"
            icon={<Leaf />}
            description="Explore food sourcing opportunities for international importers, wholesalers, distributors, and businesses looking for suitable supply partners."
          />

          <PortfolioCategory
            title="Agricultural Products"
            icon={<Leaf />}
            description="Connecting agricultural sourcing opportunities with businesses seeking products from Indian and international markets."
          />

          <PortfolioCategory
            title="Global Sourcing & Trade"
            icon={<Truck />}
            description="Supporting international trade opportunities through sourcing discussions, business connections, and trade coordination."
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessPortfolio;