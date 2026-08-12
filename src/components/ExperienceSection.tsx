import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ezyrExperience } from '../data/experience';
import { fadeUp, revealTransition, revealViewport } from '../lib/animations';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full scroll-mt-20 px-6 pb-20 pt-20 text-black dark:text-white sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-[92rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={revealTransition(0.05)}
          viewport={revealViewport}
          className="max-w-4xl"
        >
          <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">
            Experience
          </p>
          <h2 className="mt-5 font-sora text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.95]">
            Production ownership beyond personal projects.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl">
            From building Ezyr’s foundational visual platform to owning its application-generation, AI and cloud architecture.
          </p>
        </motion.div>

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={revealTransition(0.15)}
          viewport={revealViewport}
          className="mt-16 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/[0.88] shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/[0.82] lg:mt-20"
        >
          <header className="border-b border-zinc-200 p-6 dark:border-zinc-800 sm:p-8 lg:px-10">
            <div className="flex items-center gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#16C47F]/12 text-[#16C47F]">
                <BriefcaseBusiness aria-hidden="true" />
              </div>
              <div>
                <a
                  href={ezyrExperience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md font-sora text-3xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]"
                >
                  {ezyrExperience.company}
                  <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16C47F]" />
                </a>
                <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  {ezyrExperience.period} · {ezyrExperience.location}
                </p>
              </div>
            </div>

          </header>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="relative space-y-8 before:absolute before:bottom-4 before:left-[0.7rem] before:top-4 before:w-px before:bg-gradient-to-b before:from-[#16C47F] before:to-zinc-200 dark:before:to-zinc-800">
              {ezyrExperience.roles.map((role, index) => (
                <section key={role.title} className="relative grid gap-6 pl-10 lg:grid-cols-[minmax(15rem,0.45fr)_minmax(0,1fr)] lg:gap-12">
                  <span className={`absolute left-0 top-1.5 z-10 h-6 w-6 rounded-full border-4 border-white dark:border-zinc-950 ${index === 0 ? 'bg-[#16C47F]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#16C47F]">{role.period}</p>
                    <h3 className="mt-2 font-sora text-2xl font-bold sm:text-3xl">{role.title}</h3>
                    {index === 0 && (
                      <span className="mt-3 inline-flex rounded-full bg-[#16C47F]/12 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0d8f60] dark:text-[#51e5aa]">
                        Promoted
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg">
                      {role.summary}
                    </p>
                    <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                      {role.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/75 p-4 text-sm leading-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#16C47F] text-white">
                            <Check size={13} aria-hidden="true" />
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.capabilities.map((capability) => (
                        <span key={capability} className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Architecture diagrams are conceptual and omit proprietary implementation details.
              </p>
              <Link
                to="/experience/ezyr"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#16C47F] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] focus-visible:ring-offset-2 dark:bg-white dark:text-black"
              >
                Explore the Ezyr Case Study
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ExperienceSection;
