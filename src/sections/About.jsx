import AnimatedSection from "../components/AnimatedSection";
import img from "../assets/img.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto">
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img}
              alt="A professional headshot of Shwetank Jain"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </motion.div>
          <div className="text-lg text-center md:text-left text-gray-700 dark:text-gray-400 leading-relaxed space-y-6">
            <p>
              Hello! I'm Shwetank Jain, a B.Tech student at MNNIT Allahabad with
              a passion for software engineering and full-stack development. My
              focus is on creating secure, scalable, and intelligent web
              applications.
            </p>
            <p>
              I have hands-on experience with modern technologies like React,
              Next.js, and Node.js, and I'm proficient in building robust
              backends with Prisma, Supabase, and both SQL/NoSQL databases. I
              enjoy integrating AI functionalities using APIs like Gemini to
              create smarter, more efficient user experiences.
            </p>
            <p>
              From optimizing database queries and implementing secure
              authentication to streamlining CI/CD pipelines, I am driven by the
              challenge of building high-quality software. I am always eager to
              learn and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
