import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Award,
  Eye,
  Handshake,
  MessageCircle,
  Building2,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { COMPANY } from '../../data/constants';
import { useSEO } from '../../hooks/useSEO';

const TIMELINE = [
  {
    year: '民國 91 年',
    yearEn: '2002',
    title: '佳翔企業社開業',
    desc: '從清潔基層做起，奠定哲欣 20 年實戰經驗的根基。',
  },
  {
    year: '民國 103 年',
    yearEn: '2014',
    title: '哲欣有限公司設立',
    desc: '正式立案經營，承接更多設計師指定的高端案場。',
  },
  {
    year: '至今',
    yearEn: 'Now',
    title: '深耕裝潢後細清領域',
    desc: '從豪宅別墅、老屋翻新到商辦大樓，累積數百件完工案件。',
  },
];

const VALUES = [
  {
    icon: <Award size={26} />,
    title: '資深實戰',
    desc: '20 年豐富經驗，各種工地突發狀況都能第一時間應對。',
  },
  {
    icon: <Eye size={26} />,
    title: '細節導向',
    desc: '比屋主更在意角落，讓設計師的細節以最乾淨的樣貌呈現。',
  },
  {
    icon: <Handshake size={26} />,
    title: '責任施作',
    desc: '穩定工班，不放鳥、不遲到，是設計師最可靠的後援。',
  },
  {
    icon: <MessageCircle size={26} />,
    title: '透明溝通',
    desc: '現場問題即時回報，完工主動複查，順利交屋零紛爭。',
  },
];

export default function About() {
  useSEO({
    title: '公司簡介',
    description:
      '哲欣有限公司（民國 103 年設立）與佳翔企業社（民國 91 年開業）兩大品牌，深耕清潔產業 20 年以上，是設計師交屋前最可靠的後援。',
  });
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="公司簡介"
            title="以誠起家，"
            highlight="守護品質"
            subtitle="深耕清潔產業超過 20 年，是設計師交屋前最可靠的後援"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#6B8FC8] uppercase mb-3">
              品牌故事
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">
              名字裡的<span className="gradient-text">那份愛</span>
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 leading-loose">
              <p>
                哲欣有限公司（民國 103 年設立）與佳翔企業社（民國 91 年開業），這兩個品牌的第一個字，都取自老闆小孩的名字。
              </p>
              <p>
                這份對家人的愛，轉化為我們對工程品質的堅持。我們深知「家」是每個人的避風港，因此在清潔每個現場時，都秉持著盡心盡力的態度。
              </p>
              <p>
                對我們而言，清潔不只是體力活，更是完成設計師心血、讓屋主安心入住的<strong className="text-slate-800">關鍵最後一哩路</strong>。
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#EBF4FC] to-[#E0F5F2] rounded-3xl p-10 text-center">
              <img
                src="/images/logo-mark.png"
                alt="哲欣 Logo"
                className="w-48 h-48 object-contain mx-auto mb-6"
              />
              <p className="text-slate-700 leading-relaxed">
                「我們把每一個案場，都當作要交給<br />家人入住的房子來清潔。」
              </p>
              <p className="text-sm text-slate-400 mt-4">— 哲欣團隊信念</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle tag="一路走來" title="超過二十年的" highlight="清潔職人之路" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={item.yearEn}
                className="relative bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-7 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">{item.yearEn}</p>
                <p className="text-sm text-slate-400 mb-3">{item.year}</p>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="核心價值"
            title="我們堅持的"
            highlight="四件事"
            subtitle="這些不是口號，是每一個案場上實際的工作標準"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, idx) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                    {v.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate-100">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Card */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="gradient-bg px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-white/80 text-xs">Company Profile</p>
                  <h3 className="text-white text-xl font-bold">公司基本資料</h3>
                </div>
              </div>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: '公司全名', value: COMPANY.name },
                { label: '英文名稱', value: COMPANY.nameEn },
                { label: '集團品牌', value: COMPANY.brandLine },
                { label: '成立時間', value: COMPANY.established },
                { label: '經營年資', value: `${COMPANY.yearsOfExperience} 年以上` },
                { label: '主要服務區', value: '雙北 / 桃園' },
              ].map((row) => (
                <div key={row.label} className="border-b border-slate-100 pb-3">
                  <p className="text-xs text-slate-400 mb-1">{row.label}</p>
                  <p className="font-semibold text-slate-800">{row.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#6B8FC8] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">服務諮詢</p>
                  <p className="font-semibold text-slate-800 text-sm">{COMPANY.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#6B8FC8] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">電子郵件</p>
                  <p className="font-semibold text-slate-800 text-sm break-all">{COMPANY.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#6B8FC8] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">公司地址</p>
                  <p className="font-semibold text-slate-800 text-sm">{COMPANY.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">想找一間講得通的清潔夥伴？</h2>
          <p className="text-white/80 mb-8">
            歡迎與我們聯繫，從場勘到完工，哲欣是您最可靠的後援。
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
          >
            預約場勘 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
