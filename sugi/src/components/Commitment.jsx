import { useSite } from "../store/SiteContext";
import "../styles/commitment.css";

// Our Commitment — editable in Admin Panel > Website Content.
export default function Commitment() {
  const { content } = useSite();
  const section = content?.home?.commitment || {};

  return (
    <section className="commitment section-pad">
      <div className="container commitment__inner reveal">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2 className="commitment__title">{section.title}</h2>
        <p className="commitment__text">{section.text}</p>
      </div>
    </section>
  );
}
