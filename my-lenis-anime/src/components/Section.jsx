import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';  // ✅ correct ES‑module build
import '../styles/Section.css';

export default function Section({ id, children, title, content }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;          // safety guard

    anime({
      targets: sectionRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={sectionRef} className="section" id={id}>
      {children ? (
        children                                      // modern usage
      ) : (
        <>
          {title && <h2 className="outlined-text">{title}</h2>}
          {content && <p className="outlined-text">{content}</p>}
        </>
      )}
    </section>
  );
}
