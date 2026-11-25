import { EzyrArchitecture } from "./EzyrArchitecture";
import { ProjectMedia } from "./ProjectMedia";
import { projectMedia } from "../data/projectMedia";
import type { ReactNode } from "react";
import { projects } from "../data/projects";
import { freelanceProjects } from "../data/freelance";
import { ezyrExperience } from "../data/experience";
import { foundersLens } from "../data/foundersLens";
import {
  engineStages,
  challenges,
  ownership,
  ezyrReflection,
} from "../data/ezyrCase";
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
          <a href={`${home}#experience`}>Experience</a>
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
function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Label>05 / Contact</Label>
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
  ViewCount: "A website event analytics prototype, from SDK to dashboard.",
  "09-Fitness.AI": "A voice-guided path from fitness goals to a saved plan.",
  "Savana Dating Web App":
    "Profile discovery, mutual matches, and realtime chat.",
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
      <ProjectMedia title={project.title} {...projectMedia[project.title]} />
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
        <p className="project-contribution">
          <strong>My work</strong> {projectMedia[project.title].contribution}
        </p>
        <ul className="tags" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          <External href={project.websiteUrl}>Live demo</External>
          {project.repositoryUrl && (
            <External href={project.repositoryUrl}>GitHub</External>
          )}
        </div>
        <details>
          <summary>
            Inside the project <span aria-hidden="true">+</span>
          </summary>
          <div className="project-detail">
            {" "}
            {project.title === "ViewCount" && (
              <p className="project-state">
                Prototype — visitor and view-count definitions need correction
                before dashboard totals can be presented as validated analytics.
              </p>
            )}
            <h4>The opportunity</h4>
            <p>{project.opportunity || project.description}</p>
            <h4>My contribution</h4>
            <p>{project.contribution || project.description}</p>
            <h4>What the product does</h4>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
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
function FoundersLensExample() {
  return (
    <figure className="founders-example project-media">
      <blockquote>
        <p>Local shops complain about packaging waste. Would they pay for reusable crates?</p>
      </blockquote>
      <p><strong>Proposed test</strong> Offer a short paid pilot to five shop owners. Decide ahead of time how many commitments would justify buying inventory.</p>
      <figcaption>Illustrative conversation from the public preview.</figcaption>
    </figure>
  );
}

