import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        background: 'rgba(44, 62, 80, 0.8)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #e0e0e0', 
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          {/* Logo */}
          <a href="#home" style={{
            fontFamily: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif", 
            fontWeight: '700', 
            fontSize: '1.8rem', 
            letterSpacing: '-0.5px', 
            color: '#fff', 
            textDecoration: 'none', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px'
          }}>
            Vancorix
          </a>

          {/* Desktop Navigation */}
          <ul style={{ display: 'flex', gap: '40px', margin: '0', padding: '0', listStyle: 'none' }}>
            <li><a href="#home" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>Home</a></li>
            <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>About Us</a></li>
            <li><a href="#portfolio" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>Portfolio</a></li>
            <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>Services</a></li>
            <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>Contact</a></li>
          </ul>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'right', margin: '20px 0 0' }}>
          <a href="#contact" style={{
            padding: '12px 28px', 
            background: '#d4a843', 
            color: '#2c3e50', 
            fontWeight: '600', 
            letterSpacing: '0.5px', 
            textDecoration: 'none', 
            borderRadius: 4, 
            transition: 'all 0.3s ease'
          }}>Connect With Us</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', 
        top: 0, 
        right: mobileMenuOpen ? '0' : '-300px', 
        width: '280px', 
        maxHeight: '100vh', 
        background: '#2c3e50', 
        height: '100vh', 
        padding: '80px 30px 30px', 
        transition: 'right 0.3s ease', 
        zIndex: 999, 
        color: '#fff'
      }}>
        <button
          style={{
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            width: '30px', 
            height: '30px', 
            background: 'transparent', 
            border: 'none', 
            color: '#fff', 
            cursor: 'pointer'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>

        <nav>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0', marginBottom: '20px' }}>
            <li style={{ marginBottom: '15px' }}><a href="#home" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.1rem' }}>Home</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.1rem' }}>About Us</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#portfolio" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.1rem' }}>Portfolio</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.1rem' }}>Services</a></li>
            <li style={{ marginBottom: '15px' }}><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.1rem' }}>Contact</a></li>
          </ul>
          <a href="#contact" style={{ width: '100%', padding: '15px', background: '#d4a843', color: '#2c3e50', textAlign: 'center', fontWeight: '600', textDecoration: 'none', borderRadius: 4, marginTop: '20px' }}>Connect With Us</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;