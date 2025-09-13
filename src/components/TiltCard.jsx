import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * Hover tilt + centered halo behind card.
 * - Tilt follows mouse while hovered; springs back on leave.
 * - Halo does NOT follow the cursor; it's centered and CSS-only.
 */
export default function TiltCard({
  children,
  className = "",
  max = 8, // degrees
  halo = true,
  haloClass = "halo-base",
  hoverScale = 1.002,
}) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 170, damping: 18, mass: 0.8 });
  const rotateY = useSpring(ry, { stiffness: 170, damping: 18, mass: 0.8 });

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1..1
    const py = (y / rect.height) * 2 - 1; // -1..1
    ry.set(px * max); // left/right
    rx.set(-py * max); // up/down
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      className={`relative group ${className}`}
      style={{ perspective: "1200px" }}
    >
      {halo && <div aria-hidden className={haloClass} />}
      <motion.div
        ref={ref}
        className="tilt-inner"
        style={{ rotateX, rotateY }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -2, scale: hoverScale }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
