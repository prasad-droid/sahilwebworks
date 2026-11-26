import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, productNav } from '../data/site';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      const marker = window.scrollY + window.innerHeight * 0.34;
      let current = 'home';
      navLinks.forEach(({ href }) => {
        const id = href.slice(1);
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--solid' : ''}`}>
      <div className="container site-header__inner">
        <Logo onClick={closeMenu} />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`desktop-nav__link ${active === link.href.slice(1) ? 'is-active' : ''}`}
              aria-current={active === link.href.slice(1) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#contact">
          Request a Quote <ArrowUpRight size={16} strokeWidth={2} />
        </a>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="container mobile-menu__inner" aria-label="Mobile navigation">
          <div className="mobile-menu__primary">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ '--stagger': `${index * 55}ms` }}
                className={active === link.href.slice(1) ? 'is-active' : ''}
              >
                <span className="mobile-menu__count">0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </div>
          <div className="mobile-menu__secondary">
            <span className="eyebrow">Explore</span>
            {productNav.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-light mobile-menu__cta" href="#contact" onClick={closeMenu}>
              Request a Quote <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
