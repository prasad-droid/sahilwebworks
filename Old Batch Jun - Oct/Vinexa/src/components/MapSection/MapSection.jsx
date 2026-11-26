import { FaMapMarkedAlt, FaInfoCircle } from "react-icons/fa";
import { mapEmbedUrl } from "../../data/siteConfig";

/**
 * Google Maps section for the company location.
 * The embed URL is configured in src/data/siteConfig.js (`mapEmbedUrl`).
 * Until provided, a clean placeholder is shown — no invented URLs.
 */
export default function MapSection() {
  return (
    <section className="section section--tint" aria-labelledby="map-heading" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
      <div className="container">
        <div className="map-frame">
          {mapEmbedUrl ? (
            <iframe
              title="VINEXA GLOBAL ENTERPRISES location — Netaji Nagar, Old Pardi Naka, Nagpur, Maharashtra, India"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="map-placeholder">
              <FaMapMarkedAlt size={40} aria-hidden="true" />
              <strong>Netaji Nagar, Old Pardi Naka, Nagpur, Maharashtra, India</strong>
              <p>
                Interactive map will appear here once the embed URL is configured.
                <FaInfoCircle size={13} style={{ verticalAlign: "-2px", marginLeft: "0.3rem" }} aria-hidden="true" />
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
