export type ProcessStep = {
  phase: string;
  detail: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  blurb: string;
  description: string;
  image: string;
  imageFit?: "contain" | "cover";
  tech: string[];
  bullets: string[];
  process: ProcessStep[];
  links: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "shipflow",
    index: "01",
    title: "SHIPFLOW",
    subtitle: "Website Redesign & Implementation — Internship",
    blurb:
      "Solo redesign and WordPress rebuild for a global CFD simulation platform — research through live deploy.",
    description:
      "End-to-end redesign and WordPress rebuild of shipflow.se, the public-facing site for Flowtech International AB — a platform used by shipyards, design offices, and universities across Asia, the Americas, and Europe. Sole designer and developer, from user interviews through production launch.",
    image: "/projects/shipflow2.png",
    imageFit: "contain",
    tech: [
      "Figma",
      "WordPress",
      "PHP",
      "HTML & CSS",
      "UX Research",
      "Interaction Design",
      "DNS & Hosting",
    ],
    bullets: [
      "Interviewed Flowtech's directing manager and an in-house engineer to find what was missing, confusing, or unnecessary in the existing site",
      "Ran a 3-week design process — visual direction first, then refinement until every page reached stakeholder consensus",
      "Evaluated hosting and platform options, chose WordPress, and recommended HostUp",
      "Built custom post types for news, documents, video tutorials, and a publications directory, plus role-based user profiles with license display",
      "Integrated Contact Form 7, Profile Builder, Fluent Support, ACF, Brevo email, Newsletter, and Yoast SEO",
      "Configured DNS, SSL, and automated daily backups, then wrote full handover documentation for the client",
    ],
    process: [
      {
        phase: "Research & Discovery",
        detail:
          "Spent two weeks interviewing the two people who mattered most — Flowtech's directing manager and an engineer who uses the software daily — to find what was missing, confusing, or unnecessary in the existing site.",
      },
      {
        phase: "Design",
        detail:
          "Spent two weeks establishing visual direction — color, typography, layout — then a third week refining with stakeholder feedback until page structure, components, and content hierarchy were fully agreed.",
      },
      {
        phase: "Build",
        detail:
          "Evaluated platforms and chose WordPress with HostUp hosting — a CMS I'd never worked in before — and learned it quickly enough to spend 6+ weeks building custom post types, role-based user profiles, and plugin integrations (ACF, Contact Form 7, Fluent Support, Brevo) around the finished design.",
      },
      {
        phase: "Launch & Handover",
        detail:
          "Reviewed every core flow — forms, login, document downloads, video playback, email — with the directing manager before going live, then wrote full handover documentation covering hosting, admin access, and day-to-day content management.",
      },
    ],
    links: [
      { label: "Live Site →", href: "https://shipflow.se/" },
      {
        label: "Figma Prototype →",
        href: "https://www.figma.com/proto/Io3wM3K8qWZKrRe4E5V75d/Flowtech?node-id=24-337&m=dev&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A337&page-id=0%3A1&show-proto-sidebar=1&t=zNurRvaGoc9YCr00-1",
      },
      {
        label: "Read Full Case Study (PDF) →",
        href: "/projects/Shipflow_Case_Study.pdf",
      },
    ],
    note: "Delivered as sole designer and developer · Flowtech International AB, Gothenburg · LIA 2, March–May 2026",
  },
  {
    slug: "framsteg",
    index: "02",
    title: "Framsteg",
    subtitle: "UX/UI Redesign & Frontend Implementation — Internship",
    blurb:
      "UX/UI redesign and 30+ production components for an AI startup's platform, in an unfamiliar stack and domain.",
    description:
      "Owned the frontend for Framsteg 247 AB's technology transfer office automation platform — from user research in a domain I'd never worked in, to a Figma redesign, to 30+ production React components, alongside a peer frontend developer and an AI-focused backend engineer.",
    image: "/projects/framsteg_white_bg.png",
    imageFit: "contain",
    tech: [
      "Figma",
      "UX Research",
      "User Flows",
      "Prototyping",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    bullets: [
      "Interviewed technology transfer officers to understand IP licensing and commercialization workflows in a domain I'd never worked in before",
      "Designed the user flow and UI in Figma, iterating with the team until they approved the final flow and visual direction",
      "Learned Next.js, TypeScript, and Tailwind CSS on the job — none of which I'd used before — while building real components",
      "Built 30+ React components: UI foundations, forms, dashboard sections, case management views, and organization features like billing and team roles",
      "Split work with a second frontend developer over a Kanban board — I took the feature-heavy pages and complex components",
      "Handed off the full component library and page structures at the end of the internship; the platform is still in active development on that foundation",
    ],
    process: [
      {
        phase: "Research & Discovery",
        detail:
          "Spent two weeks interviewing technology transfer officers to understand IP licensing and commercialization workflows — a domain that was completely unfamiliar to me going in.",
      },
      {
        phase: "Design",
        detail:
          "Spent two weeks designing the user flow and UI in Figma, iterating with the team until they approved the final flow and visual direction before any code was written.",
      },
      {
        phase: "Build",
        detail:
          "Learned Next.js, TypeScript, and Tailwind CSS on the job — none of which I'd used before — while building 30+ production React components: UI foundations, forms, dashboard sections, and organization features like billing and team roles. Split the work with a second frontend developer over a Kanban board, taking on the feature-heavy pages myself.",
      },
      {
        phase: "Handoff",
        detail:
          "Handed off the full component library and page structures at the end of the internship — no formal documentation needed, since constant pairing meant the team already knew my code. The platform is still in active development on that foundation.",
      },
    ],
    links: [
      {
        label: "View Figma Preview (4 screens) →",
        href: "https://www.figma.com/proto/ADLGSp5yKjSQ2WeMup0UPo/Framsteg-Organisation-settings?page-id=0%3A1&node-id=1-663&p=f&viewport=503%2C511%2C0.16&t=VDUXel5AJhoC6vWP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
      },
    ],
    note: "Framsteg 247 AB (startup) · In active development · Internship, Late Nov 2025 – Early Feb 2026 · Figma preview limited to 4 screens at the company's request while the platform is in active, unreleased development",
  },
  {
    slug: "agora",
    index: "03",
    title: "Agora",
    subtitle: "Anonymous Community Platform — Thesis Project",
    blurb:
      "Anonymous campus platform for gender-equality dialogue, with an AI assistant built in.",
    description:
      "A full-stack community platform enabling anonymous dialogue about gender equality in academia. Designed in Figma from research through to implementation, with an integrated Gemini AI assistant and Supabase backend.",
    image: "/projects/agora.png",
    imageFit: "contain",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Figma",
      "Gemini API",
    ],
    bullets: [
      "Conducted literature review and benchmarking to inform design decisions",
      "Designed full UI in Figma — wireframes, prototypes, iterative revisions with supervisor",
      "Built anonymous post feed, threaded comments, hashtag filtering, emoji avatar profiles",
      "Implemented dynamic Trending Topics word cloud based on real hashtag activity",
      "Integrated Gemini API as an AI assistant for gender equality questions",
      "Modelled relational database in Supabase (PostgreSQL) with Row Level Security",
    ],
    process: [
      {
        phase: "Research & Discovery",
        detail:
          "Conducted a literature review and benchmarked existing platforms to understand how an anonymous community around gender equality in academia should work — and where similar platforms fall short.",
      },
      {
        phase: "Design",
        detail:
          "Designed the full UI in Figma, from wireframes to high-fidelity prototypes, iterating with my thesis supervisor at Chalmers along the way.",
      },
      {
        phase: "Build",
        detail:
          "Built the anonymous post feed, threaded comments, hashtag filtering, and a dynamic Trending Topics word cloud on Next.js and Supabase, with an integrated Gemini API assistant for gender-equality questions.",
      },
      {
        phase: "Launch & Results",
        detail:
          "Modelled the relational schema in Supabase with Row Level Security so anonymity was enforced at the database level, not just the UI, then delivered the platform as my examensarbete (thesis).",
      },
    ],
    links: [
      { label: "Live Demo →", href: "https://agora-connect.vercel.app/" },
      {
        label: "View Code →",
        href: "https://github.com/FBetulDemir/Agora.git",
      },
    ],
    note: "Thesis (Examensarbete) · Design supervised by Dr. Jasmina Maric, Interaction Design, Chalmers University of Technology",
  },
  {
    slug: "chorequest",
    index: "04",
    title: "ChoreQuest",
    subtitle: "Household Chore Tracker — Mobile PWA",
    blurb:
      "A two-person chore tracker that turns housework into a points-based leaderboard game.",
    description:
      "A two-person household chore tracker where recurring chores are assigned points based on difficulty. Members complete chores, earn points, and compete on a leaderboard.",
    image: "/projects/chore-app.png",
    imageFit: "contain",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloud Firestore",
      "PWA",
    ],
    bullets: [
      "Built authentication with Firebase Auth (sign up / sign in)",
      "Implemented household system with create/join by code",
      "Chore templates with daily/weekly/monthly/seasonal schedules",
      "Assignee modes: anyone, fixed person, or rotating",
      "Leaderboard with weekly/monthly/all-time score tracking",
      "Deployed as a PWA — installable on mobile without an app store",
    ],
    process: [
      {
        phase: "Planning",
        detail:
          "Sketched out the core loop myself before writing any code: assign chores, weight them by difficulty, and turn completion into points — a personal project born from an actual household need.",
      },
      {
        phase: "Design",
        detail:
          "Kept the interface intentionally simple: a household join-by-code flow, configurable schedules (daily/weekly/monthly/seasonal), and flexible assignee modes (anyone, fixed person, or rotating).",
      },
      {
        phase: "Build",
        detail:
          "Built the app in Next.js and TypeScript with Firebase Auth and Cloud Firestore, including the leaderboard logic and PWA install support.",
      },
      {
        phase: "Launch & Results",
        detail:
          "Deployed as an installable PWA — no app store needed — and it's in actual daily use as a two-person household chore tracker.",
      },
    ],
    links: [
      {
        label: "View Code →",
        href: "https://github.com/FBetulDemir/chorequest",
      },
      { label: "Live Demo →", href: "https://chorequest-game.vercel.app/" },
    ],
  },
];
