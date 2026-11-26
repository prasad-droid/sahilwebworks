import { FileText, Handshake, Layers, PackageCheck, ScanSearch } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: Layers,
    title: 'Multi-Category Expertise',
    text: 'Perishable & non-perishable agro-produce, technical textiles, polymer granules, and metals under one verified sourcing partner.',
  },
  {
    icon: ScanSearch,
    title: 'Quality-Focused Operations',
    text: 'Defined grading and inspection practices for every shipment.',
  },
  {
    icon: PackageCheck,
    title: 'Export-Ready Packaging',
    text: 'Packaging designed around product and transit requirements.',
  },
  {
    icon: FileText,
    title: 'Transparent Documentation',
    text: 'Structured communication and documentation coordination.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    text: 'Focus on dependable and scalable B2B relationships.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--dark why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Why Syndicate Global EXIM</p>
          <h2 id="why-title" className="section-title">
            One Partner. <span className="text-gold">Multiple Sourcing Solutions.</span>
          </h2>
        </Reveal>

        <div className="why__grid">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" className="why__card" key={title} delay={index * 80}>
              <span className="why__icon" aria-hidden="true"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="why__index">0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
