import { useEffect, useRef, useState } from "react";
import { useSite } from "../store/SiteContext";
import "../styles/exportProcess.css";

// ==========================================================================
// EXPORT PROCESS — steps editable in Admin Panel > Website Content.
// ==========================================================================

export default function ExportProcess() {
  const { content } = useSite();
  const section = content?.home?.exportProcess || {};
  const steps = section.steps || [];
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

  if (!steps.length) return null;

  return (
    <section className="process section-pad" ref={rootRef}>
      <div className="container">
        <header className="process__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
        </header>

        <ol className="process__steps">
          {steps.map((step, i) => (
            <li
              key={`${step.num}-${i}`}
              className={`process__step ${done ? "is-in step-anim" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="process__pointer" aria-hidden="true">
                <span className="process__marker">
                  {step.num || String(i + 1).padStart(2, "0")}
                </span>
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
