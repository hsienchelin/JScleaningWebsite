import { useRef, useState, useCallback, useEffect } from 'react';

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, ratio)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePos(x);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updatePos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-ew-resize bg-slate-100"
      onMouseDown={(e) => {
        dragging.current = true;
        updatePos(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updatePos(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      </div>

      <span className="absolute top-3 left-3 bg-black/55 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-white/85 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      />
      <div
        className="absolute top-1/2 w-10 h-10 -mt-5 -ml-5 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B8FC8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="13 17 8 12 13 7" />
          <polyline points="19 17 14 12 19 7" />
        </svg>
      </div>
    </div>
  );
}
