// src/sections/Hero.jsx
import config from "../config";
import { GithubIcon, LinkedinIcon } from "../icons";

export default function Hero() {
  const Button = ({ children, href, className, ...props }) => (
    <a
      href={href}
      {...props}
      className={`relative group inline-block bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-[-30%] top-0 h-full w-1/3 translate-x-[-100%] bg-white/20 blur-md group-hover:animate-shine" />
      </span>
    </a>
  );

  // PDF CV link
  const cvUrl = `${import.meta.env.BASE_URL}Shwetank_Jain_CV.pdf`;
  const mailHref = `mailto:${config.email}?subject=Hello%20Shwetank`;

  return (
    <section className="relative overflow-hidden pt-32 pb-24 text-center">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-24 right-0 translate-x-1/4 lg:translate-x-1/3 h-[28rem] w-[28rem] lg:h-[44rem] lg:w-[44rem] rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-sky-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            Software Engineer & Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Focused on secure web development, AI integration, and building
            high-performance applications.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button href="#contact">Get In Touch</Button>
            <Button href={cvUrl} download="Shwetank_Jain_CV.pdf">
              Download CV
            </Button>

            {/* Social + Email icons */}
            <div className="flex space-x-4">
              <a
                href={config.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <GithubIcon className="w-8 h-8" />
              </a>
              <a
                href={config.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <LinkedinIcon className="w-8 h-8" />
              </a>
              {/* New: Email icon opens composer */}
              <a
                href={mailHref}
                aria-label="Email"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {/* inline Mail icon to avoid editing your icons file */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
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
          </div>
        </div>
      </div>
    </section>
  );
}
