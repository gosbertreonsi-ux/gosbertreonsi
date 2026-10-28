"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { MediaScene } from "@/components/MediaScene";
import { CopyEmail } from "@/components/CopyEmail";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function WorkIndex() {
  const [active, setActive] = useState(0);
  const preview = useRef<HTMLDivElement>(null);
  const activeProject = projects[active];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      setActive((previous) =>
        event.key === "ArrowDown"
          ? (previous + 1) % projects.length
          : (previous - 1 + projects.length) % projects.length,
      );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const moveLight = (event: PointerEvent<HTMLDivElement>) => {
    const element = preview.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--cursor-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    element.style.setProperty("--cursor-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <main className="work-layout">
      <section className="work-list" aria-label="Selected work">
        <h1 className="sr-only">Selected projects by {site.name}</h1>
        <ol className="project-index">
          {projects.map((project, index) => (
            <li key={project.slug} className="project-index-item">
              <Link
                className={`project-row ${active === index ? "is-active" : ""}`}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-label={`${String(index + 1).padStart(2, "0")}: ${project.title}. Open project`}
              >
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <aside className="work-aside" aria-label="Selected project and introduction">
        <div className="sticky-panel">
          <div className="preview-wrapper" ref={preview} onPointerMove={moveLight}>
            <Link href={`/projects/${activeProject.slug}`} className="media-link" aria-label={`Explore ${activeProject.title}`}>
              <div key={activeProject.slug} className="preview-animation">
                <MediaScene project={activeProject} label={`${activeProject.category} — ${activeProject.status}`} interactive />
              </div>
            </Link>
          </div>
          <div className="profile-summary">
            <h2>{site.name}, {site.role}</h2>
            <p>{site.description}</p>
            <p className="profile-subtext">Real-time systems · thoughtful interfaces · creative development</p>
            <div className="social-row">
              <a target="_blank" rel="noreferrer" href={site.github}>GitHub ↗</a>
              <Link href="/about">About me ↗</Link>
              <CopyEmail email={site.email} />
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
