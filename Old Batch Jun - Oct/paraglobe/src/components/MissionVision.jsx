export default function MissionVision() {
  return (
    <section className="section section--alt" aria-labelledby="mission-vision-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow is-centered">Purpose & Direction</span>
          <h2 className="section-title is-centered" id="mission-vision-heading">
            Driven by a Greener Purpose
          </h2>
        </div>

        <div className="mv-grid">
          <article className="mv-card mv-card--mission">
            <span className="mv-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </span>
            <h3 className="mv-card__title">Our Mission</h3>
            <p className="mv-card__text">
              To empower a greener future for the global food service industry by
              delivering premium, 100% biodegradable tableware that replaces
              single-use plastics without compromising on quality, elegance, or
              convenience.
            </p>
          </article>

          <article className="mv-card mv-card--vision">
            <span className="mv-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <h3 className="mv-card__title">Our Vision</h3>
            <p className="mv-card__text">
              To envision a world free from single-use plastics, where every meal
              served globally nurtures both a thriving planet and human well-being
              through safe, toxin-free, nature-crafted tableware.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}