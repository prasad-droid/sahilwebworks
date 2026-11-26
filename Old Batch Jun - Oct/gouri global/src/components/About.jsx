import { about } from '../data/data';
import Reveal from './Reveal';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__visual">
            <div className="about__image-frame">
              <img
                src="/images/about-ghee-jar.jpeg"
                alt="GOURI GLOBAL TRADE — natural ghee and dairy prepared on a rustic wooden table"
                loading="lazy"
                className="about__image"
              />
            </div>
            <div className="about__card" aria-hidden="true">
              <span className="about__card-icon">✦</span>
              <span className="about__card-title">Made in India</span>
              <span className="about__card-sub">Proudly sourcing &amp; serving worldwide</span>
            </div>
          </Reveal>

          <div className="about__content">
            <Reveal>
              <span className="section-eyebrow">About Us</span>
              <h2 className="about__title">{about.heading}</h2>
            </Reveal>

            <Reveal delay={120}>
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className={`about__paragraph ${i === 0 ? 'about__paragraph--lead' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={200}>
              <div className="about__focus">
                <span className="about__focus-label">Our Focus</span>
                <div className="about__focus-chips">
                  {about.focus.map((item) => (
                    <span key={item} className="about__chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}