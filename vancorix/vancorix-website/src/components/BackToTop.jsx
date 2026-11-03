import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollPos > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      style={{
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: 50,
        height: 50,
        background: '#2c3e50',
        color: '#fff',
        borderRadius: '50%',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="3 9 12 15 21 9"></polyline>
      </svg>
    </a>
  );
};

export default BackToTop;