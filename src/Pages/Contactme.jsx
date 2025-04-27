import React from 'react'
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";


const Contactme = () => {
  return (
    <div id='contact' className='z-[700]'>
      <div className='w-full mt-[12rem] flex items-center flex-col'>
        <div className='flex flex-row gap-4'>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 12,
              duration: 8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className='text-5xl font-semibold text-black dark:text-white'>
            Profile
          </motion.h1>
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 12,
              duration: 8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className='text-5xl font-semibold text-black dark:text-white'>
            Links
          </motion.h1>
        </div>

        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: '66.666667%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-0.5 bg-[#E9A5F1] border-none"
        />

        <div className='w-full mt-[6rem] p-8  shadow-lg flex flex-col justify-center items-center'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mt-10 px-8 pt-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-semibold text-center text-zinc-800 dark:text-zinc-100 mb-4">
                Connect with Me
              </h2>
              <div className='w-full flex flex-row gap-12 justify-between flex-wrap md:flex-nowrap'>

                <div className="hidden md:block">
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 80,
                      damping: 12,
                      duration: 8,
                      delay: 1,
                    }}
                    viewport={{ once: true }}
                    src='/download-removebg-preview.png'
                    alt="Contact"
                    className=''
                  />
                </div>

                <div className="space-y-3 mt-0 md:mt-20 w-full md:w-auto items-center flex flex-col">
                  {links.map((link) => (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex w-full md:w-[30vw] items-center justify-center gap-3 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
                    >
                      {link.icon}
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rohandutt904010/",
    icon: <Linkedin className="w-6 h-6 text-green-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/rohnn-afk",
    icon: <Github className="w-6 h-6 text-green-500" />,
  },
  {
    name: "Email",
    url: "mailto:rohansharmadutt876@gmail.com",
    icon: <Mail className="w-6 h-6 text-green-500" />,
  },
  {
    name: "Whatsapp - 8920519536",
    url: "",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
  },
];

export default Contactme
