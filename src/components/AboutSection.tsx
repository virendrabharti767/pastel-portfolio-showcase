import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Bridging Design &<br />Engineering
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
          With a dual degree from IIT Kharagpur, I blend rigorous analytical problem-solving with user-centric design. From e-commerce to B2C logistics, I've shipped products that balance great design with real business goals.
        </p>
        <Button variant="hero" size="default" className="mt-6 gap-2" asChild>
          <a href="#">
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Button>
        <div className="mt-8 flex flex-col gap-3 md:absolute md:right-12 md:top-8">
          <div className="bg-purple-light rounded-xl p-4 border border-border">
            <p className="font-semibold text-sm text-foreground">Strategy</p>
            <p className="text-xs text-muted-foreground mt-1">A growth-first infrastructure goal</p>
          </div>
          <div className="bg-purple-light rounded-xl p-4 border border-border">
            <p className="font-semibold text-sm text-foreground">Innovation</p>
            <p className="text-xs text-muted-foreground mt-1">Edge-to-edge reimagination</p>
          </div>
        </div>
      </div>
    </section>
  );
}