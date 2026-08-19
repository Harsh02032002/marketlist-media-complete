import { useState, useCallback } from "react";
import * as motion from "motion/react-client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const prev = useCallback(
    () => setActive((a) => (a - 1 + count) % count),
    [count],
  );
  const next = useCallback(() => setActive((a) => (a + 1) % count), [count]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Love"
          title="Testimonials"
          subtitle="Don't take our word for it. Here's what our clients say."
        />

        <div className="mt-14 flex flex-col items-center gap-8">
          {/* Main card */}
          <div className="relative w-full max-w-3xl">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-strong rounded-3xl border border-neon-purple/30 p-8 sm:p-12"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-neon-purple text-neon-purple"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-heading text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple font-display text-lg font-bold text-background">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-neon-purple/60 hover:text-neon-purple"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-neon-purple"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-neon-purple/60 hover:text-neon-purple"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mini preview row */}
          <div className="flex flex-wrap justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`glass rounded-2xl border px-4 py-2 text-left transition-all duration-200 ${
                  i === active
                    ? "border-neon-purple/60 bg-neon-purple/10"
                    : "border-border hover:border-neon-purple/30"
                }`}
              >
                <p className="font-heading text-xs font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-[10px] text-muted-foreground">{t.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
