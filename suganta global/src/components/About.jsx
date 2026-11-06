import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/About.css';

const focusPoints = [
  { label: 'Product focus', value: 'Rice, tea and flowers' },
  { label: 'Target markets', value: 'United Arab Emirates and Iraq' },
  { label: 'Business approach', value: 'Relationship-led international trade' },
];

export default function About() {
  return (
    <section id="about" className="about section--tight section--cream">
      <div className="container about__grid">
        <Reveal as="div" className="about__media" delay={100} y={26}>
          <img
            src={siteConfig.assets.businessImage}
            alt="Representative image of Indian agriculture, with a farmer standing in a green field"
            width="900"
            height="1050"
            loading="lazy"
            decoding="async"
          />
          <span className="about__media-caption">
            <span>Agricultural roots</span>
            <span>India</span>
          </span>
        </Reveal>

        <div className="about__content">
          <SectionHeading
            eyebrow="Our Story"
            title="Building Global Connections Through Agriculture"
            description="SUGANTA GLOBAL is an emerging agricultural export business focused on connecting Indian agricultural products with international buyers. With an initial focus on rice, tea, and flowers, our aim is to build reliable business relationships and create opportunities in markets such as the UAE and Iraq."
          />

          <Reveal as="dl" className="about__focus" delay={180} y={16}>
            {focusPoints.map((point) => (
              <div className="about__focus-item" key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.value}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal className="about__actions" delay={240} y={14}>
            <a className="link-arrow" href="#products">
              Explore our products
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href="#contact">
              Start a conversation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
