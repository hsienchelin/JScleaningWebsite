import { useEffect } from 'react';
import { ROUTE_SEO } from '../data/seo';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SITE = 'https://jhesincleaning.com';

export function useSEO(path: keyof typeof ROUTE_SEO | (string & {})) {
  useEffect(() => {
    const seo = ROUTE_SEO[path] ?? ROUTE_SEO['/'];
    const url = SITE + (path === '/' ? '/' : path);

    document.title = seo.title;
    setMeta('description', seo.description);
    setCanonical(url);
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
  }, [path]);
}
