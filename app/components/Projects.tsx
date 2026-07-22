import Image from "next/image";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageFit?: "contain" | "cover";
  tech: string[];
  bullets: string[];
  links: { label: string; href: string }[];
  note?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "SHIPFLOW",
    subtitle: "Website Redesign & Implementation — Internship",
    description:
      "Full end-to-end redesign and WordPress implementation of shipflow.se, a CFD simulation product for naval architects at Flowtech International AB. Sole designer and developer — from UX research through live deployment.",
    image: "/projects/shipflow-flowtech.png",
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
      "Conducted UX research: user interviews, competitor analysis, empathy frameworks",
      "Built a full Figma design system: color styles, typography, component library",
      "Implemented 15+ pages in WordPress with custom CSS architecture",
      "Configured plugins: Yoast SEO, Contact Form 7, Brevo, WPForms, Fluent Support, ACF",
      "Handled DNS configuration, email authentication, and newsletter setup",
    ],
    links: [
      { label: "Live Site →", href: "https://shipflow.se/" },
      {
        label: "Figma Prototype →",
        href: "https://www.figma.com/proto/Io3wM3K8qWZKrRe4E5V75d/Flowtech?node-id=24-337&m=dev&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A337&page-id=0%3A1&show-proto-sidebar=1&t=zNurRvaGoc9YCr00-1",
      },
    ],
    note: "Delivered as sole designer and developer · Flowtech International AB, Gothenburg · LIA 2, March–May 2026",
  },
  {
    index: "02",
    title: "Framsteg",
    subtitle: "UX/UI Redesign & Frontend Implementation — Internship",
    description:
      "Owned the UX/UI redesign end-to-end — from user research and flows to a complete interface in Figma — and implemented key parts in Next.js with reusable components and consistent UI patterns.",
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
      "Conducted user research, identified usability issues, and created new user flows",
      "Designed the complete interface in Figma with iterative PO feedback",
      "Implemented reusable UI components in Next.js (TypeScript + Tailwind)",
      "Built Organisation Settings and Upload pages",
      "Worked iteratively in standups and improved solutions based on feedback",
    ],
    links: [
      {
        label: "View Figma Preview →",
        href: "https://www.figma.com/proto/ADLGSp5yKjSQ2WeMup0UPo/Framsteg-Organisation-settings?page-id=0%3A1&node-id=1-663&p=f&viewport=503%2C511%2C0.16&t=VDUXel5AJhoC6vWP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
      },
    ],
    note: "Full redesign is confidential · Private walkthrough available upon request",
  },
  {
    index: "03",
    title: "Agora",
    subtitle: "Anonymous Community Platform — Thesis Project",
    description:
      "A full-stack community platform enabling anonymous dialogue about gender equality in academia. Designed in Figma from research through to implementation, with an integrated Gemini AI assistant and Supabase backend.",
    image: "/projects/agora.png",
    imageFit: "cover",
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
    links: [
      { label: "Live Demo →", href: "https://agora-connect.vercel.app/" },
      { label: "View Code →", href: "https://github.com/FBetulDemir/Agora.git" },
    ],
    note: "Thesis (Examensarbete) · Design supervised by Dr. Jasmina Maric, Interaction Design, Chalmers University of Technology",
  },
  {
    index: "04",
    title: "ChoreQuest",
    subtitle: "Household Chore Tracker — Mobile PWA",
    description:
      "A two-person household chore tracker where recurring chores are assigned points based on difficulty. Members complete chores, earn points, and compete on a leaderboard.",
    image: "/projects/chore-app.png",
    imageFit: "cover",
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
    links: [
      { label: "View Code →", href: "https://github.com/FBetulDemir/chorequest" },
      { label: "Live Demo →", href: "https://chorequest-game.vercel.app/" },
    ],
  },
];

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium text-zinc-400 border border-zinc-800 rounded-full px-3 py-1">
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            02 / Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Projects
          </h2>
        </div>

        {/* Project rows */}
        <div className="space-y-32">
          {projects.map((project, i) => (
            <div
              key={project.index}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-7/12 shrink-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group hover:border-zinc-700 transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      project.imageFit === "contain"
                        ? "object-contain object-center p-4"
                        : "object-cover object-top"
                    }`}
                    sizes="(min-width: 768px) 58vw, 100vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-5/12">
                <p className="text-xs uppercase tracking-widest text-indigo-400 mb-3">
                  {project.index}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{project.subtitle}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-8">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-indigo-400 shrink-0 mt-0.5">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-zinc-100 underline underline-offset-4 decoration-zinc-700 hover:decoration-indigo-400 transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>

                {/* Note */}
                {project.note && (
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {project.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
