import { motion } from "framer-motion";

type MarqueeProps = {
  deg: string;
  direction?: "left" | "right";
};

const marqueeItems = [
  "Full Stack Developer",
  "React",
  "TypeScript",
  "Node.js",
  "API Design",
  "Frontend Systems",
  "Backend Services",
  "SaaS Products",
  "Clean Architecture",
  "Performance",
  "Accessibility",
  "Problem Solving",
  "Product Thinking",
  "UI Engineering",
  "Database Design",
  "Cloud Deployment",
  "CI/CD",
  "Developer Experience",
];

const marqueeTransition = {
  repeat: Infinity,
  duration: 32,
  ease: "linear",
} as const;

const Marquee = ({ deg, direction = "left" }: MarqueeProps) => {
  const animation = direction === "left"
    ? { initial: "0%", animate: "-50%" }
    : { initial: "-50%", animate: "0%" };

  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`relative left-1/2 z-0 w-[120vw] -translate-x-1/2 ${deg} overflow-hidden border-y border-white/10 bg-black py-2 shadow-[0_14px_40px_rgba(0,0,0,0.16)] dark:border-black/10 dark:bg-white`}
    >
      <motion.div
        className="flex w-max whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em] text-white will-change-transform dark:text-black md:text-lg"
        initial={{ x: animation.initial }}
        animate={{ x: animation.animate }}
        transition={marqueeTransition}
      >
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="mx-7">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#16C47F]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
