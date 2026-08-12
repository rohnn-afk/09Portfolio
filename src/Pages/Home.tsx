import { useEffect, useState, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  fadeUp,
  hoverIconTransition,
  revealTransition,
  revealViewport,
  slideInRight,
  springRevealTransition,
} from '../lib/animations';
import { assetPath } from '../lib/assetPath';

type ScreenSupportProps = {
  isScreenSupported: boolean;
};

type BrandIconBadgeProps = {
  name: string;
  slug?: string;
  color?: string;
  src?: string;
  angle: number;
  radiusX?: number;
  radiusY?: number;
};

type OrbitBadgeStyle = CSSProperties & {
  '--orbit-radius-x': string;
  '--orbit-radius-y': string;
};

const simpleIconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const BrandIconBadge = ({
  name,
  slug,
  color,
  src,
  angle,
  radiusX = 285,
  radiusY = 132,
}: BrandIconBadgeProps) => {
  const orbitStyle: OrbitBadgeStyle = {
    '--orbit-radius-x': `${radiusX}px`,
    '--orbit-radius-y': `${radiusY}px`,
    animationDelay: `${-(angle / 360) * 34}s`,
  };

  return (
    <div
      className="toolkit-orbit-badge absolute left-1/2 top-[52%] z-10 grid h-16 w-16 place-items-center rounded-2xl border border-zinc-200/80 bg-white/92 p-3 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/15 dark:bg-white/90"
      style={orbitStyle}
      role="img"
      aria-label={name}
    >
      <img
        src={src ? (src.startsWith('http') ? src : assetPath(src)) : simpleIconUrl(slug ?? '', color ?? '')}
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
        aria-hidden="true"
      />
    </div>
  );
};

type SkillPileItem = {
  label: string;
  rotate: number;
  left: string;
  bottom: string;
  startX: number;
  zIndex: number;
};

const skillPile: readonly SkillPileItem[] = [
  { label: 'React + Next.js', rotate: -8, left: '13%', bottom: '4.6rem', startX: -80, zIndex: 7 },
  { label: 'TypeScript', rotate: 7, left: '42%', bottom: '3.65rem', startX: 72, zIndex: 9 },
  { label: 'UI Engineering', rotate: -4, left: '67%', bottom: '5.35rem', startX: -36, zIndex: 6 },
  { label: 'Node.js + Express', rotate: 9, left: '17%', bottom: '10.2rem', startX: 96, zIndex: 12 },
  { label: 'REST APIs', rotate: -11, left: '46%', bottom: '8.9rem', startX: -118, zIndex: 13 },
  { label: 'PostgreSQL', rotate: 5, left: '68%', bottom: '10.65rem', startX: 52, zIndex: 10 },
  { label: 'MongoDB', rotate: -7, left: '12%', bottom: '15.1rem', startX: 132, zIndex: 16 },
  { label: 'RAG Systems', rotate: 10, left: '40%', bottom: '13.65rem', startX: -54, zIndex: 17 },
  { label: 'Agentic Workflows', rotate: -5, left: '62%', bottom: '15.55rem', startX: 110, zIndex: 18 },
  { label: 'System Design', rotate: 6, left: '18%', bottom: '20.1rem', startX: -92, zIndex: 21 },
  { label: 'API Security', rotate: -9, left: '47%', bottom: '18.65rem', startX: 84, zIndex: 22 },
  { label: 'Real-time Apps', rotate: 8, left: '33%', bottom: '23rem', startX: -130, zIndex: 24 },
  { label: 'CI/CD', rotate: -6, left: '67%', bottom: '20.4rem', startX: 126, zIndex: 23 },
  { label: 'Docker', rotate: 9, left: '12%', bottom: '25rem', startX: -108, zIndex: 25 },
  { label: 'Redis', rotate: -8, left: '53%', bottom: '25.35rem', startX: 88, zIndex: 27 },
  { label: 'SOLID Principles', rotate: 5, left: '27%', bottom: '29.2rem', startX: -136, zIndex: 29 },
  { label: 'AWS', rotate: -7, left: '68%', bottom: '28.8rem', startX: 118, zIndex: 30 },
  { label: 'Cloudflare', rotate: 8, left: '48%', bottom: '32.4rem', startX: -104, zIndex: 32 },
];

const skillChipContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const skillChip = {
  hidden: ({ rotate, startX }: SkillPileItem) => ({
    opacity: 0,
    x: startX,
    y: -420,
    rotate: rotate * -3,
    scale: 0.86,
    filter: 'blur(7px)',
  }),
  visible: ({ rotate }: SkillPileItem) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 82,
      damping: 9,
      mass: 1.45,
    },
  }),
};

