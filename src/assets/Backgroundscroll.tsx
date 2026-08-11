import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function MinimalScrollLines() {
  const { scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    mass: 0.8,
  });

  const curve1 = useTransform(pageProgress, [0, 0.18, 0.6, 1], [
    "M 250 250 Q 250 250 250 250",
    "M 0 250 Q 250 190 500 250",
    "M 0 250 Q 250 90 500 250",
    "M 0 250 Q 250 390 500 250",
  ]);
  
  const curve2 = useTransform(pageProgress, [0, 0.18, 0.6, 1], [
    "M 250 250 Q 250 250 250 250",
    "M 250 0 Q 310 250 250 500",
    "M 250 0 Q 430 250 250 500",
    "M 250 0 Q 70 250 250 500",
  ]);
  
  const rotate = useTransform(pageProgress, [0, 1], [0, 360]);
  const opacity = useTransform(pageProgress, [0, 0.08, 0.2, 0.65, 1], [0, 0, 0.08, 0.16, 0.08]);
  const ringOpacity = useTransform(pageProgress, [0, 0.1, 0.25, 1], [0, 0, 0.11, 0.06]);
  const ringScale = useTransform(pageProgress, [0, 0.2, 1], [0.4, 1, 1.18]);
  
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white dark:bg-black">
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute h-full w-full"
      >
       <motion.path
  d={curve1}
  className="stroke-black dark:stroke-white"
  strokeWidth="1"
  fill="none"
  style={{ opacity }}
    />
<motion.path
  d={curve2}
  className="stroke-black dark:stroke-white"
  strokeWidth="1"
  fill="none"
  style={{ opacity }}
/>
      </svg>

      {/* Subtle rotating ring */}
      <motion.div
        style={{ rotate, opacity: ringOpacity, scale: ringScale }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10"
      />
    </div>
  );
}
