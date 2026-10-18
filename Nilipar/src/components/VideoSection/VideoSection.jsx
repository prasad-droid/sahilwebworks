import video from "../../assets/videos/video.mp4";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section id="video" className="section section--white">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Our Products in Action"
            title="See the Difference, Up Close"
            description="Watch how Nilipar Enterprises crafts and exports premium eco-friendly jute bags and bagasse products."
          />
        </Reveal>

        <Reveal direction="zoom">
          <figure className="video__frame">
            <video
              controls
              preload="none"
              poster="/logo.png"
              className="video__player"
              aria-label="Nilipar Enterprises product showcase video"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
