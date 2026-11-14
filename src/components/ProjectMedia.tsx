import { useRef, useState } from "react";
import { assetPath } from "../lib/assetPath";

export type ProjectCapture = { src: string; alt: string; caption: string };

export function ProjectMedia({
  title,
  captures,
  tone,
}: {
  title: string;
  captures: readonly ProjectCapture[];
  tone: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLAnchorElement>(null);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const capture = captures[index];
  const move = (direction: number) =>
    setIndex(
      (value) => (value + direction + captures.length) % captures.length,
    );
  return (
    <figure className={`project-media media-${tone}`}>
      <a
        ref={opener}
        className="media-open"
        href={assetPath(captures[0].src)}
        onClick={(event) => {
          if (typeof dialog.current?.showModal !== "function") return;
          event.preventDefault();
          setIndex(0);
          setIsOpen(true);
          dialog.current.showModal();
        }}
      >
        <img
          src={assetPath(captures[0].src)}
          srcSet={`${assetPath(captures[0].src.replace(".webp", "-720.webp"))} 720w, ${assetPath(captures[0].src)} 1440w`}
          sizes="(min-width: 1100px) 420px, (min-width: 640px) 45vw, calc(100vw - 80px)"
          alt={captures[0].alt}
          width="1440"
          height="940"
          loading="lazy"
          decoding="async"
        />
        <span className="media-action">
          Inspect {title} <span aria-hidden="true">↗</span>
        </span>
      </a>
      <figcaption>{captures[0].caption}</figcaption>
      <dialog
        ref={dialog}
        className="media-dialog"
        aria-label={`${title} interface gallery`}
        onClose={() => {
          setIsOpen(false);
          opener.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="media-dialog-body">
          <header>
            <strong>{title}</strong>
            <button
              autoFocus
              type="button"
              onClick={() => dialog.current?.close()}
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </header>
          {isOpen && (
            <img
              src={assetPath(capture.src)}
              alt={capture.alt}
              width="1440"
              height="940"
            />
          )}
          <p>{capture.caption}</p>
          {captures.length > 1 && (
            <div className="media-controls">
              <button type="button" onClick={() => move(-1)}>
                ← Previous
              </button>
              <span aria-live="polite">
                {index + 1} / {captures.length}
              </span>
              <button type="button" onClick={() => move(1)}>
                Next →
              </button>
            </div>
          )}
        </div>
      </dialog>
    </figure>
  );
}
