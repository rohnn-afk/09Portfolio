import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  GitBranch,
  Layers3,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ezyrExperience } from '../data/experience';
import { fadeUp, revealTransition, revealViewport } from '../lib/animations';

const modelCapabilities = [
  'Pages, routes and nested element hierarchies',
  'Component properties, styling and responsive rules',
  'Variables, state references and data bindings',
  'Events, workflows and conditional execution paths',
  'Database operations and external API integrations',
  'Project configuration and runtime requirements',
] as const;

const engineStages = [
  {
    name: 'Validate and normalize',
    description:
      'Validate the canvas definition, reject unsupported or inconsistent state, and normalize valid input into a predictable internal application model.',
  },
  {
    name: 'Interpret the model',
    description:
      'Resolve what each page, element, binding and workflow means in context—not as isolated canvas nodes, but as one connected application.',
  },
  {
    name: 'Resolve capabilities',
    description:
      'Map validated constructs to known component and block contracts, then determine the state, handlers, imports and supporting code each capability requires.',
  },
  {
    name: 'Materialize behavior',
    description:
      'Translate events and workflow graphs into executable behavior while preserving identifiers, inputs and outputs across every data boundary.',
  },
  {
    name: 'Assemble the project',
    description:
      'Generate routes, React trees, styles, integrations, utilities, dependencies and configuration as a complete, independently runnable Next.js project.',
  },
  {
    name: 'Validate the output',
    description:
      'Run deterministic structural checks before handing a generated application to the container build and deployment pipeline.',
  },
] as const;

const challenges = [
  {
    title: 'Preserving meaning across representations',
    description:
      'A user action had to remain semantically consistent as editor configuration, structured workflow data, an internal capability, generated source and running behavior.',
  },
  {
    title: 'Extensibility without conditional sprawl',
    description:
      'Capability contracts kept component-specific behavior behind stable boundaries so the generator could evolve without accumulating fragile one-off branches.',
  },
  {
    title: 'Deterministic, debuggable output',
    description:
      'Known inputs needed to produce structurally consistent projects, with failures traceable to the originating application definition rather than hidden inside opaque generation.',
  },
  {
    title: 'Data lineage across workflows',
    description:
      'Bindings and operations had to reference valid variables, inputs and prior outputs across the canvas, workflow graph and generated application.',
  },
] as const;

const ownership = [
  'Defined the contract between visual-canvas data and generated applications.',
  'Designed and implemented the Neuron Engine and its deterministic generation boundaries.',
  'Translated page, element, workflow and data models into executable application code.',
  'Built resolution for components, dependencies, imports and project configuration.',
  'Connected validated project output to the AWS container deployment pipeline.',
  'Diagnosed failures across the complete canvas-to-code lifecycle and evolved the architecture as new capabilities were introduced.',
] as const;

