import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { stats } from "@/data/site";
import { statIcons } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

const accentColors = [
  { text: "text-neon-blue", bg: "bg-neon-blue/10", glow: "glow-blue" },
  { text: "text-neon-purple", bg: "bg-neon-purple/10", glow: "glow-purple" },
  { text: "text-neon-pink", bg: "bg-neon-pink/10", glow: "glow-pink" },
  { text: "text-neon-blue", bg: "bg-neon-blue/10", glow: "glow-blue" },
];

function StatCard({
  stat,
  accent,
  started,
}: {
  stat: (typeof stats)[number];
  accent: (typeof accentColors)[number];
  started: boolean;
}) {
  const count = useCountUp(stat.value, 2000, started);
  const Icon = statIcons[stat.icon]!;

  return (
    <div className={`glass flex flex-col items-center rounded-2xl border border-border p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${accent.glow}`}>
      <div className={`mb-2 sm:mb-4 rounded-xl p-2.5 sm:p-4 ${accent.bg}`}>
        <Icon className={`h-5 w-5 sm:h-8 sm:w-8 ${accent.text}`} />
      </div>
      <p className={`font-display text-2xl sm:text-5xl font-black ${accent.text}`}>
        {stat.prefix ?? ""}
        {count}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-1 sm:mt-2 text-center font-heading text-xs sm:text-sm font-medium text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function ResultsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="section-y relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Real Results"
          subtitle="Measurable impact for every client we partner with."
          eyebrowTone="pink"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              accent={accentColors[i % accentColors.length]!}
              started={started}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
