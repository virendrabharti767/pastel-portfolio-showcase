import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-light/40 via-cream to-purple-light/20">
      <div className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 relative overflow-hidden">
        {/* Decorative gradient blur */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid md:grid-cols-2 gap-8">
        <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Bridging Design &<br />Engineering
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
          With a dual degree from IIT Kharagpur, I blend rigorous analytical problem-solving with user-centric design principles. My expertise lies in zero-to-one product innovation—from streamlining complex B2C supply chains to pioneering sustainable e-commerce platforms. I believe great design isn't just aesthetic; it's a measurable driver for operational efficiency and business growth.
        </p>
        <Button variant="hero" size="default" className="mt-6 gap-2 bg-foreground text-background hover:bg-foreground/90" asChild>
          <a href="https://drive.google.com/file/d/1auxJLDrco6qMsagiY55jEw8s4n_CMGHX/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Button>
        </div>
        <div className="relative z-10 flex flex-col gap-4 justify-center">
          <div className="bg-card rounded-xl p-5 border border-border shadow-sm border-l-4 border-l-primary">
            <p className="font-bold text-base text-primary">Strategy</p>
            <p className="text-sm text-muted-foreground mt-1">Alignment of business goals with UX</p>
          </div>
          <div className="bg-card rounded-xl p-5 border border-border shadow-sm border-l-4 border-l-primary">
            <p className="font-bold text-base text-primary">Innovation</p>
            <p className="text-sm text-muted-foreground mt-1">Logistics & E-commerce focus</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}