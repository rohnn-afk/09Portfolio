import type { Experience } from '../types/experience';

export const ezyrExperience: Experience = {
  company: 'Ezyr',
  companyUrl: 'https://ezyr.io/',
  location: 'Remote',
  period: 'May 2025 – Jul 2026',
  roles: [
    {
      title: 'Technical Lead',
      period: 'Oct 2025 – Jul 2026',
      summary:
        'Promoted from Frontend Developer Intern to Technical Lead, taking end-to-end technical ownership of Ezyr’s no-code application platform.',
      achievements: [
        'Built the Neuron Engine, transforming visual-canvas definitions into complete Next.js applications.',
        'Developed a stateful AI runtime supporting tool execution, memory, retrieval, streaming and validation workflows.',
        'Designed and implemented a secure AWS pipeline for deploying generated applications as isolated Docker containers.',
        'Owned technical architecture and production delivery across frontend, backend, AI systems and cloud infrastructure.',
      ],
      capabilities: ['Architecture', 'AI systems', 'AWS', 'Docker', 'Next.js'],
    },
    {
      title: 'Frontend Developer Intern',
      period: 'May 2025 – Oct 2025',
      summary:
        'Built the platform’s visual canvas and foundational application experience from the initial product concept.',
      achievements: [
        'Developed the page and element systems that powered visual application composition.',
        'Built workflow configuration, database tooling, API integrations and responsive application previews.',
      ],
      capabilities: ['React', 'TypeScript', 'Visual canvas', 'Workflows'],
    },
  ],
};
