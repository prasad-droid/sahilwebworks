import { useEffect, useRef } from 'react';
import '../styles/process.css';

const steps = [
  {
    number: "01",
    title: "Requirement",
    description: "Understand the buyer's product requirements and specifications."
  },
  {
    number: "02",
    title: "Sourcing",
    description: "Coordinate with suitable Indian suppliers."
  },
  {
    number: "03",
    title: "Documentation & Logistics",
    description: "Coordinate export documentation and logistics requirements."
  },
  {
    number: "04",
    title: "Buyer Support",
    description: "Maintain clear communication throughout the process."
  }
];

export default function ExportProcess() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current ? sectionRef.current.querySelectorAll('.fade-up') : [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="process-header fade-up">
          <span className="section-label">How We Work</span>
          <h2 className="section-heading">Our Export Process</h2>
          <p className="section-subheading">
            A clear, coordinated process from requirement to delivery.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={step.number} className={`process-step fade-up fade-up-delay-${index + 1}`}>
              <span className="process-step-number">{step.number}</span>
              <div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}