import { motion } from "framer-motion";

const Marquee2 = ({deg}) => {
  const items = [
    "Creative Thinker",
    "Full Stack",
    "Innovator",
    "Problem Solver",
    "Tech Enthusiast",
    "SaaS",
    "Backend",
    "Frontend",
    "Web Developer",
    "Coder"
  ];

  const repeatedItems = [...items, ...items];

  return (
    <div className={`relative ${deg} overflow-hidden w-full z-[600] bg-gradient-to-r dark:from-white dark:via-white dark:to-white dark:bg-gradient-to-r from-black via-gray-800 to-black py-1`}>
        <motion.div
          className="flex whitespace-nowrap dark:text-black text-white text-sm md:text-xl font-bold drop-shadow-lg"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {repeatedItems.map((item, index) => (
            <span key={index} className="mx-10">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
  );
};

export default Marquee2;