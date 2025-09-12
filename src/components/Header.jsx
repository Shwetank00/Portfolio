import { useState } from "react";
import config from "../config";
import { SunIcon, MoonIcon } from "../icons";
import { motion } from "framer-motion";

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-100">
          {config.name}
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              key={theme} // forces crossfade/rotate when theme changes
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </motion.span>
          </motion.button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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

      <div
        className={`absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="mt-2 py-3 text-gray-300">
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6 mx-auto" />
            ) : (
              <MoonIcon className="w-6 h-6 mx-auto" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
