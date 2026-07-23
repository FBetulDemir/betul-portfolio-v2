import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium text-zinc-300 bg-zinc-800/60 rounded-full px-3 py-1 transition-colors duration-200 group-hover:bg-zinc-700/60 group-hover:text-zinc-100">
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
          <p className="text-xs uppercase tracking-widest text-indigo-400 mb-4">
            02 / Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300 mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    project.imageFit === "contain"
                      ? "object-contain object-center p-4"
                      : "object-cover object-top"
                  }`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-indigo-400 mb-2">
                {project.index}
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                {project.blurb}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.focus.map((f) => (
                  <TechBadge key={f}>{f}</TechBadge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
