import React from 'react';
import { ArrowUpRight, Terminal, Cpu, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-4">
          <span className="text-[#55FB46]">//</span>
          <span>PROFILE & PHILOSOPHY</span>
        </div>

        {/* Hero About Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide leading-tight">
              I AM BUILDING. <br />
              <span className="font-pixel text-[#55FB46] block text-[1.08em] mt-1">
                I AM LEARNING.
              </span>
              I SHIP THINGS.
            </h2>

            <div className="mt-8 space-y-6 text-white/80 font-light text-base sm:text-lg leading-relaxed">
              <p>
                I am a Software Engineering undergraduate with a drive to create digital products that feel fast, deliberate, and genuinely useful. Rather than waiting until graduation to build software, I develop real web applications, prototype AI-integrated workflows, and ship ideas from concept to deployment.
              </p>
              <p className="text-white/60 text-sm sm:text-base">
                My approach balances rigorous computer science fundamentals—data structures, system flow, component architecture, database schemas—with modern AI-augmented workflows. I use AI not to bypass thinking, but to elevate creative output and build at higher velocity.
              </p>
            </div>

            {/* Core ethos quote */}
            <div className="mt-10 border-l border-[#55FB46] pl-6 py-2 bg-white/[0.01]">
              <p className="font-mono text-xs sm:text-sm text-white/90 italic">
                "I'm not presenting myself as someone who has already reached the destination. I'm showing you what I'm building on the way there."
              </p>
              <span className="block mt-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                — {PERSONAL_INFO.fullName}
              </span>
            </div>
          </div>

          {/* Pillars / Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Pillar 1 */}
              <div className="p-5 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-2">
                  <Terminal size={18} className="text-[#55FB46]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">
                    TECHNICAL FOUNDATIONS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Building with React, TypeScript, Node.js, Express, and modern styling. Writing modular, type-safe components and clean semantic markup.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu size={18} className="text-[#55FB46]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">
                    AI WORKFLOW INTEGRATION
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Prompt engineering, structured generation, and agentic workflows. Exploring how generative AI elevates product iteration and creative velocity.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-2">
                  <Compass size={18} className="text-[#55FB46]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">
                    PRODUCT THINKING & UI/UX
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Focusing on user journey, visual restraint, zero-pill discipline, and full-viewport presence. Creating experiences with intentional negative space.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>STATUS: SOFTWARE ENGINEERING</span>
              <a
                href="#contact"
                className="text-white hover:text-[#55FB46] transition-colors flex items-center gap-1"
              >
                CONNECT WITH DANIEL
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
