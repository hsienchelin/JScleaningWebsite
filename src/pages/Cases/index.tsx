import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Camera } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import BeforeAfterSlider from '../../components/common/BeforeAfterSlider';
import { loadCases, MOVE_OUT_SERVICE, type CaseEntry } from '../../utils/loadCases';
import { SERVICES } from '../../data/services';
import { useSEO } from '../../hooks/useSEO';

const TESTIMONIALS = [
  {
    name: '陳設計師',
    role: '室內設計師 · 合作 5 年',
    content: '哲欣對昂貴建材的處理非常熟練，從石材到進口五金都能精準下手，是我們交屋前最放心的合作夥伴。',
  },
  {
    name: '林設計總監',
    role: '設計工作室主理人',
    content: '工班穩定不放鳥這點對設計師太重要了。趕工期時哲欣總是準時到場，問題即時回報，省下我超多溝通成本。',
  },
  {
    name: '王屋主',
    role: '陽明山別墅交屋客戶',
    content: '入厝前的細清做得超乎期待，連抽屜軌道、五金夾縫都清得一乾二淨，看得出來很用心。',
  },
];

function serviceTitle(id: string) {
  if (id === MOVE_OUT_SERVICE.id) return MOVE_OUT_SERVICE.title;
  return SERVICES.find((s) => s.id === id)?.title ?? id;
}

function CaseCard({ entry }: { entry: CaseEntry }) {
  const pairCount = Math.max(entry.before.length, entry.after.length);
  const [idx, setIdx] = useState(0);
  const before = entry.before[idx];
  const after = entry.after[idx];
  const hasPair = !!before && !!after;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        {hasPair ? (
          <BeforeAfterSlider before={before} after={after} beforeLabel="清潔前" afterLabel="清潔後" />
        ) : (
          <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center">
            <img
              src={after ?? before}
              alt={entry.info.title ?? entry.caseId}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {pairCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIdx((i) => (i - 1 + pairCount) % pairCount)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white shadow-md flex items-center justify-center text-slate-700 z-10"
              aria-label="上一組"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIdx((i) => (i + 1) % pairCount)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white shadow-md flex items-center justify-center text-slate-700 z-10"
              aria-label="下一組"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {Array.from({ length: pairCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`第 ${i + 1} 組`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === idx ? 'bg-white w-5' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <span className="inline-block bg-[#EBF4FC] text-[#6B8FC8] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
          {entry.serviceTitle}
        </span>
        <h3 className="font-bold text-slate-800 mb-1">{entry.info.title || '案例'}</h3>
        {entry.info.location && (
          <p className="text-slate-400 text-xs mb-2">{entry.info.location}</p>
        )}
        {entry.info.scope && <p className="text-slate-500 text-sm">{entry.info.scope}</p>}
      </div>
    </div>
  );
}

export default function Cases() {
  useSEO({
    title: '案例分享',
    description:
      '哲欣歷年清潔實績｜豪宅別墅、老屋翻新、商辦大樓、退租還原前後對比，看見專業細清的真實成果。',
  });
  const cases = useMemo(() => loadCases(), []);
  const categories = useMemo(() => {
    const ids = Array.from(new Set(cases.map((c) => c.serviceId)));
    return ids.map((id) => ({ id, label: serviceTitle(id) }));
  }, [cases]);

  const [activeCat, setActiveCat] = useState<string>('all');
  const filtered = activeCat === 'all' ? cases : cases.filter((c) => c.serviceId === activeCat);

  return (
    <div className="pt-16">
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="案例分享"
            title="每個案件都是"
            highlight="我們的驕傲"
            subtitle="從裝潢後細清、保護工程拆除到退租還原，看見哲欣的清潔成果"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {cases.length === 0 ? (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
                <Camera size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">案例照片陸續上傳中</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  我們正在整理歷年施工實拍照片，包含裝潢前後對比、保護工程拆除、退租還原等。如需參考完整案例，歡迎直接聯繫我們。
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                <button
                  onClick={() => setActiveCat('all')}
                  className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                    activeCat === 'all'
                      ? 'gradient-bg text-white shadow-md'
                      : 'border border-slate-200 text-slate-600 hover:border-[#6B8FC8] hover:text-[#6B8FC8]'
                  }`}
                >
                  全部
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                      activeCat === cat.id
                        ? 'gradient-bg text-white shadow-md'
                        : 'border border-slate-200 text-slate-600 hover:border-[#6B8FC8] hover:text-[#6B8FC8]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filtered.map((c) => (
                  <CaseCard key={`${c.serviceId}/${c.caseId}`} entry={c} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center text-slate-400 py-20">此分類目前無案例，敬請期待。</div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle tag="客戶好評" title="設計師與屋主" highlight="這樣說" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">「{review.content}」</p>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">想看更多實際案例？</h2>
          <p className="text-white/80 mb-8">歡迎與我們聯繫，我們可依您的設計風格提供類似案場參考。</p>
          <Link
            to="/contact"
            className="bg-white text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
          >
            聯繫我們看案例 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
