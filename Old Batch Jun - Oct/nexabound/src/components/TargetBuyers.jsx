import { useEffect, useRef } from 'react';
import '../styles/target-buyers.css';

const buyerTypes = [
  {
    icon: '⇲',
    name: 'Importers',
    description: 'Businesses that import Indian products for distribution in their local markets.'
  },
  {
    icon: '◫',
    name: 'Distributors',
    description: 'Companies looking to distribute Indian products through established supply chains.'
  },
  {
    icon: '▦',
    name: 'Wholesalers',
    description: 'Traders purchasing bulk volumes for resale to retailers and businesses.'
  },
  {
    icon: '⇄',
    name: 'Trading Companies',
    description: 'Trading firms seeking reliable Indian suppliers for international transactions.'
  },
  {
    icon: '⚙',
    name: 'Manufacturers',
    description: 'Industrial buyers requiring packaging, raw materials, and food ingredients.'
  },
  {
    icon: '♛',
    name: 'Commercial Businesses',
    description: 'Businesses of all sizes looking for dependable product supply from India.'
  }
];

export default function TargetBuyers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current ? sectionRef.current.querySelectorAll('.fade-up') : [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="target-buyers section" id="buyers" ref={sectionRef}>
      <div className="container">
        <div className="target-buyers-header fade-up">
          <span className="section-label">Target Buyers</span>
          <h2 className="section-heading">Who We Work With</h2>
          <p className="section-subheading">
            Serving B2B buyers and commercial businesses across global markets.
          </p>
        </div>

        <div className="target-buyers-grid">
          {buyerTypes.map((buyer, index) => (
            <div key={buyer.name} className={`target-buyer-card fade-up fade-up-delay-${index % 3 + 1}`}>
              <span className="target-buyer-icon" aria-hidden="true">{buyer.icon}</span>
              <h3 className="target-buyer-name">{buyer.name}</h3>
              <p className="target-buyer-desc">{buyer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}