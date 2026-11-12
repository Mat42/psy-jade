import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './HomePage';

export { CABINET_INFO, FAQS, RATES } from './data';

// Used at build time by scripts/generate-static-pages.js to pre-render the home page HTML.
export function renderHome(): string {
  return renderToString(
    <StrictMode>
      <HomePage />
    </StrictMode>,
  );
}
