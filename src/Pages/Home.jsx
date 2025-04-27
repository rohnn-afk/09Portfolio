import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ClassyDropdown from '../assets/Dropdown';
import MinimalScrollLines from '../assets/Backgroundscroll.';

const createParallax = (multiplier) => {


  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 12 });
  const y = useSpring(rawY, { stiffness: 40, damping: 12 });
  return { rawX, rawY, x, y, multiplier };
};

const Home = ({isScreenSupported}) => {

  const [scrollWidth, setScrollWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax items with different strength
  const items = {
    image: createParallax(1.2),
    react: createParallax(4.0),
    github: createParallax(4.0),
    js: createParallax(6.6),
    node: createParallax(7.9),
    mongo: createParallax(4.7),
    vscode: createParallax(5.5),
    bio: createParallax(1.4),
  };



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / maxScroll) * 100;
      setScrollWidth(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply cursor position to all items
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = e.clientX - innerWidth / 2;
      const offsetY = e.clientY - innerHeight / 2;

      Object.values(items).forEach(({ rawX, rawY, multiplier }) => {
        rawX.set(offsetX * 0.03 * multiplier);
        rawY.set(offsetY * 0.03 * multiplier);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [items]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 z-[999] rounded-full transition-all duration-200 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />

      <div
        id="about"
        className="w-full relative min-h-[200vh] bg-white dark:bg-black z-[200] flex flex-col items-center justify-center space-y-[11rem] text-black dark:text-white pb-20 px-10"
      >
         <MinimalScrollLines />
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
            className="text-7xl hero-title"
          >
            <span className="text-2xl pr-6">I'm </span> ROHAN
          </motion.h1>

          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: '66.666667%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-0.5 bg-[#E9A5F1] border-none"
          />

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl"
          >
            "I build scalable, fast, and user-focused applications — front to back."
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            Specialize in building modern web apps with React, Node.js, and Golang.
          </motion.p>

          <div className="w-1/2 flex flex-row items-center space-x-6 mt-20">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              className="px-4 py-2 pr-7 rounded-full text-sm flex items-center w-40 min-w-36 bg-[#E9A5F1] text-black sm:w-44 relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-base font-semibold">Book a Demo</p>
              <motion.div
                className="w-2 h-2 absolute top-2 right-5 text-black"
                animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
              <motion.div
                className="w-2 h-2 absolute top-2 right-5 text-black"
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
            <ClassyDropdown isScreenSupported={isScreenSupported}/>
          </div>
        </div>

         
          {isScreenSupported &&  <div className="relative flex flex-col w-3/5 justify-center ">

          {/* Floating with Depth */}
          <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
  src="/7d0944e4-ee5e-48d9-99a9-a9f8eaece544.jpg"
  className="absolute top-32 rounded-3xl w-[40vw] sm:w-[30vw] md:w-[22vw] max-w-[360px]"
  style={{ x: items.image.x, y: items.image.y }}
/>

<motion.img
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
  viewport={{ once: true }}
  src="/React-icon.svg"
  className="absolute top-[31rem] sm:-left-[4rem] md:-left-[6rem] rounded-xl w-[20vw] sm:w-[15vw] md:w-[12vw] max-w-60"
  style={{ x: items.react.x, y: items.react.y }}
/>

<motion.img
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
viewport={{ once: true }}
  src="/github-mark.svg"
  className="absolute top-[24rem] left-[10rem] sm:left-[16rem] md:left-[22rem] rounded-xl w-[16vw] sm:w-[12vw] md:w-[10vw] max-w-40"
  style={{ x: items.github.x, y: items.github.y }}
/>

<motion.img
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
viewport={{ once: true }}
  src="/icons8-javascript.gif"
  className="absolute top-16 left-[2rem] sm:left-[4rem] md:left-[6rem] rounded-xl w-[8vw] sm:w-[6vw] md:w-[4vw] max-w-14"
  style={{ x: items.js.x, y: items.js.y }}
/>

<motion.img
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
viewport={{ once: true }}
  src="/icons8-node-js.svg"
  className="absolute bg-white top-[13rem] -left-[2rem] sm:-left-[5rem] md:-left-[8rem] rounded-xl w-[8vw] sm:w-[6vw] md:w-[4vw] max-w-14"
  style={{ x: items.node.x, y: items.node.y }}
/>

<motion.img
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
viewport={{ once: true }}
  src="/MongoDB_SpringGreen.png"
  className="absolute top-[8rem] left-[10rem] sm:left-[16rem] md:left-[23rem] rounded-xl w-[20vw] sm:w-[15vw] md:w-[10vw] max-w-40"
  style={{ x: items.mongo.x, y: items.mongo.y }}
/>

<motion.img
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
viewport={{ once: true }}
  src="/icons8-vs-code-48.png"
  className="absolute top-[17rem] left-[18rem] sm:left-[24rem] md:left-[30rem] rounded-xl w-[8vw] sm:w-[6vw] md:w-[4vw] max-w-14"
  style={{ x: items.vscode.x, y: items.vscode.y }}
/>



       
        </div>}
<div className='w-3/4 flex justify-end'>

        <motion.div
         initial={{ x: 300, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{
           type: 'spring',
           stiffness: 80,
           damping: 12,
           duration: 8,
           delay: 1,
         }}
         viewport={{ once: true }}
            className=" justify-end  text-black dark:text-white "
            style={{ x: items.bio.x, y: items.bio.y }}
            >
            <h1 className="text-3xl font-bold underline">BIO:</h1>
            <h1 className="text-base font-bold mt-5">24 YEAR OLD,</h1>
            <h1 className="text-base font-bold mt-2">Post-Graduated,</h1>
            <h1 className="text-xl font-bold mt-7">"I WILL GIVE MY EVERYTHING TO INNOVATION..."</h1>
          </motion.div>
</div>
      </div>
    </>
  );
};

export default Home;
