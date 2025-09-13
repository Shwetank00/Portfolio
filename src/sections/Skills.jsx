// src/sections/Skills.jsx
import AnimatedSection from "../components/AnimatedSection";
import config from "../config";
import { iconMap } from "../icons";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// Map skills to their official docs
const docsMap = {
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/docs",
  "Node.js / Express": "https://expressjs.com/",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  MongoDB: "https://www.mongodb.com/docs/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  Prisma: "https://www.prisma.io/docs",
  "Git & GitHub": "https://docs.github.com/",
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20">
      <div className="container-pro px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 text-center mb-12">
          Technical Skills
        </h2>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {config.skills.map((skill) => {
            const docUrl = docsMap[skill];
            const Wrapper = docUrl ? "a" : "div";
            const wrapperProps = docUrl
              ? {
                  href: docUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `${skill} documentation`,
                  title: `Open ${skill} documentation`,
                }
              : {};

            return (
              <motion.div key={skill} variants={itemVariants}>
                <TiltCard halo haloClass="halo-base" max={6} hoverScale={1.01}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className={`group relative card card-accent-strong light-skill select-none
                                  flex items-center gap-3 px-4 py-3
                                  bg-white dark:bg-neutral-950
                                  border border-neutral-200 dark:border-neutral-800 shadow-sm
                                  ${
                                    docUrl ? "cursor-pointer" : "cursor-default"
                                  }`}
                    >
                      <div className="skill-icon shrink-0 rounded-lg p-2 bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 text-neutral-800 dark:text-neutral-100 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                        {iconMap[skill]}
                      </div>

                      <span className="skill-text font-medium text-neutral-800 dark:text-neutral-300 transition-transform duration-300 group-hover:translate-x-[1px]">
                        {skill}
                      </span>
                    </Wrapper>
                  </motion.div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
