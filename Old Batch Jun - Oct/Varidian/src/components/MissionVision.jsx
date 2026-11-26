import Reveal from "./Reveal";

function VisionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3v4m0 10v4M12 12h.01" />
    </svg>
  );
}

export default function MissionVision() {
  return (
    <section className="mission-vision" aria-label="Our vision and mission">
      <span className="blob mission-vision__blob" />
      <div className="container mission-vision__inner">
        <Reveal delay="reveal-delay-1">
          <article className="mission-vision__card mission-vision__card--vision">
            <span className="mission-vision__icon" aria-hidden="true">
              <VisionIcon />
            </span>
            <span className="mission-vision__tag">Our Vision</span>
            <h3>Bringing India&rsquo;s Quality Produce to the World</h3>
            <p>
              To become a trusted global partner for Indian agricultural exports and
              bring India&rsquo;s quality produce to markets around the world.
            </p>
          </article>
        </Reveal>

        <Reveal delay="reveal-delay-2">
          <article className="mission-vision__card mission-vision__card--mission">
            <span className="mission-vision__icon" aria-hidden="true">
              <MissionIcon />
            </span>
            <span className="mission-vision__tag">Our Mission</span>
            <h3>Reliable Export Solutions, Lasting Relationships</h3>
            <p>
              To deliver quality Indian products, provide reliable export solutions,
              and create lasting relationships with customers and suppliers across
              international markets.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}