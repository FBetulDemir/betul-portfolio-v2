import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium text-zinc-300 bg-zinc-800/60 rounded-full px-3 py-1">
      {children}
    </span>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project
      ? `${project.title} — Betül Demir Korkmaz`
      : "Project — Betül Demir Korkmaz",
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link
          href="/#projects"
          className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
        >
          ← Back to projects
        </Link>

        <p className="text-xs uppercase tracking-widest text-indigo-400 mt-10 mb-3">
          {project.index}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-base text-zinc-500 mb-10">{project.subtitle}</p>

        <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className={
              project.imageFit === "contain"
                ? "object-contain object-center p-6"
                : "object-cover object-top"
            }
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-indigo-400 mb-6">
            Process
          </p>
          <ol className="relative space-y-8 border-l border-zinc-800 pl-8">
            {project.process.map((step, i) => (
              <li key={step.phase} className="relative">
                <span className="absolute left-[-2.85rem] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-indigo-500/40 text-xs font-medium text-indigo-400">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold text-zinc-100 mb-1.5">
                  {step.phase}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="space-y-3 mb-10">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-zinc-400">
              <span className="text-indigo-400 shrink-0 mt-0.5">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

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

        {project.note && (
          <p className="text-xs text-zinc-600 leading-relaxed">
            {project.note}
          </p>
        )}
      </div>
    </section>
  );
}
