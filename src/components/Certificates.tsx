import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Eye, 
  X,
  FileCheck
} from 'lucide-react';
import { certificatesData, CertificateItem } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-white border-t border-slate-100">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#FF5A1F] mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span>Malaka & Rasmiy Hujjatlar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
            Sertifikatlarim
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Dasturlash, web texnologiyalar va amaliy kurslar bo‘yicha qo‘lga kiritilgan tasdiqlangan sertifikatlar va rasmiy yutuqlar.
          </p>
        </div>

        {/* CERTIFICATES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-2xl border border-slate-200/90 bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF5A1F] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer shadow-xs"
              >
                
                {/* Certificate Image Preview Area */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  {cert.previewImage ? (
                    <img
                      src={cert.previewImage}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-orange-50 to-slate-50 text-slate-400">
                      <Award className="w-16 h-16 text-orange-200" />
                    </div>
                  )}

                  {/* Gradient Scrim for readable badges on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#FF5A1F] text-[11px] font-bold shadow-sm">
                    <Award className="w-3 h-3 text-[#FF5A1F]" />
                    <span>{cert.category}</span>
                  </div>

                  {/* Quick View Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Kattalashtirib ko‘rish</span>
                  </div>

                  {/* Issuer pill on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold drop-shadow">{cert.issuer}</span>
                  </div>

                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="font-mono text-slate-400">ID: {cert.credentialId}</span>
                      <span className="text-[#FF5A1F] font-bold text-[11px] bg-[#FFF1E8] px-2.5 py-0.5 rounded-full">
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#151515] group-hover:text-[#FF5A1F] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Covered Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200/80 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#FF5A1F]">
                    <span className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cert.status}
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Rasmni ko‘rish →
                    </span>
                  </div>

                </div>

              </div>
          ))}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Barcha sertifikatlar haqiqiy va tasdiqlangan</h4>
              <p className="text-xs text-slate-500">O‘quv kurslari va mustaqil amaliyot davomida egallangan bilimlar asosida olingan.</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#FF5A1F] bg-[#FFF1E8] px-3.5 py-1.5 rounded-xl border border-orange-200 shrink-0">
            {certificatesData.length} ta Sertifikat
          </span>
        </div>

        {/* ============================================================== */}
        {/* CERTIFICATE DETAIL MODAL */}
        {/* ============================================================== */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white border border-slate-200 max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1E8] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-[#FF5A1F]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FF5A1F]">{selectedCert.category}</span>
                    <h4 className="text-lg font-bold text-[#151515] leading-snug">{selectedCert.title}</h4>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-[#151515] hover:bg-slate-100 text-sm cursor-pointer"
                  aria-label="Yopish"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image in Modal */}
              <div className="my-4 rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-900">
                <img
                  src={selectedCert.previewImage}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3 py-2 text-xs sm:text-sm text-slate-700">
                <p className="leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="bg-[#FFF1E8]/50 rounded-xl p-4 border border-[#FF5A1F]/20 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Berilgan tashkilot:</span>
                    <span className="font-semibold text-slate-900">{selectedCert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sertifikat raqami:</span>
                    <span className="font-mono font-bold text-[#FF5A1F]">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Holati:</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {selectedCert.status}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="block text-xs font-bold text-slate-800 mb-2">Qamrab olingan ko‘nikmalar:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skillsCovered.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl transition-colors cursor-pointer"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
