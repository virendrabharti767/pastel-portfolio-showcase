import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkProcess } from "@/components/WorkProcess";
import { CaseStudies } from "@/components/CaseStudies";
import { CTASection } from "@/components/CTASection";
import { UIPrototyping } from "@/components/UIPrototyping";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkProcess />
      <CaseStudies />
      <CTASection />
      <UIPrototyping />
      <ContactSection />
      <Footer />
    </div>
  );
}
