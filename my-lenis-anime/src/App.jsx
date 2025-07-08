import React from 'react';
import useLenis from './hooks/useLenis';        // smooth‑scroll hook
import Hero from './components/Hero';           // top banner
import Section from './components/Section';     // reusable block
import './App.css';                             // keep or replace

export default function App() {
  useLenis();   
                                  // enable Lenis once
const sections = [
    {
      id: 'one',
      title: 'About Us',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'two',
      title: 'Services',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 'three',
      title: 'Contact',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 'four',
      title: 'More Info',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ];

  return (
    <>
      <Hero />

       {sections.map((s) => (
        <Section key={s.id} id={s.id} title={s.title} content={s.content} />
      ))}
    </>
  );
}
