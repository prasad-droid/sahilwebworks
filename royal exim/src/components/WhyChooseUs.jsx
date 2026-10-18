import Reveal from "./Reveal";
import {
  IconUsers,
  IconBox,
  IconCompass,
  IconRoute,
  IconPhone,
} from "./Icons";
import "../styles/why.css";

const FEATURES = [
  {
    id: "w1",
    icon: IconUsers,
    title: "Global Buyer Focus",
    text: "Focused on connecting with international importers and buyers.",
  },
  {
    id: "w2",
    icon: IconBox,
    title: "India-Based Sourcing",
    text: "Connecting global buyers with products from India.",
  },
  {
    id: "w3",
    icon: IconCompass,
    title: "Professional Communication",
    text: "Making product enquiries and buyer communication simple.",
  },
  {
    id: "w4",
    icon: IconRoute,
    title: "Export-Focused Approach",
    text: "Designed around international product enquiries and business connections.",
  },
  {
    id: "w5",
    icon: IconPhone,
    title: "Direct Contact",
    text: "Easy access through WhatsApp, email and enquiry forms.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <Reveal className="why__header">
          <p className="section-label">Why Choose A1 Royal Exim</p>
          <h2 className="section-title">Why Connect With A1 Royal Exim?</h2>
          <p className="section-subtitle">
            A focused export partner built around international buyers and clear
            business communication.
          </p>
        </Reveal>

        <div className="why__grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.id} className="why__item" delay={index * 80}>
                <span className="why__icon">
                  <Icon />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}