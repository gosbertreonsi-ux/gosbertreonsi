import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaScene } from "@/components/MediaScene";
import { findProject, getNextProject, projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);
  const index = projects.findIndex((item) => item.slug === slug) + 1;

  return (
    <main className="project-page entrance">
      <div className="project-detail-heading">
        <p className="overline">{String(index).padStart(2, "0")} / {project.category}</p>
        <h1>{project.title}</h1>
      </div>
      <div className="project-detail-grid">
        <div className="project-main-media">
          <MediaScene project={project} label={`${project.subtitle} / Concept visual`} />
        </div>
        <div className="project-story">
          <p className="project-lede">{project.description}</p>
          <div className="detail-meta">
            <p>© {project.year}</p>
            <p>{project.status}</p>
          </div>
          {project.href ? (
            <a className="outlined-button" href={project.href} target="_blank" rel="noopener noreferrer">
              {project.linkLabel || "Visit project"} ↗
            </a>
          ) : (
            <Link className="outlined-button" href={site.github} target="_blank" rel="noopener noreferrer">Explore my GitHub ↗</Link>
          )}
        </div>
      </div>
      <div className="project-detail-extras">
        <div><span className="meta-label">Project</span><p>{project.subtitle}</p></div>
        <div><span className="meta-label">Discipline</span><p>{project.category}</p></div>
        <div><span className="meta-label">Technologies</span><p>{project.stack.join(" · ")}</p></div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span className="next-kicker">Next project</span>
        <span className="next-title">{String((index % projects.length) + 1).padStart(2, "0")} {next.title} <span aria-hidden="true">↗</span></span>
      </Link>
      <footer className="global-footer"><Link href="/">← All projects</Link><span>{site.name}</span><span>© {site.year}</span></footer>
    </main>
  );
}
