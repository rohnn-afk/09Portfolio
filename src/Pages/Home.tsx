import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  fadeUp,
  hoverIconTransition,
  revealTransition,
  revealViewport,
  slideInRight,
  springRevealTransition,
} from '../lib/animations';

type ScreenSupportProps = {
  isScreenSupported: boolean;
};

const useParallax = (multiplier: number) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 12 });
  const y = useSpring(rawY, { stiffness: 40, damping: 12 });

  return useMemo(
    () => ({ rawX, rawY, x, y, multiplier }),
    [rawX, rawY, x, y, multiplier],
  );
};

type BrandIconBadgeProps = {
  name: string;
  slug: string;
  color: string;
  src?: string;
  className: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  parallax: ReturnType<typeof useParallax>;
};

const simpleIconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const brandIconSizes = {
  sm: {
    shell: 'h-14 w-14',
    icon: 'h-14 w-14',
  },
  md: {
    shell: 'h-16 w-16',
    icon: 'h-16 w-16',
  },
  lg: {
    shell: 'h-20 w-20',
    icon: 'h-20 w-20',
  },
  xl: {
    shell: 'h-24 w-24',
    icon: 'h-24 w-24',
  },
};

const BrandIconBadge = ({ name, slug, color, src, className, size, parallax }: BrandIconBadgeProps) => (
  <motion.div
    className={`absolute grid place-items-center ${brandIconSizes[size].shell} ${className}`}
    style={{ x: parallax.x, y: parallax.y }}
    aria-label={name}
  >
    <img
      src={src ?? simpleIconUrl(slug, color)}
      alt=""
      draggable={false}
      loading="lazy"
      className={`object-contain drop-shadow-[0_18px_26px_rgba(15,23,42,0.20)] dark:drop-shadow-[0_18px_26px_rgba(255,255,255,0.08)] ${brandIconSizes[size].icon}`}
      aria-hidden="true"
    />
  </motion.div>
);

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
      type: 'spring',
      stiffness: 82,
      damping: 9,
      mass: 1.45,
    },
  }),
};

