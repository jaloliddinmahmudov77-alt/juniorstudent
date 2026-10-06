import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#home', id: 'home' },
    { label: 'Men haqimda', href: '#about', id: 'about' },
    { label: 'Ko‘nikmalarim', href: '#skills', id: 'skills' },
    { label: 'Loyihalarim', href: '#projects', id: 'projects' },
    { label: 'Sertifikatlarim', href: '#certificates', id: 'certificates' },
    { label: 'Bog‘lanish', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-orange-100/90 shadow-sm shadow-orange-500/5 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single Brand element with Fire Orange Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Junior Student Bosh Sahifa"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5A1F] to-[#FF8A00] p-[1px] shadow-md shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-[#FF5A1F] font-mono text-sm tracking-wider">
                  JS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#151515] group-hover:text-[#FF5A1F] transition-colors">
                Junior Student
              </span>
              <span className="text-[10px] text-[#FF5A1F] font-mono font-semibold tracking-widest uppercase -mt-1 hidden sm:block">
                Portfolio
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-orange-100 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/30'
                      : 'text-slate-700 hover:text-[#FF5A1F] hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & GitHub */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-700 hover:text-[#FF5A1F] bg-white border border-slate-200 hover:border-orange-200 shadow-sm transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl shadow-md shadow-orange-500/25 transition-all transform active:scale-95 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Bog‘lanish</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#FF5A1F] rounded-lg shadow-sm"
            >
              Bog‘lanish
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#FF5A1F] hover:bg-orange-50 rounded-lg border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-orange-100 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-[#FF5A1F] border border-orange-200'
                    : 'text-slate-700 hover:text-[#FF5A1F] hover:bg-orange-50/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-xs font-semibold text-center text-slate-700 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-xs font-semibold text-center text-[#FF5A1F] bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: {personalInfo.socials.telegramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
