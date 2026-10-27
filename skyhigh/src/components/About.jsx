import '../styles/sections.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src="/src/assets/Bath Towel.jpeg" 
              alt="Indian textile manufacturing and terry towels" 
              className="about-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/src/assets/Bath Towels in different colors.jpeg';
              }}
            />
          </div>
          <div className="about-content">
            <h2>Connecting Indian Quality with Global Opportunities</h2>
            <p>
              SkyHigh RP Global EXIM Enterprises is focused on supplying premium 100% cotton terry towels to international markets, 
              with a particular focus on buyers in the United Arab Emirates. We offer customizable terry towel products in GSM range 350-700 as per requirement. 
              Our approach emphasizes quality-focused sourcing, clear communication, buyer requirements, and dependable coordination throughout the export process.
            </p>
            <p>
              We aim to make sourcing from India straightforward for importers, wholesalers, distributors, and businesses 
              looking for long-term supply relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
