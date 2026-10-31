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
  instagramUrl: 'https://instagram.com',
  whatsappUrl: 'https://wa.me/2348000000000?text=Hi%20Daniel,%20I%20would%20like%20to%20connect%20regarding%20a%20project.'
};

export const CREDIBILITY_CHIPS = ['WEB', 'AI', 'REACT', 'PRODUCT'];

export const NAV_LINKS = [
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIMENTS', href: '#experiments', id: 'experiments' },
  { label: 'STACK', href: '#stack', id: 'stack' },
  { label: 'CONTACT', href: '#contact', id: 'contact' }
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'ikoko-restaurant',
    number: '01',
    title: 'IKÖKÖ Restaurant',
    cardTitle: 'IKÖKÖ — Restaurant Experience',
    category: 'Restaurant / Hospitality',
    tagline: 'Contemporary dining experience, menu presentation and reservation flow.',
    description:
      'A restaurant website concept developed for IKÖKÖ, featuring a professional restaurant presentation, menu exploration and reservation experience.',
    stage: 'Live Website',
    year: '2025',
    liveUrl: 'https://ikoko-chi.vercel.app/',
    isConcept: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Forms', 'Responsive UI'],
    verifiedFeatures: [
      'Restaurant landing page',
      'Brand introduction & story',
      'Menu presentation & categories',
      'Reservation form with validation',
      'Customer information collection',
      'WhatsApp reservation submission',
      'Location and contact information'
    ],
    reservationFields: [
      'Full name',
      'Phone number',
      'Optional email',
      'Date',
      'Time',
      'Number of guests',
      'Occasion',
      'Special requests'
    ],
    businessObjective:
      'Demonstrates the ability to develop a complete website experience for a restaurant business with friction-free reservations.',
    designDirection:
      'Deep warm culinary dark palette with refined typography, atmospheric dish presentations, and clean menu category filtering.',
    responsiveConsiderations:
      'Mobile-first reservation sheets, large tactile touch targets for phone users, and zero layout shift on portable viewports.',
    previewTheme: 'restaurant'
  },
  {
    id: 'vault-club-ikeja',
    number: '02',
    title: 'Vault Club GRA Ikeja',
    cardTitle: 'Vault Club — Premium Nightlife',
    category: 'Premium Hospitality / Restaurant / Nightlife',
    tagline: 'High-end nightlife, lounge atmosphere, and VIP booking interface.',
    description:
      'A premium restaurant, lounge, and nightlife website concept for Vault Club GRA Ikeja. The experience is designed to reflect an upscale atmosphere while helping customers explore services, discover the venue, and make reservations.',
    stage: 'Hospitality Website Concept',
    year: '2025',
    liveUrl: undefined, // Concept prototype; no unverified live link
    isConcept: true,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    verifiedFeatures: [
      'Services section',
      'Reviews section',
      'Location section (GRA Ikeja)',
      'Reservations',
      'Interactive booking-related experiences'
    ],
    reservationFields: [
      'Guest name',
      'Contact phone',
      'VIP Booth tier (Onyx / Gold)',
      'Bottle service preferences',
      'Arrival time'
    ],
    businessObjective:
      'Establish a distinctive luxury nightlife presence for an upscale Ikeja destination, encouraging VIP table bookings and bottle service inquiries.',
    designDirection:
      'High-contrast luxury nightlife aesthetics, deep obsidian surfaces, refined gold metallic accents, and bold editorial typography.',
    responsiveConsiderations:
      'Fast-loading visual sections, collapsible VIP packages, and single-tap maps/directions integration for evening patrons.',
    previewTheme: 'nightlife'
  },
  {
    id: 'tej-salon',
    number: '03',
    title: 'Tej Salon Ikeja Sanctuary',
    cardTitle: 'Tej Salon — Beauty & Style',
    category: 'Beauty / Salon',
    tagline: 'Sanctuary atmosphere, service showcase and customer contact flow.',
    description:
      'A salon website concept developed to give Tej Salon a professional digital presence, present its business information and communicate its services to potential customers.',
    stage: 'Live Website',
    year: '2025',
    liveUrl: 'https://tej-salon-ikeja-sanctuary.vercel.app/',
    isConcept: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Service Showcase', 'Booking CTA Flow'],
    verifiedFeatures: [
      'Visual identity & sanctuary atmosphere',
      'Homepage presentation',
      'Service information catalog',
      'Business & sanctuary information',
      'Responsive mobile navigation',
      'Contact options & appointment flow'
    ],
    businessObjective:
      'Showcase Tej Salon’s sanctuary atmosphere and beauty offerings, making it effortless for prospective clients to browse treatments and connect.',
    designDirection:
      'Minimalist, clean aesthetic with warm neutral undertones, delicate editorial typography, and high-clarity service categories.',
    responsiveConsiderations:
      'Thumb-accessible booking buttons on smartphones, streamlined service lists with clear pricing indicators, and fast performance.',
    previewTheme: 'salon'
  }
];

