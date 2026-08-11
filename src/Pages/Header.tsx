import Marquee from '../assets/Marquee'
import Marquee2 from '../assets/Marquee2'
import { motion } from "framer-motion";
import { revealViewport, slideInRight, springRevealTransition } from '../lib/animations';

const Header = () => {
  return (
    <section className="flex w-full flex-col items-center py-36 text-black dark:text-white sm:py-44 lg:py-52">
            <div className='relative w-full space-y-5 overflow-visible py-6'>

                <Marquee deg={`rotate-[1deg]`}/>
                <Marquee2 deg={`rotate-[-1deg]`}/>
                <Marquee deg={`rotate-[-1deg]`}/>
                <Marquee2 deg={`rotate-[1deg]`}/>


            </div>
            <div className="relative z-10 mt-64 flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:mt-72 sm:px-10 lg:mt-80 lg:px-16">
          <h1 className="text-center text-[clamp(3.25rem,5.6vw,6rem)] leading-tight text-black dark:text-white lg:whitespace-nowrap">
            FULL - STACK
            <motion.span
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={springRevealTransition(0.2)}
              viewport={revealViewport}
              className="ml-0 inline-block text-[#16C47F] sm:ml-6"
            >
              DEVELOPER
            </motion.span>
          </h1>
          <p className="text-center text-sm font-medium tracking-wide text-zinc-700 dark:text-zinc-300 sm:text-base">
            Based in New Delhi, India
          </p>
        </div>

    </section>
  )
}

export default Header
