import { useEffect, useRef } from 'react';
import '../styles/about.css';

const aboutFeatures = [
  { icon: '◈', text: 'Product Sourcing' },
  { icon: '⇄', text: 'Supplier Coordination' },
  { icon: '▦', text: 'Specifications' },
  { icon: '▣', text: 'Packaging' },
  { icon: '✎', text: 'Export Documentation' },
  { icon: '➤', text: 'Logistics Coordination' },
  { icon: '☎', text: 'Buyer Communication' },
  { icon: '⚑', text: 'Dependable Delivery' },
];

export default function About() {
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
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap fade-up">
            <div className="about-image">
              <img
                src="/images/stock-about.jpg"
                alt="Indian market stall displaying colorful powdered spices — a taste of the products Nexabound Global exports"
                loading="lazy"
              />
            </div>
            <div className="about-image-badge">
              <div className="about-badge-label">India</div>
              <div className="about-badge-text">→ Global</div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label fade-up">About Nexabound Global</span>
            <h2 className="section-heading fade-up fade-up-delay-1">
              Connecting Quality From India to Global Markets
            </h2>
            <p className="about-text fade-up fade-up-delay-2">
              Nexabound Global is an India-based merchant export company focused on supplying quality products to international and domestic B2B buyers. We connect reliable Indian suppliers with importers, distributors, wholesalers, and businesses across global markets.
            </p>
            <p className="about-text fade-up fade-up-delay-3">
              Our goal is to make sourcing from India simple, reliable, and efficient for international buyers by providing quality products, transparent communication, and dependable export support.
            </p>

            <div className="about-features">
              {aboutFeatures.map(feature => (
                <div key={feature.text} className="about-feature fade-up">
                  <span className="about-feature-icon" aria-hidden="true">{feature.icon}</span>
                  <span className="about-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}