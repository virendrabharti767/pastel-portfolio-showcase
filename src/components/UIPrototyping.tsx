import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Adobe App 2035", subtitle: "Figma | Design", link: "#" },
  { title: "HealthSync App", subtitle: "Mobile UI", link: "#" },
  { title: "Delivery App UI", subtitle: "UI Design & Motion", link: "#" },
  { title: "Design Rationale", subtitle: "Research", link: "#" },
];

export function UIPrototyping() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">UI & Prototyping</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group block"
            >
              <div className="aspect-square bg-purple-light rounded-2xl border border-border overflow-hidden flex items-center justify-center group-hover:shadow-md transition-shadow relative">
                <div className="w-3/4 h-3/4 bg-card rounded-lg border border-border/50 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="font-semibold text-sm text-foreground mt-3">{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}