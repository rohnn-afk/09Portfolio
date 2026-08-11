export const revealViewport = {
  once: true,
  amount: 0.35,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
} as const;

export const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
} as const;

export const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
} as const;

export const revealTransition = (delay = 0) => ({
  duration: 0.7,
  ease: 'easeOut',
  delay,
} as const);

export const springRevealTransition = (delay = 0) => ({
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.9,
  delay,
} as const);

export const hoverIconTransition = {
  duration: 0.25,
  ease: 'easeInOut',
} as const;
