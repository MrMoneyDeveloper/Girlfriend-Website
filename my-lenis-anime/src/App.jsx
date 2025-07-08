import React from 'react';
import useLenis from './hooks/useLenis';        // smooth‑scroll hook
import Hero from './components/Hero';           // top banner
import Section from './components/Section';     // reusable block
import './App.css';                             // keep or replace

export default function App() {
  useLenis();                                   // enable Lenis once

  return (
    <>
      <Hero />

      {/* Three empty sections you can fill later */}
      <Section id="one" />
      <Section id="two" />
      <Section id="three" />
    </>
  );
}
