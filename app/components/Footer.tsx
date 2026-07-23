export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Betül Demir Korkmaz
        </span>
        <span className="text-sm text-zinc-400">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
