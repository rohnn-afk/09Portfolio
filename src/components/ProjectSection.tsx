import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import type { Project } from '../types/project';
import { fadeUp, hoverIconTransition, revealTransition, revealViewport } from '../lib/animations';
import { assetPath } from '../lib/assetPath';

type ProjectSectionProps = {
  project: Project;
  index: number;
};

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <section
      className={`${project.styles.section} group flex w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-14 shadow-xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl dark:ring-white/10 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-16`}
    >
      <div className={`grid w-full max-w-[86rem] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(30rem,1fr)] lg:gap-16 xl:gap-20 ${project.styles.content}`}>
        <div className={`max-w-3xl ${isReversed ? 'lg:order-2' : ''}`}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition()}
            viewport={revealViewport}
            className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]"
          >
            <span className={`rounded-full px-3 py-1.5 ${project.styles.accent} text-white`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="rounded-full bg-white/30 px-3 py-1.5 ring-1 ring-black/5 backdrop-blur dark:bg-black/20 dark:ring-white/10">
              {project.category}
            </span>
            <span className="rounded-full bg-white/30 px-3 py-1.5 ring-1 ring-black/5 backdrop-blur dark:bg-black/20 dark:ring-white/10">
              {project.role}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.1)}
            viewport={revealViewport}
            className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          >
            {project.title}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.15)}
            viewport={revealViewport}
            className="mb-6 flex flex-wrap gap-2"
          >
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-black/8 px-3 py-1.5 text-xs font-semibold ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/10"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.2)}
            viewport={revealViewport}
            className="text-base leading-8 sm:text-lg"
          >
            {project.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.25)}
            viewport={revealViewport}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl bg-white/28 p-4 text-sm font-bold leading-5 ring-1 ring-black/5 backdrop-blur dark:bg-black/15 dark:ring-white/10"
              >
                {highlight}
              </div>
            ))}
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.3)}
            viewport={revealViewport}
            className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2"
          >
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start rounded-2xl bg-white/18 p-3 text-sm leading-6 ring-1 ring-black/5 backdrop-blur-sm dark:bg-black/10 dark:ring-white/10">
                <span className={`mr-4 mt-1 shrink-0 rounded-full p-1 ${project.styles.accent}`}>
                  <Check size={16} className="text-white" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>

          <motion.a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={revealTransition(0.4)}
            viewport={revealViewport}
            className={`relative mt-10 flex w-44 min-w-24 items-center overflow-hidden rounded-full px-5 py-3 pr-8 text-sm font-medium shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${project.styles.accent} text-white`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>View project</span>
            <motion.span
              className="absolute right-6 top-2.5 text-white"
              animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
              transition={hoverIconTransition}
            >
              <ArrowRight size={18} />
            </motion.span>
            <motion.span
              className="absolute right-6 top-2.5 text-white"
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
              transition={hoverIconTransition}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={revealTransition(0.2)}
          viewport={revealViewport}
          className={`${project.styles.imagePanel} ${isReversed ? 'lg:order-1' : ''} rounded-3xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-white/20 sm:p-6 lg:p-8`}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 truncate rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-black/60">
              {project.websiteUrl.replace(/^https?:\/\//, '')}
            </span>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white/80">
            <img
              src={assetPath(project.image.src)}
              alt={project.image.alt}
              className="h-full w-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
