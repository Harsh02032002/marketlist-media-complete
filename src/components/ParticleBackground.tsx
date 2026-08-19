import { useEffect, useMemo, useState } from "react";

type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  hue: "blue" | "purple" | "pink";
};

const HUES: Record<Particle["hue"], string> = {
  blue: "var(--color-neon-blue)",
  purple: "var(--color-neon-purple)",
  pink: "var(--color-neon-pink)",
};

/** Deterministic pseudo-random so SSR and client markup match. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function ParticleBackground({ count = 70 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo<Particle[]>(() => {
    const hues: Particle["hue"][] = ["blue", "purple", "pink"];
    return Array.from({ length: count }, (_, i) => ({
      left: seeded(i, 1) * 100,
      top: seeded(i, 2) * 100,
      size: 1 + seeded(i, 3) * 2.2,
      delay: seeded(i, 4) * 5,
      duration: 3 + seeded(i, 5) * 5,
      hue: hues[i % 3] as Particle["hue"],
    }));
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-neon-purple) 55%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -left-32 h-[32rem] w-[32rem] rounded-full opacity-25 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-neon-blue) 55%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 -right-32 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-neon-pink) 55%, transparent), transparent 70%)",
        }}
      />
      {mounted &&
        particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: HUES[p.hue],
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
    </div>
  );
}