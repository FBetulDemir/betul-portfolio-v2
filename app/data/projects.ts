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
  focus: string[];
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
    subtitle: "Website Redesign & Implementation — Internship (12 weeks)",
    blurb:
      "Solo redesign and WordPress rebuild for a global CFD simulation platform — research through live deploy.",
    description:
      "End-to-end redesign and WordPress rebuild of shipflow.se, the public-facing site for Flowtech International AB — a platform used by shipyards, design offices, and universities across Asia, the Americas, and Europe. Sole designer and developer, from user interviews through production launch.",
    image: "/projects/shipflow2.png",
    imageFit: "contain",
    focus: ["UX Research", "Interaction Design", "End-to-End Delivery"],
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
    ],
    process: [
      {
        phase: "Research & Discovery",
        detail:
          "Ran a two-week discovery phase — audited the existing site, analysed several competitor platforms, and researched the naval architecture domain to prepare informed interview questions. Interviewed Flowtech's directing manager and a daily software user to uncover what was missing, confusing, or unnecessary.",
      },
      {
        phase: "Design",
        detail:
          "Spent two weeks establishing visual direction — color, typography, layout — and designing the screens then a third week refining with stakeholder feedback until page structure, components, and content hierarchy were fully agreed.",
      },
      {
        phase: "Build",
        detail:
          "Evaluated platforms and chose WordPress with HostUp hosting — a CMS I'd never worked in before — and learned it quickly enough to spend 7 weeks building custom post types, role-based user profiles, and plugin integrations (ACF, Contact Form 7, Fluent Support, Brevo) around the finished design. For Chinese customers who could not use YouTube, I also implemented an alternative way to share tutorial videos with them.",
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
    subtitle:
      "UX/UI Redesign & Frontend Implementation — Internship (12 weeks)",
    blurb:
      "UX/UI redesign and 30+ production components for an AI startup's platform, in an unfamiliar stack and domain.",
    description:
      "Owned the frontend for Framsteg 247 AB's technology transfer office automation platform — from user research in a domain I'd never worked in, to a Figma redesign, to 30+ production React components, alongside a peer frontend developer and an AI-focused backend engineer.",
    image: "/projects/framsteg_white_bg.png",
    imageFit: "contain",
    focus: ["User Flows", "Component Architecture", "Cross-Team Collaboration"],
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
          "Spent two weeks researching and interviewing a technology transfer officer to understand IP licensing and commercialization workflows — a domain that was completely unfamiliar to me going in.",
      },
      {
        phase: "Design",
        detail:
          "Spent two weeks designing the user flow and UI in Figma, iterating with the team until they approved the final flow and visual direction before any code was written.",
      },
      {
        phase: "Build",
        detail:
          "Learned Next.js and Tailwind CSS on the job — none of which I'd used before — while building 30+ production React components: UI foundations, forms, dashboard sections, and organization features like billing and team roles. Split the work with a second frontend developer over a Kanban board.",
      },
      {
        phase: "Handoff",
        detail:
          "Handed off the full design and user flow, along with most of the coded component library built from my designs, at the end of the internship — no formal documentation needed, since constant pairing meant the team already knew my code. The platform is still in active development on that foundation.",
      },
    ],
    links: [
      {
        label: "View Figma Preview (4 screens) →",
        href: "https://www.figma.com/proto/ADLGSp5yKjSQ2WeMup0UPo/Framsteg-Organisation-settings?page-id=0%3A1&node-id=1-663&p=f&viewport=503%2C511%2C0.16&t=VDUXel5AJhoC6vWP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
      },
      {
        label: "Read Full Case Study (PDF) →",
        href: "/projects/Framsteg_Case_Study.pdf",
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
      "A conceptual anonymous platform for gender-equality dialogue in academia, with a lightweight identity model and an AI assistant.",
    description:
      "A conceptual, full-stack community platform exploring how anonymous dialogue about gender equality in academia could work — not tied to any real institution. Designed in Figma and built in Next.js and Supabase, with a simplified nickname-and-avatar identity model and an integrated Gemini AI assistant.",
    image: "/projects/agora.png",
    imageFit: "contain",
    focus: ["Interaction Design", "Full-Stack Development", "AI Integration"],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",

      "Figma",
      "Gemini API",
    ],
    bullets: [
      "Grounded the concept in a literature review of two Chalmers master's theses on gender-equality tools and AI tone, plus benchmarking of existing forum platforms",
      "Designed the full UI in Figma — wireframes through interactive prototypes — iterating with my supervisor, Dr. Jasmina Maric, across several rounds",
      "Scoped deliberately to an MVP: anonymous post feed, comments, hashtag filtering, and a simple nickname-and-avatar profile",
      "Built a simplified identity model instead of full authentication — nickname and emoji avatar, no email or password — to keep the barrier to participation low",
      "Implemented a dynamic Trending Topics word cloud and integrated the Gemini API as an optional 'Ask AI' assistant for users unsure how to phrase a post",
    ],
    process: [
      {
        phase: "Research & Discovery",
        detail:
          "Reviewed two related Chalmers master's theses — one on AI tone in sensitive contexts, one on engagement in gender-equality tools — and benchmarked existing forum platforms to ground the concept before designing anything.",
      },
      {
        phase: "Design",
        detail:
          "Designed wireframes and interactive prototypes in Figma, iterating with my supervisor, Dr. Jasmina Maric, across multiple rounds until the user flow and visual tone were approved.",
      },
      {
        phase: "Build",
        detail:
          "Scoped deliberately to an MVP — anonymous post feed, comments, hashtag filtering with a dynamic word cloud, and a lightweight nickname-and-avatar profile — built in Next.js, TypeScript, and Supabase with a component-based architecture.",
      },
      {
        phase: "Launch & Reflection",
        detail:
          "Integrated the Gemini API as an optional 'Ask AI' assistant for users unsure how to phrase a sensitive post, and enabled Row Level Security across every table as groundwork for full authentication in a later version. The prototype is live as a demo; real user testing and moderation tooling are earmarked for a Version 2.",
      },
    ],
    links: [
      { label: "Live Demo →", href: "https://agora-connect.vercel.app/" },
      {
        label: "View Code →",
        href: "https://github.com/FBetulDemir/Agora.git",
      },
      {
        label: "Read Full Thesis (PDF) →",
        href: "/projects/Agora_Thesis.pdf",
      },
    ],
    note: "Thesis (Examensarbete), FED24 · NBI-Handelsakademin · Supervised by Dr. Jasmina Maric (Interaction Design & Software Engineering, Chalmers University of Technology) · Conceptual project, not affiliated with a specific institution",
  },
  {
    slug: "chorequest",
    index: "04",
    title: "ChoreQuest",
    subtitle: "Household Chore Tracker — Mobile PWA",
    blurb:
      "A chore tracker that turns housework into a points-based leaderboard game. Built an invite-by-code household system that supports multiple members in one household.",
    description:
      "A household chore tracker where recurring chores are assigned points based on difficulty. Members complete chores, earn points, and compete on a leaderboard.",
    image: "/projects/chore-app.png",
    imageFit: "contain",
    focus: ["Product Design", "Full-Stack Development", "PWA"],
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
