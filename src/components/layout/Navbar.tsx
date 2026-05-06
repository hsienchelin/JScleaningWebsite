import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../data/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="哲欣有限公司 - 專業裝潢後細清"
              width="40"
              height="40"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-slate-800">{COMPANY.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'gradient-text'
                    : 'text-slate-600 hover:text-[#6B8FC8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-white gradient-bg px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="選單"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-base font-medium py-1 ${
                location.pathname === link.href ? 'gradient-text' : 'text-slate-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-white gradient-bg px-4 py-2.5 rounded-full text-center justify-center mt-2"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
