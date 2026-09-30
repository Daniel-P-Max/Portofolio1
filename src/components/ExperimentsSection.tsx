import React, { useState } from 'react';
import { EXPERIMENTS } from '../data/portfolioData';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';

export const ExperimentsSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIMENTS[0].id);

  const activeExp = EXPERIMENTS.find((e) => e.id === activeExpId) || EXPERIMENTS[0];

  return (
    <section id="experiments" className="py-20 sm:py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-2">
              <span className="text-[#55FB46]">//</span>
              <span>EXPERIMENTAL LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">
              EXPLORATIONS & PROTOTYPES
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-white/60 sm:text-right max-w-sm">
            Active investigations at the intersection of software architecture, generative AI, tactile interfaces, and rapid building.
          </div>
        </div>

        {/* Interactive Experiment Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Experiment Selectors */}
          <div className="lg:col-span-6 space-y-2">
            {EXPERIMENTS.map((exp, index) => {
              const isSelected = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46] ${
                    isSelected
                      ? 'border-[#55FB46] bg-white/[0.04]'
                      : 'border-white/10 hover:border-white/30 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-pixel text-xs text-white/40">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="text-sm sm:text-base tracking-wider uppercase font-medium text-white group-hover:text-white">
                        {exp.title}
                      </div>
                      <div className="text-xs font-mono text-white/50 mt-0.5">
                        {exp.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase text-white/40">
                      {exp.tag}
                    </span>
                    <ArrowRight
                      size={14}
                      className={`transition-transform duration-200 ${
                        isSelected
                          ? 'text-[#55FB46] translate-x-1'
                          : 'text-white/20 group-hover:text-white/60'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Experiment Inspector Panel */}
          <div className="lg:col-span-6 border border-white/20 p-6 sm:p-8 bg-[#070707] relative sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#55FB46] tracking-wider uppercase">
                <Sparkles size={14} />
                <span>EXP_SPEC // {activeExp.tag}</span>
              </div>
              <span className="font-pixel text-xs text-white/40">LABORATORY LOG</span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-light uppercase tracking-wide text-white">
                  {activeExp.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-white/50 mt-1">
                  {activeExp.subtitle}
                </p>
              </div>

              <div>
                <div className="font-pixel text-xs text-white/40 uppercase mb-2">
                  INVESTIGATION CONTEXT
                </div>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {activeExp.description}
                </p>
              </div>

              <div>
                <div className="font-pixel text-xs text-white/40 uppercase mb-2">
                  EXPLORATION TOOLCHAIN
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {activeExp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#0e0e0e] border border-white/10 px-3 py-1.5 text-xs font-mono text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#55FB46] uppercase tracking-wider mb-1">
                  <Terminal size={14} />
                  <span>KEY BUILDER TAKEAWAY</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-mono leading-relaxed">
                  {activeExp.takeaways}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
