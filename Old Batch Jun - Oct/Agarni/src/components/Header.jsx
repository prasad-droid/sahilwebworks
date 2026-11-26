import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/header.css";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Product Information", href: "#product-info" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Agrani Shivar Home">
          <span className="brand-mark">
            <img src={logo} alt="Agrani Shivar logo" />
          </span>
          <span className="brand-name">
            Agrani<span className="brand-shivar">Shivar</span>
          </span>
        </a>

        <nav className={`header-nav ${open ? "open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-gold header-cta" onClick={() => setOpen(false)}>
            Get Quote
          </a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
