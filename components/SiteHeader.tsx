"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <header className="site-header">
      <Link aria-label={`${site.name} — home`} href="/" className="brand-link">
        {site.name}
      </Link>
      <nav aria-label="Primary navigation">
        <Link className="nav-link" href={isAbout ? "/" : "/about"}>
          {isAbout ? "Close" : "About"}
        </Link>
      </nav>
    </header>
  );
}
