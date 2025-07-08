import React from 'react';
import useLenis from './hooks/useLenis';     // smooth‑scroll hook
import Hero from './components/Hero';        // top banner
import Section from './components/Section';  // reusable block
import './App.css';                          // global / Tailwind styles

export default function App() {
  // enable Lenis once for the whole page
  useLenis();

  // shape your page via data instead of hard‑coding JSX
  const sections = [
    {
      id: 'one',
      title: 'About Us',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'two',
      title: 'Services',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 'three',
      title: 'Contact',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 'four',
      title: 'More Info',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ];

  return (
    <>
      <Hero />

      {sections.map(({ id, title, content }) => (
        <Section key={id} id={id}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="max-w-prose mx-auto">{content}</p>
          </div>
        </Section>
      ))}
    </>
  );
}
