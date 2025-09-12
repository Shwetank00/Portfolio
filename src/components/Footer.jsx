// src/components/Footer.jsx
import config from "../config";
import { GithubIcon, LinkedinIcon } from "../icons";

export default function Footer() {
  const mailHref = `mailto:${config.email}?subject=${encodeURIComponent(
    "Hello Shwetank"
  )}`;

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={config.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-300"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={config.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-300"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          {/* Email icon — plain mailto */}
          <a
            href={mailHref}
            aria-label="Email"
            className="relative z-10 hover:text-white transition-colors duration-300"
            title={config.email}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
              />
            </svg>
          </a>
        </div>

        <p className="mt-2">
          &copy; {new Date().getFullYear()} {config.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
