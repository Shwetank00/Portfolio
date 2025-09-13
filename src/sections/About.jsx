// src/sections/About.jsx
import AnimatedSection from "../components/AnimatedSection";
import img from "../assets/img.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20">
      <div className="container-pro px-6 lg:px-8">
        {/* Mobile heading (above image) */}
        <h2 className="md:hidden font-display text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 text-center mb-5 sm:mb-6">
          About <span className="text-gradient">Me</span>
        </h2>

        <div
          className="
            mx-auto max-w-5xl
            grid md:grid-cols-[minmax(360px,480px),1fr] lg:grid-cols-[minmax(380px,500px),1fr]
            gap-3 sm:gap-4 md:gap-5 lg:gap-8 items-center
          "
        >
          {/* LEFT: Image — slightly down on md+, larger on md to reduce perceived gap */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="
              relative group mx-auto md:mx-0
              mt-2 sm:mt-3
              md:self-center md:mt-10 lg:mt-16 xl:mt-20
            "
          >
            {/* soft glow behind the avatar */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute -inset-10 -z-10 rounded-full
                bg-[radial-gradient(60%_60%_at_50%_50%,rgba(124,58,237,.45),rgba(168,85,247,.30)_35%,rgba(236,72,153,.18)_60%,transparent_70%)]
                blur-2xl opacity-80 transition-opacity duration-300
                group-hover:opacity-100
              "
            />
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute -inset-3 -z-10 rounded-full
                bg-[radial-gradient(45%_45%_at_50%_50%,rgba(124,58,237,.25),rgba(168,85,247,.18)_40%,transparent_70%)]
                blur-lg opacity-80 transition-opacity duration-300
                group-hover:opacity-95
              "
            />

            {/* Circular avatar with solid ring + hover shadow */}
            <div
              className="
                relative rounded-full overflow-hidden
                ring-4 ring-neutral-900 dark:ring-neutral-700
                w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96
                bg-neutral-100 dark:bg-neutral-900
                shadow-[0_10px_28px_-16px_rgba(0,0,0,0.45)]
                transition-shadow duration-300
                hover:shadow-2xl hover:shadow-neutral-900/40 dark:hover:shadow-black/60
              "
            >
              <img
                src={img}
                alt="A professional headshot of Shwetank Jain"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* RIGHT: Desktop heading + text */}
          <div className="md:col-start-2">
            <h2 className="hidden md:block font-display text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 text-center mb-5">
              About <span className="text-gradient">Me</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="space-y-5 sm:space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              <p>
                Hello! I’m{" "}
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Shwetank Jain
                </span>
                , a B.Tech student at MNNIT Allahabad with a focus on building
                secure, scalable, and intelligent web applications.
              </p>
              <p>
                I work with modern stacks like{" "}
                <span className="text-accent font-semibold">React</span>,{" "}
                <span className="text-accent font-semibold">Next.js</span>, and{" "}
                <span className="text-accent font-semibold">Node.js</span>, and
                I’m comfortable crafting robust backends using Prisma with
                SQL/NoSQL stores. I love integrating AI (e.g., Gemini API) to
                create smarter UX.
              </p>
              <p>
                From query optimizations and secure auth to clean CI/CD, I enjoy
                the grind of shipping high-quality software and iterating
                quickly on real user feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
