import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const waitForFonts =
  typeof document !== 'undefined' && document.fonts?.ready
    ? Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 350)),
      ])
    : Promise.resolve();

waitForFonts.then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
