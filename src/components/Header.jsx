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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      {/* Wide inner wrapper for less side-blank space on large screens */}
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-gray-100">
          {config.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Socials (GitHub, LinkedIn, Codolio) */}
          <div className="flex items-center gap-4 pl-2">
            <a
              href={gh}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={li}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={co}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio"
              className="text-gray-300 hover:text-white transition-colors"
              title="All coding profiles on Codolio"
            >
              <CodolioIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Dark mode toggle (visible on desktop) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 text-gray-300 hover:text-white transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile controls: icons + dark mode + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={gh}
            aria-label="GitHub"
            className="text-gray-200 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={li}
            aria-label="LinkedIn"
            className="text-gray-200 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={co}
            aria-label="Codolio"
            className="text-gray-200 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodolioIcon className="w-6 h-6" />
          </a>

          {/* Dark mode on phone too */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-gray-100 hover:text-white transition-colors"
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
            className="text-gray-100"
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

      {/* Mobile dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-5">
              <a
                href={gh}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href={li}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href={co}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codolio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <CodolioIcon className="w-6 h-6" />
              </a>

              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {theme === "dark" ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
