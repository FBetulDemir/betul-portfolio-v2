export function About() {
  return (
    <section id="about" className="py-28 md:py-40 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              03 / About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Who I am
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-zinc-400 leading-relaxed">
              I&apos;m a frontend developer who enjoys owning the full UI process —
              from user flow and UX decisions in Figma to implementation in
              Next.js and TypeScript. I focus on building interfaces that are
              clear, consistent, and easy to use, with code that stays
              maintainable as the product grows.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I work effectively with AI tools — including agentic workflows
              with Claude and Figma Make — to speed up iteration and improve
              quality without sacrificing structure or clarity. I&apos;m based in
              Sweden and open to opportunities worldwide, remote or on-site.
            </p>

            <div className="border border-zinc-800 bg-zinc-900 rounded-xl px-5 py-4">
              <p className="text-sm text-zinc-500">
                Frontend Developer (FED24) · NBI-Handelsakademin · Passed with Distinction ·{" "}
                <a
                  href="https://verify.trueoriginal.com/11D6E742-E508-E7A1-B536-E4FA8B7A7D6F/?ref=direct-copy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
                >
                  Verify credential →
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:fatmabetuld@gmail.com"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                fatmabetuld@gmail.com
              </a>
              <a
                href="https://github.com/FBetulDemir"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/betuldemir"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
