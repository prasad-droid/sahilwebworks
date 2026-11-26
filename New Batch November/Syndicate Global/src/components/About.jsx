import { BadgeCheck, Eye, Handshake } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './About.css';

const highlights = [
  {
    icon: BadgeCheck,
    title: 'Quality-Driven Sourcing',
    text: 'Clear benchmarks before any shipment is packed.',
  },
  {
    icon: Eye,
    title: 'Transparent Export Operations',
    text: 'Structured communication at every handoff.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    text: 'Built for repeat business, batch after batch.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__content">
          <p className="eyebrow">About Us</p>
          <h2 id="about-title" className="section-title">
            Trade Built on Trust. <span className="text-gold">Relationships Built to Last.</span>
          </h2>

          <p className="about__lead">
            At Syndicate Global EXIM, we believe that successful international trade is
            built on <span className="text-gold">verifiable trust</span>, not just
            one-time transactions.
          </p>

          <p className="about__body">
            We bridge the gap between Indian agricultural, manufacturing, and industrial
            sourcing excellence and the rigorous demands of global supply chain teams.
            Every stage of the export journey—from farm-level maturity selection and
            loom-level tension control to buyer-specific industrial sourcing,
            export-grade packaging, and cold-chain transit—is treated as a critical
            component of product quality.
          </p>

          <p className="about__body">
            We are not just a supplier; we are a{' '}
            <span className="text-gold">long-term procurement partner</span> committed
            to delivering your shipments exactly as expected, batch after batch.
          </p>

          <ul className="about__highlights">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" className="about__highlight" key={title} delay={index * 90}>
                <span className="about__highlight-icon"><Icon aria-hidden="true" /></span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal className="about__visual" image delay={120}>
          <div className="about__frame">
            <img
              src="/images/about-sourcing.webp"
              alt="Indian farmer inspecting a healthy crop in a green field"
              width="1050"
              height="1400"
              loading="lazy"
            />
            <div className="about__frame-shade" aria-hidden="true" />
            <div className="about__badge">
              <span className="about__badge-mark">SG</span>
              <span>
                <strong>Quality at every handoff</strong>
                <small>From source to shipment</small>
              </span>
            </div>
          </div>
          <div className="about__accent" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
