import { useScroll, useTransform, motion } from "framer-motion";

export default function MinimalScrollLines() {
  const { scrollY } = useScroll();

  const scrollRange = 3000; 

  const curve1 = useTransform(scrollY, [0, scrollRange], [
    "M 0 250 Q 250 250 500 250",
    "M 0 250 Q 250 50 500 250",  
  ]);
  
  const curve2 = useTransform(scrollY, [0, scrollRange], [
    "M 0 300 Q 250 300 500 300",
    "M 0 300 Q 250 500 500 300", 
  ]);
  
  const rotate = useTransform(scrollY, [0, scrollRange], [0, 15]);
  const opacity = useTransform(scrollY, [0, scrollRange], [0.1, 0.3]);
  
  return (
    <div className="fixed inset-0 -z-[100] overflow-hidden bg-white dark:bg-black">
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
        className="absolute w-full h-full "
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
        style={{ rotate }}
        className="absolute top-1/3 -right-28 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-black/10 dark:border-white/10 rounded-full"
      />
    </div>
  );
}
