import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import virendraPhoto from "@/assets/virendra-photo.png";

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-purple-light/60 via-cream to-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Hello, I'm<br />
            <span className="text-primary">Virendra Bharti.</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Product Designer & PM | IIT Kharagpur Dual Degree.
            Transforming complex logistics and e-commerce
            into elegant, lean systems. High-impact user experiences.
          </p>
          <div className="flex gap-3 mt-6">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#case-studies">View Work</a>
            </Button>
          </div>
          <div className="flex gap-4 mt-10">
            <StatBox title="IIT Kharagpur" subtitle="Dual Degree, Industrial Engineering & Management" />
            <StatBox title="National Finalist" subtitle="Smart India Hackathon 2023, Innovation Challenge" />
            <StatBox title="9+ Projects" subtitle="Product Design, UX Research, B2C & B2B SaaS" />
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-gradient-to-br from-purple-light/40 to-cream p-4">
            <img
              src={virendraPhoto}
              alt="Virendra Bharti"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border border-border rounded-xl p-3 bg-card/80 backdrop-blur-sm flex-1 min-w-0">
      <p className="font-bold text-sm text-foreground">{title}</p>
      <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{subtitle}</p>
    </div>
  );
}