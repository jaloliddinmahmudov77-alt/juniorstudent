import React from 'react';
import { X, ExternalLink, Github, Check, Code } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#FF5A1F] bg-[#FFF1E8] px-2 py-0.5 rounded border border-[#FF5A1F]/20">
              PROJECT {project.number}
            </span>
            <h3 className="text-lg font-bold text-[#151515] tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#151515] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Image Showcase */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/9] relative group">
            <img
              src={project.previewImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#FF5A1F] px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">Loyiha haqida</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2.5">Ishlatilgan Texnologiyalar</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold text-slate-800 bg-[#FFF1E8]/70 border border-[#FF5A1F]/20 rounded-lg flex items-center gap-1.5"
                >
                  <Code className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2.5">Asosiy xususiyatlar</h4>
            <div className="space-y-2">
              {project.featuredPoints.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <Check className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Jonli havola: <span className="text-[#FF5A1F] font-mono font-semibold">{project.link}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#151515] bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-bold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/25"
            >
              <span>Saytni ochish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
