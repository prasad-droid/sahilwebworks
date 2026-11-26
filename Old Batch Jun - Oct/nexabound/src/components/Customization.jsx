import { useEffect, useRef } from 'react';
import '../styles/customization.css';

const customizationOptions = [
  {
    title: "Box Dimensions",
    description: "Share your required box sizes and we will discuss suitable dimensions with suppliers."
  },
  {
    title: "Printing",
    description: "Discuss printing requirements for branding, markings, or labeling on packaging."
  },
  {
    title: "Material",
    description: "Discuss preferred material types and board specifications according to your needs."
  },
  {
    title: "Board Specification",
    description: "Share your board grade and structural requirements for review and coordination."
  },
  {
    title: "Packaging Quantity",
    description: "Indicate your required volumes so we can coordinate suitable bulk supply."
  },
  {
    title: "Design Requirements",
    description: "Share your design expectations and our team will coordinate with suitable suppliers."
  }
];

export default function Customization() {
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
    <section className="customization section" id="customization" ref={sectionRef}>
      <div className="container">
        <div className="customization-grid">
          <div className="customization-visual fade-up">
            <div className="customization-card-stack">
              {customizationOptions.map((option, index) => (
                <div key={option.title} className="customization-option">
                  <span className="customization-option-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="customization-option-content">
                    <h4>{option.title}</h4>
                    <p>{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="customization-content">
            <span className="section-label fade-up">Customization</span>
            <h2 className="section-heading fade-up fade-up-delay-1">Built Around Your Requirements</h2>
            <p className="section-subheading fade-up fade-up-delay-2">
              Selected products can be discussed according to buyer requirements. Share what you need and our team will coordinate with suitable Indian suppliers.
            </p>

            <div className="customization-highlight fade-up fade-up-delay-3">
              For corrugated packaging, share your dimensions, printing, material, board specification, quantity, and design requirements for review.
            </div>

            <a
              href="#inquiry"
              className="btn btn-dark fade-up fade-up-delay-4"
              onClick={scrollToInquiry}
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}