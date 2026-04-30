import { Phone, Mail, MapPin, MessageSquare, Compass, Navigation } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { COMPANY, BUSINESS_HOURS } from '../../data/constants';

export default function Contact() {
  const mapQuery = encodeURIComponent(COMPANY.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const contactItems = [
    {
      icon: <Phone size={18} />,
      label: '服務諮詢',
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/-/g, '')}`,
    },
    {
      icon: <Phone size={18} />,
      label: '負責人專線',
      value: COMPANY.ownerPhone,
      href: `tel:${COMPANY.ownerPhone.replace(/-/g, '')}`,
    },
    {
      icon: <MessageSquare size={18} />,
      label: '官方 LINE',
      value: COMPANY.lineId,
      href: COMPANY.lineUrl,
      external: true,
    },
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: <MapPin size={18} />,
      label: '公司地址',
      value: COMPANY.address,
    },
    {
      icon: <Compass size={18} />,
      label: '主要服務範圍',
      value: COMPANY.serviceArea,
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="聯絡我們"
            title="預約場勘 ｜"
            highlight="專業諮詢"
            subtitle="歡迎來電或加 LINE，我們將在最短時間內回覆您"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">聯絡資訊</h3>
                <ul className="flex flex-col gap-5">
                  {contactItems.map((item) => {
                    const inner = (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-0.5">{item.label}</p>
                          <p className="font-semibold text-slate-800 break-all">{item.value}</p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="block hover:opacity-80 transition-opacity"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-3">服務時間</h4>
                <ul className="flex flex-col gap-2 text-sm">
                  {BUSINESS_HOURS.map((row) => (
                    <li key={row.day} className="flex justify-between text-slate-600">
                      <span>{row.day}</span>
                      <span className="font-medium">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">公司位置</p>
                      <p className="font-semibold text-slate-800 text-sm">{COMPANY.address}</p>
                    </div>
                  </div>
                  <a
                    href={mapDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Navigation size={14} />
                    導航前往
                  </a>
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/10] w-full">
                  <iframe
                    title="哲欣有限公司 地圖"
                    src={mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex items-center justify-center gap-1.5 gradient-bg text-white text-sm font-semibold py-3 hover:opacity-90 transition-opacity"
                >
                  <Navigation size={14} />
                  導航前往
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
