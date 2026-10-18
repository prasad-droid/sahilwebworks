import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  direction = "",
  delay = 0,
  className = "",
  as: Tag = "div",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = direction ? `reveal-${direction}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
