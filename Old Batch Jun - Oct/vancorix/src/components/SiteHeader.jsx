import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle, ShoppingBag, X } from 'lucide-react';
import logo from '../assets/images/vancorix-logo.png';
import { quoteMessage, whatsappLink } from '../data/site';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Markets', href: '#markets' },
  { label: 'Process', href: '#process' },
];

const quoteHref = whatsappLink(quoteMessage());

const SiteHeader = ({ cartCount = 0, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Vancorix International home">
          <img src={logo} alt="Vancorix International" />
        </a>

        <nav className={`main-nav${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-mobile-cta"
            href={quoteHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Request Quote <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="header-cart"
            type="button"
            onClick={onCartClick}
            aria-label={`Open checkout, ${cartCount} item${cartCount === 1 ? '' : 's'}`}
          >
            <ShoppingBag size={19} strokeWidth={2} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <a
            className="header-chat"
            href={whatsappLink('Hello Vancorix International, I would like to discuss a botanical powder requirement.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={19} strokeWidth={2} />
          </a>
          <a className="btn btn-gold header-cta" href={quoteHref} target="_blank" rel="noreferrer">
            Request Quote <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
