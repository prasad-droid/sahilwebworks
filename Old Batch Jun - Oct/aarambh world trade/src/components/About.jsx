import { Icon } from './Icons.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { aboutImages } from '../data/gallery.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

const KEY_POINTS = [
  {
    icon: 'network',
    title: 'Direct supplier coordination',
    text: 'We coordinate with reliable Indian suppliers to match your product, quantity and specification.',
  },
  {
    icon: 'shield',
    title: 'Consistent quality focus',
    text: 'Quality and verification requirements are coordinated before dispatch is discussed.',
  },
  {
    icon: 'tag',
    title: 'Competitive pricing',
    text: 'We aim to provide competitive pricing on bulk and B2B requirements.',
  },
  {
    icon: 'headset',
    title: 'Long-term relationships',
    text: 'We aim to build long-term business relationships with international B2B buyers.',
  },
];

export function About() {
  const { startEnquiry } = useEnquiry();

  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">
          {/* ---- Left: imagery ------------------------------------- */}
          <Reveal className="about__media" variant="left">
            <div className="about__media-frame">
              <figure className="about__figure about__figure--main">
                <img
                  src={aboutImages.primary.src}
                  alt={aboutImages.primary.alt}
                  width="1000"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="media-credit">{aboutImages.primary.credit}</figcaption>
              </figure>

              <figure className="about__figure about__figure--inset">
                <img
                  src={aboutImages.secondary.src}
                  alt={aboutImages.secondary.alt}
                  width="1000"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="media-credit">{aboutImages.secondary.credit}</figcaption>
              </figure>

              <div className="about__stamp" aria-hidden="true">
                <span className="about__stamp-inner">
                  <span className="about__stamp-top">From India</span>
                  <strong>to the</strong>
                  <span className="about__stamp-accent">World</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* ---- Right: copy --------------------------------------- */}
          <div className="about__content">
            <SectionHeading
              eyebrow="About AARAMBH WORLDTRADE"
              title={
                <>
                  Connecting Indian Quality
                  <br className="about__br" /> With Global Markets
                </>
              }
              className="about__heading"
            >
              <p className="about__lead">
                AARAMBH WORLDTRADE is an Indian Merchant Exporter and Multi-Product Exporter focused
                on connecting quality Indian agricultural and food products with global markets.
              </p>
              <p className="about__body">
                We aim to build long-term business relationships with international importers,
                wholesalers, distributors, food manufacturers, retailers and B2B buyers through
                reliable sourcing, consistent quality, competitive pricing and professional export
                support.
              </p>
            </SectionHeading>

            <ul className="about__points">
              {KEY_POINTS.map((point, i) => (
                <Reveal as="li" key={point.title} delay={i * 80} className="about__point">
                  <span className="about__point-icon" aria-hidden="true">
                    <Icon name={point.icon} size={20} />
                  </span>
                  <span className="about__point-body">
                    <strong>{point.title}</strong>
                    <span>{point.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal className="about__cta" delay={120}>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
              >
                Request a Quote
                <Icon name="arrowRight" size={18} />
              </button>
              <a
                className="link-arrow"
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                See our product range
                <Icon name="arrowRight" size={17} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
