"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = ["Projects", "Skills", "About"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-300 tracking-tight">
          Betül Demir Korkmaz
        </span>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-block text-sm font-medium bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-full transition-colors duration-200"
          >
            Get in touch
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-4 w-4"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
