import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    animate({
      targets: heroRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-content">
        <h1 className="outlined-text">Welcome</h1>
        <p className="outlined-text">Your placeholder hero tagline goes here.</p>
      </div>
    </section>
  );
}