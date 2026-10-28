import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${site.name} — Creative Full-Stack Engineer`, template: `%s — ${site.name}` },
  description: site.description,
  robots: { index: true, follow: true },
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
