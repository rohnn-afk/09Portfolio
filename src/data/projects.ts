import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    title: '09-Fitness.AI',
    category: 'Fitness planning prototype',
    role: 'Full-stack Developer',
    stack: ['Next.js', 'Clerk', 'Gemini', 'Vapi'],
    highlights: ['Voice-led onboarding', 'Plan generation', 'Saved plans'],
    description:
      'A voice-guided fitness planning prototype that gathers goals and preferences, generates workout and meal plans, and lets signed-in users save and revisit them.',
    opportunity:
      'Explore a more conversational path from a person’s goals to a structured workout and meal plan.',
    contribution:
      'Built the Next.js product flow connecting Clerk authentication, Vapi voice conversation, Gemini plan generation, and Convex profile and plan storage.',
    features: [
      'Voice conversation collects fitness goals, experience, and dietary preferences.',
      'Gemini generates structured workout and meal-plan content.',
      'Convex stores profile data and saved plans for signed-in users.',
      'Users can switch between saved plans and mark an active plan.',
    ],
    websiteUrl: 'https://09-fitness-ai.vercel.app/',
    visualSteps: ['Voice intake', 'Plan generation', 'Saved plans'],
    styles: {
      section: 'bg-[#00FF9C]',
      content: 'text-[#000000]',
      accent: 'bg-[#0c2717]',
      imagePanel: 'bg-white',
    },
  },
  {
    title: 'ViewCount',
    repositoryUrl: 'https://github.com/rohnn-afk/ViewCount',
    opportunity: 'Give website owners a way to capture visitor activity and inspect traffic and engagement in one dashboard.',
    contribution: 'Built the embeddable JavaScript SDK, authenticated project and ingestion APIs, and reporting dashboard. The SDK includes persistent visitor identification and project-scoped ingestion keys.',
    category: 'Analytics prototype',
    role: 'Full-stack Developer',
    stack: ['React', 'Express', 'MongoDB', 'Zustand', 'Recharts'],
    highlights: ['Event tracking', 'API keys', 'Admin dashboard'],
    description:
      'A website event analytics prototype with an embeddable JavaScript SDK, project-scoped ingestion keys, and a dashboard for inspecting captured activity.',
    features: [
      'Browser SDK captures page, click, and scroll events.',
      'Express and MongoDB APIs ingest events using project-scoped keys.',
      'Authenticated dashboard supports project management and event exploration.',
    ],
    websiteUrl: 'https://viewcount-frontend.onrender.com/',
    visualSteps: ['Browser SDK', 'Scoped API', 'Event dashboard'],
    styles: {
      section: 'bg-[#FFDEDE]',
      content: 'text-black',
      accent: 'bg-[#CF0F47]',
      imagePanel: 'bg-[#FF0B55]',
    },
  },
  {
    title: 'Savana Dating Web App',
    repositoryUrl: 'https://github.com/rohnn-afk/Savana_DatingApp',
    opportunity: 'Connect profile discovery and mutual matching with realtime conversations.',
    contribution: 'Modeled accounts, profiles, matches, messages and notifications. Implemented JWT authentication, bcrypt password hashing, Cloudinary media storage, and targeted Socket.IO events for likes, matches and messages.',
    category: 'Realtime Social App',
    role: 'Full-stack Developer',
    stack: ['MERN', 'Socket.io', 'JWT', 'Cloudinary'],
    highlights: ['Matching flow', 'Realtime chat', 'Profile settings'],
    description:
      'A social discovery prototype connecting profile preferences, mutual likes, match notifications, and realtime conversations.',
    features: [
      'Users sign up, upload images, and set preferences.',
      'Like/match system with real-time notifications.',
      'Chat feature using Socket.io for live conversations.',
      'Profile preferences and account-level settings.',
    ],
    websiteUrl: 'https://savana-datingapp-frontend.onrender.com/',
    visualSteps: ['Profile discovery', 'Mutual match', 'Realtime chat'],
    styles: {
      section: 'bg-[#F16767]',
      content: 'text-[#FFF085]',
      accent: 'bg-[#532E07]',
      imagePanel: 'bg-[#FFF085]',
    },
  },
];