const Home = ({ isScreenSupported }: ScreenSupportProps) => {

  const [scrollWidth, setScrollWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollWidth(scrollPercent);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 z-[999] rounded-full transition-all duration-200 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />

      <div
        id="about"
        className="relative isolate flex w-full flex-col items-center overflow-hidden px-6 pb-20 pt-20 text-black dark:text-white sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28"
      >
        <div className="relative z-10 mx-auto grid w-full max-w-[100rem] items-start gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(540px,0.95fr)] lg:gap-44 xl:gap-56">
          <div className="flex max-w-4xl flex-col gap-8">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.1)}
              viewport={revealViewport}
              className="hero-title text-[clamp(3.5rem,7vw,5.25rem)] leading-[0.95]"
            >
              <span className="block font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F] sm:text-base">I&apos;m</span>
              <span className="mt-2 block">ROHAN</span>
            </motion.h1>

            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: '78%' }}
              transition={revealTransition()}
              viewport={revealViewport}
              className="h-0.5 bg-gradient-to-r from-[#E9A5F1] via-[#16C47F] to-transparent border-none"
            />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.2)}
              viewport={revealViewport}
              className="max-w-3xl text-xl font-semibold leading-relaxed sm:text-2xl"
            >
              Full-stack product engineer building complex systems that connect thoughtful interfaces, reliable backend architecture, AI workflows and production infrastructure.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.3)}
              viewport={revealViewport}
              className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg"
            >
              From React and TypeScript to PostgreSQL, Docker and AWS, I take products from early ideas to secure, maintainable software.
            </motion.p>

            <div className="mt-6 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
              <motion.a
                href="#contact"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={revealTransition(0.4)}
                viewport={revealViewport}
                className="relative flex min-w-56 items-center overflow-hidden rounded-full bg-[#E9A5F1] px-5 py-3 pr-12 text-sm text-black"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <p className="text-base font-semibold">Let&apos;s Build Something</p>
                <span className="absolute inset-y-0 right-5 flex w-6 items-center justify-center" aria-hidden="true">
                  <motion.span
                    className="absolute flex items-center"
                    animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                    transition={hoverIconTransition}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                  <motion.span
                    className="absolute flex items-center"
                    animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                    transition={hoverIconTransition}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
              </motion.a>
            </div>
          </div>

          <motion.div
            variants={skillChipContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="relative min-h-[38rem] w-full justify-self-stretch overflow-hidden rounded-[2rem] border border-zinc-200 bg-[radial-gradient(circle_at_20%_10%,rgba(233,165,241,0.22),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.92),rgba(250,250,250,0.58))] p-6 shadow-[0_32px_90px_rgba(15,23,42,0.12)] backdrop-blur dark:border-zinc-800 dark:bg-[radial-gradient(circle_at_20%_10%,rgba(22,196,127,0.16),transparent_34%),linear-gradient(145deg,rgba(9,9,11,0.88),rgba(0,0,0,0.58))] sm:p-8"
            aria-label="Technical skills"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#16C47F]/25"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 top-16 h-1 w-28 rounded-full bg-gradient-to-r from-[#E9A5F1] to-[#16C47F]"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={revealViewport}
              transition={revealTransition(0.15)}
              style={{ transformOrigin: 'left' }}
            />
            <div className="pointer-events-none absolute inset-x-8 bottom-8 h-24 rounded-[50%] bg-gradient-to-t from-zinc-300/60 to-transparent blur-2xl dark:from-white/10" />
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
            >
              Skills Collection
            </motion.p>
            <div className="pointer-events-none absolute inset-x-10 bottom-12 h-1 rounded-full bg-zinc-950/10 dark:bg-white/10" />
            {skillPile.map((skill) => (
              <motion.span
                key={skill.label}
                custom={skill}
                variants={skillChip}
                whileHover={{ y: -12, scale: 1.06, rotate: 0, zIndex: 40 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="absolute -translate-x-1/2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-zinc-800 shadow-[0_18px_34px_rgba(15,23,42,0.16)] dark:border-zinc-800 dark:bg-black dark:text-zinc-200"
                style={{
                  left: skill.left,
                  bottom: skill.bottom,
                  zIndex: skill.zIndex,
                }}
              >
                {skill.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-24 grid w-full max-w-[94rem] items-center gap-12 sm:mt-28 lg:mt-32 lg:grid-cols-[minmax(480px,1.1fr)_minmax(360px,0.65fr)] lg:gap-16">
          {isScreenSupported && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.1)}
              viewport={revealViewport}
              className="relative isolate mx-auto h-[34rem] w-full max-w-[52rem] overflow-hidden rounded-[2.25rem] border border-zinc-200/80 bg-[radial-gradient(circle_at_50%_48%,rgba(22,196,127,0.10),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.92),rgba(250,250,250,0.68))] shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur dark:border-zinc-800 dark:bg-[radial-gradient(circle_at_50%_48%,rgba(22,196,127,0.12),transparent_34%),linear-gradient(145deg,rgba(9,9,11,0.88),rgba(0,0,0,0.68))]"
              aria-label="Developer toolkit visual"
            >
              <div className="absolute inset-x-6 top-6 z-40 flex items-start justify-between gap-5">
                <div>
                  <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">Toolkit</p>
                  <p className="mt-1.5 text-sm font-semibold text-zinc-600 dark:text-zinc-300">A focused stack for end-to-end delivery.</p>
                </div>
                <div className="flex flex-wrap justify-end gap-2" aria-label="Toolkit capabilities">
                  {['Frontend', 'Backend', 'Cloud'].map((capability) => (
                    <span key={capability} className="rounded-full border border-zinc-200/90 bg-white/75 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-zinc-600 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/75 dark:text-zinc-300">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-[52%] z-[8] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(22,196,127,0.18),rgba(22,196,127,0.05)_48%,transparent_72%)]" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full border border-[#16C47F]/10" aria-hidden="true" />
              <div className="pointer-events-none absolute left-1/2 top-[75%] z-[9] h-4 w-48 -translate-x-1/2 rounded-full bg-zinc-950/15 blur-xl dark:bg-white/10" aria-hidden="true" />

              <motion.img
                src={assetPath('/developer-character.webp')}
                alt="Seated developer illustration"
                draggable={false}
                loading="lazy"
                decoding="async"
                className="absolute left-1/2 top-[52%] z-30 w-[min(44%,21rem)] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_28px_34px_rgba(15,23,42,0.22)]"
              />

              <div className="absolute inset-0 z-10 [transform-style:preserve-3d]">
              <BrandIconBadge
                name="React"
                slug="react"
                color="61DAFB"
                angle={0}
              />

              <BrandIconBadge
                name="GitHub"
                slug="github"
                color="181717"
                angle={33}
              />

              <BrandIconBadge
                name="JavaScript"
                slug="javascript"
                color="F7DF1E"
                angle={65}
              />

              <BrandIconBadge
                name="Node.js"
                slug="nodedotjs"
                color="339933"
                angle={98}
              />

              <BrandIconBadge
                name="MongoDB"
                slug="mongodb"
                color="47A248"
                angle={131}
              />

              <BrandIconBadge
                name="Visual Studio Code"
                src="/icons8-vs-code-48.png"
                angle={164}
              />

              <BrandIconBadge
                name="PostgreSQL"
                slug="postgresql"
                color="336791"
                angle={196}
              />

              <BrandIconBadge
                name="Redis"
                slug="redis"
                color="DC382D"
                angle={229}
              />

              <BrandIconBadge
                name="AWS"
                slug="amazonwebservices"
                color="232F3E"
                src="/aws.svg"
                angle={262}
              />

              <BrandIconBadge
                name="Cloudflare"
                slug="cloudflare"
                color="F38020"
                angle={295}
              />

              <BrandIconBadge
                name="Solidity"
                slug="solidity"
                color="363636"
                angle={327}
              />
              </div>
            </motion.div>
          )}

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={springRevealTransition(0.2)}
            viewport={revealViewport}
            className="mx-auto w-full max-w-md rounded-3xl border border-zinc-200 bg-white/85 p-6 text-black shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur dark:border-zinc-800 dark:bg-black/65 dark:text-white sm:p-8 lg:mx-0 lg:translate-x-44 xl:translate-x-64"
          >
            <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">Bio</p>
            <div className="mt-5 grid gap-3 text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <span className="rounded-2xl bg-zinc-100 px-4 py-3 text-center dark:bg-zinc-900">25 year old</span>
              <span className="rounded-2xl bg-zinc-100 px-4 py-3 text-center dark:bg-zinc-900">Post-graduated</span>
            </div>
            <p className="mt-7 text-xl font-bold leading-snug">
              <span className="mr-1 align-[-0.18em] text-5xl leading-none text-[#16C47F]">&ldquo;</span>
              Great things are built with consistency, curiosity, and the courage to keep improving.
              <span className="ml-1 align-[-0.32em] text-5xl leading-none text-[#16C47F]">&rdquo;</span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
