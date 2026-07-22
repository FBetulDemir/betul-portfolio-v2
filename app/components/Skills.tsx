type SkillGroup = {
  category: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Responsive Layout",
      "Design Systems",
      "WordPress",
    ],
  },
  {
    category: "State & Data",
    items: [
      "REST APIs",
      "Zustand",
      "Context API",
      "Firebase / Firestore",
      "Supabase",
      "Forms & Validation",
      "Async Patterns",
    ],
  },
  {
    category: "UX & Design",
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
    category: "Tooling",
    items: [
      "Git & GitHub",
      "Vercel",
      "Chrome DevTools",
      "npm / pnpm",
      "Agile Workflow",
      "Jest / React Testing Library",
    ],
  },
  {
    category: "Backend Basics",
    items: [
      "Node.js / Express",
      "REST APIs",
      "Amazon DynamoDB",
      "PHP",
      "DNS & Hosting Config",
    ],
  },
  {
    category: "AI & Tools",
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
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            03 / Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div className="divide-y divide-zinc-800/60">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 items-start"
            >
              <div className="md:col-span-3">
                <p className="text-sm font-medium text-zinc-500">
                  {group.category}
                </p>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-300 border border-zinc-800 bg-zinc-900 rounded-full px-3.5 py-1.5 hover:border-zinc-600 hover:text-zinc-100 transition-colors duration-200"
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
