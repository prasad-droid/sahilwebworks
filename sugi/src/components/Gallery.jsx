import { useSite } from "../store/SiteContext";
import "../styles/gallery.css";

// ==========================================================================
// GALLERY — images managed in Admin Panel > Images & Gallery (group: Gallery).
// Renders nothing until at least one gallery image is uploaded.
// ==========================================================================

export default function Gallery() {
  const { media = [], settings } = useSite();
  if (!settings?.features?.enableGallery) return null;

  const images = media.filter((m) => m.group === "gallery" && m.image);
  if (images.length === 0) return null;

  return (
    <section className="gallery section-pad">
      <div className="container">
        <header className="gallery__head reveal">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title">From Our Operations</h2>
          <p className="section-sub">
            Sourcing, processing, packing and shipping — a look at how we work.
          </p>
        </header>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <figure
              className="gallery__item reveal"
              key={img.id}
              style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
            >
              <img src={img.image} alt={img.title || "Gallery image"} loading="lazy" />
              {img.title && <figcaption className="gallery__caption">{img.title}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
