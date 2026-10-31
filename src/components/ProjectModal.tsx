import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Target, Palette, Smartphone, Clock, Terminal } from 'lucide-react';
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
                <span
                  className={`w-2 h-2 rounded-full ${
                    project.stage === 'Live Website' ? 'bg-[#55FB46]' : 'bg-amber-400'
                  }`}
                />
                <span>{project.stage}</span>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#55FB46] hover:underline"
                >
                  <span>Open Live Website</span>
                  <ExternalLink size={12} />
                </a>
              )}
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

          {/* Business Objective & Design Direction */}
          {(project.businessObjective || project.designDirection) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-white/10">
              {project.businessObjective && (
                <div className="p-4 border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#55FB46] uppercase tracking-wider mb-2">
                    <Target size={14} />
                    <span>BUSINESS & PRODUCT OBJECTIVE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    {project.businessObjective}
                  </p>
                </div>
              )}

              {project.designDirection && (
                <div className="p-4 border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#55FB46] uppercase tracking-wider mb-2">
                    <Palette size={14} />
                    <span>DESIGN DIRECTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    {project.designDirection}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Verified Features */}
          <div>
            <span className="font-pixel text-xs text-white/40 uppercase block mb-3">
              KEY CAPABILITIES & IMPLEMENTATION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.verifiedFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 border border-white/10 bg-white/[0.02]"
                >
                  <CheckCircle2 size={15} className="text-[#55FB46] mt-0.5 shrink-0" />
                  <span className="text-xs text-white/80 font-light leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reservation fields if applicable */}
          {project.reservationFields && project.reservationFields.length > 0 && (
            <div className="p-4 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#55FB46] uppercase tracking-wider mb-2">
                <Clock size={14} />
                <span>INTEGRATED RESERVATION SPECIFICATIONS</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.reservationFields.map((field) => (
                  <span
                    key={field}
                    className="border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-mono text-white/80"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Responsive Design Considerations */}
          {project.responsiveConsiderations && (
            <div className="p-4 border border-white/15 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#55FB46] uppercase tracking-wider mb-2">
                <Smartphone size={14} />
                <span>RESPONSIVE DESIGN CONSIDERATIONS</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                {project.responsiveConsiderations}
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

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border border-[#55FB46] bg-[#55FB46]/10 text-white hover:bg-[#55FB46] hover:text-black text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={12} />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors"
              >
                CLOSE SPEC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
