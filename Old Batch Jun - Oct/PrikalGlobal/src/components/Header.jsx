import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="header-logo" onClick={() => setOpen(false)}>
          <span className="header-logo-badge">
            <img src={logo} alt="PRIKAL GLOBAL logo" />
          </span>
          <span className="header-logo-text">
            <strong>PRIKAL</strong> GLOBAL
            <small>Global Force For Goods</small>
          </span>
        </a>

        <nav className={`header-nav ${open ? "header-nav-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#inquiry" className="btn btn-primary header-cta" onClick={() => setOpen(false)}>
            Request A Quote
          </a>
        </nav>

        <button
          className="header-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
