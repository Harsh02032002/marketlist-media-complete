import * as motion from "motion/react-client";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  eyebrowTone = "blue",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  eyebrowTone?: "blue" | "pink";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p
        className={`eyebrow ${
          eyebrowTone === "pink" ? "text-neon-pink" : "text-neon-blue"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}