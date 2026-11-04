import { Globe, Handshake, MessageSquare, Sprout } from 'lucide-react';
import { features } from '../data/features';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/WhyChooseUs.css';

const featureIcons = {
  sprout: Sprout,
  globe: Globe,
  messages: MessageSquare,
  handshake: Handshake,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us section--tight section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="Our Value Proposition"
          title="Building Trust Through Business Relationships"
          description="A concise, honest approach to international agricultural trade, focused on quality products, transparent communication and long-term partnerships."
          align="center"
          light
        />

        <div className="why-choose-us__grid">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon] || Sprout;

            return (
              <Reveal
                as="article"
                className="why-choose-us__card"
                key={feature.id}
                delay={90 + index * 80}
                y={20}
              >
                <div className="why-choose-us__top">
                  <span className="why-choose-us__icon">
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="why-choose-us__number">{feature.number}</span>
                </div>
                <h3 className="why-choose-us__title">{feature.title}</h3>
                <p className="why-choose-us__description">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
