export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-zinc-400">
            Available for work · Based in Sweden · Open to remote
          </span>
        </div>

        {/* Greeting */}
        <p className="text-lg md:text-xl text-zinc-400 mb-4">Hey, I&apos;m</p>

        {/* Name */}
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-2">
          Betül
        </h1>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none text-zinc-600 mb-16">
          Demir Korkmaz
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8 border-t border-zinc-800 pt-10">
          <div className="max-w-lg">
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
              Curious by nature, disciplined by necessity. I went from
              self-taught nights and weekends to formal education to shipping
              production code.{" "}
            </p>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mt-2">
              → These days I design UI and build, and spend summers sailing
              instead of doomscrolling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#projects"
              className="text-sm font-medium bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-full transition-colors duration-200">
              View Projects →
            </a>
            <a
              href="/cv/Betul-Demir_CV.pdf"
              download
              className="text-sm font-medium border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-100 px-6 py-3 rounded-full transition-colors duration-200">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
