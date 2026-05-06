import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (typeof window.gtag !== 'function') return;
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';

      if (href.startsWith('tel:')) {
        window.gtag('event', 'phone_click', {
          phone_number: href.replace('tel:', ''),
          page_path: window.location.pathname,
        });
      } else if (href.includes('line.me')) {
        window.gtag('event', 'line_click', {
          link_url: href,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith('mailto:')) {
        window.gtag('event', 'email_click', {
          email: href.replace('mailto:', ''),
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}
