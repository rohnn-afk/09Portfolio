import React, { useEffect, useState } from 'react';
import ThemeToggle from '../assets/ThemeToggle';
import { motion } from 'framer-motion'
import { Link } from "react-scroll";



const Navbar = ({isScreenSupported}) => {
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 100;
  const navHeight = isScrolled
  ? `h-12 bg-white dark:bg-zinc-900 shadow-lg pl-10 z-50 max-w-xl ${
      isScreenSupported ? 'top-3 left-10' : 'top-0 left-0'
    } justify-center rounded-2xl`
  : 'h-screen w-full flex flex-col p-12';

  const navPadding = isScrolled ? 'py-3' : 'py-8 rounded-xl';
  const welcomeScale = `scale(${Math.max(0.5, 1 - scrollY / 500)}) translateY(${Math.min(-50, -scrollY / 5)}px)`;
  const navTransition = 'transition-all duration-700 ease-in-out';
  const welcomeSize = isScrolled ? 'text-4xl opacity-0' : 'text-[10vw] md:text-[8vw] lg:text-[6vw] opacity-100';
  
  return (
    <div 
      className={`fixed  w-full flex flex-col z-[900] bg-white dark:bg-black ${navTransition} ${navHeight}`}
    >
      
      <div className={`w-full max-w-xl sm:w-40 flex justify-between items-center transition-all duration-700 ease-in-out ${navPadding}`}
        style={{ width: isScrolled ? '90%' : '100%' }}>
      {isScreenSupported &&  <Link to='#' className={` hover:cursor-pointer font-dm-sans font-bold ${isScrolled ? `sm:text-xl text-xs text-[#16C47F] tracking-widest` : `text-2xl tracking-wide`}`}>PORTFOLIO {isScrolled? ("") :(<h1 className='m-0.5 text-xs sm:text-lg'>- Rohan , New Delhi</h1>)}</Link>}
        <div className={`flex gap-8 text-sm justify-center items-center sm:text-lg font-medium ${isScrolled ? 'opacity-100 translate-y-0 flex' : 'opacity-0 -translate-y-10 hidden'} transition-all duration-700`}>
          <Link to='about'  className="hover:text-gray-500 hover:cursor-pointer">About</Link>
          <Link to='project' className="hover:text-gray-500 hover:cursor-pointer">Projects</Link>
          <Link to='contact' className="hover:text-gray-500 hover:cursor-pointer">Contact</Link>
        {isScrolled && <ThemeToggle />} 
        </div>
      </div>
      <h1
        className={`font-bold text-center z-[999] absolute top-1/2 left-32 transform -translate-x-1/2 ${navTransition} ${welcomeSize}`}
        style={{ transform: welcomeScale }}
      >
        WELCOME <motion.span 
          key={1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4}}
          viewport={{ once: true }}  
        className='text-4xl text-[#16C47F] mx-4'>WORLD</motion.span> 
      </h1>
    </div>
  );
};

export default Navbar;
