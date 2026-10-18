import { testimonials } from "../data/testimonials";
import "../styles/testimonials.css";

export default function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <header className="testimonials__header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Buyers Say</h2>
        </header>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote className="testimonials__card" key={t.id}>
              <p>“{t.quote}”</p>
              <footer>
                <cite>{t.name}</cite>
                {t.role && <span>
                  {t.role}
                  {t.country ? `, ${t.country}` : ""}
                </span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}