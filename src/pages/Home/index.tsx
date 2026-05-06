import { Link } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Gem,
  Shield,
  Trash2,
  Layers,
  ShieldCheck,
  SprayCan,
  Brush,
  Users,
  Award,
  Eye,
  Handshake,
  MessageCircle,
} from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { useSEO } from '../../hooks/useSEO';
import { SERVICES } from '../../data/services';
import { COMPANY } from '../../data/constants';

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={28} />,
  gem: <Gem size={28} />,
  shield: <Shield size={28} />,
  trash: <Trash2 size={28} />,
  layers: <Layers size={28} />,
  'shield-check': <ShieldCheck size={28} />,
  'spray-can': <SprayCan size={28} />,
  brush: <Brush size={28} />,
  users: <Users size={28} />,
};

const REASONS = [
  {
    no: '01',
    icon: <Award size={26} />,
    title: '資深實戰背景',
    desc: '20 年豐富經驗，從高檔別墅、老屋翻新到商辦大樓，各種工地突發狀況都能第一時間應對。',
  },
  {
    no: '02',
    icon: <Eye size={26} />,
    title: '細節導向',
    desc: '比屋主更在意角落。我們的工作，是讓設計師辛苦規劃的細節，能以最乾淨的樣貌呈現在客戶面前。',
  },
  {
    no: '03',
    icon: <Handshake size={26} />,
    title: '責任施作',
    desc: '擁有穩定工班，不輕易放鳥、不隨意遲到。我們是設計師在趕工壓力下最可靠的後援。',
  },
  {
    no: '04',
    icon: <MessageCircle size={26} />,
    title: '透明溝通',
    desc: '現場問題即時回報，完工後主動複查，確保順利交屋，減少後續保固紛爭。',
  },
];

export default function Home() {
  useSEO('/');
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#6B8FC8] uppercase mb-6 bg-blue-50 px-4 py-1.5 rounded-full">
            專業裝潢後細清 · 設計師指定合作
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
            讓設計藍圖
            <br />
            <span className="gradient-text">完美交屋</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {COMPANY.yearsOfExperience} 年實務經驗，從粗清到入厝等級。
            <br className="hidden sm:block" />
            講得通、懂建材、收尾乾淨，是設計師交屋前最可靠的後援。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              預約場勘 <ChevronRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-[#6B8FC8] text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              查看服務項目
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400">
          <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-slate-300 rounded-full" />
        </div>
      </section>

      {/* Quick Contact Info Band */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Phone size={22} />, label: '服務諮詢', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
            { icon: <Phone size={22} />, label: '負責人專線', value: COMPANY.ownerPhone, href: `tel:${COMPANY.ownerPhone}` },
            { icon: <Award size={22} />, label: '深耕經驗', value: `${COMPANY.yearsOfExperience}+ 年` },
          ].map((item) => {
            const inner = (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="font-bold text-slate-800 text-lg">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} className="hover:opacity-80 transition-opacity">
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-[#6B8FC8] uppercase mb-3">
              關於哲欣
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">
              以誠起家，<span className="gradient-text">守護品質</span>
            </h2>
            <p className="text-slate-600 leading-loose mb-4">
              哲欣有限公司（民國 103 年設立）與佳翔企業社（民國 91 年開業）深耕清潔產業超過 20 年。公司名字的第一個字都取自老闆小孩的名字，這份對家人的愛，轉化為我們對工程品質的堅持。
            </p>
            <p className="text-slate-600 leading-loose mb-8">
              我們深知「家」是每個人的避風港，因此在清潔每個現場時，都秉持盡心盡力的態度。對我們而言，清潔不只是體力活，更是完成設計師心血、讓屋主安心入住的關鍵最後一哩路。
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#6B8FC8] font-semibold hover:gap-3 transition-all"
            >
              認識哲欣 <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '20+', label: '深耕年資' },
              { num: '500+', label: '完工案件' },
              { num: '98%', label: '設計師滿意度' },
              { num: '24hr', label: '報價回覆' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                <p className="text-4xl font-bold gradient-text">{stat.num}</p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="一站式清潔服務"
            title="從裝潢後細清到"
            highlight="長期駐點維護"
            subtitle="九大專業項目，覆蓋住宅、商辦、社區的各類清潔需求"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group border border-slate-100"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                <div className="flex items-center gap-1 text-[#6B8FC8] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  了解更多 <ChevronRight size={16} />
                </div>
              </Link>
            ))}
            <Link
              to="/contact"
              className="gradient-bg rounded-2xl p-6 flex flex-col justify-between text-white hover:opacity-90 transition-opacity"
            >
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone size={28} />
                </div>
                <h3 className="font-bold text-xl mb-2">需要客製方案？</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  告訴我們現場狀況與工期，我們依案件量身規劃最合適的清潔流程。
                </p>
              </div>
              <div className="flex items-center gap-1 font-semibold mt-6">
                立即聯絡我們 <ChevronRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="設計師為何選擇哲欣"
            title="專業、可靠、"
            highlight="講得通"
            subtitle="嚴格的品質標準與穩定的工班，是設計師長期合作的關鍵原因"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r) => (
              <div
                key={r.no}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                    {r.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate-100">{r.no}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">立即預約場勘</h2>
          <p className="text-white/80 text-lg mb-8">
            如果您正在尋找一間「講得通、懂建材、收尾乾淨」的合作夥伴，歡迎隨時聯繫哲欣。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-white text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
            <a
              href={`tel:${COMPANY.ownerPhone}`}
              className="bg-white/15 backdrop-blur text-white border border-white/40 font-semibold px-8 py-3.5 rounded-full hover:bg-white/25 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              負責人 {COMPANY.ownerPhone}
            </a>
            <a
              href={COMPANY.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              LINE 諮詢 {COMPANY.lineId}
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us check list */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle tag="服務承諾" title="我們對每一個案場的" highlight="基本承諾" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              '依工程進度準時到場，不放鳥',
              '使用對應藥劑，避免誤傷昂貴建材',
              '完工後主動複查，確保順利交屋',
              '保護工程拆除確實，不殘膠不留痕',
              '現場問題即時回報，不隱瞞',
              '減少後續保固紛爭，留下好口碑',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100"
              >
                <CheckCircle2 size={20} className="text-[#7ECFC5] shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
