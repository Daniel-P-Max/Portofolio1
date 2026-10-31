import React from 'react';
import { ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectItemProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, onSelect }) => {
  const isImageRight = index % 2 === 1;

  return (
    <article
      className="group relative border-t border-white/15 py-12 sm:py-16 transition-colors duration-300 hover:border-white/30"
      aria-label={project.title}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Browser Mockup / Visual Preview */}
        <div
          className={`lg:col-span-7 ${
            isImageRight ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <ProjectPreviewMockup
            project={project}
            onOpenDetails={() => onSelect(project)}
          />
        </div>

        {/* Content Block */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isImageRight ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Project Number & Status */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="font-pixel text-xl sm:text-2xl text-white/50 group-hover:text-[#55FB46] transition-colors">
                {project.number}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.stage === 'Live Website' ? 'bg-[#55FB46]' : 'bg-amber-400'
                  }`}
                />
                <span className={project.stage === 'Live Website' ? 'text-[#55FB46]' : 'text-amber-400/90'}>
                  {project.stage}
                </span>
              </div>
            </div>

            {/* Category & Title */}
            <div className="font-mono text-xs uppercase tracking-wider text-white/50 mb-1">
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide uppercase text-white leading-tight">
              {project.title}
            </h3>

            {/* Tagline / Subtitle */}
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#55FB46]">
              {project.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Verified Features Summary */}
            <div className="mt-4 space-y-1.5">
              {project.verifiedFeatures.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-light">
                  <CheckCircle2 size={13} className="text-[#55FB46] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Zero-Pill Tech Stack Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-white/50">
              <span className="text-white/30 uppercase text-[10px]">STACK:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-white/70 hover:text-white transition-colors">
                    {tech}
                  </span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-white/30" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Website + Inspect Spec */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#55FB46] bg-[#55FB46]/10 text-white hover:bg-[#55FB46] hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
                aria-label={`Open Live Website for ${project.title}`}
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={13} />
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
              aria-label={`Inspect Spec for ${project.title}`}
            >
              <span>INSPECT SPEC</span>
              <div className="w-5 h-5 border border-white/20 group-hover/btn:border-white flex items-center justify-center transition-all">
                <ArrowUpRight
                  size={12}
                  className="text-white/70 group-hover/btn:text-[#55FB46] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
