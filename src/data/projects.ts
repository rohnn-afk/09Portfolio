import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    title: '09-Fitness.AI',
    category: 'AI Fitness Platform',
    role: 'Full-stack Developer',
    stack: ['Next.js', 'Clerk', 'Gemini', 'Vapi'],
    highlights: ['AI plans', 'Voice chatbot', 'Personalized UX'],
    description:
      'Built a modern fitness web app using Next.js, integrating Clerk for authentication, Gemini for AI personalization, and Vapi for chatbot interactions. The AI chatbot collects user fitness goals, experience level, and dietary preferences to generate fully personalized workout plans and diet charts, creating an engaging, intelligent fitness companion experience.',
    features: [
      'Smart chatbot generates custom workout routines and diet charts tailored to user input.',
      'User accounts managed securely with Clerk for a seamless and protected login experience.',
      'Integrated Vapi for a smooth, human-like conversation flow with the fitness AI.',
      'Built with Next.js for fast, scalable frontend and backend, offering a sleek and responsive user interface.',
    ],
    websiteUrl: 'https://09-fitness-ai.vercel.app/',
    image: {
      src: '/fitness.png',
      alt: '09-Fitness.AI application screenshot',
    },
    styles: {
      section: 'bg-[#00FF9C]',
      content: 'text-[#000000]',
      accent: 'bg-[#0c2717]',
      imagePanel: 'bg-white',
    },
  },
  {
    title: 'ViewCount SaaS',
    category: 'Analytics SaaS',
    role: 'Full-stack Developer',
    stack: ['React', 'Node.js', 'JWT', 'SDK'],
    highlights: ['Event tracking', 'API keys', 'Admin dashboard'],
    description:
      'An open-source website analytics platform with realtime event tracking, API-key based integration, customizable events, and dashboard views for product owners.',
    features: [
      'Website analytics with customizable event tracking and clear visual reporting.',
      'User and project management with JWT authentication and secure API key handling.',
      'Easy-to-integrate JavaScript SDK for tracking events like page views and clicks.',
      'Admin panel for managing users, projects, and detailed event data.',
    ],
    websiteUrl: 'https://viewcount-frontend.onrender.com/',
    image: {
      src: '/viewcount.png',
      alt: 'Viewcount analytics dashboard screenshot',
    },
    styles: {
      section: 'bg-[#FFDEDE]',
      content: 'text-black',
      accent: 'bg-[#CF0F47]',
      imagePanel: 'bg-[#FF0B55]',
    },
  },
  {
    title: 'Savana Dating Web App',
    category: 'Realtime Social App',
    role: 'Full-stack Developer',
    stack: ['MERN', 'Socket.io', 'JWT', 'Cloudinary'],
    highlights: ['Matching flow', 'Realtime chat', 'Privacy controls'],
    description:
      'A dating app with user profiles, preferences, matching, realtime chat, proximity search, and a polished responsive interface.',
    features: [
      'Users sign up, upload images, and set preferences.',
      'Like/match system with real-time notifications.',
      'Chat feature using Socket.io for live conversations.',
      'Privacy controls and account-level preferences for a safer user experience.',
    ],
    websiteUrl: 'https://savana-datingapp-frontend.onrender.com/',
    image: {
      src: '/Screenshot 2025-04-01 211144.png',
      alt: 'Savana dating web app screenshot',
    },
    styles: {
      section: 'bg-[#F16767]',
      content: 'text-[#FFF085]',
      accent: 'bg-[#532E07]',
      imagePanel: 'bg-[#FFF085]',
    },
  },
  {
    title: 'Chat Web App',
    category: 'Realtime Messaging',
    role: 'MERN Developer',
    stack: ['MongoDB', 'Express', 'React', 'Socket.io'],
    highlights: ['Live status', 'Private chats', 'Theme system'],
    description: 'A real-time chat application built with MERN stack and Socket.io.',
    features: [
      'Real-time messaging between users with online/offline status.',
      'Rooms or private chats for organized conversations.',
      'Message delivery and seen statuses.',
      'Includes 32 theme options for user personalization.',
    ],
    websiteUrl: 'https://chat-app-frontend-cehi.onrender.com/',
    image: {
      src: '/Screenshot 2025-04-05 200257.png',
      alt: 'Chat web app screenshot',
    },
    styles: {
      section: 'bg-[#7C4585]',
      content: 'text-[#F8B55F]',
      accent: 'bg-[#1b3e29]',
      imagePanel: 'bg-[#B6FFA1]',
    },
  },
  {
    title: 'Forever Ecommerce',
    category: 'Ecommerce Platform',
    role: 'Full-stack Developer',
    stack: ['MongoDB', 'Express', 'React', 'Stripe'],
    highlights: ['Checkout flow', 'Admin panel', 'Responsive store'],
    description:
      'A complete online store built with MERN stack where users can buy products and admins can manage inventory.',
    features: [
      'Product listing, filtering, and detailed product views.',
      'Cart and secure checkout with order confirmation.',
      'Admin panel for product, category, and order management.',
      'Payment options integrated with Stripe and Google Pay API.',
    ],
    websiteUrl: 'https://e-commerce-full-stack-frontend-xdzn.onrender.com',
    image: {
      src: '/Screenshot 2025-04-05 201621.png',
      alt: 'Forever ecommerce application screenshot',
    },
    styles: {
      section: 'bg-[#3dcebf]',
      content: 'text-[#201E43]',
      accent: 'bg-[#201E43]',
      imagePanel: 'bg-[#66D2CE]',
    },
  },
];
