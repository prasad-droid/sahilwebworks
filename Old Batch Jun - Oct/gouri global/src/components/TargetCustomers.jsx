import { targetCustomers } from '../data/data';
import Reveal from './Reveal';
import Icon from './Icon';
import '../styles/target.css';

const cardIcons = ['store', 'restaurant', 'boxes', 'shop', 'home', 'airplane'];

export default function TargetCustomers() {
  return (
    <section id="markets" className="section target">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">Who It&apos;s For</span>
            <h2 className="section-title">Built for Diverse Markets</h2>
            <p className="section-subtitle">
              Quality Indian food products designed for businesses and consumers
              across every channel.
            </p>
          </Reveal>
        </div>

        <div className="target__grid">
          {targetCustomers.map((customer, i) => (
            <Reveal key={customer.id} delay={i * 70} className="target__cell">
              <article className="target__card">
                <span className="target__icon">
                  <Icon name={cardIcons[i % cardIcons.length]} size={26} />
                </span>
                <h3 className="target__title">{customer.title}</h3>
                <p className="target__desc">{customer.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}