
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

export function KineticPreview({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const visualStyle = {
    "--accent": project.theme.highlight,
    "--accent-muted": project.theme.middle,
  } as CSSProperties;

  return (
    <div className="kinetic-stage" style={visualStyle}>
      {project.media?.type === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="kinetic-media"
          src={project.media.src}
          alt={project.media.alt}
        />
      ) : project.media?.type === "video" ? (
        <video
          className="kinetic-media"
          src={project.media.src}
          poster={project.media.poster}
          muted
          autoPlay
          loop
          playsInline
          aria-label={project.media.alt}
        />
      ) : (
        <div
          className="kinetic-art"
          role="img"
          aria-label={`Animated typographic study for ${project.title}`}
        >
          <span className="kinetic-serial">
            REONSI—{String(index + 1).padStart(2, "0")}
          </span>
          <div className="kinetic-rings" aria-hidden="true" />
          <strong className="kinetic-title">{project.title}</strong>
          <span className="kinetic-mark" aria-hidden="true">↗</span>
        </div>
      )}

      <div className="kinetic-bottom">
        <span>{project.category}</span>
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
