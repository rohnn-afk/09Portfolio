import { motion } from 'framer-motion';
import { ProjectSection } from '../components/ProjectSection';
import { projects } from '../data/projects';
import { revealTransition, revealViewport } from '../lib/animations';

const Projects = () => {
  return (
    <section
      id="project"
      className="relative w-full px-6 py-32 text-black dark:text-white sm:px-10 sm:py-40 lg:px-16 lg:py-48"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.05)}
          viewport={revealViewport}
          className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]"
        >
          Selected Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.12)}
          viewport={revealViewport}
          className="mt-5 max-w-4xl font-sora text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.95]"
        >
          Practical products with real implementation depth.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.2)}
          viewport={revealViewport}
          className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg"
        >
          A focused set of full-stack builds covering AI workflows, analytics, realtime systems, ecommerce, and product interfaces.
        </motion.p>
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: 'min(42rem, 100%)' }}
          transition={revealTransition(0.28)}
          viewport={revealViewport}
          className="mt-8 h-0.5 border-none bg-gradient-to-r from-transparent via-[#E9A5F1] to-transparent"
        />
      </div>

      <div className="mx-auto mt-20 flex w-full max-w-[92rem] flex-col gap-12 lg:mt-24 lg:gap-16">
        {projects.map((project, index) => (
          <ProjectSection key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
