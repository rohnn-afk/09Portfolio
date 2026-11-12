export const modelCapabilities = [
  "Pages, routes and nested element hierarchies",
  "Component properties, styling and responsive rules",
  "Variables, state references and data bindings",
  "Events, workflows and conditional execution paths",
  "Database operations and external API integrations",
  "Project configuration and runtime requirements",
] as const;

export const engineStages = [
  {
    name: "Validate and normalize",
    description:
      "Validate the canvas definition, reject unsupported or inconsistent state, and normalize valid input into a predictable internal application model.",
  },
  {
    name: "Interpret the model",
    description:
      "Resolve what each page, element, binding and workflow means in context—not as isolated canvas nodes, but as one connected application.",
  },
  {
    name: "Resolve capabilities",
    description:
      "Map validated constructs to known component and block contracts, then determine the state, handlers, imports and supporting code each capability requires.",
  },
  {
    name: "Materialize behavior",
    description:
      "Translate events and workflow graphs into executable behavior while preserving identifiers, inputs and outputs across every data boundary.",
  },
  {
    name: "Assemble the project",
    description:
      "Generate routes, React trees, styles, integrations, utilities, dependencies and configuration as a complete, independently runnable Next.js project.",
  },
  {
    name: "Validate the output",
    description:
      "Run deterministic structural checks before handing a generated application to the container build and deployment pipeline.",
  },
] as const;

export const challenges = [
  {
    title: "Preserving meaning across representations",
    description:
      "A user action had to remain semantically consistent as editor configuration, structured workflow data, an internal capability, generated source and running behavior.",
  },
  {
    title: "Extensibility without conditional sprawl",
    description:
      "Capability contracts kept component-specific behavior behind stable boundaries so the generator could evolve without accumulating fragile one-off branches.",
  },
  {
    title: "Deterministic, debuggable output",
    description:
      "Known inputs needed to produce structurally consistent projects, with failures traceable to the originating application definition rather than hidden inside opaque generation.",
  },
  {
    title: "Data lineage across workflows",
    description:
      "Bindings and operations had to reference valid variables, inputs and prior outputs across the canvas, workflow graph and generated application.",
  },
] as const;

export const ownership = [
  "Defined the contract between visual-canvas data and generated applications.",
  "Designed and implemented the Neuron Engine and its deterministic generation boundaries.",
  "Translated page, element, workflow and data models into executable application code.",
  "Built resolution for components, dependencies, imports and project configuration.",
  "Connected validated project output to the AWS container deployment pipeline.",
  "Diagnosed failures across the complete canvas-to-code lifecycle and evolved the architecture as new capabilities were introduced.",
] as const;
