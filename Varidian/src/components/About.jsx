import "../styles/about.css";
import Reveal from "./Reveal";

export default function About() {
  const scrollToContact = () => {
    const target = document.getElementById("contact");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <span className="blob about__blob about__blob--one" />
      <span className="blob about__blob about__blob--two" />

      <div className="container about__inner">
        <Reveal className="about__media" delay="reveal-delay-1">
          <div className="about__image-main">
            <img
              src="/images/agriculture.jpg"
              alt="Indian agricultural fields and fresh produce sourced for export"
              loading="lazy"
              width="1600"
              height="1067"
            />
          </div>
          <div className="about__image-secondary">
            <img
              src="/images/onions.jpg"
              alt="Quality Indian onions prepared for international markets"
              loading="lazy"
              width="1200"
              height="1800"
            />
          </div>
          <span className="about__leaf" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 20c0-9 6-15 16-16-1 11-7 16-13 16" />
              <path d="M4 20c4-6 8-9 12-11" />
            </svg>
          </span>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <span className="section-label">About Varidian Exim</span>
            <h2 className="section-title" id="about-title">
              Connecting India&rsquo;s Quality With the World
            </h2>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <p className="about__text">
              Varidian Exim is an India-based export company focused on supplying
              quality agricultural products to international markets. We connect
              reliable Indian suppliers with importers, wholesalers, distributors,
              retailers, and businesses worldwide.
            </p>
            <p className="about__text">
              Our goal is to make international trade simple, reliable, and
              transparent. We focus on sourcing quality products, proper grading and
              packaging, export documentation, logistics coordination, and dependable
              delivery.
            </p>
            <p className="about__text">
              We aim to build long-term partnerships based on quality, trust, timely
              service, and professional communication.
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-2">
            <div className="about__card">
              <span className="about__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3 2.5 8l9.5 5 9.5-5L12 3Z" />
                  <path d="M5.5 10.5V16c0 1.6 2.9 3 6.5 3s6.5-1.4 6.5-3v-5.5" />
                  <path d="M22 8v6" />
                </svg>
              </span>
              <div>
                <strong>End-to-End Export Support</strong>
                <p>
                  From sourcing and preparation to documentation, logistics
                  coordination, and reliable delivery to international buyers.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay="reveal-delay-3">
            <button type="button" className="btn btn-primary" onClick={scrollToContact}>
              Partner With Us
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}