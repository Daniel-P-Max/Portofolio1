import { Project, ExperimentItem, StackCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'DANIEL P.',
  fullName: 'DANIEL PECULIAR',
  title: 'SOFTWARE ENGINEERING',
  secondaryTitle: 'AI • DIGITAL PRODUCTS • WEB',
  statusStatement: 'Software Engineering student building digital products with code, AI and curiosity.',
  whatIBuildStatement: 'I turn ideas into functional digital products, from concept and interface design to code, AI integration and deployment.',
  currentlyList: [
    'Web Applications',
    'AI-Assisted Products',
    'UI / UX',
    'Prompt Engineering',
    'AI Content Systems',
    'Digital Experiments'
  ],
  footerNote: 'Open to building, collaborating and learning.',
  email: 'dolajide705@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  instagramUrl: 'https://instagram.com'
};

export const CREDIBILITY_CHIPS = ['WEB', 'AI', 'REACT', 'PRODUCT'];

export const PROJECTS: Project[] = [
  {
    id: 'finsight',
    number: '01',
    title: 'FinSight',
    category: 'FINANCIAL PRODUCT',
    tagline: 'Personal finance & cash flow intelligence for everyday builders.',
    description: 'A focused expense tracking and cash flow application engineered to solve the friction of tracking personal liquidity, recurring subscriptions, and savings milestones without bloated banking UI.',
    stage: 'Active Development',
    year: '2025 – 2026',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Recharts'],
    highlights: [
      'Interactive cash flow & daily burn rate telemetry',
      'Net worth calculator factoring liquid vs illiquid assets',
      'Categorized expense entry with instant monthly summaries',
      'AI prompt template for receipt itemization and tax categorizations'
    ],
    architectureNotes: 'Built with a local-first offline architecture using client-side IndexedDB caching to ensure zero latency and full privacy, paired with modern responsive charts.',
    previewType: 'app'
  },
  {
    id: 'golden-schools',
    number: '02',
    title: 'Golden Schools LMS',
    category: 'ACADEMIC PLATFORM',
    tagline: 'School operations & student portal engineered for secondary education.',
    description: 'A modular learning management platform engineered to streamline attendance logs, grade reporting, and student-parent-teacher communication for secondary schools.',
    stage: 'Prototype & Architecture',
    year: '2025',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    highlights: [
      'Multi-role access flow for Administrators, Teachers, Students and Parents',
      'Continuous assessment ledger and automated terminal report sheet generator',
      'Parent notification channel for fee status and attendance alerts',
      'Clean tabular records management with real-time input validation'
    ],
    architectureNotes: 'Designed with Express REST endpoints and MongoDB documents modeling school terms, subjects, and student cohorts with strict role authorization guards.',
    previewType: 'lms'
  },
  {
    id: 'mindset-shift',
    number: '03',
    title: 'Mindset Shift',
    category: 'AI MEDIA & CONTENT SYSTEM',
    tagline: 'Generative AI content engine & digital media architecture.',
    description: 'An AI-assisted content brand and production system producing high-engagement visual essays, psychological frameworks, and motivational digital narratives.',
    stage: 'Active Content Engine',
    year: '2025 – Present',
    technologies: ['Prompt Engineering', 'Leonardo AI', 'HeyGen', 'CapCut', 'Automation'],
    highlights: [
      'Systematic prompt chains for consistent cinematic visual style generation',
      'Script pacing and AI voice synthesis workflow for narrative retention',
      'Cross-platform asset rendering and automated distribution calendar',
      'Organic audience growth framework driven by high-retention micro-content'
    ],
    architectureNotes: 'Combines multimodal generative pipelines: prompt engineering in Gemini/Claude, visual creation in Leonardo AI, and high-cadence editing in CapCut/HeyGen.',
    previewType: 'media'
  },
  {
    id: 'prompt-sandbox',
    number: '04',
    title: 'Flow & Component Lab',
    category: 'DIGITAL EXPERIMENTS',
    tagline: 'Micro-interactions, prompt chaining prototypes & interactive UI explorations.',
    description: 'A continuous laboratory of interactive frontend components, tactile design systems, and prompt engineering utilities developed while learning new design and engineering concepts.',
    stage: 'Experimental Build',
    year: '2026',
    technologies: ['React', 'TypeScript', 'Motion', 'Canvas API', 'Gemini SDK'],
    highlights: [
      'Prompt pipeline chaining for structured JSON output generation',
      'Full-viewport dark UI interactions with zero-pill typographic discipline',
      'Generative particle and geometry canvas experiments running at 60 FPS'
    ],
    architectureNotes: 'Serves as Daniel\'s sandbox for vetting bleeding-edge libraries, UI physics, and AI model reasoning before graduating into production products.',
    previewType: 'experiment'
  }
];

