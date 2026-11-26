import business from "../data/business.js";

export default function CatalogButton() {
  return (
    <a
      href={business.catalogPdf}
      download
      className="catalog-float"
      aria-label="Download our product catalogue (PDF)"
    >
      <span className="catalog-float__label" aria-hidden="true">Download Catalogue</span>
      <span className="catalog-float__icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      </span>
    </a>
  );
}