const Home = ({ isScreenSupported }: ScreenSupportProps) => {

  const [scrollWidth, setScrollWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax items with different strength
  const imageParallax = useParallax(1.2);
  const reactParallax = useParallax(4.0);
  const githubParallax = useParallax(4.0);
  const jsParallax = useParallax(6.6);
  const nodeParallax = useParallax(7.9);
  const mongoParallax = useParallax(4.7);
  const vscodeParallax = useParallax(5.5);
  const postgresParallax = useParallax(5.0);
  const redisParallax = useParallax(6.1);
  const awsParallax = useParallax(4.4);
  const cloudflareParallax = useParallax(5.7);
  const solidityParallax = useParallax(6.8);
  const bioParallax = useParallax(1.4);

  const items = useMemo(() => ({
    image: imageParallax,
    react: reactParallax,
    github: githubParallax,
    js: jsParallax,
    node: nodeParallax,
    mongo: mongoParallax,
    vscode: vscodeParallax,
    postgres: postgresParallax,
    redis: redisParallax,
    aws: awsParallax,
    cloudflare: cloudflareParallax,
    solidity: solidityParallax,
    bio: bioParallax,
  }), [
    imageParallax,
    reactParallax,
    githubParallax,
    jsParallax,
    nodeParallax,
    mongoParallax,
    vscodeParallax,
    postgresParallax,
    redisParallax,
    awsParallax,
    cloudflareParallax,
    solidityParallax,
    bioParallax,
  ]);



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

  // Apply cursor position to all items
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = e.clientX - innerWidth / 2;
      const offsetY = e.clientY - innerHeight / 2;

      Object.values(items).forEach(({ rawX, rawY, multiplier }) => {
        rawX.set(offsetX * 0.006 * multiplier);
        rawY.set(offsetY * 0.006 * multiplier);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [items]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 z-[999] rounded-full transition-all duration-200 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />

      <div
        id="about"
        className="relative isolate flex w-full flex-col items-center overflow-hidden px-6 py-40 text-black dark:text-white sm:px-10 sm:py-48 lg:px-16 lg:py-56"
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
              <span className="block text-xl font-extrabold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:text-2xl">I&apos;m</span>
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
              Full-stack developer focused on shipping reliable web products with clean interfaces, typed systems, and backend logic that scales beyond the first demo.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.3)}
              viewport={revealViewport}
              className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg"
            >
              I work across React, TypeScript, Node.js, databases, AI workflows, and deployment pipelines - turning product ideas into fast, maintainable applications.
            </motion.p>

            <div className="mt-6 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
              <motion.button
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={revealTransition(0.4)}
                viewport={revealViewport}
                className="relative flex w-40 min-w-36 items-center overflow-hidden rounded-full bg-[#E9A5F1] px-4 py-2 pr-7 text-sm text-black sm:w-44"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <p className="text-base font-semibold">Reach Out</p>
                <motion.div
                  className="absolute right-5 top-2 h-2 w-2 text-black"
                  animate={isHovered ? { x: 15, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={hoverIconTransition}
                >
                  <ArrowRight />
                </motion.div>
                <motion.div
                  className="absolute right-5 top-2 h-2 w-2 text-black"
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                  transition={hoverIconTransition}
                >
                  <ArrowRight />
                </motion.div>
              </motion.button>
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

        <div className="relative z-10 mx-auto mt-48 grid w-full max-w-[90rem] items-center gap-12 sm:mt-56 lg:mt-72 lg:grid-cols-[minmax(420px,0.95fr)_minmax(360px,0.65fr)] lg:gap-20">
          {isScreenSupported && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={revealTransition(0.1)}
              viewport={revealViewport}
              className="relative mx-auto h-[42rem] w-full max-w-[54rem] overflow-visible"
              aria-label="Developer toolkit visual"
            >
              <motion.img
                src="/7d0944e4-ee5e-48d9-99a9-a9f8eaece544.jpg"
                alt="Landscape illustration"
                draggable={false}
                className="absolute bottom-12 left-1/2 w-[min(46%,22rem)] -translate-x-1/2 rounded-3xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.20)]"
              />

              <motion.img
                src="/React-icon.svg"
                alt="React"
                draggable={false}
                className="absolute -bottom-12 left-0 w-32 drop-shadow-xl md:w-40"
                style={{ x: items.react.x, y: items.react.y }}
              />

              <motion.img
                src="/github-mark.svg"
                alt="GitHub"
                draggable={false}
                className="absolute bottom-36 right-12 w-24 md:w-28"
                style={{ x: items.github.x, y: items.github.y }}
              />

              <motion.img
                src="/icons8-javascript.gif"
                alt="JavaScript"
                draggable={false}
                className="absolute left-8 -top-16 w-12 rounded-xl md:w-14"
                style={{ x: items.js.x, y: items.js.y }}
              />

              <motion.img
                src="/icons8-node-js.svg"
                alt="Node.js"
                draggable={false}
                className="absolute -left-24 top-40 w-12 rounded-xl bg-white md:w-14"
                style={{ x: items.node.x, y: items.node.y }}
              />

              <motion.img
                src="/MongoDB_SpringGreen.png"
                alt="MongoDB"
                draggable={false}
                className="absolute -right-28 top-28 w-36 md:w-44"
                style={{ x: items.mongo.x, y: items.mongo.y }}
              />

              <motion.img
                src="/icons8-vs-code-48.png"
                alt="Visual Studio Code"
                draggable={false}
                className="absolute left-40 -top-10 w-12 rounded-xl md:w-14"
                style={{ x: items.vscode.x, y: items.vscode.y }}
              />

              <BrandIconBadge
                name="PostgreSQL"
                slug="postgresql"
                color="336791"
                className="-left-32 bottom-36"
                size="xl"
                parallax={items.postgres}
              />

              <BrandIconBadge
                name="Redis"
                slug="redis"
                color="DC382D"
                className="right-48 -top-14"
                size="lg"
                parallax={items.redis}
              />

              <BrandIconBadge
                name="AWS"
                slug="amazonwebservices"
                color="232F3E"
                src="/aws.svg"
                className="-bottom-16 right-12"
                size="xl"
                parallax={items.aws}
              />

              <BrandIconBadge
                name="Cloudflare"
                slug="cloudflare"
                color="F38020"
                className="-right-20 -top-10"
                size="lg"
                parallax={items.cloudflare}
              />

              <BrandIconBadge
                name="Solidity"
                slug="solidity"
                color="363636"
                className="bottom-16 left-[22rem]"
                size="md"
                parallax={items.solidity}
              />
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">Bio</p>
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
