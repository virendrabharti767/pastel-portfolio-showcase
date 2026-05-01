import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Delhivery B2C Edge",
    desc: "Re-imagined B2C logistics experience with end-to-end order tracking, reducing support tickets by 30%.",
    color: "bg-purple-light",
    link: "#",
  },
  {
    title: "HelloPM EcoCert",
    desc: "Built end-to-end sustainability certification platform for SMEs with gamified onboarding.",
    color: "bg-cream-dark",
    link: "#",
  },
  {
    title: "Zomato Street Food",
    desc: "Cataloging India's street food vendors, a hyperlocal marketplace connecting 100K+ vendors with urban consumers.",
    color: "bg-purple-light",
    link: "#",
  },
  {
    title: "TechInnovate Mobility",
    desc: "Designed a ride-sharing and transit integration platform with real-time tracking and digital payment flow.",
    color: "bg-cream-dark",
    link: "#",
  },
  {
    title: "ERP for SMEs",
    desc: "Simplified complex ERP workflows with a clean, modern interface, streamlining accounting for small businesses.",
    color: "bg-purple-light",
    link: "#",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">Case Studies</h2>
        <p className="text-muted-foreground mt-2">Explore real projects. From complex product challenges to school design assignments.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {caseStudies.slice(0, 3).map((cs) => (
            <CaseCard key={cs.title} {...cs} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {caseStudies.slice(3).map((cs) => (
            <CaseCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ title, desc, color, link }: { title: string; desc: string; color: string; link: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`${color} h-40 flex items-center justify-center`}>
        <div className="w-3/4 h-28 bg-card/60 rounded-lg border border-border/50" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
        <Button variant="readMore" className="mt-3" asChild>
          <a href={link}>
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}