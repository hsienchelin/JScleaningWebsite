import seo from './seo.json';

export interface RouteSEO {
  title: string;
  description: string;
}

export const ROUTE_SEO: Record<string, RouteSEO> = seo;
