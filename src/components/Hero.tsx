import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CREDIBILITY_CHIPS } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onContactClick
}) => {
  return (
    <div className="flex-1 flex flex-col justify-end pb-4 pt-6 sm:pt-10">
      {/* ROW A */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end">
        {/* LEFT COLUMN: HERO HEADLINE */}
        <div className="select-none">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal text-white"
            style={{ lineHeight: 0.72 }}
          >
            <span className="block">I BUILD THE</span>
            <span className="block my-1.5 sm:my-2">
              <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline text-white">
                UNEXPECTED
              </span>
            </span>
            <span className="block">IN DIGITAL</span>
            <span className="block mt-1.5 sm:mt-2">
              <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline text-white">
                EXPERIENCES
              </span>
            </span>
          </h1>
        </div>

        {/* RIGHT COLUMN: CTAS & CREDIBILITY STRIP */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-end lg:pl-6 xl:pl-10">
          {/* Actions: Primary CTA + Secondary CTA */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary CTA */}
            <button
              onClick={onViewProjects}
              className="group flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/60 transition-all text-xs sm:text-sm tracking-wider uppercase font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
              aria-label="View Projects"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/80 group-hover:text-[#55FB46]"
              />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 py-3 px-2 text-xs sm:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
              aria-label="Let's Build - Contact Daniel"
            >
              <span className="font-mono text-white/40 group-hover:text-[#55FB46] transition-colors">//</span>
              <span>LET'S BUILD</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 text-[#55FB46]"
              />
            </button>
          </div>

          {/* Credibility Strip: dark chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {CREDIBILITY_CHIPS.map((chip) => (
              <div
                key={chip}
                className="bg-[#0B0B0B] border border-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono tracking-widest text-white/70 select-none hover:text-white hover:border-white/20 transition-colors"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
