import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

export function MediaScene({
  project,
  label = "Project preview",
  interactive = false,
}: {
  project: Project;
  label?: string;
  interactive?: boolean;
}) {
  const style = {
    "--scene-dark": project.theme.dark,
    "--scene-middle": project.theme.middle,
    "--scene-glow": project.theme.glow,
    "--scene-highlight": project.theme.highlight,
  } as CSSProperties;

  return (
    <div className={`media-scene ${interactive ? "is-interactive" : ""}`} style={style}>
      {project.media?.type === "image" ? (
        // Native media keeps this starter dependency-free and accepts local assets.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="project-real-media" src={project.media.src} alt={project.media.alt} loading="lazy" />
      ) : project.media?.type === "video" ? (
        <video className="project-real-media" src={project.media.src} poster={project.media.poster} autoPlay muted playsInline loop aria-label={project.media.alt} />
      ) : (
        <>
          <div className="media-light media-light-1" aria-hidden="true" />
          <div className="media-light media-light-2" aria-hidden="true" />
        </>
      )}
      <div className="media-grain" aria-hidden="true" />
      <span className="media-caption">{label}</span>
    </div>
  );
}
