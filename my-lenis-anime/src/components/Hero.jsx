import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';   // ✅ correct import
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;              // guard against null

    anime({
      targets: heroRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-content text-center">
        <h1 className="outlined-text">Welcome</h1>
        <p className="outlined-text">
          Your placeholder hero tagline goes here.
        </p>
      </div>
    </section>
  );
}
