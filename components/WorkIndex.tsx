
"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

import Link from "next/link";
import gsap from "gsap";

import { KineticPreview } from "@/components/KineticPreview";
import { CopyEmail } from "@/components/CopyEmail";
import { useInterfaceSound } from "@/hooks/useInterfaceSound";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function WorkIndex() {
  const [active, setActive] = useState(0);

  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const { enabled, toggleSound, playSound } = useInterfaceSound();

  const activeProject = projects[active];

  // GSAP: animate the page when it appears.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".project-index-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.045,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".profile-summary",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, rootRef);

    return () => context.revert();
  }, []);

  // Animate the new preview when selection changes.
  useEffect(() => {
    if (!stageRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tween = gsap.fromTo(
      stageRef.current,
      {
        opacity: 0,
        scale: 1.045,
        y: 12,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.65,
        ease: "power3.out",
      }
    );

    return () => {
      tween.kill();
    };
  }, [active]);

  // Arrow keys can change the active project.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      const target = event.target as HTMLElement | null;

      if (
        target?.closest(
          "input, textarea, select, button, [contenteditable='true']"
        )
      ) {
        return;
      }

      event.preventDefault();

      setActive((previous) =>
        event.key === "ArrowDown"
          ? (previous + 1) % projects.length
          : (previous - 1 + projects.length) % projects.length
      );

      playSound("hover");
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [playSound]);

  const selectProject = (index: number) => {
    if (index === active) return;

    setActive(index);
    playSound("hover");
  };

  // Convert mouse coordinates into values between -1 and +1.
  const movePreview = (event: PointerEvent<HTMLDivElement>) => {
    if (!previewRef.current) return;

    const { left, top, width, height } =
      previewRef.current.getBoundingClientRect();

    const x = ((event.clientX - left) / width - 0.5) * 2;
    const y = ((event.clientY - top) / height - 0.5) * 2;

    previewRef.current.style.setProperty(
      "--pointer-x",
      x.toFixed(3)
    );

    previewRef.current.style.setProperty(
      "--pointer-y",
      y.toFixed(3)
    );
  };

  return (
    <main className="work-layout" ref={rootRef}>
      <section className="work-list" aria-label="Selected work">
        <h1 className="sr-only">Selected projects by {site.name}</h1>

        <ol className="project-index">
          {projects.map((project, index) => (
            <li className="project-index-item" key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className={`project-row ${
                  index === active ? "is-active" : ""
                }`}
                onMouseEnter={() => selectProject(index)}
                onFocus={() => selectProject(index)}
                onClick={() => playSound("click")}
              >
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-title">
                  {project.title}
                </span>

                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <aside className="work-aside" aria-label="Selected project preview">
        <div className="sticky-panel">
          <div
            className="preview-wrapper"
            ref={previewRef}
            onPointerMove={movePreview}
            onPointerLeave={() => {
              previewRef.current?.style.setProperty("--pointer-x", "0");
              previewRef.current?.style.setProperty("--pointer-y", "0");
            }}
          >
            <Link
              href={`/projects/${activeProject.slug}`}
              aria-label={`View ${activeProject.title}`}
            >
              <div ref={stageRef} key={activeProject.slug}>
                <KineticPreview
                  project={activeProject}
                  index={active}
                  total={projects.length}
                />
              </div>
            </Link>
          </div>

          <div className="portfolio-sound">
            <span>INTERACTIVE PORTFOLIO / 2026</span>
            <button
              type="button"
              onClick={() => {
                void toggleSound();
              }}
              aria-pressed={enabled}
            >
              SOUND {enabled ? "ON" : "OFF"}
              <span aria-hidden="true">
                {enabled ? "◖))" : "○"}
              </span>
            </button>
          </div>

          <div className="profile-summary">
            <h2>
              {site.name}, {site.role}
            </h2>

            <p>{site.description}</p>

            <p className="profile-subtext">
              Real-time systems · thoughtful interfaces · creative development
            </p>

            <div className="social-row">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <Link href="/about">About me ↗</Link>

              <CopyEmail email={site.email} />
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
