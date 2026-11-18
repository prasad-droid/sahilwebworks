import PageHero from "../components/PageHero";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { useSite } from "../store/SiteContext";
import operationsImage from "../assets/brand/company-operations.jpg";
import "../styles/aboutPage.css";

// ==========================================================================
// ABOUT PAGE — all copy, images and lists are editable in
// Admin Panel > Website Content > About Page.
// ==========================================================================

export default function AboutPage() {
  useReveal();
  const { content } = useSite();
  const about = content?.pages?.about || {};
  const hero = about.hero || {};
  const intro = about.intro || {};
  const range = about.range || {};
  const vision = about.vision || {};
  const mission = about.mission || {};
  const why = about.why || {};

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        crumbs={[{ label: "About" }]}
      />

      {/* ---------- intro ---------- */}
      <section className="about-intro section-pad">
        <div className="container about-intro__grid">
          <div className="about-intro__media reveal">
            <img
              src={intro.image || operationsImage}
              alt="Sugi International Pvt. Ltd. operations"
              loading="lazy"
            />
          </div>

          <div className="about-intro__body reveal">
            {(intro.paragraphs || []).map((para, i) => (
              <p className={i === 0 ? "about-intro__lead" : undefined} key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- export list ---------- */}
      <section className="about-range section-pad">
        <div className="container about-range__inner">
          <h2 className="section-title reveal aboutpage-title">{range.title}</h2>
          <ul className="about-range__list">
            {(range.items || []).map((item, i) => (
              <li
                className="reveal"
                key={`${item}-${i}`}
                style={{ transitionDelay: `${(i % 8) * 0.04}s` }}
              >
                <span className="about-range__tick" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="about-range__note reveal">
            {(range.notes || []).map((note, i) => (
              <p key={i}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- vision ---------- */}
      <section className="about-vision section-pad">
        <div className="container about-vision__inner reveal">
          <p className="eyebrow">{vision.eyebrow}</p>
          <h2 className="section-title">{vision.title}</h2>
          {(vision.paragraphs || []).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ---------- mission ---------- */}
      <section className="about-mission section-pad">
        <div className="container about-mission__inner">
          <div className="about-mission__head reveal">
            <p className="eyebrow">{mission.eyebrow}</p>
            <h2 className="section-title">{mission.title}</h2>
            {(mission.paragraphs || []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {mission.commitmentLabel && (
              <p className="about-mission__commitment">{mission.commitmentLabel}</p>
            )}
          </div>

          <ol className="about-mission__list">
            {(mission.items || []).map((item, i) => (
              <li
                className="reveal"
                key={`${item}-${i}`}
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
              >
                <span className="about-mission__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- why choose ---------- */}
      <section className="about-why section-pad">
        <div className="container">
          <div className="about-why__head reveal">
            <p className="eyebrow">{why.eyebrow}</p>
            <h2 className="section-title">{why.title}</h2>
          </div>

          <ul className="about-why__grid">
            {(why.items || []).map((item, i) => (
              <li
                className="about-why__item reveal"
                key={`${item}-${i}`}
                style={{ transitionDelay: `${(i % 5) * 0.05}s` }}
              >
                <span className="about-why__tick" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {why.closing && <p className="about-why__closing reveal">{why.closing}</p>}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
