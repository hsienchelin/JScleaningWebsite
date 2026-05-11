import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Gem,
  Shield,
  Trash2,
  Layers,
  ShieldCheck,
  SprayCan,
  Brush,
  Users,
  Clock,
  MapPin,
} from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { SERVICES } from '../../data/services';
import { getServiceImage } from '../../utils/loadServiceImages';
import { useSEO } from '../../hooks/useSEO';

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={36} />,
  gem: <Gem size={36} />,
  shield: <Shield size={36} />,
  trash: <Trash2 size={36} />,
  layers: <Layers size={36} />,
  'shield-check': <ShieldCheck size={36} />,
  'spray-can': <SprayCan size={36} />,
  brush: <Brush size={36} />,
  users: <Users size={36} />,
};

const PROCESS = [
  { step: '01', title: '聯絡與諮詢', desc: '透過電話或表單描述案場狀況、坪數與預計工期。' },
  { step: '02', title: '現場場勘', desc: '依需求安排場勘，評估清潔範圍與特殊建材處理。' },
  { step: '03', title: '提供報價', desc: '根據實際工項提供透明、合理的報價單。' },
  { step: '04', title: '排程進場', desc: '配合工程進度排定進場日期，工班準時就位。' },
  { step: '05', title: '施工與複查', desc: '依標準流程細清，完工後主動複查，確保交屋品質。' },
];

export default function Services() {
  useSEO('/services');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="服務項目"
            title="一站式解決"
            highlight="工程尾端需求"
            subtitle="專精於裝潢後細清，提供從粗清到入厝等級的完整服務"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {SERVICES.map((service, index) => {
            const image = getServiceImage(service.id);
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center scroll-mt-20 ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Text */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white shrink-0">
                      {iconMap[service.icon]}
                    </div>
                    <span className="text-5xl font-bold text-slate-100">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#6B8FC8] mb-2">{service.subtitle}</p>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{service.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-[#7ECFC5] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                {image ? (
                  <div className="relative rounded-3xl aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={image}
                      alt={`${service.title} - 哲欣專業裝潢後清潔服務示意圖`}
                      width="800"
                      height="600"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur">
                      AI 生成示意圖
                    </span>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#EBF4FC] to-[#E0F5F2] rounded-3xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-slate-400">
                      <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-3 opacity-60">
                        {iconMap[service.icon]}
                      </div>
                      <p className="text-sm">AI 生成示意圖</p>
                      <p className="text-xs mt-1">(圖片更新中)</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <p className="text-center text-xs text-slate-400 mt-4">
            ※ 本頁配圖為 AI 生成示意圖，僅作服務內容說明，實際成果請參考
            <Link to="/cases" className="text-[#6B8FC8] hover:underline mx-1">案例分享</Link>
            或來電洽詢。
          </p>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="服務流程"
            title="從詢問到交屋的"
            highlight="完整流程"
            subtitle="每一步都透明，讓您安心交給我們收尾"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white text-sm font-bold mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Notes */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">客製化服務說明</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                每一個案場條件不同，建議於工程進入尾段時先聯繫我們進行場勘，依實際工項配合報價。我們可彈性配合設計師工期，必要時可加派人力配合趕工驗收。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-[#6B8FC8] text-sm font-semibold hover:gap-2 transition-all"
              >
                預約場勘 <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">服務範圍</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                以<strong className="text-slate-800">新北市新莊區</strong>為核心，主要服務<strong className="text-slate-800">雙北地區（台北市、新北市）</strong>，並延伸至<strong className="text-slate-800">桃園市、基隆市、新竹市</strong>。新莊本地案件可即時排程，雙北以外地區依案場規模評估，超遠距離案件會誠實告知是否合適接案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">找不到符合需求的服務？</h2>
          <p className="text-white/80 mb-8">歡迎直接聯繫我們，我們提供客製化清潔方案。</p>
          <Link
            to="/contact"
            className="bg-white text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
          >
            聯絡我們 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
