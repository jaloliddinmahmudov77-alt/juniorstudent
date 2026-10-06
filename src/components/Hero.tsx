import React, { useState } from 'react';
import { 
  ArrowRight, 
  Send, 
  Github, 
  Mail, 
  Flame 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-28 bg-white overflow-hidden">
      
      {/* Background Subtle Fire/Orange Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-3xl pointer-events-none animate-pulse-orange" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[30rem] h-[30rem] bg-[#FF7A00]/8 rounded-full blur-3xl pointer-events-none animate-pulse-orange" />
      
      {/* Subtle Coding Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.03] text-xs font-mono text-slate-900">
        <span className="absolute top-20 left-10">&lt;JuniorStudent /&gt;</span>
        <span className="absolute top-48 right-16">&#123; const future = "bright"; &#125;</span>
        <span className="absolute bottom-32 left-24">console.log("Building today...");</span>
        <span className="absolute bottom-12 right-36">01001010 01010011</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1E8] border border-[#FF5A1F]/20 text-[#FF5A1F] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Flame className="w-4 h-4 text-[#FF5A1F] fill-current" />
              <span>{personalInfo.subGreeting}</span>
            </div>

            {/* Big Heading with Fire Orange Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.12] text-balance">
              <span className="block">I’m a Student.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF7A00] to-[#E04B14]">
                I’m a Developer.
              </span>
              <span className="block">I’m a Creator.</span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1 font-medium">
              <span>{personalInfo.location}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#FF5A1F] font-semibold">Yosh Dasturchi</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>3 ta Real Loyiha</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-600 font-medium">Faol o‘rganishda</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#about"
                className="px-6 py-3.5 text-sm font-bold text-[#FF5A1F] bg-white hover:bg-[#FFF1E8] border-2 border-[#FF5A1F] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Men haqimda</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto active:scale-95 cursor-pointer"
              >
                <span>Loyihalarim</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof & Quick Channels */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#FF5A1F] bg-white border border-slate-200 hover:border-orange-200 shadow-sm transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>GitHub Profil</span>
              </a>

              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#FF5A1F] hover:text-[#E04B14] bg-[#FFF1E8]/70 hover:bg-[#FFF1E8] border border-[#FF5A1F]/20 shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Telegram: {personalInfo.socials.telegramHandle}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#FF5A1F] bg-white border border-slate-200 hover:border-orange-200 shadow-sm transition-all cursor-pointer"
                title="Email nusxalash"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{copiedEmail ? "Nusxalandi! ✓" : "Email"}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: BIG HIGH-IMPACT PHOTO WITH SEAMLESS BOTTOM FADE */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* Background subtle radial ambient aura */}
            <div className="absolute inset-0 m-auto w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-[#FF5A1F]/15 via-[#FF7A00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* ENLARGED PHOTO CONTAINER */}
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] mx-auto lg:mr-0 flex flex-col items-center">
              
              {/* Outer photo wrapper */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] flex items-end justify-center overflow-hidden">
                
                {/* Photo with CSS mask gradient that gently fades out to the bottom */}
                <div 
                  className="w-full h-full relative"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 64%, rgba(0,0,0,0.55) 82%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 64%, rgba(0,0,0,0.55) 82%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  <img
                    src={personalInfo.avatarImage}
                    alt="Junior Student - Jaloliddin"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-bottom filter drop-shadow-lg select-none transform hover:scale-[1.015] transition-transform duration-500"
                  />
                </div>

                {/* Additional Seamless Bottom Gradient Scrim to dissolve the bottom edge completely into white */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #FFFFFF 25%, rgba(255, 255, 255, 0.92) 60%, rgba(255, 255, 255, 0) 100%)'
                  }}
                />

                {/* Soft edge corner vignettes */}
                <div 
                  className="absolute bottom-0 left-0 w-24 h-28 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at bottom left, #FFFFFF 50%, transparent 80%)'
                  }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-24 h-28 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at bottom right, #FFFFFF 50%, transparent 80%)'
                  }}
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
