import { useEffect, useState } from 'react';
import ThemeToggle from '../assets/ThemeToggle';
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from "react-scroll";
import { fadeUp, revealTransition, revealViewport } from '../lib/animations';

type NavbarProps = {
  isScreenSupported: boolean;
};

const Navbar = ({ isScreenSupported }: NavbarProps) => {
  
  const [scrollY, setScrollY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 100;
  const compactNavPosition = isScreenSupported ? 'top-3 left-10' : 'top-0 left-0';
  const navTransition = 'transition-all duration-700 ease-in-out';
  const welcomeScale = shouldReduceMotion ? 1 : Math.max(0.72, 1 - scrollY / 900);
  const welcomeTranslateY = shouldReduceMotion ? 0 : Math.max(-48, -scrollY / 8);
  const scrollOffset = isScreenSupported ? -84 : -56;
  
  return (
    <>
      <section
        id="home"
        className="relative isolate flex min-h-screen w-full flex-col overflow-hidden px-6 py-8 text-black dark:text-white sm:px-10 sm:py-12 lg:px-16"
      >
        {isScreenSupported && (
          <Link
            to="home"
            smooth
            duration={500}
            className="relative z-10 w-fit rounded-lg font-dm-sans text-2xl font-bold tracking-wide hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
          >
            PORTFOLIO
            <h1 className="m-0.5 text-xs sm:text-lg">- Rohan , New Delhi</h1>
          </Link>
        )}

        <div className="relative z-10 flex flex-1 items-center">
          <motion.h1
            className="flex max-w-full origin-left flex-wrap items-baseline gap-x-4 text-[clamp(3.5rem,10vw,9rem)] font-bold leading-none text-black dark:text-white"
            style={{
              transform: `translateY(${welcomeTranslateY}px) scale(${welcomeScale})`,
              opacity: isScrolled ? 0 : 1,
            }}
          >
            <span>WELCOME</span>
            <motion.span
              key={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.2)}
              viewport={revealViewport}
              className="text-[clamp(2rem,4vw,4rem)] text-[#16C47F]"
            >
              WORLD
            </motion.span>
          </motion.h1>
        </div>
      </section>

      <nav
        className={`fixed z-[900] flex h-12 w-[calc(100%-2rem)] max-w-2xl items-center justify-between bg-white px-4 shadow-lg dark:bg-zinc-900 sm:px-8 ${compactNavPosition} ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-6 pointer-events-none opacity-0'
        } ${isScreenSupported ? 'rounded-2xl' : ''} ${navTransition}`}
        aria-label="Primary navigation"
      >
        <Link
          to="home"
          smooth
          duration={500}
          offset={scrollOffset}
          className="rounded-md font-dm-sans text-xs font-bold tracking-widest text-[#16C47F] hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] sm:text-xl"
        >
          PORTFOLIO
        </Link>
        <div className="flex items-center justify-center gap-2 text-xs font-medium sm:gap-6 sm:text-base">
          <Link to="about" smooth duration={500} offset={scrollOffset} className="rounded-md hover:cursor-pointer hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]">About</Link>
          <Link to="experience" smooth duration={500} offset={scrollOffset} className="rounded-md hover:cursor-pointer hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]">Experience</Link>
          <Link to="project" smooth duration={500} offset={scrollOffset} className="rounded-md hover:cursor-pointer hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]">Projects</Link>
          <Link to="contact" smooth duration={500} offset={scrollOffset} className="rounded-md hover:cursor-pointer hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
