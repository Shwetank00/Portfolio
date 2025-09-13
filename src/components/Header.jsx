// src/components/Header.jsx
import { useState } from "react";
import config from "../config";
import {
  SunIcon,
  MoonIcon,
  GithubIcon,
  LinkedinIcon,
  CodolioIcon,
} from "../icons";

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const gh = config.socials?.github || "#";
  const li = config.socials?.linkedin || "#";
  const co = config.socials?.codolio || "#";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="container-pro px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="text-xl md:text-2xl font-extrabold text-white tracking-tight"
          >
            {config.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="h-6 w-px bg-neutral-700 mx-1" />

            {/* Social icons with glow */}
            <IconLink href={gh} label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </IconLink>
            <IconLink href={li} label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </IconLink>
            <IconLink href={co} label="Codolio">
              <CodolioIcon className="w-5 h-5" />
            </IconLink>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="ml-2 text-neutral-300 hover:text-white transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-neutral-200"
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              className="text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (kept dark) */}
      <div
        className={`md:hidden bg-neutral-950 border-b border-neutral-800 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="container-pro px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col items-stretch gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md px-3 py-2 text-neutral-200 hover:bg-neutral-900 transition"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-5">
              <IconLink href={gh} label="GitHub">
                <GithubIcon className="w-6 h-6" />
              </IconLink>
              <IconLink href={li} label="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </IconLink>
              <IconLink href={co} label="Codolio">
                <CodolioIcon className="w-6 h-6" />
              </IconLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* --- Small helper for the glowing icon buttons --- */
function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex items-center justify-center p-1.5 rounded-md text-neutral-300 transition"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 opacity-0 blur-[6px] transition-opacity duration-300 group-hover:opacity-40"
      />
      <span className="relative z-10 transition-transform duration-200 group-hover:scale-110 group-hover:text-white">
        {children}
      </span>
    </a>
  );
}
