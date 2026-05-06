"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center">
        {/* Left */}
        <div className="hidden md:flex items-center gap-10 w-1/3">
          <Link href="/#about" className="text-sm text-gray-500 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/#experience" className="text-sm text-gray-500 hover:text-black transition-colors">
            Experience
          </Link>
        </div>

        {/* Center logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="bg-black text-white text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-gray-900 transition-colors tracking-wide"
          >
            Aashif Ali
          </Link>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-10 w-1/3 justify-end">
          <Link href="/#works" className="text-sm text-gray-500 hover:text-black transition-colors">
            Works
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-0.5 bg-black transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          {[
            { href: "/#about", label: "About" },
            { href: "/#experience", label: "Experience" },
            { href: "/#works", label: "Works" },
            { href: "/resume.pdf", label: "Resume" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
