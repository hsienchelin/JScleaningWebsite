import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const seoPath = join(__dirname, '..', 'src', 'data', 'seo.json');
const SITE = 'https://jhesincleaning.com';

const ROUTE_SEO = JSON.parse(readFileSync(seoPath, 'utf-8'));

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, regex, replacement) {
  if (!regex.test(html)) {
    console.warn(`  ⚠️  pattern not found: ${regex}`);
    return html;
  }
  return html.replace(regex, replacement);
}

function generateRouteHtml(template, path, seo) {
  const url = SITE + path;
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);

  let html = template;
  html = replaceMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = replaceMeta(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );
  html = replaceMeta(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = replaceMeta(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = replaceMeta(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = replaceMeta(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = replaceMeta(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = replaceMeta(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  return html;
}

if (!existsSync(distDir)) {
  console.error(`✗ dist directory not found at ${distDir}`);
  console.error('  Run "vite build" before this script.');
  process.exit(1);
}

const templatePath = join(distDir, 'index.html');
const template = readFileSync(templatePath, 'utf-8');

console.log('🚀 Prerendering routes…');

const homeSeo = ROUTE_SEO['/'];
if (homeSeo) {
  const homeHtml = generateRouteHtml(template, '/', homeSeo);
  writeFileSync(templatePath, homeHtml, 'utf-8');
  console.log(`  ✓ /            → dist/index.html (overwrote with canonical home meta)`);
}

for (const [path, seo] of Object.entries(ROUTE_SEO)) {
  if (path === '/') continue;
  const html = generateRouteHtml(template, path, seo);
  const outputDir = join(distDir, path);
  const outputFile = join(outputDir, 'index.html');
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputFile, html, 'utf-8');
  console.log(`  ✓ ${path.padEnd(12)} → dist${path}/index.html`);
}

console.log(`✅ Prerendered ${Object.keys(ROUTE_SEO).length} routes`);
