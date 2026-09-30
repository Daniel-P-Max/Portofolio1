import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterStripProps {
  onStartConversation: () => void;
}

export const FooterStrip: React.FC<FooterStripProps> = ({ onStartConversation }) => {
  return (
    <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4 border-t border-white/10 select-none text-xs sm:text-sm">
      {/* Left: Open to collaborating & Start conversation */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white/70">
        <span>{PERSONAL_INFO.footerNote}</span>
        <button
          onClick={onStartConversation}
          className="inline-flex items-center gap-1 text-[#55FB46] font-medium hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
        >
          <span>Start a conversation</span>
          <ArrowUpRight size={12} className="inline-block" />
        </button>
      </div>

      {/* Right: Technical Areas */}
      <div className="text-white/50 text-xs sm:text-right font-mono tracking-wider">
        Software Engineering • AI • Web • Digital Products
      </div>
    </div>
  );
};
