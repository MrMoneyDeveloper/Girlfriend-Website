import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  // eslint-disable-next-line no-console
  console.error(
    '🚨  No element with id="root" found in index.html. ' +
      'Make sure the script tag sits *below* the root div.'
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
