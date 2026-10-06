import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  CheckCircle, 
  Flame, 
  Award,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#FAFAFA] border-t border-slate-100">
      
      {/* Decorative subtle light orange background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#FF5A1F]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF7A00]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#FF5A1F] mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span>Tanishuv</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
            Men haqimda
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Zamonaviy dasturlash, texnologik qiziqish va har kunlik amaliy o‘rganish yo‘li.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PROFILE CARD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-orange-500/5 relative overflow-hidden group">
              
              {/* Top ambient orange glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#FF5A1F]/10 rounded-full blur-2xl group-hover:bg-[#FF5A1F]/20 transition-all duration-500" />

              {/* Avatar + Main Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#FF5A1F] shadow-lg shadow-orange-500/20 bg-slate-50 shrink-0">
                    <img
                      src={personalInfo.avatarImage}
                      alt="Junior Student - Jaloliddin"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#FF5A1F] text-white p-1 rounded-full border-2 border-white shadow-sm" title="O'rganishga faol">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-bold text-[#151515] tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5A1F] font-mono">
                    @{personalInfo.legalName.toLowerCase()}_dev
                  </p>
                  
                  {/* Clean unboxed tags with dividers */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500 pt-1">
                    <span className="text-slate-800 font-medium">Student Developer</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>Toshkent</span>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FF5A1F] bg-[#FFF1E8] border border-[#FF5A1F]/20 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                      {personalInfo.statusBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Focus Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 mt-6 border-t border-slate-100">
                
                <div className="p-3 rounded-xl bg-[#FFF1E8]/60 border border-[#FF5A1F]/15 text-center">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-white flex items-center justify-center text-[#FF5A1F] mb-1.5 shadow-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#151515]">Dasturchi</div>
                  <div className="text-[10px] text-slate-500 font-medium">IT & Dasturlash</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF1E8]/60 border border-[#FF5A1F]/15 text-center">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-white flex items-center justify-center text-[#FF5A1F] mb-1.5 shadow-xs">
                    <Flame className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-xs font-bold text-[#151515]">Kunlik O'rganish</div>
                  <div className="text-[10px] text-slate-500 font-medium">Har kun 2-4 soat</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF1E8]/60 border border-[#FF5A1F]/15 text-center">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-white flex items-center justify-center text-[#FF5A1F] mb-1.5 shadow-xs">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#151515]">Global Maqsad</div>
                  <div className="text-[10px] text-slate-500 font-medium">Dasturlash</div>
                </div>

              </div>

              {/* Direct Link to Portfolio & GitHub */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Shaxsiy portfolio:</span>
                <a
                  href="https://jaloliddinportfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5A1F] hover:text-[#E04B14] font-semibold inline-flex items-center gap-1"
                >
                  <span>jaloliddinportfolio.vercel.app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

          {/* PORTFOLIO BIO & STATS */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Narrative Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-xl shadow-orange-500/5">
              <h3 className="text-xl font-bold text-[#151515] tracking-tight flex items-center gap-2">
                <span>Salom! Men Jaloliddin (Junior O'quvchisi)</span>
              </h3>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Mening maqsadim shunchaki nazariyani yodlash emas, balki odamlar foydalana oladigan chiroyli, qulay va xatosiz ishlaydigan veb-saytlarni yaratishdir. 16-maktab portali va "Aziz Ustozim" kabi amaliy loyihalarim aynan shu intilishning dastlabki mevalaridir.
              </p>

              {/* Key Principles */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Toza va tushunarli semantik kod yozish
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Har bir qurilmaga mos responsiv dizayn
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Git & GitHub orqali versiyalarni boshqarish
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    AI va yangi texnologiyalardan unumli foydalanish
                  </span>
                </div>
              </div>
            </div>

            {/* STATISTIK KARTOCHKALARI (4 Metric Cards in White + Orange) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#FF5A1F]/40 shadow-sm text-center transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5A1F] font-mono tabular-nums">
                  {personalInfo.stats.projectsCount}
                </div>
                <div className="text-xs font-bold text-[#151515] mt-1">Real Loyihalar</div>
                <div className="text-[11px] text-slate-500 font-medium">Vercel’da jonli</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#FF5A1F]/40 shadow-sm text-center transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5A1F] font-mono tabular-nums">
                  {personalInfo.stats.technologiesLearned}
                </div>
                <div className="text-xs font-bold text-[#151515] mt-1">Texnologiyalar</div>
                <div className="text-[11px] text-slate-500 font-medium">O'zlashtirilgan</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#FF5A1F]/40 shadow-sm text-center transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5A1F] font-mono tabular-nums">
                  {personalInfo.stats.certificatesCount}
                </div>
                <div className="text-xs font-bold text-[#151515] mt-1">Sertifikatlar</div>
                <div className="text-[11px] text-slate-500 font-medium">Tasdiqlangan</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#FF5A1F]/40 shadow-sm text-center transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5A1F] font-mono tabular-nums">
                  {personalInfo.stats.enthusiasmLevel}
                </div>
                <div className="text-xs font-bold text-[#151515] mt-1">Ishtiyoq</div>
                <div className="text-[11px] text-slate-500 font-medium">Kelajakka ishonch</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
