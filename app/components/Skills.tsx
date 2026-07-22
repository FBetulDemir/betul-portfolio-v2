type SkillGroup = {
  category: string;
  accent: "indigo" | "sky" | "violet" | "amber" | "emerald";
  items: string[];
};

const accentClasses = {
  indigo: { dot: "bg-indigo-400 shadow-[0_0_10px] shadow-indigo-400/70" },
  sky: { dot: "bg-sky-400 shadow-[0_0_10px] shadow-sky-400/70" },
  violet: { dot: "bg-violet-400 shadow-[0_0_10px] shadow-violet-400/70" },
  amber: { dot: "bg-amber-400 shadow-[0_0_10px] shadow-amber-400/70" },
  emerald: { dot: "bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/70" },
} as const;

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    accent: "indigo",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Responsive Layout",
      "WordPress",
    ],
  },
  {
    category: "State & Data",
    accent: "sky",
    items: [
      "REST APIs",
      "Zustand",
      "Context API",
      "Firebase / Firestore",
      "Supabase",
      "Amazon DynamoDB",
      "Forms & Validation",
      "Async Patterns",
    ],
  },
  {
    category: "Design & UX",
    accent: "violet",
    items: [
      "Figma",
      "Design Systems",
      "UX Research",
      "User Interviews",
      "Competitor Analysis",
      "User Flows",
      "Interaction Design",
      "Prototyping",
      "Accessibility",
    ],
  },
  {
    category: "Backend & Tooling",
    accent: "amber",
    items: [
      "Node.js / Express",
      "PHP",
      "DNS & Hosting Config",
      "Git & GitHub",
      "Vercel",
      "Chrome DevTools",
      "npm / pnpm",
      "Agile Workflow",
      "Jest / React Testing Library",
    ],
  },
  {
    category: "AI-Assisted Workflow",
    accent: "emerald",
    items: [
      "Claude (agentic use)",
      "Figma Make",
      "Prompt-driven prototyping",
      "AI-assisted development",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-indigo-400 mb-4">
            03 / Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className={`h-2 w-2 rounded-full shrink-0 ${accentClasses[group.accent].dot}`}
                />
                <h3 className="text-sm font-semibold text-zinc-100">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-300 bg-zinc-800/60 rounded-full px-3.5 py-1.5 hover:bg-zinc-700/60 hover:text-zinc-100 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
