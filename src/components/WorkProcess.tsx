import { Search, BarChart3, PenTool, Palette } from "lucide-react";

const steps = [
  { icon: Search, title: "Research", desc: "Decoding true user behavior, market gaps, and metrics to build a data-backed foundation." },
  { icon: BarChart3, title: "Strategy", desc: "Synthesizing research into actionable product roadmaps that balance user needs with business feasibility." },
  { icon: PenTool, title: "Wireframing", desc: "Architecting UI flows and layouts with a focus on rapid, iterative prototyping." },
  { icon: Palette, title: "High-Fidelity UI", desc: "Crafting pixel-perfect, accessible, and polished experiences that elevate brand identity and user trust." },
];

export function WorkProcess() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground">Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {steps.map((s) => (
            <div key={s.title} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-light flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}