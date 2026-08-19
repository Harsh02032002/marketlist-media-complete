import * as motion from "motion/react-client";
import { brand, stats } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";
import { statIcons } from "@/components/icons";
import { TransparentLogo } from "@/components/TransparentLogo";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden section-y pt-32 pb-20"
    >
      {/* Hero background glow sphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-neon-purple/20 via-neon-blue/15 to-transparent blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Centered Orbit Rings + Main Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 flex items-center justify-center"
          >
            {/* Outer Orbit Rings */}
            <div className="absolute h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-neon-purple/25 animate-[spin_35s_linear_infinite]" />
            <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-dashed border-neon-blue/20 animate-[spin_50s_linear_infinite_reverse]" />
            <div className="absolute h-88 w-88 sm:h-[420px] sm:w-[420px] rounded-full border border-neon-pink/15" />

            {/* Central Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 via-neon-purple/25 to-neon-pink/20 blur-2xl" />

            {/* Central Logo Graphic */}
            <TransparentLogo
              src={brand.logo}
              alt={brand.name}
              className="relative z-10 h-20 sm:h-28 md:h-32 max-h-32 w-auto max-w-[220px] sm:max-w-[300px] object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
            />
          </motion.div>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex max-w-[92vw] items-center gap-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-3.5 py-1.5"
          >
            <span className="text-neon-blue text-[10px] sm:text-xs">✨</span>
            <span className="font-heading text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-neon-blue uppercase text-center">
              WEB DEVELOPMENT & DIGITAL MARKETING
            </span>
            <span className="text-neon-blue text-[10px] sm:text-xs">✨</span>
          </motion.div>

          {/* Main Headline (We Build Digital / Experiences That / Convert) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]"
          >
            <span className="text-foreground block">We Build Digital</span>
            <span className="text-gradient block my-1">
              Experiences That
            </span>
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent block">
              Convert
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground/90 sm:text-lg md:text-xl leading-relaxed"
          >
            Transforming brands into powerful digital presences with cutting-edge web development, strategic marketing, and AI-driven solutions.
          </motion.p>

          {/* CTA Buttons (View Our Work -> | Start Your Project) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="bg-gradient-neon glow-purple flex items-center gap-2 rounded-full px-8 py-3.5 font-heading text-sm font-bold text-background tracking-wide transition-transform hover:scale-105"
            >
              View Our Work →
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="glass rounded-full border border-border px-8 py-3.5 font-heading text-sm font-semibold text-foreground/90 transition-all hover:border-neon-blue/60 hover:text-neon-blue"
            >
              Start Your Project
            </button>
          </motion.div>

          {/* Stats Mini Row */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-5 w-full max-w-4xl px-2"
          >
            {stats.map((s) => {
              const Icon = statIcons[s.icon]!;
              return (
                <div
                  key={s.label}
                  className="glass flex flex-col items-center gap-1 rounded-xl p-3 sm:p-4 border border-border/80"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-neon-blue" />
                  <p className="font-display text-lg sm:text-2xl font-bold text-foreground">
                    {s.prefix ?? ""}
                    {s.value}
                    {s.suffix ?? ""}
                  </p>
                  <p className="text-center text-[10px] sm:text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12"
      >
        <button
          type="button"
          onClick={() => scrollToSection("services")}
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-neon-blue transition-colors"
        >
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-neon-blue/60 to-transparent" />
        </button>
      </motion.div>
    </section>
  );
}
