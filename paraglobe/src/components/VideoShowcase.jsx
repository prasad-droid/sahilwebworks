import { useRef, useState } from "react";

const videos = [
  {
    src: "/videos/video-1.mp4",
    poster: "/images/poster-video-1.jpg",
    title: "Biodegradable Tableware",
  },
  {
    src: "/videos/video-2.mp4",
    poster: "/images/poster-video-2.jpg",
    title: "Food Packaging Solutions",
  },
  {
    src: "/videos/video-3.mp4",
    poster: "/images/poster-video-3.jpg",
    title: "Eco Product Showcase",
  },
];

function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => setFailed(true));
    setStarted(true);
  };

  return (
    <article className={`video-card reveal reveal-visual reveal-delay-${index}`}>
      <div className="video-card__media">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          className="video-card__video"
          aria-label={video.title}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video element.
        </video>

        {!started && !failed && (
          <button
            type="button"
            className="video-card__play"
            onClick={handlePlay}
            aria-label={`Play video: ${video.title}`}
          >
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
              <path d="M8 5.6v12.8a1 1 0 0 0 1.5.86l10.2-6.4a1 1 0 0 0 0-1.72L9.5 4.74A1 1 0 0 0 8 5.6Z" />
            </svg>
          </button>
        )}

        {failed && (
          <div className="video-card__fallback">
            <p>Playback is not supported in this browser.</p>
            <a href={video.src} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              Open Video
            </a>
          </div>
        )}
      </div>

      <h3 className="video-card__title">{video.title}</h3>
    </article>
  );
}

export default function VideoShowcase() {
  return (
    <section className="section" id="videos" aria-labelledby="videos-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Videos</span>
          <h2 className="section-title is-centered" id="videos-heading">
            See Our Products in Action
          </h2>
          <p className="section-subtitle is-centered">
            Watch our biodegradable tableware and packaging in real use.
            Replace the asset paths in <code>VideoShowcase.jsx</code> to update
            videos.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video, i) => (
            <VideoCard key={video.src} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}