import { useState } from "react";
import * as motion from "motion/react-client";
import { Check, X } from "lucide-react";
import { pricingPlans, pricingCategories, contact } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { scrollToSection } from "@/lib/scroll";

type Category = (typeof pricingCategories)[number];

function PricingModal({
  category,
  onClose,
}: {
  category: Category;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal
      aria-label={`${category.title} pricing`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25 }}
        className="glass-strong relative w-full max-w-md rounded-3xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-3xl">{category.emoji}</p>
        <h3 className="mt-2 font-display text-xl font-bold text-foreground">
          {category.title}
        </h3>

        <ul className="mt-6 space-y-4">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.note}</p>
              </div>
              <span className="shrink-0 font-display text-base font-bold text-neon-blue">
                {item.price}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            onClose();
            scrollToSection("contact");
          }}
          className="bg-gradient-neon mt-8 w-full rounded-full py-3 font-heading text-sm font-bold text-background tracking-wide transition-transform hover:scale-[1.02]"
        >
          Get a Custom Quote
        </button>
      </motion.div>
    </div>
  );
}

const accentCard = {
  blue: "border-neon-blue/40 hover:border-neon-blue/80 hover:glow-blue",
  purple:
    "border-neon-purple/60 hover:border-neon-purple/90 ring-2 ring-neon-purple/30",
  pink: "border-neon-pink/40 hover:border-neon-pink/80 hover:glow-pink",
};

const accentText = {
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  pink: "text-neon-pink",
};

const accentBtn = {
  blue: "bg-neon-blue/10 text-neon-blue border border-neon-blue/40 hover:bg-neon-blue/20",
  purple: "bg-gradient-neon text-background glow-purple",
  pink: "bg-neon-pink/10 text-neon-pink border border-neon-pink/40 hover:bg-neon-pink/20",
};

export function PricingSection() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  return (
    <section id="pricing" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investment"
          title="Transparent Pricing"
          subtitle="Choose the plan that fits your goals. Every project gets our full commitment."
          eyebrowTone="pink"
        />

        {/* Category pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {pricingCategories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setOpenCategory(cat)}
              className="glass flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-heading text-sm font-semibold text-foreground/80 transition-all hover:border-neon-blue/60 hover:text-neon-blue"
            >
              <span>{cat.emoji}</span>
              <span>{cat.title}</span>
              <span className="ml-1 text-xs text-muted-foreground">→</span>
            </button>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass relative flex flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${accentCard[plan.accent]}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-4 py-1 font-heading text-xs font-bold text-background">
                  Most Popular
                </span>
              )}

              <p className={`font-heading text-sm font-semibold tracking-widest uppercase ${accentText[plan.accent]}`}>
                {plan.name}
              </p>

              <p className="mt-3 font-display text-4xl font-black text-foreground">
                {plan.price}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                    <Check className={`h-4 w-4 shrink-0 ${accentText[plan.accent]}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className={`mt-8 rounded-full py-3 font-heading text-sm font-bold tracking-wide transition-all hover:scale-[1.02] ${accentBtn[plan.accent]}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not sure which plan fits you?{" "}
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue underline underline-offset-2 hover:text-neon-purple transition-colors"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>

      {/* Modal */}
      {openCategory && (
        <PricingModal
          category={openCategory}
          onClose={() => setOpenCategory(null)}
        />
      )}
    </section>
  );
}
