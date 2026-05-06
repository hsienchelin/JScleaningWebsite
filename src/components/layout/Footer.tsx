import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Compass } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../data/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="哲欣有限公司 - 專業裝潢後細清"
                width="40"
                height="40"
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-bold text-white text-lg leading-tight">{COMPANY.name}</p>
                <p className="text-xs text-slate-400">{COMPANY.nameEn}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{COMPANY.description}</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-white mb-4">快速連結</p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-[#7ECFC5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4">聯絡資訊</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-[#7ECFC5] transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-[#7ECFC5] transition-colors"
                >
                  <MessageSquare size={15} className="mt-0.5 shrink-0" />
                  LINE：{COMPANY.lineId}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-[#7ECFC5] transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {COMPANY.address}
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <Compass size={15} className="mt-0.5 shrink-0" />
                  服務範圍：{COMPANY.serviceArea}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
