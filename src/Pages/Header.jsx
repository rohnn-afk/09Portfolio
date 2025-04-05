import React from 'react'
import Marquee from '../assets/Marquee'
import Marquee2 from '../assets/Marquee2'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
        <div className='w-full   flex flex-col items-center justify-center '>
            <div className='w-full pt-[40rem] space-y-3 mb-[14rem] relative'>

                <Marquee deg={`rotate-[1deg]`}/>
                <Marquee2 deg={`rotate-[-1deg]`}/>
                <Marquee deg={`rotate-[-1deg]`}/>
                <Marquee2 deg={`rotate-[1deg]`}/>


            </div>
            <div className="w-[80vw] z-[700] flex gap-16 justify-between items-center  flex-col">
          <h1 className="text-7xl text-black dark:text-white text-center">
            FULL - STACK
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 12,
                duration: 8,
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="inline-block text-[#16C47F] ml-6"
            >
              DEVELOPER
            </motion.span>
          </h1>
          <h1 className="text-black text-sm dark:text-white text-center">
            Based in NEW-DELHI, INDIA
          </h1>
        </div>

        </div>
    </div>
  )
}

export default Header