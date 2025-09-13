import { motion } from "framer-motion";

export default function InteractiveIcon({ children, className }) {
  return (
    <motion.span
      className={`inline-flex items-center justify-center ${className || ""}`}
      whileHover={{ y: -2, rotate: -1 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.span>
  );
}
