import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      className={`floating-btn back-to-top${isVisible ? ' is-visible' : ''}`}
      href="#top"
      onClick={handleClick}
      tabIndex={isVisible ? 0 : -1}
      aria-label="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2} />
    </a>
  );
};

export default BackToTop;
