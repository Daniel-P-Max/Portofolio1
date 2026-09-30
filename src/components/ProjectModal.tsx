import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Terminal, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/20 text-white p-6 sm:p-8 lg:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-white/50 tracking-wider">
              <span>PROJECT {project.number}</span>
              <span>/</span>
              <span className="text-[#55FB46] uppercase">{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-light tracking-wide uppercase mt-2">
              {project.title}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-1 font-light">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 -mr-2 text-white/60 hover:text-white transition-colors border border-transparent hover:border-white/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8">
          {/* Status & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="font-pixel text-xs text-white/40 uppercase block mb-1">
                BUILD STATUS
              </span>
              <div className="flex items-center gap-2 text-sm text-white font-mono">
                <span className="w-2 h-2 rounded-full bg-[#55FB46] animate-pulse" />
                <span>{project.stage}</span>
              </div>
            </div>

            <div className="md:col-span-2">
              <span className="font-pixel text-xs text-white/40 uppercase block mb-1">
                PROJECT OVERVIEW
              </span>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>

          {/* Interactive UI Mockup / Visual Simulation */}
          <div>
            <span className="font-pixel text-xs text-white/40 uppercase block mb-3">
              INTERFACE SPECIFICATION
            </span>
            <div className="bg-[#050505] border border-white/10 p-5 font-mono text-xs text-white/80 relative overflow-hidden">
              {/* Top window dots */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[10px] text-white/40 tracking-widest uppercase">
                  {project.id}.telemetry // v1.2
                </div>
              </div>

              {/* Custom preview body based on project type */}
              {project.previewType === 'app' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="border border-white/10 p-3 bg-white/[0.02]">
                      <div className="text-[10px] text-white/40">EST. NET WORTH</div>
                      <div className="text-base text-white font-medium mt-1">₦ 4,820,000</div>
                      <div className="text-[10px] text-[#55FB46] mt-0.5">▲ +12.4% vs last mo</div>
                    </div>
                    <div className="border border-white/10 p-3 bg-white/[0.02]">
                      <div className="text-[10px] text-white/40">30-DAY BURN RATE</div>
                      <div className="text-base text-white font-medium mt-1">₦ 184,500</div>
                      <div className="text-[10px] text-white/40 mt-0.5">On Target (88%)</div>
                    </div>
                    <div className="border border-white/10 p-3 bg-white/[0.02]">
                      <div className="text-[10px] text-white/40">ACTIVE SUBSCRIPTIONS</div>
                      <div className="text-base text-white font-medium mt-1">6 Services</div>
                      <div className="text-[10px] text-white/40 mt-0.5">Auto-renewal tracked</div>
                    </div>
                  </div>
                  <div className="border border-white/10 p-3 bg-white/[0.02] flex items-center justify-between">
                    <span className="text-white/60">AI Smart Categorization:</span>
                    <span className="text-[#55FB46]">ACTIVE // 99.2% Parser Precision</span>
                  </div>
                </div>
              )}

              {project.previewType === 'lms' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border border-white/10 p-3 bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#55FB46]">//</span>
                      <span>ACTIVE SESSION: 2025/2026 ACADEMIC CALENDAR</span>
                    </div>
                    <span className="text-white/40">TERM 2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-white/10 p-3 bg-white/[0.02]">
                      <div className="text-[10px] text-white/40">PORTAL MODULES</div>
                      <div className="mt-1 space-y-1 text-white/70">
                        <div>• Continuous Assessment Ledger</div>
                        <div>• Terminal Grade Sheet Generator</div>
                        <div>• Parent SMS & WhatsApp Gateway</div>
                      </div>
                    </div>
                    <div className="border border-white/10 p-3 bg-white/[0.02]">
                      <div className="text-[10px] text-white/40">SECURITY & AUTH</div>
                      <div className="mt-1 space-y-1 text-white/70">
                        <div>• Role Guards: Student / Parent / Admin</div>
                        <div>• JWT Session Expiry & HTTPOnly Cookies</div>
                        <div>• Sanitized MongoDB Aggregation Queries</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.previewType === 'media' && (
                <div className="space-y-3">
                  <div className="border border-white/10 p-3 bg-white/[0.02]">
                    <div className="text-[10px] text-[#55FB46] uppercase mb-1">
                      CONTENT REPRODUCTION PIPELINE
                    </div>
                    <p className="text-white/80 font-sans text-xs leading-relaxed">
                      1. Script Conception via Claude/Gemini with psychological hooks → 2. Leonardo AI seed generation for stylized dark cinematic artwork → 3. Synthesized high-fidelity voice track → 4. CapCut timeline auto-sync and subtitle cadence.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] text-center text-white/60">
                    <div className="border border-white/10 py-2">PROMPT CHAINS</div>
                    <div className="border border-white/10 py-2">VISUAL SYNTHESIS</div>
                    <div className="border border-white/10 py-2">PACING METRICS</div>
                  </div>
                </div>
              )}

              {project.previewType === 'experiment' && (
                <div className="space-y-3 font-mono">
                  <div className="border border-white/10 p-3 bg-white/[0.02] flex items-center justify-between">
                    <span className="text-white/60">Experimental Mode:</span>
                    <span className="text-[#55FB46]">ACTIVE // Zero-Pill Typography Engine</span>
                  </div>
                  <div className="text-xs text-white/70 leading-relaxed">
                    Benchmarking rendering performance, CSS variable token trees, and reactive canvas pipelines under strict 60 FPS viewport budgets.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <span className="font-pixel text-xs text-white/40 uppercase block mb-3">
              KEY CAPABILITIES & IMPLEMENTATION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 border border-white/10 bg-white/[0.02]"
                >
                  <CheckCircle2 size={15} className="text-[#55FB46] mt-0.5 shrink-0" />
                  <span className="text-xs text-white/80 font-light leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 border border-white/15 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#55FB46] uppercase tracking-wider mb-2">
                <Terminal size={14} />
                <span>BUILDER ARCHITECTURE NOTE</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Tech Stack List (Zero-Pill: Clean unboxed metadata) */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-white/60">
              <span className="text-white/30">STACK:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-white/80">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              CLOSE DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
