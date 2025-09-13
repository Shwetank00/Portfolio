// src/sections/Projects.jsx
import AnimatedSection from "../components/AnimatedSection";
import config from "../config";
import { GithubIcon, ExternalLinkIcon } from "../icons";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function ProjectCard({
  title,
  description,
  tags = [],
  link,
  liveLink,
  bgImage,
}) {
  const href = liveLink || link || "#";

  return (
    <motion.div variants={cardVariants}>
      {/* Shell provides the bright halo + parent hover state */}
      <div className="project-card-shell group">
        <span className="project-halo" aria-hidden="true" />

        <TiltCard halo max={8} hoverScale={1.01}>
          {/* project-dark-hover class triggers dark-on-hover via CSS below */}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="project-card project-dark-hover gradient-border block card overflow-hidden
                       focus:outline-none focus:ring-2 focus:ring-violet-400/60 dark:focus:ring-violet-500/50"
          >
            {/* Cover (dimmed for readability) */}
            <div className="relative h-44 w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center cover-dim transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-lg font-extrabold text-neutral-900 dark:text-neutral-100">
                <span className="text-gradient">{title}</span>
              </h3>

              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {description}
              </p>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-6">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" /> GitHub
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    <ExternalLinkIcon className="w-5 h-5" /> Live
                  </a>
                )}
              </div>
            </div>
          </a>
        </TiltCard>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20">
      <div className="container-pro px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 text-center mb-12">
          Projects
        </h2>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {config.projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
