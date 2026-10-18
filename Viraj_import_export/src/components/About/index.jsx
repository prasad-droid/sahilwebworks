import { FiCheck } from "react-icons/fi";
import aboutImg from "../../assets/images/handicrafts/Wood Handicraft Images2.jpg";
import aboutImg2 from "../../assets/images/carpets/Carpets Images2.jpg";
import { CONTACT } from "../../data/data";

const highlights = [
  "Finest Indian craftsmanship",
  "Direct sourcing from artisans",
  "International quality standards",
  "Worldwide delivery network",
];

const About = () => (
  <section id="about" className="about section">
    <div className="container about__inner">
      <div className="about__media" data-reveal="left">
        <figure className="about__img about__img--main">
          <img src={aboutImg} alt="Handcrafted wooden product made in India" loading="lazy" />
        </figure>
        <figure className="about__img about__img--small">
          <img src={aboutImg2} alt="Premium handmade carpet for international buyers" loading="lazy" />
        </figure>
        <div className="about__quote">
          <p className="about__quote-text">
            &ldquo;Connecting India with Global Excellence&rdquo;
          </p>
        </div>
      </div>

      <div className="about__content" data-reveal="right">
        <span className="section__eyebrow">About Us</span>
        <h2 className="section__title">A Trusted Indian Merchant Exporter</h2>
        <p className="about__lead">
          At Viraj Import and Export, we bring the finest Indian carpets, premium terry towels,
          and handcrafted wooden products to customers around the world with an unwavering
          commitment to quality, reliability, and customer satisfaction.
        </p>
        <p className="about__text">
          As a merchant exporter, we work closely with skilled artisans and reliable manufacturers
          across India to deliver premium export-quality products to importers, wholesalers,
          retailers, and hospitality businesses in over 19 countries.
        </p>
        <ul className="about__highlights">
          {highlights.map((h) => (
            <li key={h}>
              <FiCheck aria-hidden="true" /> {h}
            </li>
          ))}
        </ul>
        <div className="about__cta">
          <a href="#contact" className="btn btn--primary">
            Partner With Us
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn btn--ghost">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
