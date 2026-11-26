import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import company from "../data/company";
import useTranslation from "../hooks/useTranslation";
import LanguageToggle from "../components/ui/LanguageToggle";
import assets from "../data/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-forest-deep"
        : "text-charcoal/70 hover:text-forest-deep"
    }`;

  const activeIndicator = ({ isActive }) =>
    isActive ? (
      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-forest-deep" />
    ) : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-beige/30 bg-offwhite/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
            <img src={assets.logo} alt="Namami" className="w-25" />
          <Link to="/" className="group flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight tracking-wide text-forest-deep sm:text-xl">
              {company.name.toUpperCase()}
            </span>
            <span className="text-xs italic text-sage">{company.tagline}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 xl:flex">
            {company.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={linkClass}
              >
                {({ isActive }) => (
                  <>
                    <span>
                      {link.label}{" "}
                      <span className="text-[10px] text-sage"></span>
                    </span>
                    {activeIndicator({ isActive })}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link
              to="/quote"
              className="rounded-full bg-forest px-5 py-2 text-sm font-medium text-offwhite transition-colors hover:bg-forest-deep"
            >
              {t('nav.quote')}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-50 rounded-md p-2 text-charcoal transition-colors hover:bg-beige/30 xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Panel */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-[70] w-full max-w-sm bg-offwhite shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Close header */}
          <div className="flex items-center justify-between border-b border-beige/30 px-6 py-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex flex-col"
            >
              <img src={assets.logo} alt="Namami" className="h-7 w-auto" />
              <span className="font-heading text-base font-bold text-forest-deep">
                {company.name.toUpperCase()}
              </span>
              <span className="text-[10px] italic text-sage">{company.tagline}</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-charcoal transition-colors hover:bg-beige/30"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col gap-1 px-6 py-6">
            {company.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-forest/10 text-forest-deep"
                      : "text-charcoal/70 hover:bg-beige/20 hover:text-forest-deep"
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="ml-2 text-xs text-sage">| {link.marathiLabel}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="space-y-3 border-t border-beige/30 px-6 py-6">
            <LanguageToggle />
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full border border-forest py-3 text-center text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-offwhite"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-forest py-3 text-center text-sm font-medium text-offwhite transition-colors hover:bg-forest-deep"
            >
              {t('nav.quote')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
