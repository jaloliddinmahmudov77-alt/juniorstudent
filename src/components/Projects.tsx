import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Check, 
  Info, 
  ArrowUpRight,
  Maximize2,
  FolderGit2
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="projects" className="py-24 relative bg-[#FAFAFA] border-t border-slate-100">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-[#FF5A1F]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF7A00]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#FF5A1F] mb-3">
              <span className="w-6 h-0.5 bg-[#FF5A1F]" />
              <span>Real Portfolio Natijalari</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
              Loyihalarim
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Mening amaliy tajribam, real foydalanuvchilar va maktab hamjamiyati uchun ishlab chiqilgan 3 ta muhim veb-loyiham.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span>3 ta loyiha Vercel’da 100% onlayn</span>
          </div>
        </div>

        {/* 3 REAL PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-slate-200/90 bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F] hover:shadow-2xl hover:shadow-orange-500/20"
              >
                {/* Subtle gradient glow header border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5A1F] via-[#FF7A00] to-[#E04B14] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* PREVIEW CONTAINER */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} Preview Mockup`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                    {/* Project Number badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 text-xs font-mono font-extrabold text-[#FF5A1F] bg-white/95 backdrop-blur-md border border-orange-100 rounded-lg shadow-sm">
                        PROJECT {project.number}
                      </span>
                    </div>

                    {/* Quick Expand Detail Button */}
                    <button
                      onClick={() => onOpenProjectModal(project)}
                      className="absolute top-3.5 right-3.5 z-10 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-[#FF5A1F] backdrop-blur-md border border-slate-200 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm"
                      title="Batafsil ko'rish"
                      aria-label="Loyihani batafsil ko'rish"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Category overlay */}
                    <div className="absolute bottom-3 left-3.5 z-10">
                      <span className="text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT BODY */}
                  <div className="p-6">
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#FF5A1F] transition-colors tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                      <span className="text-xs font-mono font-bold text-[#FF5A1F]">
                        {project.number}
                      </span>
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed min-h-[44px]">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Highlights list */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                      {project.featuredPoints.slice(0, 2).map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF5A1F] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* CARD FOOTER BUTTONS */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2.5">
                  
                  {/* Primary "Loyihani ko‘rish" Live Demo Button (Fire Orange) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 group-hover:shadow-orange-500/40 active:scale-95"
                  >
                    <span>Loyihani ko‘rish</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Secondary info / modal button */}
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#FFF1E8] text-slate-700 hover:text-[#FF5A1F] border border-slate-200 hover:border-orange-200 transition-colors cursor-pointer"
                    title="Loyiha haqida to'liq ma'lumot"
                    aria-label="Loyiha ma'lumotlari"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* GitHub button if exists */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#151515] border border-slate-200 transition-colors"
                      title="GitHub kodini ko'rish"
                      aria-label="GitHub Kodi"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Code Sync Notice / Customization Box */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1E8] border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F] shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#151515]">
                Barcha loyihalar va kodlar GitHub’da
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Loyihalar kodlari va yangilanishlarini GitHub profilimda kuzatib borishingiz mumkin.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/jaloliddinmahmudov77-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-[#FF5A1F] bg-[#FFF1E8] hover:bg-orange-100 border border-[#FF5A1F]/30 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            <Github className="w-4 h-4 text-[#FF5A1F]" />
            <span>GitHub Repozitoriyalarni ko‘rish</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A1F]" />
          </a>
        </div>

      </div>
    </section>
  );
};
