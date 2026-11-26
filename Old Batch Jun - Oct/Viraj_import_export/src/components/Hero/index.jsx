import { FiCheckCircle, FiArrowRight, FiSend } from "react-icons/fi";
import carpetHero from "../../assets/images/carpets/Carpets Images.jpg";
import towelHero from "../../assets/images/towels/Terry Towel Images1.jpg";
import craftHero from "../../assets/images/handicrafts/Wood Handicraft Images1.jpg";

const badges = [
  { icon: FiCheckCircle, label: "Premium Quality" },
  { icon: FiCheckCircle, label: "Global Export" },
  { icon: FiCheckCircle, label: "Ethical Sourcing" },
  { icon: FiCheckCircle, label: "Reliable Delivery" },
];

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero__bg" aria-hidden="true" />
    <div className="container hero__inner">
      <div className="hero__content" data-reveal>
        <span className="hero__eyebrow">Merchant Exporter · Since India, to the World</span>
        <h1 className="hero__title">
          Premium Indian Carpets, Terry Towels &amp; <span>Wooden Handicrafts</span> for Global Markets
        </h1>
        <p className="hero__subtitle">
          Connecting global buyers with India&apos;s finest craftsmanship through quality products,
          dependable sourcing, and reliable export services.
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--primary btn--lg">
            Explore Products <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            Request Quote <FiSend />
          </a>
        </div>
        <ul className="hero__badges">
          {badges.map((b) => (
            <li key={b.label}>
              <b.icon aria-hidden="true" /> {b.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__visual" data-reveal="scale">
        <figure className="hero__img hero__img--main">
          <img src={carpetHero} alt="Handmade Indian carpet woven by skilled artisans for export" />
        </figure>
        <figure className="hero__img hero__img--top">
          <img src={towelHero} alt="Premium cotton terry towel for hotels and spa" />
        </figure>
        <figure className="hero__img hero__img--side">
          <img src={craftHero} alt="Handcrafted wooden decorative product from India" />
        </figure>
        <div className="hero__stamp" aria-hidden="true">
          <span className="hero__stamp-main">Trusted</span>
          <span className="hero__stamp-sub">Global Sourcing Partner</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
