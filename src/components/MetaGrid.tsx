import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MetaGrid: React.FC = () => {
  return (
    <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 select-none">
      {/* COLUMN 1: DANIEL PECULIAR + BRAND STATEMENT */}
      <div className="flex flex-col">
        <div className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide uppercase leading-none">
          <span className="font-sans block">DANIEL</span>
          <span className="font-pixel block text-[1.18em] leading-none mt-1 text-white">
            PECULIAR
          </span>
        </div>
        <div className="mt-2 text-white/40 text-xs select-none">*</div>
        <p className="font-pixel text-xs sm:text-sm text-white/70 leading-snug mt-1 max-w-[210px]">
          {PERSONAL_INFO.statusStatement}
        </p>
      </div>

      {/* COLUMN 2: SOFTWARE ENGINEERING */}
      <div className="flex flex-col">
        <div className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide uppercase leading-none">
          <span className="font-sans block">SOFTWARE</span>
          <span className="font-pixel block text-[1.18em] leading-none mt-1 text-white">
            ENGINEERING
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#55FB46] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">
            ACTIVE LEARNER / BUILDER
          </span>
        </div>
      </div>

      {/* COLUMN 3: WHAT I BUILD */}
      <div className="flex flex-col">
        <span className="font-pixel text-xs sm:text-sm text-white/60 tracking-wider uppercase block mb-1">
          WHAT I BUILD
        </span>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-[230px]">
          {PERSONAL_INFO.whatIBuildStatement}
        </p>
      </div>

      {/* COLUMN 4: CURRENTLY */}
      <div className="flex flex-col">
        <span className="font-pixel text-xs sm:text-sm text-white/60 tracking-wider uppercase block mb-1">
          CURRENTLY
        </span>
        <ul className="text-xs sm:text-sm text-white/90 space-y-0.5 font-light">
          {PERSONAL_INFO.currentlyList.map((item) => (
            <li key={item} className="leading-snug text-white/80 hover:text-white transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
