import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarCheck, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import {
  fadeUp,
  revealTransition,
  revealViewport,
  slideInLeft,
  slideInRight,
  springRevealTransition,
} from '../lib/animations';

type ContactLink = {
  name: string;
  label: string;
  url: string;
  icon: ReactNode;
  accent: string;
};

const contactLinks: ContactLink[] = [
  {
    name: 'LinkedIn',
    label: 'Professional profile',
    url: 'https://www.linkedin.com/in/rohandutt904010/',
    icon: <Linkedin className="h-5 w-5" />,
    accent: 'from-[#0A66C2]/18 to-[#16C47F]/12',
  },
  {
    name: 'GitHub',
    label: 'Code and shipped work',
    url: 'https://github.com/rohnn-afk',
    icon: <Github className="h-5 w-5" />,
    accent: 'from-zinc-900/12 to-[#E9A5F1]/18 dark:from-white/12',
  },
  {
    name: 'Email',
    label: 'Direct project inquiry',
    url: 'mailto:rohansharmadutt876@gmail.com',
    icon: <Mail className="h-5 w-5" />,
    accent: 'from-[#16C47F]/18 to-[#E9A5F1]/16',
  },
];

const Contactme = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-32 text-black dark:text-white sm:px-10 sm:py-40 lg:px-16 lg:py-48"
    >
      <div className="mx-auto grid w-full max-w-[90rem] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] lg:items-center lg:gap-20">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          transition={springRevealTransition(0.1)}
          viewport={revealViewport}
          className="max-w-3xl"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">
            Contact
          </p>
          <h2 className="mt-5 font-sora text-[clamp(3.25rem,7vw,6.5rem)] font-bold leading-[0.92]">
            Let&apos;s build reliable products.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl">
            Reach out for product engineering, full-stack development, backend systems, or polished frontend work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.15)}
              viewport={revealViewport}
              className="rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16C47F]/12 text-[#16C47F]">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Availability
              </p>
              <p className="mt-2 text-xl font-bold">Open to select projects</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.25)}
              viewport={revealViewport}
              className="rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9A5F1]/30 text-zinc-900 dark:text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Location
              </p>
              <p className="mt-2 text-xl font-bold">New Delhi, India</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          transition={springRevealTransition(0.18)}
          viewport={revealViewport}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full border border-[#16C47F]/20" aria-hidden="true" />
          <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full border border-[#E9A5F1]/35" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_32px_90px_rgba(15,23,42,0.12)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[0.78fr_1fr] md:items-center">
              <div className="relative hidden min-h-[24rem] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black md:block">
                <motion.img
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={springRevealTransition(0.25)}
                  viewport={revealViewport}
                  src="/download-removebg-preview.png"
                  alt="Rohan"
                  draggable={false}
                  className="absolute inset-x-0 bottom-0 mx-auto max-h-[23rem] object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Connect with me
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      transition={revealTransition(0.12 + index * 0.08)}
                      viewport={revealViewport}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-gradient-to-br ${link.accent} bg-white/80 p-4 text-left transition-colors hover:border-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:focus-visible:ring-offset-black`}
                    >
                      <span className="flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#16C47F] shadow-sm dark:bg-black">
                          {link.icon}
                        </span>
                        <span>
                          <span className="block text-base font-extrabold">{link.name}</span>
                          <span className="mt-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            {link.label}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16C47F]" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactme;
