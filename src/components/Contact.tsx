import React, { useState } from 'react';
import { 
  Send, 
  Github, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FAFAFA] border-t border-slate-100">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-[#FF5A1F]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#FF5A1F] mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span>Muloqot & Hamkorlik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
            Men bilan bog‘laning
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Yangi loyiha, hamkorlik yoki shunchaki suhbatlashishni istasangiz, men bilan bog‘lanishingiz mumkin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: DIRECT CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xl shadow-orange-500/5">
              <div>
                <h3 className="text-xl font-bold text-[#151515] tracking-tight">
                  Keling, birga yangilik yaratamiz!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Men yangi takliflar, web loyihalar va qiziqarli startap g‘oyalarni muhokama qilishdan doim mamnunman.
                </p>
              </div>

              {/* 3 Action Buttons */}
              <div className="space-y-3 pt-2">
                
                {/* Telegram */}
                <a
                  href={personalInfo.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#FF5A1F] hover:bg-[#FFF1E8]/40 transition-all duration-200 group shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF1E8] flex items-center justify-center text-[#FF5A1F] group-hover:scale-110 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#151515]">Telegram orqali yozish</div>
                      <div className="text-[11px] text-[#FF5A1F] font-mono font-semibold">{personalInfo.socials.telegramHandle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF5A1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 group shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#151515]">GitHub Profil</div>
                      <div className="text-[11px] text-slate-500 font-mono">github.com/jaloliddinmahmudov77-alt</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#151515] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email with direct click or copy */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#FF5A1F] hover:bg-[#FFF1E8]/40 transition-all duration-200 group shadow-xs">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FFF1E8] flex items-center justify-center text-[#FF5A1F] group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#151515]">Email manzil</div>
                      <div className="text-[11px] text-slate-600 font-mono truncate">
                        {personalInfo.socials.email}
                      </div>
                    </div>
                  </a>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-[#FFF1E8] text-slate-500 hover:text-[#FF5A1F] border border-slate-200 hover:border-orange-200 transition-colors ml-2 cursor-pointer shrink-0"
                    title="Email nusxalash"
                    aria-label="Email nusxalash"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Status info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Odatda 24 soat ichida javob qaytaraman.</span>
              </div>

            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-orange-500/5">
              
              <h3 className="text-xl font-bold text-[#151515] tracking-tight mb-2">
                Xabar yuborish
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Quyidagi formani to‘ldirib, to‘g‘ridan-to‘g‘ri xabar yuborishingiz mumkin.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">Rahmat! Xabaringiz qabul qilindi.</span>
                    <span className="text-emerald-700">Tez orada siz bilan bog‘lanaman.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ismingiz <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ismingizni kiriting"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-orange-100 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email manzilingiz <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@misol.uz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-orange-100 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mavzu (ixtiyoriy)
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: Web loyiha yaratish yoki taklif"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-orange-100 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Xabaringiz <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="O‘z fikr yoki taklifingizni yozing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-orange-100 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button (Fire Orange) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-95 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Yuborilmoqda...</span>
                    ) : (
                      <>
                        <span>Xabarni yuborish</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
