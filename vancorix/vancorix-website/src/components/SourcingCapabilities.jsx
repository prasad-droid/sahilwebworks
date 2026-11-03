import React from 'react';
import { Truck, Map, Shield, Settings } from 'lucide-react';

const SourcingCapability = ({ title, icon, description }) => {
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
        marginBottom: '12px'
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

const SourcingCapabilities = () => {
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
      }}>Sourcing Capabilities</h2>
      <div style={{ 
        width: '60px', 
        height: '1px', 
        background: '#d4a843', 
        margin: '0 auto 0'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <SourcingCapability
            title="Global Sourcing"
            icon={<Truck />}
            description="Exploring sourcing opportunities and connecting businesses with suitable suppliers according to their product requirements."
          />

          <SourcingCapability
            title="Import & Export"
            icon={<Map />}
            description="Supporting international trade discussions and coordinating business requirements across markets."
          />

          <SourcingCapability
            title="Food & Agriculture"
            icon={<Leaf />}
            description="Focusing on food and agricultural sourcing opportunities for international buyers and business partners."
          />
        </div>
      </div>
    </div>
  );
};

export default SourcingCapabilities;