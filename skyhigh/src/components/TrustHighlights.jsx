import { CheckCircle, Package, Users, MessageCircle } from 'lucide-react';
import '../styles/sections.css';

const TrustHighlights = () => {
  const highlights = [
    { icon: <CheckCircle size={24} />, text: 'Quality-Focused Product Sourcing' },
    { icon: <Package size={24} />, text: 'Premium Terry Towels' },
    { icon: <Users size={24} />, text: 'Customized B2B Export Solutions' },
    { icon: <MessageCircle size={24} />, text: 'Professional Buyer Communication' },
  ];

  return (
    <section id="trust" className="trust-highlights">
      <div className="container">
        <div className="trust-grid">
          {highlights.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <p className="trust-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
