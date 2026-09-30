import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-6">
          <span className="text-[#55FB46]">//</span>
          <span>INITIATE CONTACT</span>
        </div>

        {/* Large Statement */}
        <div className="pb-12 border-b border-white/10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight leading-tight select-none">
            <span className="block text-white">HAVE AN IDEA?</span>
            <span className="block mt-2 font-pixel text-[#55FB46] text-[1.12em] leading-none">
              LET'S BUILD IT.
            </span>
          </h2>
          <p className="mt-6 text-white/70 font-light text-base sm:text-lg max-w-xl">
            Whether you want to discuss a new software concept, collaborate on an experimental product, or talk about engineering and AI pipelines, my inbox is always open.
          </p>
        </div>

        {/* Direct Email Action & Social Links Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Email Direct Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 border border-white/20 bg-white/[0.02]">
            <div>
              <span className="font-pixel text-xs text-white/40 uppercase block mb-2">
                PRIMARY EMAIL
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xl sm:text-2xl lg:text-3xl font-mono text-white hover:text-[#55FB46] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs sm:text-sm text-white/60 mt-3 font-light">
                Direct inquiry line for project collaborations, software opportunities, and technical discourse.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20//%20Daniel%20P.&body=Hi%20Daniel,%0A%0AI'd%20love%20to%20connect%20regarding...`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#55FB46] bg-[#55FB46]/10 text-white hover:bg-[#55FB46] hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
              >
                <Mail size={14} />
                <span>COMPOSE EMAIL</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#55FB46]" />
                    <span className="text-[#55FB46]">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-white/60" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="lg:col-span-5 flex flex-col border border-white/10 p-6 sm:p-8 bg-[#070707] space-y-4">
            <span className="font-pixel text-xs text-white/40 uppercase block mb-1">
              DIGITAL PROFILES & CHANNELS
            </span>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-white/10 group text-white/80 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Github size={16} className="text-white/60 group-hover:text-white" />
                <span className="font-mono text-xs uppercase tracking-wider">GITHUB</span>
              </div>
              <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#55FB46] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-white/10 group text-white/80 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={16} className="text-white/60 group-hover:text-white" />
                <span className="font-mono text-xs uppercase tracking-wider">LINKEDIN</span>
              </div>
              <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#55FB46] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-white/10 group text-white/80 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Instagram size={16} className="text-white/60 group-hover:text-white" />
                <span className="font-mono text-xs uppercase tracking-wider">INSTAGRAM</span>
              </div>
              <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#55FB46] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="pt-3 text-[11px] font-mono text-white/40">
              LOCATION: NIGERIA / OPEN TO REMOTE & GLOBAL COLLABORATIONS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
