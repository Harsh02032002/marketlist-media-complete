import * as motion from "motion/react-client";
import { brand, contact, footerLinks, footerQuote, navLinks } from "@/data/site";
import { socialIcons } from "@/components/icons";
import { scrollToSection } from "@/lib/scroll";
import { founder } from "@/data/site";
import { TransparentLogo } from "@/components/TransparentLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <TransparentLogo
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 sm:h-14 w-auto object-contain max-h-14 drop-shadow-[0_0_16px_rgba(120,180,255,0.6)]"
              />
              <span className="font-display text-sm font-bold text-foreground">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {brand.description}
            </p>
            {/* Social links */}
            <div className="mt-5 flex gap-2">
              {founder.socials.map((s) => {
                const Icon = socialIcons[s.kind]!;
                return (
                  <a
                    key={s.kind}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.kind}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow text-neon-blue mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-neon-blue"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow text-neon-purple mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-muted-foreground transition-colors hover:text-neon-purple"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-neon-pink mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-muted-foreground hover:text-neon-pink transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-neon-pink transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-neon-pink transition-colors"
                >
                  {contact.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {year} {brand.name}. All rights reserved.
            </p>
            <p className="max-w-md text-xs italic text-muted-foreground/60">
              {footerQuote}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
