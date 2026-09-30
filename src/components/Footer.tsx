import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/10 select-none bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={22} />
          <div className="text-xs font-mono text-white/50">
            DANIEL PECULIAR // 2026
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55FB46]" />
            <span>BUILDING ACTIVE PROJECTS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
