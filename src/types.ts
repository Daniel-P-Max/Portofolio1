export interface Project {
  id: string;
  number: string;
  title: string;
  cardTitle: string;
  category: string;
  tagline: string;
  description: string;
  stage: 'Live Website' | 'Hospitality Website Concept' | 'Active Development' | 'Experimental Build';
  year: string;
  technologies: string[];
  verifiedFeatures: string[];
  reservationFields?: string[];
  liveUrl?: string;
  isConcept?: boolean;
  businessObjective?: string;
  designDirection?: string;
  responsiveConsiderations?: string;
  previewTheme: 'restaurant' | 'nightlife' | 'salon' | 'general';
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
