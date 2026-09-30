import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-2">
              <span className="text-[#55FB46]">//</span>
              <span>SELECTED BUILDS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">
              FEATURED WORK
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-white/60 sm:text-right max-w-xs">
            Practical software, AI-assisted products, and experimental pipelines developed through genuine hands-on building.
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Pipeline Footer Note */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>
            MORE BUILDS CURRENTLY IN ACTIVE REPOSITORIES
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55FB46]" />
            <span>CONTINUOUSLY SHIPPED & REFACTORED</span>
          </div>
        </div>
      </div>

      {/* Deep-Dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
