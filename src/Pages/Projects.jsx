import React, { useState } from 'react'
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';


const Projects = () => {

    const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div id='project'  className='z-[700] mt-[16rem]'>
      <div className='w-full p-8 items-center justify-center flex flex-col gap-6'>
        <h1 className='text-4xl font-bold'>
          Projects : 
        </h1>
             <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: '66.666667%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-0.5 bg-[#E9A5F1] border-none"
        />
      </div>

<div className="bg-[#F16767] flex justify-center items-center w-full min-h-screen rounded-3xl mt-12 mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center max-w-full p-4 sm:p-8 text-[#FFF085]">
    {/* Left Section */}
      <div className="md:w-1/2 p-4 sm:p-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-snug"
      >
        SAVANA - DATING WEB-APP
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-base sm:text-lg"
      >
               A dating app with user profiles,<br/> preferences, matching system, and real-time chat.Proximity search and best UI experience.

      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 mt-8 sm:mt-12"
      >
        {[
          "Users sign up, upload images, and set preferences.",
          "Like/match system with real-time notifications.",
          "Chat feature using Socket.io for live conversations.",
          "Key features - Privacy , Experience ,Advance Ecosystem.",
          "NOTE - Not available to screen size less than 720px.(AS there is no dating app for web , so designed specifically for that gap)"

        ].map((text, index) => (
          <li key={index} className="flex  items-center">
            <div className="p-1 bg-[#532E07] rounded-full mr-4 mt-1">
              <img src="/SRUYCsunFdEfNhMPXKrf33ZFSPQ.png" className="w-4 h-4" />
            </div>
            {text}
          </li>
        ))}
      </motion.ul>
      <motion.button
      onClick={()=>{ window.open('https://savana-datingapp-frontend.onrender.com/', '_blank')}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              className="px-5 py-2 mt-12 pr-7 rounded-full text-sm flex items-center w-36 min-w-24 bg-[#532E07] text-white  relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-base"> website</p>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
    </div>

    {/* Right Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-[#FFF085] p-4 sm:p-10 rounded-2xl mt-16 md:mt-0 md:ml-10"
    >
      <img
        src="/Screenshot 2025-04-01 211144.png"
        className="w-full h-auto max-w-full"
      />
    </motion.div>
  </div>
</div>

<div className="bg-[#00FF9C] flex justify-center items-center w-full min-h-screen rounded-3xl mt-12 mx-auto px-4 sm:px-6">
  <div className="flex flex-col md:flex-row items-center max-w-full p-4 sm:p-8 text-[#255F38]">
    {/* Left Section */}
    <div className="md:w-1/2 p-4 sm:p-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-snug"
      >
        CHAT WEB-APP
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-base sm:text-lg"
      >
               A real-time chat application built with MERN stack and Socket.io.

      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 mt-8 sm:mt-12"
      >
        {[
          "Real-time messaging between users with online/offline status.",
          "Rooms or private chats for organized conversations.",
          "Message delivery and seen statuses.",
          "Extra feature - 32 theme options for user."
        ].map((text, index) => (
          <li key={index} className="flex  items-center">
            <div className="p-1 bg-[#1b3e29] rounded-full mr-4 mt-1">
              <img src="/SRUYCsunFdEfNhMPXKrf33ZFSPQ.png" className="w-4 h-4" />
            </div>
            {text}
          </li>
        ))}
      </motion.ul>
      <motion.button
      onClick={()=>{ window.open('https://chat-app-frontend-cehi.onrender.com/', '_blank')}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              className="px-5 py-2 mt-12 pr-7 rounded-full text-sm flex items-center w-36 min-w-24 bg-[#1b3e29] text-white  relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-base"> website</p>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
    </div>

    {/* Right Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-[#B6FFA1] p-4 sm:p-10 rounded-2xl mt-10 md:mt-0 md:ml-10"
    >
      <img
        src="/Screenshot 2025-04-05 200257.png"
        className="w-full h-auto max-w-full"
      />
    </motion.div>
  </div>
</div>


<div className="bg-[#2DAA9E] flex justify-center items-center w-full min-h-screen rounded-3xl mt-12 mx-auto px-4 sm:px-6">
  <div className="flex flex-col md:flex-row items-center max-w-full p-4 sm:p-8 text-[#201E43]">
    {/* Left Section */}
    <div className="md:w-1/2 p-4 sm:p-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-snug"
      >
        FOREVER - Ecommerce
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-base sm:text-lg"
      >
               A complete online store built with MERN stack where users can buy products and admins can manage inventory.

      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 mt-8 sm:mt-12"
      >
        {[
          "Product listing, filtering, and detailed product views.",
          "Cart and secure checkout with order confirmation.",
          "Admin panel for product, category, and order management.",
          "Added - Payment options with stripe and google pay API.",
          "Complete responsive for all screens."

        ].map((text, index) => (
          <li key={index} className="flex  items-center">
            <div className="p-1 bg-[#143D60] rounded-full mr-4 mt-1">
              <img src="/SRUYCsunFdEfNhMPXKrf33ZFSPQ.png" className="w-4 h-4" />
            </div>
            {text}
          </li>
        ))}
      </motion.ul>
      <motion.button
      onClick={()=>{ window.open('https://e-commerce-full-stack-frontend-xdzn.onrender.com', '_blank')}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              className="px-5 py-2 mt-12 pr-7 rounded-full text-sm flex items-center w-36 min-w-24 bg-[#201E43] text-white  relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-base"> website</p>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
              <motion.div
                className="w-2 h-2 absolute top-2 right-6 text-white"
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ArrowRight />
              </motion.div>
            </motion.button>
    </div>

    {/* Right Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-[#66D2CE] p-4 sm:p-10 rounded-2xl mt-10 md:mt-0 md:ml-10"
    >
      <img
        src="/Screenshot 2025-04-05 201621.png"
        className="w-full h-auto max-w-full"
      />
    </motion.div>
  </div>
</div>

    </div>
  )
}

export default Projects