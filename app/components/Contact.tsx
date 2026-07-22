export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-8">
          04 / Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-none">
              Let&apos;s work
              <br />
              <span className="text-zinc-600">together.</span>
            </h2>
          </div>

          <div className="md:col-span-4 space-y-4">
            <a
              href="mailto:fatmabetuld@gmail.com"
              className="flex items-center justify-between group border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 rounded-2xl px-6 py-5 transition-all duration-200"
            >
              <span className="text-sm font-medium text-zinc-300">Email</span>
              <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                fatmabetuld@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/FBetulDemir"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between group border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 rounded-2xl px-6 py-5 transition-all duration-200"
            >
              <span className="text-sm font-medium text-zinc-300">GitHub</span>
              <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                FBetulDemir
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/betuldemir"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between group border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 rounded-2xl px-6 py-5 transition-all duration-200"
            >
              <span className="text-sm font-medium text-zinc-300">
                LinkedIn
              </span>
              <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                betuldemir
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
