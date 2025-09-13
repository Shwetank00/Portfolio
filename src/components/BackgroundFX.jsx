import { useRef } from "react";

export default function BackgroundFX() {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="pointer-events-none fixed inset-0 -z-10"
    >
      {/* Aurora blobs */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-brand-500/30 via-fuchsia-400/25 to-emerald-400/25 blur-3xl motion-safe:animate-aurora" />
      <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-emerald-400/25 via-fuchsia-400/25 to-brand-500/30 blur-3xl motion-safe:animate-aurora" />

      {/* Grid + noise */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-noise" />

      {/* Spotlight follows cursor */}
      <div className="absolute inset-0 spotlight" />
    </div>
  );
}
