import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer border-t border-white/15 py-8 sm:py-12 transition-colors duration-300 hover:border-white/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Project Number & Status */}
        <div className="lg:col-span-2 flex flex-col justify-between h-full">
          <div className="font-pixel text-xl sm:text-2xl text-white/50 group-hover:text-[#55FB46] transition-colors">
            {project.number}
          </div>
          <div className="mt-2 lg:mt-6 font-mono text-[11px] uppercase tracking-widest text-white/40">
            {project.year}
          </div>
        </div>

        {/* Project Title & Short Description */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-white/50 mb-1">
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide uppercase text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          {/* Zero-Pill Tech Stack Metadata */}
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-white/50">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-white/60 group-hover:text-white/80 transition-colors">
                  {tech}
                </span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-white/30" aria-hidden="true">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Status Indicator & Action Arrow */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end h-full gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55FB46]" />
            <span>{project.stage}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
            <span>INSPECT SPEC</span>
            <div className="w-9 h-9 border border-white/20 group-hover:border-white group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight
                size={16}
                className="text-white/70 group-hover:text-[#55FB46] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
