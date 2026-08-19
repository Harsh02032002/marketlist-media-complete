import * as motion from "motion/react-client";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceIcons } from "@/components/icons";
import { scrollToSection } from "@/lib/scroll";

const accentStyles = {
  blue: {
    glow: "glow-blue",
    border: "border-neon-blue/30 hover:border-neon-blue/70",
    icon: "bg-neon-blue/10 text-neon-blue",
    badge: "text-neon-blue",
  },
  purple: {
    glow: "glow-purple",
    border: "border-neon-purple/30 hover:border-neon-purple/70",
    icon: "bg-neon-purple/10 text-neon-purple",
    badge: "text-neon-purple",
  },
  pink: {
    glow: "glow-pink",
    border: "border-neon-pink/30 hover:border-neon-pink/70",
    icon: "bg-neon-pink/10 text-neon-pink",
    badge: "text-neon-pink",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From web development to digital marketing — we deliver end-to-end solutions that grow your business."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon]!;
            const s = accentStyles[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${s.border}`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex rounded-xl p-3 ${s.icon}`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* CTA link */}
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={`mt-4 font-heading text-xs font-semibold tracking-wide uppercase transition-all ${s.badge} opacity-0 group-hover:opacity-100`}
                >
                  Get Started →
                </button>

                {/* Corner glow on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${s.glow}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
