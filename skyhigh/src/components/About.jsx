import bathTowel from '../assets/Bath Towel.jpeg';
import towelsColors from '../assets/Bath Towels in different colors.jpeg';
import '../styles/sections.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src={bathTowel} 
              alt="Indian textile manufacturing and terry towels" 
              className="about-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = towelsColors;
              }}
            />
          </div>
          <div className="about-content">
            <h2>Welcome to SkyHigh RP Global EXIM Enterprises</h2>
            <p className="about-tagline">Connecting India to the World.</p>
            <p>
              SkyHigh RP Global EXIM Enterprises is an India-based export company committed to delivering quality products to global markets.
              We specialise in premium terry towels and textile products, offering customisation in sizes, GSM, fabric composition and private labelling
              to meet diverse buyer requirements with a focus on quality, transparent communication and reliable service.
            </p>
            <p>
              We aim to build long-term partnerships with importers, wholesalers, hotels and distributors worldwide.
            </p>
            <p className="about-closing">SkyHigh RP Global EXIM Enterprises — Connecting India to the World.</p>
            <a
              href="#company"
              className="about-link"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#company')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore our goals, vision, mission and core values &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