function FoundersLensFeature() {
  return (
    <article className="project founders-feature">
      <div className="project-content">
        <Label>Featured personal project / Full-stack engineering</Label>
        <h3><a href={assetPath(foundersLens.path)}>{foundersLens.title}</a></h3>
        <p className="project-summary">{foundersLens.description}</p>
        <p className="project-contribution">
          <strong>My work</strong> Built the founder workspace and the backend
          pipeline that queues AI requests, saves replies, and records provider usage.
        </p>
        <ul className="tags" aria-label="Technologies">
          {foundersLens.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          <a href={assetPath(foundersLens.path)}>Read case study <span aria-hidden="true">→</span></a>
          <External href={foundersLens.preview}>Public preview</External>
          <External href={foundersLens.repository}>GitHub</External>
        </div>
      </div>
      <FoundersLensExample />
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
              I build products
              <br />
              <em>from interface to infrastructure.</em>
            </h1>
            <div className="hero-aside">
              <span className="small-rule" />
              <p>
                Software engineer and product engineer for teams turning complex
                ideas into working software.
              </p>
              <p className="hero-proof">
                At Ezyr, I grew from frontend intern to Technical Lead, leading
                engineering across the application platform.
              </p>
              <div className="actions">
                <a className="button" href="#experience">
                  Explore my experience <span aria-hidden="true">↓</span>
                </a>
                <External
                  className="text-link"
                  href={assetPath("/Rohan-Sharma-Resume.pdf")}
                >
                  Résumé
                </External>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Interfaces. Systems. Everything in between.</span>
            <a href="#experience">Experience below ↓</a>
          </div>
        </section>
        <section className="container section work-section">
          <div className="section-heading">
            <Label>01 / Professional experience</Label>
            <h2>From the first canvas to technical leadership.</h2>
          </div>
          <article id="experience" className="featured">
            <div className="featured-copy">
              <div className="feature-meta">
                <span>Professional experience</span>
                <span>May 2025 — Aug 2026</span>
              </div>
              <h3>
                Ezyr
                <span className="featured-product">
                  No-code application platform
                </span>
              </h3>
              <p>
                I led engineering across Ezyr’s no-code application platform,
                from its visual editor to generated applications, AI systems,
                and cloud deployment.
              </p>
              <div className="feature-role">
                <div
                  className="role-journey"
                  aria-label="Career progression at Ezyr"
                >
                  {ezyrExperience.roles
                    .slice()
                    .reverse()
                    .map((role, index) => (
                      <div className="role-stop" key={role.title}>
                        <span className="role-stop-index">0{index + 1}</span>
                        <div>
                          <strong>{role.title}</strong>
                          <span>{role.period}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <a className="button light" href={caseUrl}>
                Explore the case study <Arrow />
              </a>
            </div>
            <div className="featured-visual">
              <EzyrArchitecture />
            </div>
          </article>
          <aside
            className="engineering-reflection"
            aria-label="A lesson from Ezyr"
          >
            <Label>A lesson from Ezyr</Label>
            <div>
              <h3>{ezyrReflection.title}</h3>
              <p>{ezyrReflection.summary}</p>
              <a
                className="text-link"
                href={`${caseUrl}#engineering-reflection`}
              >
                Read the reflection <Arrow />
              </a>
            </div>
          </aside>
        </section>
        <section
          id="work"
          className="container section work-section personal-work"
        >
          <div className="section-heading">
            <Label>02 / Personal projects</Label>
            <h2>Product thinking, applied across different systems.</h2>
          </div>
          <FoundersLensFeature />
          <div className="project-grid">
            {selection.map((project, index) => (
              <ProjectPreview
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
          <div className="more-work freelance-work">
            <div className="freelance-heading">
              <Label>03 / Freelance work</Label>
              <h2>Selected client work</h2>
            </div>
            {freelanceProjects.map((project, index) => (
              <article className="freelance-row" key={project.name}>
                <span className="freelance-index">0{index + 1}</span>
                <div className="freelance-copy">
                  <h3>{project.name}</h3>
                  <details className="freelance-scope">
                    <summary>
                      Scope & status <span aria-hidden="true">+</span>
                    </summary>
                    <p>{project.description}</p>
                    <p>{project.note}</p>
                  </details>
                </div>
                <div className="freelance-links">
                  {project.websiteUrl && (
                    <External href={project.websiteUrl}>View site</External>
                  )}
                  <External href={project.repositoryUrl}>Source</External>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container about-grid">
            <div>
              <Label>04 / About</Label>
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
                At Ezyr, I grew from building the visual editor as an intern to
                leading engineering across application generation, AI systems,
                and production delivery.
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
    <section id={`case-${number.slice(0, 2)}`} className="case-section">
      <div>
        <Label>{number}</Label>
        <h2>{title}</h2>
      </div>
      <div className="case-body">{children}</div>
    </section>
  );
}
export function FoundersLensCaseStudy() {
  const source = `${foundersLens.repository}/blob/main`;
  return (
    <div id="top">
      <Header />
      <main id="main" className="case-page">
        <div className="container">
          <a className="back-link" href={`${home}#work`}>← Back to projects</a>
          <header className="case-hero">
            <Label>Personal project / Engineering case study</Label>
            <h1>Founder’s <em>Lens.</em></h1>
            <p>{foundersLens.description}</p>
            <div className="case-meta">
              <span>Role / Full-stack Developer</span>
              <External href={foundersLens.preview}>Public preview</External>
              <External href={foundersLens.repository}>GitHub</External>
            </div>
          </header>
          <aside className="case-ownership">
            <p className="eyebrow">My contribution</p>
            <p>I built the Next.js workspace and the TypeScript pipeline behind it, from authenticated submission to background generation, response storage, and usage accounting.</p>
          </aside>
          <nav className="case-nav" aria-label="Case study sections">
            {["Product", "System design", "Request lifecycle", "SOLID in practice", "Failure handling", "Verification", "What I learned"].map((label, index) => (
              <a key={label} href={`#case-0${index + 1}`}>{label}</a>
            ))}
          </nav>
          <CaseSection number="01 / Product" title="From a promising idea to a test.">
            <p>A founder hears shop owners complain about packaging waste and considers a reusable-crate subscription. The complaint is evidence of a problem. Whether those shops will pay for a subscription is still an open question.</p>
            <FoundersLensExample />
            <p>I designed the workspace around that decision. A founder can record the idea, work through it in a conversation, and return to a saved reply when deciding what to test.</p>
          </CaseSection>
          <CaseSection number="02 / System design" title="One application, separate execution paths.">
            <p>
              I organized the backend as a modular monolith with separate API,
              dispatcher, and worker processes. Next.js owns the interaction
              with the founder. The API owns admission and workspace access.
              The dispatcher moves committed work onto the queue, and the
              worker owns generation and finalization.
            </p>
            <p>
              PostgreSQL is the source of truth for messages, attempts, and
              usage. Redis carries work between processes. This keeps provider
              latency out of the submission request and lets the worker be
              operated independently. The tradeoff is that publishing and
              execution can fail at different points, so each needs its own
              recovery rules.
            </p>
            <div className="project-links">
              <External href={`${source}/Docs/architecture/HLD.md`}>High-level design</External>
              <External href={`${source}/Docs/lld/02-api-security/openapi.yaml`}>OpenAPI specification</External>
            </div>
          </CaseSection>
          <CaseSection number="03 / Request lifecycle" title="What happens after the founder presses send?">
            <ol className="engine-stages">
              <li><h3>Accept the question</h3><p>Next.js takes the founder’s input. The Express API uses Clerk identity and workspace ownership to scope the request, then validates the payload with Zod.</p></li>
              <li><h3>Commit the work</h3><p>PostgreSQL stores the message, generation attempt, and outbox entry in one transaction. A committed request therefore has a durable record ready for dispatch even if publishing to Redis is interrupted.</p></li>
              <li><h3>Run the generation</h3><p>A separate dispatcher publishes the attempt to BullMQ on Redis. A worker claims it, loads the scoped conversation context, and calls Groq outside the database transaction.</p></li>
              <li><h3>Save the result</h3><p>The worker records provider usage and finalizes the attempt. The assistant reply is stored with the conversation so the founder can return to it.</p></li>
            </ol>
            <p>
              The queue carries a generation ID. The worker uses that reference
              to load the conversation context it is authorized to read, so
              private message text stays out of the Redis job payload.
            </p>
            <div className="project-links">
              <External href={`${source}/apps/api/src/submission/repository.ts`}>Submission transaction</External>
              <External href={`${foundersLens.repository}/tree/main/apps/dispatcher/src`}>Dispatcher source</External>
              <External href={`${foundersLens.repository}/tree/main/apps/worker/src`}>Worker source</External>
              <External href={`${source}/Docs/README.md`}>Architecture and engineering docs</External>
            </div>
          </CaseSection>
          <CaseSection number="04 / SOLID in practice" title="Provider code changes at the edge.">
            <p>
              The provider boundary is where SOLID made a practical difference.
              I wanted to exercise the whole generation path in CI without
              sending a live request or letting provider-specific behavior leak
              into the worker.
            </p>
            <div className="case-item">
              <h3>Single responsibility</h3>
              <p>The worker coordinates the attempt, the repository owns durable state transitions, and the provider adapter translates an external response into the app’s result format.</p>
            </div>
            <div className="case-item">
              <h3>Open/closed and dependency inversion</h3>
              <p>The worker receives its generation function as a dependency. The runtime can wire in Groq or a deterministic implementation without changing the worker’s lease and finalization logic.</p>
            </div>
            <div className="case-item">
              <h3>Interface segregation and substitutability</h3>
              <p>The provider contract exposes one operation, a bounded generation call that accepts a cancellation signal. Implementations share the same result shape for text, usage, and response ID. The deterministic implementation lets tests verify orchestration independently of answer quality.</p>
            </div>
            <div className="project-links">
              <External href={`${source}/apps/worker/src/founder-provider.ts`}>Provider contract and test implementation</External>
              <External href={`${source}/apps/worker/src/generation-worker.ts`}>Worker coordinator</External>
            </div>
          </CaseSection>
          <CaseSection number="05 / Failure handling" title="What retries are allowed to repeat.">
            <h3>The browser resends a question</h3>
            <p>The submission is scoped to an idempotency key and request fingerprint. A matching retry can return the original acceptance. Reusing the key for different input is rejected, so a network retry cannot silently become a second generation.</p>
            <h3>The dispatcher is interrupted</h3>
            <p>Dispatchers claim due outbox rows with PostgreSQL’s <code>FOR UPDATE SKIP LOCKED</code>. Expired claims can be picked up again, and transient publication failures use capped backoff with jitter. BullMQ uses the generation ID as the job ID, giving repeated publication attempts a stable identity.</p>
            <h3>A worker finishes after its lease expires</h3>
            <p>Finalization checks the active lease epoch so a late worker cannot overwrite a newer attempt state. Getting a response from Groq and having permission to save it are separate events.</p>
            <p>There is also a window where Groq may have done work before the system can confirm the result. A durable receipt records measured token usage when the provider reports it. If execution may have started and no receipt is available, accounting can preserve the outcome as unknown. This makes the uncertainty visible during recovery.</p>
            <div className="project-links">
              <External href={`${source}/apps/dispatcher/src/outbox-repository.ts`}>Outbox claims</External>
              <External href={`${source}/apps/worker/src/generation-repository.ts`}>Lease and finalization logic</External>
              <External href={`${source}/apps/worker/src/provider-accounting.ts`}>Provider usage accounting</External>
            </div>
          </CaseSection>
          <CaseSection number="06 / Verification" title="What I verified and how.">
            <h3>Contracts and CI</h3>
            <p>
              The design documents HTTP behavior in OpenAPI, and the implemented
              submission path validates inputs with Zod. GitHub Actions exercises
              the queue and database together using disposable PostgreSQL and
              Redis fixtures. Separate checks audit dependencies and scan for
              secrets. The staging runbook ties deployment to the tested commit
              and documents readiness checks and rollback.
            </p>
            <h3>Private data and provider limits</h3>
            <p>
              The API checks workspace ownership after authenticating the user.
              The worker reads context through a restricted PostgreSQL
              projection bound to its lease. The provider adapter assembles a
              versioned prompt from the current message and recent turns that
              fit the input budget, keeping both context and execution bounded.
            </p>
            <h3>Public preview and local acceptance</h3>
            <p>The Render deployment is a read-only product preview with an illustrative conversation. It opens without an account. The authenticated workspace and live AI are available in the local acceptance environment described in the repository.</p>
            <p>The documented local run followed a signed-in founder’s submission through Groq, saved the assistant reply, and settled <strong>804 provider-reported tokens</strong> for that request.</p>
            <div className="project-links">
              <External href={foundersLens.preview}>Explore the preview</External>
              <External href={`${source}/scripts/p9-local-runtime.md`}>Local acceptance run</External>
              <External href={`${foundersLens.repository}/tree/main/tests`}>Automated tests</External>
              <External href={`${source}/.github/workflows/ci.yml`}>CI workflow</External>
              <External href={`${source}/RENDER-STAGING.md#public-portfolio-demo`}>Render runbook</External>
            </div>
          </CaseSection>
          <CaseSection number="07 / What I learned" title="Design around what the system can confirm.">
            <p>Building this taught me to distinguish three moments that feel like one action in the interface. The API accepts the question, the provider performs work, and the application saves a reply. Once I modeled those separately, I could reason about retries, late workers, and what the founder should see if generation stops halfway through.</p>
            <p>I applied the same discipline to verification. I used the public example to make the founder’s workflow easy to understand and a signed-in local run to verify persistence and accounting across the full stack.</p>
          </CaseSection>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export function CaseStudy() {
  return (
    <div id="top">
      <Header />
      <main id="main" className="case-page">
        <div className="container">
          <a className="back-link" href={`${home}#experience`}>
            ← Back to experience
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
          <aside className="case-ownership">
            <p className="eyebrow">My ownership / May 2025 – August 2026</p>
            <p>
              I led engineering across the visual editor, application
              generation, AI runtime, and cloud delivery. This case study
              follows the Neuron Engine: the connection between a visual canvas
              and running software.
            </p>
          </aside>
          <nav className="case-nav" aria-label="Case study sections">
            {["Problem", "Approach", "Challenges", "Ownership", "Outcome"].map(
              (label, index) => (
                <a key={label} href={`#case-0${index + 1}`}>
                  {label}
                </a>
              ),
            )}
          </nav>
          <EzyrArchitecture wide />
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
            <aside id="engineering-reflection" className="case-reflection">
              <Label>What this changed for me</Label>
              <h3>{ezyrReflection.title}</h3>
              <p>{ezyrReflection.summary}</p>
              <p>{ezyrReflection.detail}</p>
              <p>{ezyrReflection.takeaway}</p>
            </aside>
          </CaseSection>
          <CaseSection number="04 / My contribution" title="Owned end to end.">
            <ul className="ownership">
              {ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseSection>
          <CaseSection
            number="05 / The outcome"
            title="Visual composition to deployment."
          >
            <p>
              The Neuron Engine produced complete Next.js projects from
              structured application definitions, with reusable capabilities and
              automated checks supporting the generation flow. Generated
              applications could then move through the container build and
              deployment pipeline.
            </p>
            <aside className="disclosure">
              <h3>Conceptual disclosure</h3>
              <p>
                This case study omits proprietary source code, internal
                endpoints, credentials, customer information and
                implementation-specific architecture.
              </p>
            </aside>
          </CaseSection>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
