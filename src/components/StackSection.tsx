import React from 'react';
import { STACK_CATEGORIES } from '../data/portfolioData';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-20 sm:py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-2">
              <span className="text-[#55FB46]">//</span>
              <span>TOOLING & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">
              TECHNICAL STACK
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-white/60 sm:text-right max-w-sm">
            Technologies, frameworks, and generative toolchains actively used in Daniel's projects and daily building workflows.
          </div>
        </div>

        {/* Editorial Stack Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STACK_CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col border-t border-white/15 pt-6">
              <span className="font-pixel text-xs sm:text-sm text-[#55FB46] uppercase tracking-wider block mb-4">
                {category.title}
              </span>
              <ul className="space-y-2.5 font-light text-base sm:text-lg">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-white/80 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{item}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] text-[#55FB46]">
                      [READY]
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Builder Note */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>
            PRINCIPLE: STRONG COMPUTER SCIENCE FUNDAMENTALS AMPLIFIED BY AI WORKFLOWS.
          </div>
          <div className="text-white/50">
            NO BLOAT. NO UNNECESSARY DEPENDENCIES.
          </div>
        </div>
      </div>
    </section>
  );
};
