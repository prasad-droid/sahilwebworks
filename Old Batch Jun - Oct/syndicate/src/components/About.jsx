import { useEffect, useState } from 'react';
import { ImageOff, MapPin } from 'lucide-react';
import { about, company } from '../data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './About.css';

function SuppliedPhoto() {
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(company.suppliedPhotoUrl, { method: 'HEAD' })
      .then((response) => {
        const isImage = (response.headers.get('content-type') || '').startsWith('image/');
        if (!cancelled) setAvailable(response.ok && isImage);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <img
        src={available ? company.suppliedPhotoUrl : about.fallbackPhoto.src}
        alt={available ? 'Syndicate Global EXIM business and product photograph' : about.fallbackPhoto.alt}
        loading="lazy"
        onError={() => setAvailable(false)}
      />
      {!available && (
        <span className="about__photo-badge">
          <ImageOff size={13} strokeWidth={1.8} /> Replace with supplied photo
        </span>
      )}
    </>
  );
}

export default function About() {
  return (
    <section id={about.id} className="section about">
      <div className="container about__grid">
        <Reveal className="about__visual" image>
          <div className="about__photo">
            <SuppliedPhoto />
          </div>
          <div className="about__photo-secondary">
            <img src={about.image.src} alt={about.image.alt} loading="lazy" />
          </div>
          <div className="about__location">
            <MapPin size={17} strokeWidth={1.8} />
            <span>Chh. Sambhajinagar, Maharashtra, India</span>
          </div>
        </Reveal>

        <div className="about__content">
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
          <Reveal className="about__copy" delay={90}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'about__lead' : ''}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="about__values" delay={160}>
            {about.values.map((value, index) => (
              <div className="about-value" key={value.title} style={{ '--stagger': `${index * 70}ms` }}>
                <span className="about-value__number">0{index + 1}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
