import type { ReactNode } from "react";
import { projects } from "../data/projects";
import { ezyrExperience } from "../data/experience";
import { engineStages, challenges, ownership } from "../data/ezyrCase";
import { assetPath } from "../lib/assetPath";
import type { Project } from "../types/project";

const email = "mailto:rohansharmadutt876@gmail.com";
const github = "https://github.com/rohnn-afk";
const linkedin = "https://www.linkedin.com/in/rohandutt904010/";
const home = import.meta.env.BASE_URL;
const caseUrl = `${home}experience/ezyr/`;
const Arrow = () => <span aria-hidden="true">↗</span>;
function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <Arrow />
    </a>
  );
}
function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="masthead container">
        <a className="wordmark" href={home} aria-label="Rohan Sharma home">
          rohan sharma<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={`${home}#work`}>Work</a>
          <a href={`${home}#about`}>About</a>
          <External href={assetPath("/Rohan-Sharma-Resume.pdf")}>
            Résumé
          </External>
          <a className="nav-contact" href={`${home}#contact`}>
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer className="container footer">
      <a className="wordmark" href={home}>
        rohan sharma.
      </a>
      <p>Software, thoughtfully built.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
function Label({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
function Pipeline() {
  return (
    <figure className="pipeline">
      <div className="pipeline-heading">
        <span>THE NEURON ENGINE</span>
        <span>CONCEPTUAL SYSTEM / 01</span>
      </div>
      <div className="pipeline-nodes">
        <div>
          <span className="node-icon" aria-hidden="true">
            ▦
          </span>
          <strong>Visual canvas</strong>
          <small>Structure · data · behavior</small>
        </div>
        <span className="connector" aria-hidden="true">
          →
        </span>
        <div className="engine-node">
          <span className="node-icon" aria-hidden="true">
            ⌘
          </span>
          <strong>Neuron Engine</strong>
          <small>Interpret · resolve · generate</small>
        </div>
        <span className="connector" aria-hidden="true">
          →
        </span>
        <div>
          <span className="node-icon" aria-hidden="true">
            ↗
          </span>
          <strong>Next.js application</strong>
          <small>Validate · build · deploy</small>
        </div>
      </div>
      <figcaption>
        <span className="status-dot" /> From visual intent to executable
        software.<span>React / Next.js / AWS</span>
      </figcaption>
    </figure>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Label>04 / Start a conversation</Label>
        <div className="contact-grid">
          <h2>
            Something worth
            <br />
            <em>building together?</em>
          </h2>
          <div>
            <p>
              For product engineering, full-stack development, and thoughtful
              frontend work.
            </p>
            <a className="button light" href={email}>
              Email me <Arrow />
            </a>
            <a className="email-address" href={email}>
              rohansharmadutt876@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <span>New Delhi, India</span>
          <div>
            <External href={linkedin}>LinkedIn</External>
            <External href={github}>GitHub</External>
            <External href={assetPath("/Rohan-Sharma-Resume.pdf")}>
              Résumé
            </External>
          </div>
        </div>
      </div>
    </section>
  );
}
const summaries: Record<string, string> = {
  "ViewCount SaaS": "A clearer view of what happens on the web.",
  "09-Fitness.AI": "Personal fitness plans, through conversation.",
  "Savana Dating Web App": "From a first connection to a live conversation.",
};
function ProjectPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project">
      <a
        className={`project-image project-image-${index}`}
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <img
          src={assetPath(
            `/${["viewcount", "fitness", "savana"][index]}-1280.webp`,
          )}
          srcSet={`${assetPath(`/${["viewcount", "fitness", "savana"][index]}-640.webp`)} 640w, ${assetPath(`/${["viewcount", "fitness", "savana"][index]}-1280.webp`)} 1280w`}
          sizes="(min-width: 1440px) 600px, (min-width: 640px) 45vw, 85vw"
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
          width="1600"
          height="1000"
        />
        <span className="image-link" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="project-content">
        <div className="project-meta">
          <span>
            0{index + 2} / {project.category}
          </span>
          <span>{project.role}</span>
        </div>
        <h3>
          <External href={project.websiteUrl}>{project.title}</External>
        </h3>
        <p className="project-summary">
          {summaries[project.title] || project.description}
        </p>
        <ul className="tags" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <details>
          <summary>
            Inside the project <span aria-hidden="true">+</span>
          </summary>
          <div className="project-detail">
            <h4>Product & contribution</h4>
            <p>{project.opportunity || project.description}</p>
            {project.contribution && <p>{project.contribution}</p>}
            <h4>Implementation</h4>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="content-gap">
              [NEEDS CONTENT: {project.title} — key tradeoffs and evidenced
              outcome
              {project.repositoryUrl
                ? ""
                : ", original contribution and repository URL"}
              .]
            </p>
            {project.repositoryUrl && (
              <External className="text-link" href={project.repositoryUrl}>
                View source on GitHub
              </External>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
export function Portfolio() {
  const selection = [projects[1], projects[0], projects[2]];
  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="hero container">
          <div className="hero-kicker">
            <Label>Software engineer / Full-stack & product</Label>
            <span className="location">New Delhi, India ↗</span>
          </div>
          <div className="hero-grid">
            <h1>
              Thoughtful interfaces.
              <br />
              <em>Serious engineering.</em>
            </h1>
            <div className="hero-aside">
              <span className="small-rule" />
              <p>
                I build full-stack products for teams turning complex ideas into
                working software.
              </p>
              <p className="hero-proof">
                Previously Technical Lead at Ezyr — from visual canvas to
                generated applications and cloud deployment.
              </p>
              <div className="actions">
                <a className="button" href="#work">
                  Explore my work <span aria-hidden="true">↓</span>
                </a>
                <External className="text-link" href={github}>
                  GitHub
                </External>
                <External className="text-link" href={linkedin}>
                  LinkedIn
                </External>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Interfaces. Systems. Everything in between.</span>
            <a href="#work">Selected work below ↓</a>
          </div>
        </section>
        <section id="work" className="container section work-section">
          <div className="section-heading">
            <Label>01 / Selected work</Label>
            <p>A closer look at the things I build.</p>
          </div>
          <article className="featured">
            <div className="featured-copy">
              <div className="feature-meta">
                <span>Featured engineering case study</span>
                <span>2025–2026</span>
              </div>
              <h2>
                From canvas
                <br />
                to <em>running code.</em>
              </h2>
              <p>
                At Ezyr, I built the Neuron Engine: the system that turns visual
                application definitions into complete Next.js projects.
              </p>
              <div className="feature-role">
                Ezyr / Technical Lead
                <br />
                <span>
                  Application generation · AI systems · Cloud infrastructure
                </span>
              </div>
              <a className="button light" href={caseUrl}>
                Explore the case study <Arrow />
              </a>
            </div>
            <a
              className="featured-visual"
              href={caseUrl}
              aria-label="Explore Ezyr's Neuron Engine case study"
            >
              <Pipeline />
              <span className="figure-note">
                01 — A conceptual view of the canvas-to-code lifecycle.
              </span>
            </a>
          </article>
          <div className="project-grid">
            {selection.map((project, index) => (
              <ProjectPreview
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
          <div className="more-work">
            <Label>Also built</Label>
            {[projects[3], projects[4]].map((project) => (
              <div key={project.title}>
                <External href={project.websiteUrl}>{project.title}</External>
                <p>{project.category}</p>
                <span>{project.stack.join(" / ")}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container about-grid">
            <div>
              <Label>02 / Behind the work</Label>
              <h2>
                A builder,
                <br />
                <em>across the stack.</em>
              </h2>
              <p className="about-intro">
                I’m Rohan Sharma, a full-stack product engineer based in New
                Delhi.
              </p>
              <p>
                I work across the boundaries of a product: the interface someone
                uses, the systems behind it, and the infrastructure that keeps
                it running.
              </p>
              <p>
                At Ezyr, that meant growing from building the visual editor as
                an intern to owning application generation, AI systems, and
                production delivery as Technical Lead.
              </p>
              <External
                className="text-link"
                href={assetPath("/Rohan-Sharma-Resume.pdf")}
              >
                Read my résumé
              </External>
            </div>
            <div className="capabilities">
              <Label>What I bring to a product</Label>
              {[
                [
                  "01",
                  "Interfaces with depth",
                  "React, Next.js and TypeScript — from visual canvases to responsive product experiences.",
                ],
                [
                  "02",
                  "Connected systems",
                  "Node.js, PostgreSQL and MongoDB; APIs, realtime interactions and stateful AI workflows.",
                ],
                [
                  "03",
                  "Delivery end to end",
                  "Docker, AWS and CI/CD — connecting application architecture to production infrastructure.",
                ],
              ].map(([number, title, description]) => (
                <div className="capability" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container experience">
            <Label>03 / Experience</Label>
            {ezyrExperience.roles.map((role) => (
              <article key={role.title}>
                <p className="experience-date">
                  {role.period}
                  <span>Ezyr · Remote</span>
                </p>
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                </div>
              </article>
            ))}
            <div className="education">
              <Label>Education</Label>
              <p>
                Master of Computer Applications <span>2023–2025</span>
              </p>
              <p>
                Bachelor of Computer Applications <span>2019–2022</span>
              </p>
              <p>Jagan Institute of Management Studies (GGSIPU), Delhi</p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="case-section">
      <div>
        <Label>{number}</Label>
        <h2>{title}</h2>
      </div>
      <div className="case-body">{children}</div>
    </section>
  );
}
export function CaseStudy() {
  return (
    <div id="top">
      <Header />
      <main id="main" className="case-page">
        <div className="container">
          <a className="back-link" href={`${home}#work`}>
            ← Back to selected work
          </a>
          <header className="case-hero">
            <Label>Ezyr / Engineering case study / 2025–2026</Label>
            <h1>
              The Neuron
              <br />
              <em>Engine.</em>
            </h1>
            <p>
              Turning a visual application model into independently runnable
              Next.js software.
            </p>
            <div className="case-meta">
              <span>Role / Technical Lead</span>
              <span>Focus / Application generation</span>
              <External href="https://ezyr.io/">Visit Ezyr</External>
            </div>
          </header>
          <Pipeline />
          <CaseSection
            number="01 / The problem"
            title="The canvas described intent."
          >
            <p>
              Each Ezyr project described an application’s structure, behavior,
              data relationships and runtime requirements. The engine had to
              preserve that meaning while translating it into framework-specific
              software.
            </p>
            <p>
              Static file substitution was not enough: every project could have
              a different route hierarchy, component tree, workflow graph and
              dependency set.
            </p>
          </CaseSection>
          <CaseSection
            number="02 / The approach"
            title="Clear contracts. Traceable output."
          >
            <p>
              The architecture separated editor state, interpretation, code
              generation and deployment, with validation at the boundaries.
            </p>
            <ol className="engine-stages">
              {engineStages.map((stage) => (
                <li key={stage.name}>
                  <h3>{stage.name}</h3>
                  <p>{stage.description}</p>
                </li>
              ))}
            </ol>
            <h3>Deployment handoff</h3>
            <p>
              Validated projects entered a separate pipeline that built Docker
              images, stored them in AWS ECR, and launched isolated environments
              with controlled secrets, restricted networking, HTTPS routing,
              health checks and rollback support.
            </p>
          </CaseSection>
          <CaseSection
            number="03 / Engineering challenges"
            title="Preserving meaning across systems."
          >
            {challenges.map((challenge) => (
              <div className="case-item" key={challenge.title}>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            ))}
          </CaseSection>
          <CaseSection number="04 / My contribution" title="Owned end to end.">
            <ul className="ownership">
              {ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted">
              Technical ownership and production delivery; this does not imply
              large-team people management.
            </p>
          </CaseSection>
          <CaseSection
            number="05 / The outcome"
            title="Visual composition to deployment."
          >
            <p>
              The Neuron Engine produced complete Next.js projects from
              structured application definitions. The capability library spanned
              21 application templates and 268 indexed reusable blocks, with 230
              passing automated tests across the wider orchestration and
              generation platform.
            </p>
            <aside className="disclosure">
              <h3>Conceptual disclosure</h3>
              <p>
                This case study omits proprietary source code, internal
                endpoints, credentials, customer information and
                implementation-specific architecture.
              </p>
            </aside>
            <p className="content-gap">
              [NEEDS CONTENT: approved product screenshots and lessons learned.]
            </p>
          </CaseSection>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