const EzyrCaseStudy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Ezyr Case Study · Rohan Portfolio';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="relative z-10 w-full text-black dark:text-white">
      <nav
        className="mx-auto flex w-full max-w-[92rem] items-center justify-between px-6 py-6 sm:px-10 lg:px-16"
        aria-label="Case study navigation"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2.5 text-sm font-bold backdrop-blur transition hover:border-[#16C47F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] dark:border-zinc-800 dark:bg-zinc-950/80"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to portfolio
        </Link>
        <a
          href={ezyrExperience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-zinc-600 hover:text-[#16C47F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] dark:text-zinc-300"
        >
          Visit Ezyr
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </nav>

      <section className="px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={revealTransition()}
          className="mx-auto w-full max-w-[92rem]"
        >
          <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">
            Ezyr · Engineering case study
          </p>
          <h1 className="mt-6 max-w-7xl font-sora text-[clamp(3.6rem,7.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em]">
            The Neuron Engine
          </h1>
          <p className="mt-6 max-w-5xl font-sora text-[clamp(1.7rem,3vw,3.25rem)] font-semibold leading-tight tracking-[-0.025em] text-zinc-700 dark:text-zinc-300">
            Turning a visual application model into production-ready Next.js software.
          </p>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl sm:leading-9">
            I designed and implemented Ezyr&apos;s core interpretation and code-generation system. It transformed the declarative data produced by the visual canvas into complete, independently runnable applications—then handed validated output to an isolated deployment pipeline.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/75 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-950/65 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 lg:grid-cols-[0.68fr_1fr] lg:gap-20">
          <div>
            <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">The problem</p>
            <h2 className="mt-5 font-sora text-4xl font-bold leading-tight sm:text-5xl">
              The canvas described intent—not source code.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>
              Each Ezyr project was a declarative description of an application: its structure, behavior, data relationships and runtime requirements. The engine had to preserve that meaning while translating it into framework-specific software.
            </p>
            <p>
              Static file substitution was not enough. Every project could contain a different route hierarchy, component tree, workflow graph and dependency set. The system therefore behaved more like a domain-specific interpreter and application compiler than a conventional template generator.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {modelCapabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white/80 p-4 text-sm font-semibold leading-6 dark:border-zinc-800 dark:bg-black/60">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#16C47F]" aria-hidden="true" />
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto w-full max-w-[92rem]">
          <div className="max-w-5xl">
            <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">Conceptual pipeline</p>
            <h2 className="mt-5 font-sora text-4xl font-bold leading-tight sm:text-5xl">
              A controlled path from visual intent to executable software.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The architecture separated editor state, interpretation, code generation and deployment. Each boundary had a clear contract, making invalid states easier to reject and failures easier to trace.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {engineStages.map((stage, index) => (
              <motion.article
                key={stage.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={revealTransition(0.06 * index)}
                viewport={revealViewport}
                className="relative rounded-[2rem] border border-zinc-200 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] dark:border-zinc-800 dark:bg-zinc-950/75 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sora text-sm font-bold text-[#16C47F]">Stage {String(index + 1).padStart(2, '0')}</span>
                  {index < engineStages.length - 1 && <ArrowRight className="h-5 w-5 text-zinc-300 dark:text-zinc-700" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 font-sora text-2xl font-bold">{stage.name}</h3>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{stage.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <ArrowDown className="h-6 w-6 text-[#16C47F]" aria-hidden="true" />
            <div className="mt-3 w-full rounded-[2rem] border border-[#16C47F]/25 bg-[#16C47F]/[0.08] p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr] lg:items-center">
                <div>
                  <p className="font-sora text-sm font-bold uppercase tracking-[0.16em] text-[#16C47F]">Deployment handoff</p>
                  <h3 className="mt-3 font-sora text-2xl font-bold sm:text-3xl">Generation ended before infrastructure began.</h3>
                </div>
                <p className="leading-7 text-zinc-700 dark:text-zinc-300">
                  Validated projects entered a separate pipeline that built Docker images, stored them in AWS ECR, and launched isolated environments with controlled secrets, restricted networking, HTTPS routing, health checks and rollback support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-black px-6 py-24 text-white dark:border-zinc-800 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto w-full max-w-[92rem]">
          <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">The critical boundary</p>
          <blockquote className="mt-6 max-w-6xl font-sora text-[clamp(2.25rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
            The canvas described what the application meant. The Neuron Engine determined how that meaning became executable software.
          </blockquote>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Layers3, label: 'Stable schemas between representations' },
              { icon: GitBranch, label: 'Traceable identifiers across every stage' },
              { icon: Workflow, label: 'Validation gates before generation and deployment' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5">
                <Icon className="h-6 w-6 shrink-0 text-[#16C47F]" aria-hidden="true" />
                <p className="font-semibold leading-6">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto w-full max-w-[92rem]">
          <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">Engineering challenges</p>
          <h2 className="mt-5 max-w-5xl font-sora text-4xl font-bold leading-tight sm:text-5xl">
            The difficult work was preserving semantics—not writing files.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article key={challenge.title} className="rounded-[2rem] border border-zinc-200 bg-white/82 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-zinc-800 dark:bg-zinc-950/75 sm:p-8">
                <span className="font-sora text-sm font-bold text-[#16C47F]">Challenge {String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-sora text-2xl font-bold">{challenge.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/75 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-950/65 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 lg:grid-cols-[0.68fr_1fr] lg:gap-20">
          <div>
            <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">My ownership</p>
            <h2 className="mt-5 font-sora text-4xl font-bold leading-tight sm:text-5xl">Designed, implemented and integrated end to end.</h2>
            <p className="mt-6 leading-7 text-zinc-500 dark:text-zinc-400">
              I later owned technical direction and production delivery after my promotion from Frontend Developer Intern to Technical Lead. This describes technical ownership, not large-team people management.
            </p>
          </div>
          <ul className="grid gap-4">
            {ownership.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white/80 p-5 text-base font-semibold leading-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70 sm:text-lg">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#16C47F] text-white">
                  <Check size={16} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-[92rem] gap-8 rounded-[2.5rem] bg-black p-7 text-white shadow-[0_32px_90px_rgba(15,23,42,0.18)] dark:bg-white dark:text-black sm:p-10 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:p-14">
          <div>
            <p className="font-manrope text-sm font-extrabold uppercase tracking-[0.22em] text-[#16C47F]">Outcome</p>
            <h2 className="mt-5 font-sora text-4xl font-bold leading-tight sm:text-5xl">
              Ezyr&apos;s core path from visual composition to production deployment.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 dark:text-zinc-700">
              The Neuron Engine produced complete Next.js projects from structured application definitions, using a capability library spanning 21 application templates and 268 indexed reusable blocks. The wider orchestration and generation platform maintained 230 passing automated tests.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 dark:border-black/10 dark:bg-black/5">
            <ShieldCheck className="h-9 w-9 text-[#16C47F]" aria-hidden="true" />
            <p className="mt-5 font-sora text-xl font-bold">Conceptual disclosure</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300 dark:text-zinc-700">
              This case study intentionally excludes proprietary source code, internal endpoints, credentials, customer information and implementation-specific architecture.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EzyrCaseStudy;