export const EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'ai-workflows',
    title: 'AI WORKFLOWS',
    subtitle: 'Assisted Engineering Pipelines',
    tag: 'SYSTEMS',
    description:
      'Integrating LLMs directly into code scaffolding, API mocking, and test fixture generation to accelerate iteration cycles without sacrificing code comprehension.',
    tools: ['Claude 3.7', 'Gemini 2.5', 'Cursor / VS Code'],
    takeaways:
      'AI works best as a tireless pair-programmer and architecture critic when given tight specifications and typed boundaries.'
  },
  {
    id: 'prompt-engineering',
    title: 'PROMPT ENGINEERING',
    subtitle: 'Deterministic Context Design',
    tag: 'LLM REASONING',
    description:
      'Crafting modular system prompts with XML tagging, few-shot examples, and JSON Schema enforcement to yield deterministic, production-grade outputs.',
    tools: ['System Prompts', 'Structured Outputs', 'Context Windows'],
    takeaways:
      'Treat prompts like compiled code: test edge cases, enforce schemas, and minimize ambiguity.'
  },
  {
    id: 'vibe-coding',
    title: 'VIBE CODING & RAPID BUILDS',
    subtitle: 'From Conceptual Spec to Working UI in Hours',
    tag: 'PRODUCT VELOCITY',
    description:
      'Exploring human-in-the-loop rapid prototyping: articulating clear product requirements, reviewing diffs, and refining real web software at 10x traditional speed.',
    tools: ['Iterative Refinement', 'Full-Stack Scaffolding', 'Vite'],
    takeaways:
      'Velocity without taste is noise. High-speed building requires even sharper design standards.'
  },
  {
    id: 'generative-visuals',
    title: 'GENERATIVE VISUALS',
    subtitle: 'Stylistic Cohesion at Scale',
    tag: 'DIFFUSION MODELS',
    description:
      'Calibrating negative prompts, aspect ratios, lighting parameters, and seed consistency to produce distinctive brand assets rather than generic stock imagery.',
    tools: ['Leonardo AI', 'Midjourney', 'ComfyUI Concepts'],
    takeaways:
      'Consistency requires deep understanding of artistic styles, camera optics, and latent space controls.'
  },
  {
    id: 'ai-video',
    title: 'AI VIDEO PIPELINES',
    subtitle: 'Automated Synthesis & Editing',
    tag: 'MULTIMODAL',
    description:
      'Chaining text synthesis, automated audio voice generation, avatar synthesis, and timeline cuts to create high-retention social content systems.',
    tools: ['HeyGen', 'CapCut', 'ElevenLabs'],
    takeaways:
      'The bottleneck in modern content is no longer production volume; it is story structure and emotional resonance.'
  },
  {
    id: 'web-experiences',
    title: 'TACTILE WEB EXPERIENCES',
    subtitle: 'Zero-Pill Minimalist Aesthetics',
    tag: 'FRONTEND ARCHITECTURE',
    description:
      'Building web interfaces that rely on typography scale, negative space, and micro-motion rather than generic rounded cards and purple gradients.',
    tools: ['Tailwind CSS', 'Canvas API', 'Fluid Typography'],
    takeaways:
      "Minimalism isn't empty space; it is the total elimination of everything that doesn't serve the thought."
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
