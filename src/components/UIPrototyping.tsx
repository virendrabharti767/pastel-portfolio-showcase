import { ExternalLink } from "lucide-react";
import adobeThumb from "@/assets/adobe-thumb.png";
import healthsyncThumb from "@/assets/healthsync-thumb.png";
import deliveryUiThumb from "@/assets/delivery-ui-thumb.png";
import designRationaleThumb from "@/assets/design-rationale-thumb.png";

const projects = [
  { title: "Adobe App 2030", subtitle: "Figma | Design", link: "https://www.figma.com/proto/Tb37yc8ZGT5Asiz1rE6kHj/Adobe?node-id=0-1&t=t6iHQXQbeQh1j0zu-1", image: designRationaleThumb },
  { title: "HealthSync App", subtitle: "Mobile UI", link: "#", image: healthsyncThumb },
  { title: "Delivery App UI", subtitle: "UI Design & Motion", link: "#", image: deliveryUiThumb },
  { title: "Design Rationale", subtitle: "Research", link: "#", image: adobeThumb },
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
              <div className="aspect-square bg-purple-light rounded-2xl border border-border overflow-hidden flex items-center justify-center group-hover:shadow-md transition-shadow relative p-3">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl">
                  <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
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