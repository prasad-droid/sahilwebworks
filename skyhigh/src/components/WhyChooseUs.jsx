import { Package, Users, MessageCircle, FileCheck } from 'lucide-react';
import '../styles/sections.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Package size={32} />,
      title: 'Premium Product Range',
      description: 'Wide range of terry towels for different B2B sourcing needs.'
    },
    {
      icon: <Users size={32} />,
      title: 'Buyer-Focused Solutions',
      description: 'Discuss product specifications and packaging according to requirements.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Clear Communication',
      description: 'Keep product discussions, quotations, and order details organized.'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Export Coordination',
      description: 'Discuss documentation and logistics based on the order and destination.'
    }
  ];

  return (
    <section className="why-choose section">
      <div className="container">
        <div className="section-header">
          <h2>Your Sourcing Partner from India</h2>
        </div>
        <div className="why-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
