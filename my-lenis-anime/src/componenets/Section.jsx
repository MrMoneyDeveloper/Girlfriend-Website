import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import '../styles/Section.css';

export default function Section({ id, title, content }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    animate({
      targets: sectionRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section ref={sectionRef} className="section" id={id}>
      <h2 className="outlined-text">{title}</h2>
      <p className="outlined-text">{content}</p>
    </section>
  );
}