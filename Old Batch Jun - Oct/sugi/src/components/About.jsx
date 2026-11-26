import { useSite } from "../store/SiteContext";
import "../styles/about.css";

// TODO: Replace this temporary About content with the client's finalized
// About Us content after the discussion call. (Now editable from the
// Admin Panel > Website Content > About Us.)

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=70";

export default function About() {
  const { content } = useSite();
  const about = content?.about || {};
  const paragraphs = about.paragraphs?.length
    ? about.paragraphs
    : [
        "SUGI INTERNATIONAL PRIVATE LIMITED is an agro-commodity export company focused on connecting Indian agricultural products with international markets.",
        "The company is positioned to work with international buyers and trading partners across key Middle Eastern markets, with a focus on professional communication, reliable sourcing and long-term business relationships.",
      ];

  return (
    <section id="about" className="about section-pad">
      <div className="container about__grid">
        <div className="about__media reveal">
          <img
            src={about.image || ABOUT_IMAGE}
            alt="Agricultural commodity landscape in India representing export sourcing"
            className="about__image"
            loading="lazy"
          />
          <div className="about__badge float-badge" aria-hidden="true">
            <span className="about__badge-top">{about.badgeTop || "INDIA"}</span>
            <span className="about__badge-arrow">→</span>
            <span className="about__badge-bottom">{about.badgeBottom || "GLOBAL"}</span>
          </div>
        </div>

        <div className="about__content reveal">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>
          {paragraphs.map((p, i) => (
            <p className="about__text" key={i}>
              {p}
            </p>
          ))}
          {about.cta?.label && (
            <a href={about.cta.href || "#portfolio"} className="btn btn-dark-outline about__cta">
              {about.cta.label}
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
