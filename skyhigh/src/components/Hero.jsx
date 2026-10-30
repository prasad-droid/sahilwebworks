import { ArrowRight, ChevronDown } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">India's Quality. Your Global Source</p>
          <h1 className="hero-title">
            Reliable Sourcing of Premium 100% Cotton Terry Towels
          </h1>
          <p className="hero-subtitle">
            Reliable sourcing of premium 100% cotton terry towels from India for businesses across the globe. 
            Customize your products in GSM range 350-700 as per requirement. Bath Towel, Bath Sheet, Bath Mat, Face Towel, Hand Towel & Kitchen Towel. 
            We help international buyers connect with Indian textile products through professional communication and export-focused service.
          </p>
          <p className="hero-trust">
            Indian Sourcing | B2B Export Solutions | Globally Focused Market
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => handleScroll('#inquiry')}
            >
              Request a Quote <ArrowRight size={20} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleScroll('#products')}
            >
              Explore Our Products
            </button>
          </div>
          <div className="hero-scroll" onClick={() => handleScroll('#trust')} style={{ cursor: 'pointer' }}>
            <div className="hero-scroll-line"></div>
            <span>Scroll to discover</span>
            <ChevronDown size={18} />
          </div>
        </div>
        <div className="hero-images">
          <img 
            src="/src/assets/Bath Towels in different colors.jpeg" 
            alt="Premium terry towels in different colors" 
            className="hero-image-main"
            loading="eager"
            onError={(e) => {
              e.target.src = '/src/assets/Bath Towel.jpeg';
            }}
          />
          <img 
            src="/src/assets/Bath Sheet.jpeg" 
            alt="Premium bath sheet towels" 
            className="hero-image-secondary"
            loading="eager"
            onError={(e) => {
              e.target.src = '/src/assets/Hand Towels.jpeg';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
