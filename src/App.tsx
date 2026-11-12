import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomePage from './HomePage';
import AnnexePage from './components/AnnexePage';
import MentionsLegales from './components/MentionsLegales';
import { getAnnexeBySlugOrId } from './data/annexes';

interface ParsedRoute {
  type: 'home' | 'mentions-legales' | 'annexe';
  annexeId?: string;
  anchor?: string;
}

function parseCurrentRoute(): ParsedRoute {
  const hash = window.location.hash || '';
  const pathname = window.location.pathname.replace(/\/+$/, '') || '';

  // Home section anchors always belong to the home page
  const homeAnchors = ['#accueil', '#approche', '#pour-qui', '#tarifs', '#faq', '#contact'];
  if (homeAnchors.includes(hash)) {
    return { type: 'home', anchor: hash === '#accueil' ? undefined : hash };
  }

  // Check pathname (for direct visits to pre-rendered static HTML routes)
  const cleanPath = pathname.replace(/^\//, '');
  if (cleanPath === 'mentions-legales') {
    return { type: 'mentions-legales' };
  }
  if (cleanPath && getAnnexeBySlugOrId(cleanPath)) {
    return { type: 'annexe', annexeId: cleanPath };
  }

  // Check hash
  if (hash === '#/mentions-legales' || hash === '#mentions-legales') {
    return { type: 'mentions-legales' };
  }

  if (hash.startsWith('#/annexe/')) {
    const rawId = hash.replace('#/annexe/', '');
    return { type: 'annexe', annexeId: rawId };
  }

  const cleanHash = hash.replace(/^#\/?/, '');
  if (cleanHash === 'mentions-legales') {
    return { type: 'mentions-legales' };
  }
  if (cleanHash && getAnnexeBySlugOrId(cleanHash)) {
    return { type: 'annexe', annexeId: cleanHash };
  }

  // Generic anchor navigation on home page
  if (hash && hash.startsWith('#') && !hash.startsWith('#/')) {
    return { type: 'home', anchor: hash };
  }

  return { type: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<ParsedRoute>(parseCurrentRoute);

  useEffect(() => {
    // If arriving with a home anchor on a subpage path (e.g. /qui-suis-je/#accueil or /qui-suis-je/#contact),
    // normalize the browser URL to root
    const hash = window.location.hash;
    const pathname = window.location.pathname.replace(/\/+$/, '');
    const homeAnchors = ['#accueil', '#approche', '#pour-qui', '#tarifs', '#faq', '#contact'];

    if (pathname && homeAnchors.includes(hash)) {
      const newUrl = hash === '#accueil' ? '/' : `/${hash}`;
      window.history.replaceState({}, '', newUrl);
    }

    // Automatically clean up legacy hash URLs (e.g. #/qui-suis-je -> /qui-suis-je/)
    if (window.location.hash.startsWith('#/')) {
      const current = parseCurrentRoute();
      if (current.type === 'annexe' && current.annexeId) {
        const found = getAnnexeBySlugOrId(current.annexeId);
        if (found) {
          window.history.replaceState({}, '', `/${found.slug}/`);
        }
      } else if (current.type === 'mentions-legales') {
        window.history.replaceState({}, '', '/mentions-legales/');
      } else if (current.type === 'home') {
        window.history.replaceState({}, '', '/');
      }
    }

    const handleRouteChange = () => {
      setRoute(parseCurrentRoute());
    };

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Let external links, anchors, and protocols handle normally
      if (
        anchor.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('#')
      ) {
        return;
      }

      // Intercept root & internal clean path navigations
      if (href.startsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setRoute(parseCurrentRoute());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Handle in-page anchor scrolling when on the home page
  useEffect(() => {
    if (route.type === 'home' && route.anchor) {
      try {
        const element = document.querySelector(route.anchor);
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }, 120);
        }
      } catch (e) {
        // Ignore invalid selector
      }
    } else if (route.type === 'home' && !route.anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  // Route: Mentions Légales
  if (route.type === 'mentions-legales') {
    return (
      <>
        <MentionsLegales />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  // Route: Referenced Page (Annexe)
  if (route.type === 'annexe' && route.annexeId) {
    return (
      <>
        <AnnexePage id={route.annexeId} />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  // Route: Home Page
  return (
    <HomePage>
      <Analytics />
      <SpeedInsights />
    </HomePage>
  );
}
