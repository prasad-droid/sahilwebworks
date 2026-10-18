import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToId } from "../../utils/config";
import logo from "../../assets/logo/logo.jpeg";

const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <button
          type="button"
          className="nav-logo"
          onClick={() => go("home")}
          aria-label="Kesarkar Overseas Home"
        >
          <img src={logo} alt="Kesarkar Overseas logo" className="nav-logo-img" />
          <span className="nav-logo-text">
            <span className="nav-logo-name">Kesarkar</span>
            <span className="nav-logo-sub">Overseas</span>
          </span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className="nav-link"
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-accent btn-sm nav-cta-mobile"
            onClick={() => go("inquiry")}
          >
            Request Catalogue
          </button>
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="btn btn-accent btn-sm nav-cta"
            onClick={() => go("inquiry")}
          >
            Request Catalogue
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
