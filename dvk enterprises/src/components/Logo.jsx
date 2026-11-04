import logo from "../assets/logo.svg";

/**
 * Brand lockup used in the navbar and footer.
 * The mark is the client logo slot; replace src/assets/logo.svg with the
 * supplied logo when the original file is available.
 */
export default function Logo({ tone = "dark", withText = true }) {
  return (
    <span className={`brand-lockup brand-lockup--${tone}`}>
      <img
        className="brand-lockup__mark"
        src={logo}
        alt=""
        width="44"
        height="44"
        aria-hidden="true"
      />
      {withText && (
        <span className="brand-lockup__text">
          <strong>DVK</strong>
          <span>Enterprises</span>
        </span>
      )}
    </span>
  );
}