export const EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'ai-workflows',
    title: 'AI WORKFLOWS',
    subtitle: 'Assisted Engineering Pipelines',
    tag: 'SYSTEMS',
    description: 'Integrating LLMs directly into code scaffolding, API mocking, and test fixture generation to accelerate iteration cycles without sacrificing code comprehension.',
    tools: ['Claude 3.7', 'Gemini 2.5', 'Cursor / VS Code'],
    takeaways: 'AI works best as a tireless pair-programmer and architecture critic when given tight specifications and typed boundaries.'
  },
  {
    id: 'prompt-engineering',
    title: 'PROMPT ENGINEERING',
    subtitle: 'Deterministic Context Design',
    tag: 'LLM REASONING',
    description: 'Crafting modular system prompts with XML tagging, few-shot examples, and JSON Schema enforcement to yield deterministic, production-grade outputs.',
    tools: ['System Prompts', 'Structured Outputs', 'Context Windows'],
    takeaways: 'Treat prompts like compiled code: test edge cases, enforce schemas, and minimize ambiguity.'
  },
  {
    id: 'vibe-coding',
    title: 'VIBE CODING & RAPID BUILDS',
    subtitle: 'From Conceptual Spec to Working UI in Hours',
    tag: 'PRODUCT VELOCITY',
    description: 'Exploring human-in-the-loop rapid prototyping: articulating clear product requirements, reviewing diffs, and refining real web software at 10x traditional speed.',
    tools: ['Iterative Refinement', 'Full-Stack Scaffolding', 'Vite'],
    takeaways: 'Velocity without taste is noise. High-speed building requires even sharper design standards.'
  },
  {
    id: 'generative-visuals',
    title: 'GENERATIVE VISUALS',
    subtitle: 'Stylistic Cohesion at Scale',
    tag: 'DIFFUSION MODELS',
    description: 'Calibrating negative prompts, aspect ratios, lighting parameters, and seed consistency to produce distinctive brand assets rather than generic stock imagery.',
    tools: ['Leonardo AI', 'Midjourney', 'ComfyUI Concepts'],
    takeaways: 'Consistency requires deep understanding of artistic styles, camera optics, and latent space controls.'
  },
  {
    id: 'ai-video',
    title: 'AI VIDEO PIPELINES',
    subtitle: 'Automated Synthesis & Editing',
    tag: 'MULTIMODAL',
    description: 'Chaining text synthesis, automated audio voice generation, avatar synthesis, and timeline cuts to create high-retention social content systems.',
    tools: ['HeyGen', 'CapCut', 'ElevenLabs'],
    takeaways: 'The bottleneck in modern content is no longer production volume; it is story structure and emotional resonance.'
  },
  {
    id: 'web-experiences',
    title: 'TACTILE WEB EXPERIENCES',
    subtitle: 'Zero-Pill Minimalist Aesthetics',
    tag: 'FRONTEND ARCHITECTURE',
    description: 'Building web interfaces that rely on typography scale, negative space, and micro-motion rather than generic rounded cards and purple gradients.',
    tools: ['Tailwind CSS', 'Canvas API', 'Fluid Typography'],
    takeaways: 'Minimalism isn\'t empty space; it is the total elimination of everything that doesn\'t serve the thought.'
  }
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    title: 'FRONTEND',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'BACKEND / DATA',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication / JWT']
  },
  {
    title: 'AI / CREATIVE',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Google Flow', 'Leonardo AI', 'HeyGen', 'CapCut']
  },
  {
    title: 'WORKFLOW',
    items: ['VS Code', 'GitHub', 'Vercel', 'Figma']
  }
];

export const NAV_LINKS = [
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIMENTS', href: '#experiments', id: 'experiments' },
  { label: 'STACK', href: '#stack', id: 'stack' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
] as const;
