import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { FAQ } from '../../data/faq';
import { useSEO } from '../../hooks/useSEO';

const SCHEMA_ID = 'faq-jsonld';

export default function FAQPage() {
  useSEO('/faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };

    let script = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = SCHEMA_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      const existing = document.getElementById(SCHEMA_ID);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="常見問題"
            title="關於裝潢後細清的"
            highlight="所有疑問"
            subtitle="20 年實戰經驗整理，從工時、費用到工法的完整解答"
          />
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="w-9 h-9 gradient-bg rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 text-base md:text-lg leading-snug">
                        {item.q}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-slate-400 shrink-0 mt-1.5 transition-transform ${
                        isOpen ? 'rotate-180 text-[#6B8FC8]' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[4.5rem]">
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">還有其他問題？</h2>
          <p className="text-white/80 mb-8">歡迎直接聯繫我們，提供您最精準的回覆與報價。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#6B8FC8] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              聯絡我們 <ChevronRight size={18} />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 backdrop-blur"
            >
              查看服務項目
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
