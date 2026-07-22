# Betül Demir Korkmaz — Portfolio

Personal portfolio site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Geist (via `next/font`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx            root layout — wraps every page in Nav, ScrollReset, and Footer
  page.tsx               homepage — composes Hero, About, Projects, Skills, Contact
  globals.css             Tailwind entry point + custom theme animations

  components/
    Hero.tsx              name, tagline, photo, CTA buttons
    About.tsx             bio + credential
    Projects.tsx           homepage project teaser cards (image, blurb, tech pills)
    Skills.tsx             skills/tools grid, grouped by category
    Contact.tsx             contact links
    Nav.tsx                fixed header, cross-page section links
    Footer.tsx              site footer
    ScrollReset.tsx        resets scroll position to the top on page load

  data/
    projects.ts             single source of truth for all project content —
                             each project has a description, tech list, bullets,
                             a step-by-step "process" timeline, and links

  projects/[slug]/page.tsx  case-study page, statically generated per project
                             from data/projects.ts (generateStaticParams)

public/
  cv/                       downloadable CV
  profile/                  Hero profile photo
  projects/                 project screenshots + case-study PDFs
```

## Adding or editing a project

All project content lives in [`app/data/projects.ts`](app/data/projects.ts) — nothing else needs to change. Add a new object to the `projects` array with a unique `slug`, and:

- the homepage card in [`Projects.tsx`](app/components/Projects.tsx) picks it up automatically
- a case-study page is generated automatically at `/projects/<slug>`
