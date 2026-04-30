import { SERVICES } from '../data/services';

export interface CaseInfo {
  title?: string;
  location?: string;
  scope?: string;
  published?: boolean;
}

export interface CaseEntry {
  serviceId: string;
  serviceTitle: string;
  caseId: string;
  info: CaseInfo;
  before: string[];
  after: string[];
}

const infoFiles = import.meta.glob('../assets/cases/*/case-*/info.json', {
  eager: true,
}) as Record<string, { default: CaseInfo }>;

const beforeFiles = import.meta.glob(
  '../assets/cases/*/case-*/before/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const afterFiles = import.meta.glob(
  '../assets/cases/*/case-*/after/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

function parseKey(path: string) {
  const m = path.match(/\/cases\/([^/]+)\/(case-[^/]+)\//);
  return m ? { serviceId: m[1], caseId: m[2] } : null;
}

function collectImages(files: Record<string, string>) {
  const map = new Map<string, string[]>();
  for (const path of Object.keys(files).sort()) {
    const parsed = parseKey(path);
    if (!parsed) continue;
    const key = `${parsed.serviceId}/${parsed.caseId}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(files[path]);
  }
  return map;
}

export function loadCases(): CaseEntry[] {
  const beforeMap = collectImages(beforeFiles);
  const afterMap = collectImages(afterFiles);
  const entries: CaseEntry[] = [];

  for (const [path, mod] of Object.entries(infoFiles)) {
    const parsed = parseKey(path);
    if (!parsed) continue;
    const info = mod.default ?? {};
    if (info.published === false) continue;

    const key = `${parsed.serviceId}/${parsed.caseId}`;
    const before = beforeMap.get(key) ?? [];
    const after = afterMap.get(key) ?? [];
    if (before.length === 0 && after.length === 0) continue;

    const service = SERVICES.find((s) => s.id === parsed.serviceId);
    entries.push({
      serviceId: parsed.serviceId,
      serviceTitle: service?.title ?? parsed.serviceId,
      caseId: parsed.caseId,
      info,
      before,
      after,
    });
  }

  return entries.sort((a, b) => {
    if (a.serviceId !== b.serviceId) return a.serviceId.localeCompare(b.serviceId);
    return a.caseId.localeCompare(b.caseId);
  });
}

export const MOVE_OUT_SERVICE = {
  id: 'move-out',
  title: '退租清潔',
};
