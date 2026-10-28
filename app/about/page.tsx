import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { CopyEmail } from "@/components/CopyEmail";

export const metadata: Metadata = { title: "About" };

const capabilities = [
  ["01", "Creative frontend", "React, Next.js, TypeScript, CSS, motion and interaction design."],
  ["02", "Backend systems", "Node.js, Fastify, REST APIs, authentication and WebSockets."],
  ["03", "Data & infrastructure", "PostgreSQL, Prisma, Redis, Docker and engineering workflows."],
  ["04", "Exploration", "AI-native interfaces, media tools, product architecture and prototyping."],
];

export default function AboutPage() {
  return (
    <main className="about-page entrance">
      <div className="about-intro">
        <p className="overline">01 / About</p>
        <h1>BUILDING<br /><em>WITH INTENT.</em></h1>
        <div className="about-copy">
          <p className="about-lede">A creative engineer exploring the space between expressive interfaces and powerful systems.</p>
          <p>{site.description}</p>
          <p>{site.philosophy}</p>
          <p>Based in Tanzania. Building for the web, with a global perspective.</p>
        </div>
      </div>
      <section className="capabilities" aria-labelledby="capabilities-heading">
        <div className="section-heading">
          <span>Approach &amp; craft</span>
          <h2 id="capabilities-heading">THE TOOLKIT</h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <div className="capability-row" key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-section">
        <p className="overline">02 / Contact</p>
        <h2>LET&apos;S MAKE<br />SOMETHING <em>MATTER.</em></h2>
        <div className="contact-actions">
          <a className="outlined-button" href={site.github} target="_blank" rel="noreferrer">Explore GitHub ↗</a>
          <CopyEmail email={site.email} />
          <Link href="/" className="text-link">← Back to projects</Link>
        </div>
      </section>
      <footer className="global-footer"><span>{site.name}</span><span>© {site.year}</span><span>Made with intention.</span></footer>
    </main>
  );
}
