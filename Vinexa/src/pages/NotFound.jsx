import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "11rem" }}>
      <SEO title="Page Not Found | VINEXA GLOBAL ENTERPRISES" path="/404" robots="noindex, nofollow" />
      <div className="container text-center">
        <h1 style={{ color: "var(--gold)" }}>404</h1>
        <p className="section-sub" style={{ maxWidth: 460, margin: "1rem auto 2rem" }}>
          The page you are looking for could not be found. Explore our products or request a quote
          to get started.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
          <Link to="/products" className="btn btn--outline">
            Browse Products
          </Link>
          <Link to="/request-quote" className="btn btn--gold">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
