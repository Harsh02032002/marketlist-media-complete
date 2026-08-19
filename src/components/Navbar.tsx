import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";
import { TransparentLogo } from "@/components/TransparentLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          aria-label={`${brand.name} home`}
          className="flex items-center gap-3"
        >
          <TransparentLogo
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-10 sm:h-12 w-auto object-contain max-h-12 drop-shadow-[0_0_14px_rgba(120,180,255,0.5)]"
          />
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="font-heading text-[13px] font-medium tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-neon-blue"
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("contact")}
            className="bg-gradient-neon rounded-full px-5 py-2.5 font-heading text-sm font-semibold text-background transition-transform hover:scale-105 glow-purple"
          >
            Start Project
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass-strong border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="rounded-lg px-3 py-3 text-left font-heading text-sm tracking-[0.14em] uppercase text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go("contact")}
              className="bg-gradient-neon mt-2 rounded-full px-5 py-3 font-heading text-sm font-semibold text-background"
            >
              Start Project
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}