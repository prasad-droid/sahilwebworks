import { useEffect, useRef } from 'react';
import '../styles/global-reach.css';

const audience = [
  'International Buyers',
  'Importers',
  'Distributors',
  'Wholesalers'
];

export default function GlobalReach() {
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

  const scrollToInquiry = (e) => {
    e.preventDefault();
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="global-reach section" id="global-reach" ref={sectionRef}>
      <div className="global-reach-bg"></div>
      <div className="container">
        <div className="global-reach-inner">
          <span className="section-label fade-up">Global Reach</span>
          <h2 className="global-reach-heading fade-up fade-up-delay-1">From India to Global Markets</h2>
          <p className="global-reach-text fade-up fade-up-delay-2">
            Making it easier for international businesses to source quality products from India.
          </p>

          <div className="global-map fade-up fade-up-delay-2">
            <div className="global-map-circle">
              <div className="global-map-india">
                INDIA
                <span>Trade Hub</span>
              </div>
              <span className="global-map-dot"></span>
              <span className="global-map-dot"></span>
              <span className="global-map-dot"></span>
              <span className="global-map-dot"></span>
              <span className="global-map-dot"></span>
            </div>
          </div>

          <div className="global-reach-audience fade-up fade-up-delay-3">
            {audience.map(item => (
              <span key={item} className="global-reach-audience-item">{item}</span>
            ))}
          </div>

          <a
            href="#inquiry"
            className="btn btn-primary fade-up fade-up-delay-4"
            onClick={scrollToInquiry}
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}