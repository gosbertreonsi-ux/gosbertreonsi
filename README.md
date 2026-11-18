# Gosbert Reonsi — Engineering Portfolio

A design-led, accessible project portfolio built with Next.js App Router, TypeScript and GSAP. The portfolio deliberately distinguishes private source, work in progress and public demos.

## Run locally

Requires Node.js 22+.

```powershell
git clone https://github.com/gosbertreonsi-ux/gosbertreonsi.git
Set-Location .\gosbertreonsi
npm.cmd install
npm.cmd run typecheck
npm.cmd run build
npm.cmd run dev
```

Visit http://localhost:3000.

## Publishing

The Next.js configuration uses `output: "export"`. Build output is in `out/` for static hosting. For Render Static Site use build command `npm install && npm run build` and publish directory `out`. For GitHub Pages on a project repo, set `DEPLOY_TARGET=github-pages` at build time and deploy the `out` directory; the project-repository base path is configured automatically.

No server or paid service is necessary for this portfolio itself. Avoid linking a project as "live" until the actual URL has been checked in a private/incognito browser.

## Edit content

- `data/site.ts`: identity, public description and contact details.
- `data/projects.ts`: carefully verified case studies, source links and demo links.
- `app/globals.css`: visual system and responsive layout.
- `components/WorkIndex.tsx`: interactive project index.

Place real authorized images in `public/projects/`, then set `media` on the relevant entry. Until screenshots exist, built-in abstract artwork is used rather than fabricated product screenshots.

## Security

Do not commit `.env` files, API keys, database URLs or customer data. Keep private project repositories private. A successful site build does not establish that third-party demos are operational.
