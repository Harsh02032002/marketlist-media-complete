import * as motion from "motion/react-client";
import { founder, brand } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { socialIcons } from "@/components/icons";
import { TransparentLogo } from "@/components/TransparentLogo";

export function FounderSection() {
  return (
    <section id="founder" className="section-y relative overflow-hidden">
      {/* Decorative orbit ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full border border-neon-blue/10 opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={founder.eyebrow}
          title={founder.heading}
          eyebrowTone="pink"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar + orbit tags */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer orbit ring */}
              <div className="absolute inset-0 -m-8 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-neon-blue/20" />

              {/* Avatar circle */}
              <div className="relative h-52 w-52 sm:h-64 sm:w-64">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 blur-2xl" />
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-full border-2 border-neon-blue/40 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 glass-strong p-4">
                  <TransparentLogo
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 sm:h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(120,180,255,0.6)]"
                  />
                  <span className="font-display text-4xl sm:text-5xl font-black text-gradient">
                    {founder.initials}
                  </span>
                </div>

                {/* Orbit tags */}
                {founder.orbitTags.map((tag, i) => {
                  const angle = (i / founder.orbitTags.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const r = 140;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div
                      key={tag}
                      className="glass absolute rounded-full border border-neon-blue/30 px-3 py-1 font-heading text-xs font-semibold text-neon-blue"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Bio + skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-neon-pink">{founder.role}</p>
            <h3 className="mt-2 font-display text-3xl font-black text-foreground sm:text-4xl">
              {founder.name}
            </h3>
            <p className="mt-0.5 font-heading text-sm text-muted-foreground">
              @{founder.handle}
            </p>

            <div className="mt-6 space-y-3">
              {founder.bio.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            {/* Skills chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-full border border-border px-3 py-1 font-heading text-xs font-medium text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-3">
              {founder.socials.map((s) => {
                const Icon = socialIcons[s.kind]!;
                return (
                  <a
                    key={s.kind}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.kind}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
