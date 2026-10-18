import { Link } from "react-router-dom";
import { site } from "../../data/siteConfig";
import logoImg from "../../assets/images/logo.jpeg";

/**
 * Brand lockup used in the navbar and footer.
 */
export default function Logo({ to = "/", size = 64, footer = false }) {
  return (
    <Link to={to} className="brand" aria-label={`${site.name} — Home`}>
      <span className="brand__mark" style={{ width: size, height: size }}>
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </span>
      <span className="brand__text">
        <span className="brand__name">
          VINEXA <em>GLOBAL</em>
        </span>
        <span className="brand__tag">Enterprises</span>
      </span>
    </Link>
  );
}
