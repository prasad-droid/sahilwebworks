import { useEffect, useRef, useState } from "react";
import "../styles/exportProcess.css";

// Export Process — 8 steps shown as navigation pointers in one horizontal row.
const STEPS = [
  { num: "01", title: "Farm Selection", text: "Selecting the right farms and growers." },
  { num: "02", title: "Harvesting", text: "Harvesting at the right stage of maturity." },
  { num: "03", title: "Quality Inspection", text: "Inspecting produce for quality and safety." },
  { num: "04", title: "Sorting & Grading", text: "Sorting and grading to export specifications." },
  { num: "05", title: "Hygienic Packing", text: "Packing hygienically in the required format." },
  { num: "06", title: "Cold Storage", text: "Storing under temperature-controlled conditions." },
  { num: "07", title: "Container Loading", text: "Careful container loading for safe transit." },
  { num: "08", title: "Worldwide Shipping", text: "Coordinated shipping to destinations worldwide." },
];

export default function ExportProcess() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDone(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process section-pad" ref={rootRef}>
      <div className="container">
        <header className="process__head reveal">
          <p className="eyebrow">Export Process</p>
          <h2 className="section-title">From Farm to Worldwide Delivery</h2>
        </header>

        <ol className="process__steps">
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              className={`process__step ${done ? "is-in step-anim" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="process__pointer" aria-hidden="true">
                <span className="process__marker">{step.num}</span>
                <span className="process__line" />
              </span>
              <div className="process__body">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
