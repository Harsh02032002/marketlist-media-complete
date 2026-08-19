import { useState } from "react";
import * as motion from "motion/react-client";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { contact, brand } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please tell us about your project";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // Build mailto link as a soft submit (no backend required in this phase)
    const subject = encodeURIComponent(
      `New enquiry from ${form.name} via ${brand.handle}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    );
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    },
  });

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something"
          subtitle="Ready to transform your digital presence? Tell us about your project."
          eyebrowTone="pink"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {/* Email */}
            <div className="glass flex items-start gap-4 rounded-2xl border border-border p-5">
              <div className="rounded-xl bg-neon-blue/10 p-2.5">
                <Mail className="h-5 w-5 text-neon-blue" />
              </div>
              <div>
                <p className="font-heading text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block text-sm font-medium text-foreground hover:text-neon-blue transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass flex items-start gap-4 rounded-2xl border border-border p-5">
              <div className="rounded-xl bg-neon-purple/10 p-2.5">
                <Phone className="h-5 w-5 text-neon-purple" />
              </div>
              <div>
                <p className="font-heading text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Phone
                </p>
                {contact.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm font-medium text-foreground hover:text-neon-purple transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="glass flex items-start gap-4 rounded-2xl border border-border p-5">
              <div className="rounded-xl bg-neon-pink/10 p-2.5">
                <MapPin className="h-5 w-5 text-neon-pink" />
              </div>
              <div>
                <p className="font-heading text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Location
                </p>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium text-foreground hover:text-neon-pink transition-colors"
                >
                  {contact.location}
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="glass overflow-hidden rounded-2xl border border-border">
              <iframe
                src={contact.mapEmbed}
                title="Marketlist Media location"
                width="100%"
                height="180"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl border border-neon-blue/20 p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="h-16 w-16 text-neon-blue" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                    className="mt-2 rounded-full border border-neon-blue/50 px-6 py-2.5 font-heading text-sm font-semibold text-neon-blue hover:bg-neon-blue/10 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your full name"
                        {...field("name")}
                        className={`w-full rounded-xl border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/20 ${errors.name ? "border-red-500/60" : "border-border"}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        {...field("email")}
                        className={`w-full rounded-xl border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/20 ${errors.email ? "border-red-500/60" : "border-border"}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      {...field("phone")}
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block font-heading text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      {...field("message")}
                      className={`w-full resize-none rounded-xl border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/20 ${errors.message ? "border-red-500/60" : "border-border"}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-neon glow-purple flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-heading text-sm font-bold text-background tracking-wide transition-transform hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
