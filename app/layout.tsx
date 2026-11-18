import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${site.name} — Full-Stack & AI-Native Software Engineer`, template: `%s — ${site.name}` },
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: `${site.name} — Full-Stack & AI-Native Software Engineer`, description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
