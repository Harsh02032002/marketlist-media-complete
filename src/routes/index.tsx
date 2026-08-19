import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Marketlist Media — Web Development & Digital Marketing | Bangalore",
      },
      {
        name: "description",
        content:
          "Marketlist Media transforms brands into powerful digital presences. Web development, digital marketing, UI/UX design & SEO — Bangalore, India.",
      },
      {
        property: "og:url",
        content: "https://marketlist.media",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Full-page starfield + glow blobs */}
      <ParticleBackground />

      {/* Sticky nav */}
      <Navbar />

      {/* Page sections — in order per the brief */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <ResultsSection />
        <TestimonialsSection />
        <FounderSection />
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating WhatsApp + Call */}
      <FloatingButtons />
    </>
  );
}
