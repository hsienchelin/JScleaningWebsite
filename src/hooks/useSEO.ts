import { useEffect } from 'react';

interface SEO {
  title: string;
  description?: string;
}

const SITE_NAME = '哲欣有限公司';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, description }: SEO) {
  useEffect(() => {
    document.title = `${title}｜${SITE_NAME}`;
    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description);
    }
    setMeta('og:title', `${title}｜${SITE_NAME}`, 'property');
    setMeta('twitter:title', `${title}｜${SITE_NAME}`);
  }, [title, description]);
}
