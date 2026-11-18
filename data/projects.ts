export type ProjectStatus = "In development" | "Prototype" | "Concept";
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  status: ProjectStatus;
  stack: string[];
  highlights: string[];
  theme: { dark: string; middle: string; glow: string; highlight: string };
  href?: string;
  linkLabel?: string;
  demoUrl?: string;
  media?:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string; alt: string };
};

/**
 * Only link verified public code or a live demo. Private repositories remain
 * case studies without inaccessible GitHub links. Every status is honest.
 * A demoUrl must be verified before publishing.
 */
export const projects: Project[] = [
  {
    slug: "agrorange-market",
    title: "Agrorange Market",
    subtitle: "A marketplace with a more human shopping experience",
    description:
      "A full-stack marketplace in active development with a separate React storefront and backend. My current focus is clearer discovery, a quieter green visual identity, seller workflows and a polished responsive buying journey.",
    category: "Commerce / product design",
    year: "2026",
    status: "In development",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
    highlights: ["Independent frontend and backend architecture", "Product discovery and marketplace interface refinement", "Mobile-first navigation, product hierarchy and accessibility"],
    theme: { dark: "#11291f", middle: "#315946", glow: "#79aa83", highlight: "#d3e3b4" },
  },
  {
    slug: "ecommerce",
    title: "E-Shop V3",
    subtitle: "Multi-role commerce, orders and fulfillment",
    description:
      "An evolving full-stack commerce system spanning customer shopping, seller operations and administration. Engineering work covers variants, delivery guardrails, authentication, payment testing and operational reliability.",
    category: "Full-stack / commerce",
    year: "2026",
    status: "In development",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "GitHub Actions"],
    highlights: ["Customer, seller and administrator workflows", "Order and delivery transition protections", "Local-first authentication and payment verification"],
    theme: { dark: "#261d16", middle: "#725947", glow: "#bd9270", highlight: "#f3cfa3" },
  },
  {
    slug: "leehub-media",
    title: "LeeHub Media",
    subtitle: "Streaming experiences and football intelligence",
    description:
      "A media application combining video presentation, playlists, football fixtures and highlight indexing. Its work includes administration interfaces, IPTV integration and scheduled synchronization of match highlights.",
    category: "Media / live systems",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Media workflows", "GitHub Actions"],
    highlights: ["Playlist publishing and administration", "Football match and highlights discovery", "Scheduled background highlight synchronization"],
    theme: { dark: "#171c2c", middle: "#3a5377", glow: "#7596b4", highlight: "#d3e6fa" },
  },
  {
    slug: "trading-pulse",
    title: "Trading Pulse",
    subtitle: "Market analytics that move in real time",
    description:
      "A simulated financial analytics workstation built to explore live market data, candlesticks, liquidity, alerting and paper matching. It is an analytics and learning system, not a live trading platform.",
    category: "Realtime / analytics",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "Fastify", "TypeScript", "WebSockets", "PostgreSQL", "Redis"],
    highlights: ["Realtime candles and multi-symbol watchlists", "Server-side analytics and simulated liquidity", "Security and reliability checks for data flows"],
    theme: { dark: "#1f1722", middle: "#664760", glow: "#a77b9a", highlight: "#f0ced6" },
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    subtitle: "A learning laboratory for document intelligence",
    description:
      "A document-chat learning project exploring persistence, retrieval-augmented answers and user-level document ownership. The codebase records the process of building an AI-assisted application step by step.",
    category: "AI / document systems",
    year: "2026",
    status: "In development",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "pgvector", "Ollama"],
    highlights: ["Conversation and document persistence", "Vector retrieval exploration", "Authentication and document-ownership hardening"],
    theme: { dark: "#172a2e", middle: "#426971", glow: "#83a7a9", highlight: "#d4e9df" },
    href: "https://github.com/gosbertreonsi-ux/AskDocs-Learning",
    linkLabel: "Explore public code",
  },
  {
    slug: "projectmail",
    title: "ProjectMail",
    subtitle: "Email infrastructure for independent applications",
    description:
      "A separate TypeScript email API starter for multiple applications. It includes per-project keys, OTP policies, encrypted message queues and provider adapters. A fully independent public mail relay is not yet production-certified.",
    category: "Backend / infrastructure",
    year: "2026",
    status: "Prototype",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "SMTP", "Security", "Docker"],
    highlights: ["Per-project revocable API credentials", "Queued delivery and explicit retry policy", "One-time-code security and message encryption"],
    theme: { dark: "#211e28", middle: "#645979", glow: "#9c91af", highlight: "#e3d7f8" },
  },
];

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => {
  const current = projects.findIndex((project) => project.slug === slug);
  return projects[(current + 1) % projects.length];
};
