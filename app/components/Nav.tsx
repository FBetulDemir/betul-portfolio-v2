"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-300 tracking-tight">
          Betül Demir Korkmaz
        </span>

        <nav className="hidden md:flex items-center gap-10">
          {["Projects", "Skills", "About"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="text-sm font-medium bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-full transition-colors duration-200"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
