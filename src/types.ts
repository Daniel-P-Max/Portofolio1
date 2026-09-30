export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stage: 'Active Development' | 'Prototype & Architecture' | 'Active Content Engine' | 'Experimental Build';
  year: string;
  technologies: string[];
  highlights: string[];
  architectureNotes?: string;
  previewType: 'app' | 'lms' | 'media' | 'experiment';
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface ExperimentItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  tools: string[];
  takeaways: string;
}

export interface StackCategory {
  title: string;
  items: string[];
}

export type SectionId = 'overview' | 'work' | 'about' | 'experiments' | 'stack' | 'contact';
