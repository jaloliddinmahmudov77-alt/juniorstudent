import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Terminal, 
  GitBranch, 
  Cpu, 
  Layout, 
  PenTool,
  CheckCircle2
} from 'lucide-react';
import { skillsData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'code' | 'design' | 'tools'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FF5A1F]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#FF5A1F]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#FF7A00]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#FF5A1F]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#E04B14]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#FF5A1F]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#FF7A00]" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#FF5A1F]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#FF5A1F]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-white border-t border-slate-100">
      
      {/* Light orange background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#FF5A1F] mb-3">
              <span className="w-6 h-0.5 bg-[#FF5A1F]" />
              <span>Texnologik poydevor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
              Ko‘nikmalarim
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Dasturlash, dizayn, versiyalar nazorati va sun'iy intellekt yo‘nalishlaridagi bilimlarim.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-2xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-600 hover:text-[#151515] hover:bg-white'
              }`}
            >
              Barchasi ({skillsData.length})
            </button>
            <button
              onClick={() => setFilter('code')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'code'
                  ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-600 hover:text-[#151515] hover:bg-white'
              }`}
            >
              Dasturlash (Code)
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'design'
                  ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-600 hover:text-[#151515] hover:bg-white'
              }`}
            >
              Dizayn (UI/UX)
            </button>
            <button
              onClick={() => setFilter('tools')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                filter === 'tools'
                  ? 'bg-[#FF5A1F] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-600 hover:text-[#151515] hover:bg-white'
              }`}
            >
              Vositalar & AI
            </button>
          </div>
        </div>

        {/* SKILLS GRID - Exactly 8 interactive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F] hover:shadow-xl hover:shadow-orange-500/15 cursor-pointer flex flex-col justify-between"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF5A1F]/5 rounded-full blur-xl group-hover:bg-[#FF5A1F]/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1E8] border border-orange-100 group-hover:border-[#FF5A1F]/40 flex items-center justify-center transition-colors">
                      {getIcon(skill.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#FF5A1F] bg-[#FFF1E8] px-2 py-0.5 rounded border border-[#FF5A1F]/20">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-[#151515] group-hover:text-[#FF5A1F] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Footer details & progress */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5">
                    <span className="text-slate-500">{skill.highlight}</span>
                    <span className="text-[#FF5A1F] font-mono tabular-nums">{skill.proficiency}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#FF8A00] rounded-full transition-all duration-700 group-hover:brightness-110"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-white border border-slate-200 max-w-md w-full rounded-2xl p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1E8] flex items-center justify-center">
                    {getIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#151515]">{selectedSkill.name}</h4>
                    <p className="text-xs text-[#FF5A1F] font-mono font-semibold">{selectedSkill.badge}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-[#151515] hover:bg-slate-100 text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="bg-[#FFF1E8]/50 rounded-xl p-3 border border-[#FF5A1F]/20 space-y-2 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Asosiy yo‘nalish:</span>
                  <span className="font-semibold text-[#151515]">{selectedSkill.highlight}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>O‘zlashtirish darajasi:</span>
                  <span className="font-mono font-bold text-[#FF5A1F]">{selectedSkill.proficiency}%</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Real loyihalarda qo‘llanilishi:</span>
                  <span className="text-[#FF5A1F] font-medium">16-Maktab, Aziz Ustozim, Portfolio</span>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xl transition-colors cursor-pointer"
                >
                  Tushundim
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
