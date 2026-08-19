import { useState } from "react";
import * as motion from "motion/react-client";
import { ExternalLink } from "lucide-react";
import { portfolio, portfolioNotice } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

const INITIAL_COUNT = 9;

export function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? portfolio : portfolio.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Portfolio"
          subtitle="Real projects. Real results. See what we've built for our clients."
        />

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 9) * 0.06 }}
              className="glass group relative overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-neon-blue/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-neon-blue px-5 py-2.5 font-heading text-xs font-bold text-background shadow-lg transition-transform hover:scale-105"
                  >
                    View Website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more toggle */}
        {!showAll && portfolio.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full border border-neon-blue/50 px-7 py-3 font-heading text-sm font-semibold text-neon-blue transition-all hover:bg-neon-blue/10 hover:border-neon-blue"
            >
              View All {portfolio.length} Projects
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass mt-10 rounded-2xl border border-neon-blue/20 p-5"
        >
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            <span className="mr-1 text-neon-blue font-semibold">ℹ️ Note:</span>
            {portfolioNotice}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
