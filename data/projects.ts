export type ProjectStatus = "In development" | "Concept" | "Prototype";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  status: ProjectStatus;
  stack: string[];
  theme: {
    dark: string;
    middle: string;
    glow: string;
    highlight: string;
  };
  href?: string;
  linkLabel?: string;
  /** Optional real screenshot/video. Put local files in public/projects/. */
  media?:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string; alt: string };
};

/**
 * These entries describe builds and ideas, not claims that every project is finished.
 * Replace the wording/status/links with verified milestones as you ship.
 */
export const projects: Project[] = [
  {
    slug: "trading-pulse",
    title: "Trading Pulse",
    subtitle: "Real-time simulated market intelligence",
    description:
      "A financial analytics experience built around simulated market feeds, candlestick data, liquidity views, alerts and live updates. The goal is to make complex market information legible through a responsive interface and dependable real-time systems.",
    category: "Real-time analytics",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "TypeScript", "Fastify", "WebSockets", "PostgreSQL", "Redis"],
    theme: { dark: "#17111b", middle: "#5e3c50", glow: "#b97865", highlight: "#f0c398" },
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    subtitle: "Documents, made conversational",
    description:
      "A document-centred application exploring how people can upload, organize, read and ask questions about their own material. The experience prioritizes clarity, meaningful navigation and the engineering behind document retrieval.",
    category: "AI & documents",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "React", "TypeScript", "Document retrieval"],
    theme: { dark: "#18222b", middle: "#415966", glow: "#a1aca5", highlight: "#e1d8c4" },
  },
  {
    slug: "commerce",
    title: "Commerce — The Storefront",
    subtitle: "An elevated digital shopping experience",
    description:
      "An existing e-commerce project being visually refined into a premium, editorial storefront while protecting its underlying shopping functionality. Focus areas include typography, product presentation, responsive design and interaction quality.",
    category: "E-commerce",
    year: "2026",
    status: "In development",
    stack: ["Frontend engineering", "Commerce UX", "Responsive design"],
    theme: { dark: "#221e1b", middle: "#735b49", glow: "#be9a77", highlight: "#f0dfc2" },
    href: "https://github.com/gosbertreonsi-ux/ecommerce",
    linkLabel: "View repository",
  },
  {
    slug: "mizizi-social",
    title: "Mizizi Social",
    subtitle: "A connected social experience",
    description:
      "A product concept combining social discovery, messaging, creator profiles, posts and engagement into one connected platform. It explores how familiar social features can be unified through consistent roles, data models and interface systems.",
    category: "Social platform",
    year: "2026",
    status: "Concept",
    stack: ["React", "Node.js", "REST APIs", "PostgreSQL", "Authentication"],
    theme: { dark: "#1a1728", middle: "#52486e", glow: "#8f76b1", highlight: "#d1bbfa" },
  },
  {
    slug: "mizizi-wifi",
    title: "Mizizi Wi-Fi",
    subtitle: "Local connectivity, thoughtfully managed",
    description:
      "A paid-hotspot management project exploring access control, packages, device sessions and payment workflows for local connectivity. The work considers the practical constraints of real hardware and low-cost deployment.",
    category: "Infrastructure & product",
    year: "2026",
    status: "Prototype",
    stack: ["Node.js", "Express", "Prisma", "Networking", "Authentication"],
    theme: { dark: "#142222", middle: "#385d56", glow: "#759b87", highlight: "#d0dabb" },
  },
  {
    slug: "veloedit",
    title: "VeloEdit",
    subtitle: "Sports highlights, reimagined",
    description:
      "A motion-first video editor concept for sports highlights, combining beat-aware cuts, speed ramping, layered typography and export-friendly portrait formats. Designed around expressive creative control.",
    category: "Creative tools",
    year: "2026",
    status: "Concept",
    stack: ["React", "Video processing", "Timeline UX", "Motion design"],
    theme: { dark: "#260f17", middle: "#803c41", glow: "#d27160", highlight: "#ffc5a1" },
  },
  {
    slug: "mizizi-video-studio",
    title: "Mizizi Video Studio",
    subtitle: "Open creative AI experiments",
    description:
      "A planned prompt-to-video creation platform exploring locally hosted or open-source workflows, asynchronous generation jobs, queues and accessible creative interfaces—without assuming paid inference services.",
    category: "AI creative tooling",
    year: "2026",
    status: "Concept",
    stack: ["Next.js", "Node.js", "Python", "Redis", "Model serving"],
    theme: { dark: "#151c31", middle: "#4c5981", glow: "#9491b5", highlight: "#d5caeb" },
  },
  {
    slug: "lyric-motion",
    title: "Lyric Motion",
    subtitle: "Typography that moves with music",
    description:
      "An idea for a lyric-video editor where creators place words over imagery or footage and tune each line's appearance to music. The interaction model centres on a simple timeline, timing controls and responsive motion.",
    category: "Music & interaction",
    year: "2026",
    status: "Concept",
    stack: ["TypeScript", "Timeline UI", "Audio analysis", "Canvas"],
    theme: { dark: "#1d1725", middle: "#5b4467", glow: "#ad7b8e", highlight: "#e9c0b7" },
  },
  {
    slug: "frequency-atlas",
    title: "Frequency Atlas",
    subtitle: "A scientific exploration of signals",
    description:
      "An exploratory signal-visualization concept: capture supported device measurements, inspect spectra, and classify validated acoustic patterns. It does not claim that ordinary devices can identify invisible beings or translate animal thoughts.",
    category: "Research concept",
    year: "2026",
    status: "Concept",
    stack: ["Web Audio API", "Signal processing", "Data visualization", "TypeScript"],
    theme: { dark: "#0f2526", middle: "#316d69", glow: "#64a59a", highlight: "#c2e8cf" },
  },
  {
    slug: "creator-toolkit",
    title: "Creator Toolkit",
    subtitle: "Useful tools, beautifully simple",
    description:
      "A browser-based utility suite inspired by the convenience of multi-tool websites. The product direction brings media, document and file workflows into a consistent interface with clear progress and predictable output.",
    category: "Productivity tools",
    year: "2026",
    status: "Concept",
    stack: ["Next.js", "TypeScript", "File processing", "Job queues"],
    theme: { dark: "#222519", middle: "#646948", glow: "#a4a578", highlight: "#ece2a9" },
  },
  {
    slug: "engagement-lab",
    title: "Engagement Lab",
    subtitle: "Isolated social-platform testing",
    description:
      "A development-only simulator for validating how social interfaces and analytics respond to synthetic likes, comments and shares. Test activity remains explicitly labeled and separate from real user engagement.",
    category: "Engineering tools",
    year: "2026",
    status: "Concept",
    stack: ["Node.js", "Testing", "Synthetic data", "Analytics"],
    theme: { dark: "#221b23", middle: "#665062", glow: "#bb8a95", highlight: "#efd5d0" },
  },
  {
    slug: "portfolio-2026",
    title: "Portfolio 2026",
    subtitle: "A home for code and creative ambition",
    description:
      "A personal portfolio that treats projects as stories. Typographic structure, custom CSS media, motion and thoughtful navigation make complex engineering work approachable without overpowering the work itself.",
    category: "Portfolio / creative development",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "React", "TypeScript", "CSS", "Accessibility"],
    theme: { dark: "#21191a", middle: "#6c4b4c", glow: "#b7897e", highlight: "#edc9ab" },
  },
];

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => {
  const current = projects.findIndex((project) => project.slug === slug);
  return projects[(current + 1) % projects.length];
};
