// src/sections/Hero.jsx
import config from "../config";
import { GithubIcon, LinkedinIcon } from "../icons";

export default function Hero() {
  const Button = ({
    children,
    href,
    variant = "solid", // "solid" | "gradient"
    className = "",
    ...props
  }) => {
    const base =
      "relative group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 transition-all overflow-hidden";
    const solid =
      "text-white bg-neutral-900 dark:bg-neutral-800 hover:bg-black dark:hover:bg-neutral-700 " +
      "hover:scale-[1.02] active:scale-[0.99]";
    const gradient =
      "text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 " +
      "hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 " +
      "shadow-[0_16px_40px_-18px_rgba(168,85,247,.45)] hover:scale-[1.02] active:scale-[0.99]";
    return (
      <a
        href={href}
        {...props}
        className={`${base} ${
          variant === "gradient" ? gradient : solid
        } ${className}`}
      >
        {/* soft halo for BOTH variants (only visible on hover) */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-r
                     from-fuchsia-500/0 via-violet-500/0 to-pink-500/0
                     blur-[10px] opacity-0 transition-all duration-300
                     group-hover:opacity-70 group-hover:from-fuchsia-500/15 group-hover:via-violet-500/15 group-hover:to-pink-500/15"
        />
        {/* sheen sweep on GRADIENT button */}
        {variant === "gradient" && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-30%] top-0 h-full w-1/3 -skew-x-12
                       bg-white/20 translate-x-[-25%] transition-transform duration-700
                       group-hover:translate-x-[260%]"
          />
        )}
        {children}
      </a>
    );
  };

  const createMailto = ({ to, subject, body } = {}) => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const q = params.toString();
    return `mailto:${to}${q ? `?${q}` : ""}`;
  };

  const mailHref = createMailto({
    to: config.email,
    subject: "Hello Shwetank",
  });
  const openMail = (e) => {
    e.preventDefault();
    window.location.href = mailHref;
  };

  const cvUrl = `${import.meta.env.BASE_URL}Shwetank_Jain_CV.pdf`;

  return (
    <section className="relative overflow-hidden pt-32 pb-24 text-center">
      {/* Ambient background: subtle grid + soft gradient bloom */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-24 right-0 translate-x-1/4 lg:translate-x-1/3 h-[28rem] w-[28rem] lg:h-[44rem] lg:w-[44rem] rounded-full bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid-neutral" />
      </div>

      <div className="container-pro px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient">Software Engineer</span>
            <span className="mx-2">&</span>
            <span className="text-gradient">Full-Stack Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Focused on{" "}
            <span className="text-accent">secure web development</span>,{" "}
            <span className="text-accent">AI integration</span>, and building{" "}
            <span className="text-accent">high-performance applications</span>.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Get in Touch — solid with halo + arrow nudge */}
            <Button href="#contact" variant="solid">
              <span className="relative z-10">Get In Touch</span>
              <svg
                className="w-5 h-5 translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>

            {/* Download CV — gradient with sheen + download icon lift */}
            <Button
              href={cvUrl}
              download="Shwetank_Jain_CV.pdf"
              variant="gradient"
            >
              <span className="relative z-10">Download CV</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </Button>

            {/* Social + Email icons */}
            <div className="flex space-x-4">
              <a
                href={config.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-8 h-8" />
              </a>
              <a
                href={config.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-8 h-8" />
              </a>
              <a
                href={mailHref}
                onClick={openMail}
                aria-label="Email"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
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
