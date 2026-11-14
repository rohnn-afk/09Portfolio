const generationPath = [
  ["Visual editor", "Pages, elements, bindings, and workflows"],
  ["Neuron Engine", "Interpret application models and generate code"],
  ["Next.js application", "Runnable project output"],
  ["Cloud delivery", "Docker containers and AWS deployment"],
] as const;

export function EzyrArchitecture({ wide = false }: { wide?: boolean }) {
  return (
    <figure
      className={`ezyr-architecture${wide ? " ezyr-architecture-wide" : ""}`}
    >
      <figcaption>
        <p className="eyebrow">Ezyr / Engineering scope</p>
        <p className="architecture-title">
          From editor
          <br />
          <em>to application delivery.</em>
        </p>
      </figcaption>
      <ol
        className="ezyr-generation-path"
        aria-label="Application generation and delivery"
      >
        {generationPath.map(([title, description], index) => (
          <li key={title}>
            <span className="architecture-step" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="ezyr-ai-scope">
        <strong>Stateful AI runtime</strong>
        <p>A separate area of platform ownership.</p>
        <ul aria-label="AI runtime capabilities">
          <li>Tool execution</li>
          <li>Memory & retrieval</li>
          <li>Streaming</li>
          <li>Validation</li>
        </ul>
      </div>
      <p className="architecture-note">
        Conceptual overview of my work. Internal implementation details omitted.
      </p>
    </figure>
  );
}
