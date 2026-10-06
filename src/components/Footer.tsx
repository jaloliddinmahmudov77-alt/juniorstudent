import React from 'react';
import { Github, Send, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-white py-12 relative overflow-hidden border-t border-slate-800">
      
      {/* Background orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#FF5A1F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand lockup */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5A1F] to-[#FF8A00] p-[1px] shadow-md shadow-orange-500/25">
              <div className="w-full h-full bg-[#151515] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-[#FF5A1F] font-mono text-sm tracking-wider">
                  JS
                </span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">
                JUNIOR STUDENT
              </span>
              <p className="text-xs text-slate-400 italic">
                “Learning today. Building tomorrow.”
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#FF5A1F] hover:border-[#FF5A1F]/40 transition-colors"
              title="Telegram: @Mahmudov567"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#FF5A1F] hover:border-[#FF5A1F]/40 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E04B14] text-white transition-colors cursor-pointer shadow-md shadow-orange-500/20"
              title="Yuqoriga qaytish"
              aria-label="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © 2026 Junior Student. Barcha huquqlar himoyalangan.
          </div>
          
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Dasturlash</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Web Development</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-[#FF5A1F]">Fire Orange & Clean White</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
