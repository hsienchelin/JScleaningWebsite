const files = import.meta.glob(
  '../assets/services/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const map = new Map<string, string>();
for (const path of Object.keys(files).sort()) {
  const m = path.match(/\/services\/([^/]+)\//);
  if (!m) continue;
  if (!map.has(m[1])) map.set(m[1], files[path]);
}

export function getServiceImage(serviceId: string): string | undefined {
  return map.get(serviceId);
}
