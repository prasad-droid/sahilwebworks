import { useEffect, useRef } from 'react';
import '../styles/why-us.css';

const reasons = [
  {
    icon: '◆',
    title: 'Quality-Focused Sourcing',
    description: 'Focus on sourcing quality products from India for international and domestic B2B buyers.'
  },
  {
    icon: '◧',
    title: 'Custom Product Specifications',
    description: 'Discuss product requirements and customization options according to buyer needs.'
  },
  {
    icon: '▤',
    title: 'Bulk Order Focus',
    description: 'Designed to support B2B and bulk purchase enquiries across product categories.'
  },
  {
    icon: '⇄',
    title: 'Supplier Coordination',
    description: 'Connect buyers with suitable Indian suppliers and coordinate requirements effectively.'
  },
  {
    icon: '✎',
    title: 'Export Documentation Support',
    description: 'Support coordination around export documentation for smooth international trade.'
  },
  {
    icon: '★',
    title: 'Long-Term Relationships',
    description: 'Focused on building lasting buyer and supplier relationships built on trust.'
  }
];

export default function WhyChooseUs() {
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
    <section className="why-us section" id="why-us" ref={sectionRef}>
      <div className="container">
        <div className="why-us-header fade-up">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-heading">Why Choose Nexabound Global?</h2>
          <p className="section-subheading">
            A reliable merchant export partner focused on quality, communication, and dependable coordination.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <div key={reason.title} className={`why-us-card fade-up fade-up-delay-${index % 4 + 1}`}>
              <span className="why-us-card-icon" aria-hidden="true">{reason.icon}</span>
              <h3 className="why-us-card-title">{reason.title}</h3>
              <p className="why-us-card-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}