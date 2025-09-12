import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
