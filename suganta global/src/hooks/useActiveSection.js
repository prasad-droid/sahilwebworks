import { useEffect, useState } from 'react';

/**
 * Tracks which page section is currently in view for the primary navigation.
 */
export default function useActiveSection(ids, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      let current = ids[0];

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      });

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
    // ids is a stable module-level array in the navbar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return active;
}
