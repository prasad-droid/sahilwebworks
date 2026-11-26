import { FileCheck2, PackageCheck, Sprout, Truck } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './QualityStandards.css';

const steps = [
  {
    number: '01',
    icon: Sprout,
    title: 'Sourcing & Quality Grading',
    intro: 'Reliable exports begin with reliable sourcing.',
    points: [
      'Direct engagement with growing regions and verified suppliers across all four verticals',
      'Clear, upfront quality benchmarks',
      'Lot-level verification before packing',
    ],
  },
  {
    number: '02',
    icon: PackageCheck,
    title: 'Export-Grade Packaging',
    intro: 'Packaging is an essential part of product quality.',
    points: [
      'Ventilated cartons for fresh produce',
      'Export-grade mesh packaging for onions',
      'Secure roll winding and moisture-resistant textile packaging',
      'Bulk and container packing for staples, granules and metals',
    ],
  },
  {
    number: '03',
    icon: Truck,
    title: 'Transit & Cold Chain Discipline',
    intro: 'We focus on preserving quality throughout the journey.',
    points: [
      'Pre-cooling, temperature-controlled storage and monitored reefer transport',
      'Secure container loading for textiles and industrial cargo',
      'Pressure-conscious stacking and moisture protection',
    ],
  },
  {
    number: '04',
    icon: FileCheck2,
    title: 'Global Trade Compliance',
    intro: 'Accurate documentation for international trade requirements.',
    points: [
      'Commercial invoices and certificates of origin',
      'Applicable export documentation',
      'Product-related compliance documentation',
    ],
  },
];

export default function QualityStandards() {
  return (
    <section id="quality" className="section quality" aria-labelledby="quality-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Our Quality &amp; Operational Standards</p>
          <h2 id="quality-title" className="section-title">
            Quality Is Not a Promise. <span className="text-gold">It&apos;s Our Process.</span>
          </h2>
          <p className="section-lead">
            Four disciplined stages protect product integrity from the point of source
            to the moment of delivery.
          </p>
        </Reveal>

        <div className="quality__timeline">
          <span className="quality__line" aria-hidden="true" />
          {steps.map(({ number, icon: Icon, title, intro, points }, index) => (
            <Reveal as="article" className="quality__step" key={number} delay={index * 110}>
              <span className="quality__icon" aria-hidden="true"><Icon /></span>
              <span className="quality__number">{number}</span>
              <h3>{title}</h3>
              <p className="quality__intro">{intro}</p>
              <ul>
                {points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
