import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ children, id, className = "" }) {
  const prefersReduced = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
