import * as motion from "motion/react-client";
import { techStack } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "React":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "Next.js":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.54 17.54l-5.71-7.85v7.85h-1.66V6.46h1.66l5.71 7.85V6.46h1.66v11.08h-1.66z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5L2.5 8v8l9.5 5.5 9.5-5.5V8L12 2.5zm0 2.31l7.5 4.34v4.5l-3.25 1.88v-4.5L12 8.16 7.75 10.63v4.5L4.5 13.25V9.15L12 4.81z" />
        </svg>
      );
    case "Python":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.89 2c-3.1 0-2.9 1.35-2.9 1.35v1.4h2.96v.42H7.72S5 4.88 5 8c0 3.12 2.37 3 2.37 3h1.41V9.58s-.08-1.7 1.66-1.7h2.86s1.6 0 1.6-1.57V3.57S15 2 11.89 2zm-1.6 1.05a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46zM12.11 22c3.1 0 2.9-1.35 2.9-1.35v-1.4h-2.96v-.42h4.23s2.72.29 2.72-2.83c0-3.12-2.37-3-2.37-3h-1.41v1.42s.08 1.7-1.66 1.7h-2.86s-1.6 0-1.6 1.57v2.74S9 22 12.11 22zm1.6-1.05a.73.73 0 1 1 0-1.46.73.73 0 0 1 0 1.46z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 1.5h21v21h-21v-21zm11.2 14.7c.6.8 1.6 1.3 2.9 1.3 2 0 3.1-1 3.1-2.5 0-1.4-.9-2.1-2.7-2.7l-.8-.3c-1.1-.4-1.5-.7-1.5-1.3 0-.6.5-1 1.4-1 .9 0 1.5.3 2 .9l1.4-1.1c-.8-.9-1.9-1.3-3.4-1.3-2 0-3.1 1.1-3.1 2.5 0 1.3.8 2 2.5 2.6l.8.3c1.2.4 1.7.8 1.7 1.4 0 .7-.6 1.1-1.6 1.1-1.2 0-1.9-.5-2.5-1.3l-1.6 1.2zm-4.7-7.2h-3v1.8h2v7.2h2.2v-7.2h2v-1.8h-3.2z" />
        </svg>
      );
    case "Tailwind":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "AWS":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.75 11.2c-.32 0-.64.08-.94.25l-4.81 2.78-4.81-2.78c-.61-.35-1.27-.25-1.58.07-.31.32-.2.98.41 1.33l5.44 3.14c.32.18.64.27.94.27s.62-.09.94-.27l5.44-3.14c.61-.35.72-1.01.41-1.33-.31-.32-.97-.42-1.44-.12zm.25-3.2c-.61-.35-1.27-.25-1.58.07-.31.32-.2.98.41 1.33l4.81 2.78-4.81 2.78c-.61.35-.72 1.01-.41 1.33.31.32.97.42 1.58.07l5.44-3.14c.62-.36.62-1.44 0-1.8l-5.44-3.42zM5 12.8c.61-.35.72-1.01.41-1.33-.31-.32-.97-.42-1.58-.07L0 13.8c-.62.36-.62 1.44 0 1.8l5.44 3.42c.32.18.64.27.94.27s.62-.09.94-.27c.61-.35.72-1.01.41-1.33-.31-.32-.97-.42-1.58-.07L1.34 14.8l3.66-2z" />
        </svg>
      );
    case "Firebase":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.672L6.255 1.041a.574.574 0 0 1 1.077-.16l2.977 5.626-10.419 9.165zm16.143-2.15l-2.73-12.43a.574.574 0 0 0-1.033-.189l-12.78 14.77 16.543-2.151zm-6.273-5.267l-2.47-4.664a.574.574 0 0 0-.996 0L.905 19.349l9.905 5.568a1.722 1.722 0 0 0 1.68 0l9.905-5.568-9.635-15.094z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0s-6.21 4.58-6.21 11.75c0 4.88 2.65 8.78 6.21 12.25 3.56-3.47 6.21-7.37 6.21-12.25C18.21 4.58 12 0 12 0zm.66 19.37v-7.2h1.66c-.19 2.58-.75 4.87-1.66 7.2zm0-8.73V4.26c2.08 1.94 3.79 4.3 4.29 6.38h-4.29zM11.34 4.26v6.38H7.05c.5-2.08 2.21-4.44 4.29-6.38zm0 8.73v7.2c-.91-2.33-1.47-4.62-1.66-7.2h1.66z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2V15h2v2.5zm1.5-4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    case "Figma":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-20h4v4H8C5.79 8 4 6.21 4 4s1.79-4 4-4zm0 8h4v4H8c-2.21 0-4-1.79-4-4s1.79-4 4-4zm8-4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V4h4zm0 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4v-4h4z" />
        </svg>
      );
    case "AI / ML":
    default:
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

export function TechStackSection() {
  return (
    <section id="tech" className="section-y relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Stack"
          title="Technologies We Use"
          subtitle="Cutting-edge tools that power every digital experience we build."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group flex flex-col items-center gap-3 rounded-2xl border border-border p-4 transition-all duration-300 hover:border-neon-blue/50"
            >
              {/* Icon circle */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-background transition-transform duration-300 group-hover:scale-110 shadow-md"
                style={{ backgroundColor: tech.color }}
              >
                <TechIcon name={tech.label} />
              </div>
              <p className="text-center font-heading text-xs font-semibold text-foreground/80">
                {tech.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling ticker – decorative */}
        <div
          aria-hidden
          className="relative mt-14 overflow-hidden rounded-2xl border border-border py-3"
        >
          <div className="flex gap-8 animate-[marquee_25s_linear_infinite]">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-2 shrink-0 font-heading text-xs font-semibold"
                style={{ color: tech.color }}
              >
                <span className="h-4 w-4 inline-flex items-center justify-center">
                  <TechIcon name={tech.label} />
                </span>
                {tech.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
